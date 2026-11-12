// Configuration des médias
// Placez vos fichiers dans les dossiers correspondants et mettez à jour les chemins ici

const MEDIA_CONFIG = {
    // Images
    images: {
        hero: 'assets/images/hero.jpg',
        couple: 'assets/images/couple.jpg',
        lozenge: 'assets/images/lozenge.jpg',
        tissue: 'assets/images/tissue.jpg',
        souvenir1: 'assets/images/souvenir1.jpg',
        souvenir2: 'assets/images/souvenir2.jpg'
    },
    
    // Audio
    audio: {
        main: 'assets/audio/main.mp3',
        thanks: 'assets/audio/thanks.mp3'
    }
};

// Fonction pour obtenir les URLs
function getMediaUrl(type, key) {
    return MEDIA_CONFIG[type][key];
}

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MEDIA_CONFIG;
}
