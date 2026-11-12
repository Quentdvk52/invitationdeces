import { createContext, useContext, useState, useCallback } from 'react';
import MediaLightbox from '../components/MediaLightbox';

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [activeMedia, setActiveMedia] = useState(null);

  const openLightbox = useCallback((media) => {
    setActiveMedia(media);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveMedia(null);
  }, []);

  return (
    <LightboxContext.Provider value={{ activeMedia, openLightbox, closeLightbox }}>
      {children}
      <MediaLightbox media={activeMedia} onClose={closeLightbox} />
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
}
