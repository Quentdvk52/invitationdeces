import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import { MEDIA_URLS } from '../constants/media';

const AudioContext = createContext(null);

export const TRACKS = {
  recueillement: {
    id: 'recueillement',
    src: MEDIA_URLS.audio.main,
    name: 'Musique de recueillement',
    subtitle: 'Méditation solennelle & hommage filial',
    maxDuration: 60 // 1 minute
  },
  annonce: {
    id: 'annonce',
    src: MEDIA_URLS.audio.annonce,
    name: 'Annonce vocale solennelle',
    subtitle: 'Message vocal officiel de la famille',
    maxDuration: null // jusqu'à la fin
  },
  thanks: {
    id: 'thanks',
    src: MEDIA_URLS.audio.thanks,
    name: 'Musique de remerciements',
    subtitle: "Chant de grâce et de consolation",
    maxDuration: null // jusqu'à la fin
  }
};

export function AudioProvider({ children }) {
  const [activeTrackId, setActiveTrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isManualOverride, setIsManualOverride] = useState(false);

  const audioRef = useRef(null);
  const isAutoSequenceActiveRef = useRef(true);
  const playTrackRef = useRef(null);

  // Fonction de lecture d'une piste
  const playTrack = useCallback((trackId, isManual = true) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isManual) {
      // Si l'utilisateur clique manuellement, cela prend le dessus sur la séquence automatique
      setIsManualOverride(true);
      isAutoSequenceActiveRef.current = false;
    }

    const track = TRACKS[trackId];
    if (!track) return;

    if (audio.dataset.trackId !== trackId) {
      audio.src = track.src;
      audio.dataset.trackId = trackId;
      audio.currentTime = 0;
    }

    setActiveTrackId(trackId);

    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('[AudioContext] Lecture reportée par le navigateur:', err);
          setIsPlaying(false);
        });
    }
  }, []);

  playTrackRef.current = playTrack;

  const pauseTrack = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleTrack = useCallback((trackId) => {
    setIsManualOverride(true);
    isAutoSequenceActiveRef.current = false;

    if (activeTrackId === trackId && isPlaying) {
      pauseTrack();
    } else {
      playTrack(trackId, true);
    }
  }, [activeTrackId, isPlaying, playTrack, pauseTrack]);

  const seekTrack = useCallback((percentage) => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      const newTime = Math.max(0, Math.min(audio.duration, (percentage / 100) * audio.duration));
      audio.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(percentage);
    }
  }, []);

  // Déclenchement automatique de la séquence dès l'entrée de l'utilisateur
  const startAutoSequence = useCallback(() => {
    if (isManualOverride) return;
    console.log('[AudioSequence] Démarrage de la séquence automatique : Musique de recueillement (1 min)');
    isAutoSequenceActiveRef.current = true;
    playTrack('recueillement', false);
  }, [isManualOverride, playTrack]);

  // Initialisation de l'élément audio unique et gestion de la chaîne de lecture
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      const curr = audio.currentTime;
      const dur = audio.duration || 1;
      setCurrentTime(curr);
      setDuration(dur);
      setProgress((curr / dur) * 100);

      // Séquence automatique : après 60 secondes sur 'recueillement', on enchaîne avec 'annonce'
      if (
        isAutoSequenceActiveRef.current &&
        audio.dataset.trackId === 'recueillement' &&
        curr >= 60
      ) {
        console.log('[AudioSequence] 1 minute écoulée sur recueillement -> Déclenchement automatique de Annonce');
        playTrackRef.current?.('annonce', false);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);

      // Séquence automatique : lorsque 'annonce' se termine complètement, on enchaîne avec 'thanks'
      if (isAutoSequenceActiveRef.current && audio.dataset.trackId === 'annonce') {
        console.log('[AudioSequence] Annonce terminée -> Déclenchement automatique de Remerciements');
        playTrackRef.current?.('thanks', false);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        activeTrackId,
        isPlaying,
        currentTime,
        duration,
        progress,
        isManualOverride,
        playTrack,
        pauseTrack,
        toggleTrack,
        seekTrack,
        startAutoSequence,
        tracks: TRACKS
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) {
    throw new Error('useAudio doit être utilisé à l\'intérieur d\'un AudioProvider');
  }
  return ctx;
}
