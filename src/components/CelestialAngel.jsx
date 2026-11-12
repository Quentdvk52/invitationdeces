import { motion } from 'motion/react';

export default function CelestialAngel({ size = 'clamp(115px, 25vw, 150px)' }) {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        width: dimension,
        height: dimension,
        margin: '0 auto 0.8rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'drop-shadow(0 0 25px rgba(212, 175, 55, 0.8)) drop-shadow(0 0 50px rgba(255, 235, 180, 0.45))'
      }}
      aria-label="Ange céleste aux ailes battantes"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          {/* Dégradés d'or céleste et de nacre */}
          <linearGradient id="angelGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="35%" stopColor="#F3DC8C" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#9E7324" />
          </linearGradient>

          <linearGradient id="angelWingLeftGrad" x1="100%" y1="50%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="40%" stopColor="#F5E4A8" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B3802A" />
          </linearGradient>

          <linearGradient id="angelWingRightGrad" x1="0%" y1="50%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="40%" stopColor="#F5E4A8" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B3802A" />
          </linearGradient>

          <linearGradient id="angelRobeGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FDF6EA" />
            <stop offset="75%" stopColor="#EAD39C" />
            <stop offset="100%" stopColor="#B88A2E" />
          </linearGradient>

          <radialGradient id="angelHaloAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF5DF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>

          <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Halo de lumière diffuse arrière */}
        <circle cx="100" cy="95" r="75" fill="url(#angelHaloAura)" opacity="0.45" />

        {/* AILE GAUCHE BATTANTE */}
        <motion.g
          style={{ transformOrigin: '88px 90px' }}
          animate={{
            rotate: [-14, 18, -14],
            scaleX: [1, 0.8, 1],
            scaleY: [0.95, 1.08, 0.95]
          }}
          transition={{
            duration: 1.15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {/* Plume d'envergure principale */}
          <path
            d="M88 90 C 80 60, 50 25, 18 32 C 12 55, 30 75, 52 92 C 65 102, 78 100, 88 90 Z"
            fill="url(#angelWingLeftGrad)"
            opacity="0.95"
            filter="url(#glowFilter)"
          />
          {/* Rangée de plumes secondaires */}
          <path
            d="M86 96 C 72 75, 42 55, 26 62 C 22 78, 38 95, 58 108 C 70 114, 80 108, 86 96 Z"
            fill="url(#angelWingLeftGrad)"
            opacity="0.88"
          />
          {/* Plumes inférieures douces */}
          <path
            d="M84 104 C 74 90, 50 78, 38 88 C 36 100, 50 115, 68 122 C 76 124, 82 116, 84 104 Z"
            fill="url(#angelWingLeftGrad)"
            opacity="0.8"
          />
          {/* Finitions et nervures de lumière dorée */}
          <path
            d="M86 90 Q 55 50 22 36"
            stroke="#FFFDF9"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M82 98 Q 58 75 32 68"
            stroke="#FFF9EB"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.75"
          />
        </motion.g>

        {/* AILE DROITE BATTANTE (Symétrique inversée) */}
        <motion.g
          style={{ transformOrigin: '112px 90px' }}
          animate={{
            rotate: [14, -18, 14],
            scaleX: [1, 0.8, 1],
            scaleY: [0.95, 1.08, 0.95]
          }}
          transition={{
            duration: 1.15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {/* Plume d'envergure principale */}
          <path
            d="M112 90 C 120 60, 150 25, 182 32 C 188 55, 170 75, 148 92 C 135 102, 122 100, 112 90 Z"
            fill="url(#angelWingRightGrad)"
            opacity="0.95"
            filter="url(#glowFilter)"
          />
          {/* Rangée de plumes secondaires */}
          <path
            d="M114 96 C 128 75, 158 55, 174 62 C 178 78, 162 95, 142 108 C 130 114, 120 108, 114 96 Z"
            fill="url(#angelWingRightGrad)"
            opacity="0.88"
          />
          {/* Plumes inférieures douces */}
          <path
            d="M116 104 C 126 90, 150 78, 162 88 C 164 100, 150 115, 132 122 C 124 124, 118 116, 116 104 Z"
            fill="url(#angelWingRightGrad)"
            opacity="0.8"
          />
          {/* Finitions et nervures de lumière dorée */}
          <path
            d="M114 90 Q 145 50 178 36"
            stroke="#FFFDF9"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M118 98 Q 142 75 168 68"
            stroke="#FFF9EB"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.75"
          />
        </motion.g>

        {/* CORPS & ROBE DE L'ANGE */}
        <g>
          {/* Robe fluide drapée et solennelle */}
          <path
            d="M93 84 L107 84 L122 156 C 122 156, 100 162, 78 156 Z"
            fill="url(#angelRobeGrad)"
            filter="url(#glowFilter)"
          />
          {/* Plis de la robe et reflets de lumière */}
          <path
            d="M100 86 L100 159"
            stroke="#FFFDF9"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M94 92 L86 156"
            stroke="#D4AF37"
            strokeWidth="1.2"
            opacity="0.5"
          />
          <path
            d="M106 92 L114 156"
            stroke="#D4AF37"
            strokeWidth="1.2"
            opacity="0.5"
          />

          {/* Bras en prière / recueillement doux */}
          <path
            d="M90 92 C 92 105, 96 112, 100 114 C 104 112, 108 105, 110 92"
            stroke="#F3DC8C"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Mains jointes en prière sacrée */}
          <circle cx="100" cy="113" r="3.2" fill="#FFFDF9" />

          {/* Buste & Col délicat */}
          <path
            d="M91 80 C 91 76, 109 76, 109 80 L107 88 L93 88 Z"
            fill="#FDF6EA"
          />

          {/* Tête de l'ange */}
          <circle
            cx="100"
            cy="68"
            r="9.5"
            fill="url(#angelGoldGrad)"
          />
          {/* Reflet nacré sur le visage */}
          <circle
            cx="98"
            cy="66"
            r="7"
            fill="#FFFDF9"
            opacity="0.85"
          />

          {/* Chevelure d'or ondulée */}
          <path
            d="M91 66 C 90 60, 94 57, 100 57 C 106 57, 110 60, 109 66 C 111 72, 107 77, 106 79 C 103 76, 103 73, 100 73 C 97 73, 97 76, 94 79 C 93 77, 89 72, 91 66 Z"
            fill="#D4AF37"
            opacity="0.9"
          />

          {/* AURÉOLE DORÉE CÉLESTE RADIATIVE */}
          <motion.ellipse
            cx="100"
            cy="52"
            rx="16"
            ry="5.5"
            stroke="#FFF2BD"
            strokeWidth="2.2"
            fill="none"
            animate={{
              opacity: [0.75, 1, 0.75],
              scale: [0.96, 1.04, 0.96]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{ transformOrigin: '100px 52px' }}
            filter="url(#glowFilter)"
          />
          {/* Deuxième anneau fin d'auréole */}
          <ellipse
            cx="100"
            cy="52"
            rx="19"
            ry="6.5"
            stroke="#D4AF37"
            strokeWidth="0.8"
            strokeDasharray="2 3"
            fill="none"
            opacity="0.6"
          />
        </g>
      </svg>
    </motion.div>
  );
}
