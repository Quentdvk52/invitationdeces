import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import ErrorBoundary from './ErrorBoundary';

// Flamme 3D incandescente animée
function FlameMesh() {
  const flameRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    if (!flameRef.current) return;
    const t = state.clock.elapsedTime;

    // Oscillation et étirement naturel de la flamme
    const swayX = Math.sin(t * 3.5) * 0.08 + Math.cos(t * 7) * 0.03;
    const scaleY = 1 + Math.sin(t * 5.2) * 0.12 + Math.cos(t * 8) * 0.06;
    const scaleXZ = 1 - Math.sin(t * 5.2) * 0.06;

    flameRef.current.position.x = swayX;
    flameRef.current.scale.set(scaleXZ, scaleY, scaleXZ);

    if (innerRef.current) {
      innerRef.current.position.x = swayX * 0.7;
      innerRef.current.scale.set(scaleXZ * 0.8, scaleY * 0.95, scaleXZ * 0.8);
    }
  });

  return (
    <group position={[0, 1.45, 0]}>
      {/* Flamme extérieure dorée/orangée */}
      <mesh ref={flameRef}>
        <coneGeometry args={[0.22, 0.75, 16]} />
        <meshBasicMaterial
          color="#FFA500"
          transparent
          opacity={0.88}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Cœur de flamme incandescent blanc/jaune */}
      <mesh ref={innerRef} position={[0, -0.05, 0]}>
        <coneGeometry args={[0.13, 0.5, 16]} />
        <meshBasicMaterial
          color="#FFFFEE"
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Lumière ponctuelle thermique vacillante */}
      <pointLight color="#FFB84D" intensity={3.5} distance={5} />
    </group>
  );
}

// Étincelles de feu ascendantes qui montent au-dessus de la bougie
function RisingFireSparks({ count = 18 }) {
  const pointsRef = useRef();

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 0.25;
      pos[i3 + 1] = 1.8 + Math.random() * 0.8;
      pos[i3 + 2] = (Math.random() - 0.5) * 0.25;
      spd[i] = 0.015 + Math.random() * 0.02;
    }

    return [pos, spd];
  }, [count]);

  const posAttrRef = useRef();

  useFrame((state) => {
    if (!posAttrRef.current) return;
    const array = posAttrRef.current.array;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      array[i3 + 1] += speeds[i];
      array[i3] += Math.sin(t * 4 + i) * 0.005;

      // Recyclage dès que l'étincelle monte trop haut
      if (array[i3 + 1] > 3.0) {
        array[i3 + 1] = 1.8;
        array[i3] = (Math.random() - 0.5) * 0.25;
        array[i3 + 2] = (Math.random() - 0.5) * 0.25;
      }
    }

    posAttrRef.current.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          ref={posAttrRef}
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#FFE599"
        size={0.07}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Corps de cire naturel de la bougie en 3D
function CandleWaxBody() {
  return (
    <group position={[0, -0.1, 0]}>
      {/* Cylindre de cire ivoire avec reflets chauds */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.38, 0.42, 1.8, 32]} />
        <meshStandardMaterial
          color="#FFF8ED"
          roughness={0.35}
          metalness={0.05}
        />
      </mesh>

      {/* Creux de fusion supérieur */}
      <mesh position={[0, 1.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.06, 0.36, 32]} />
        <meshStandardMaterial color="#EAD7BC" roughness={0.5} />
      </mesh>

      {/* Mèche sombre de la bougie */}
      <mesh position={[0, 1.38, 0]}>
        <cylinderGeometry args={[0.02, 0.025, 0.2, 12]} />
        <meshStandardMaterial color="#2B1D12" roughness={0.9} />
      </mesh>
    </group>
  );
}

export default function Candle3D() {
  return (
    <div
      style={{
        width: '85px',
        height: '140px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      title="Bougie sacrée naturelle 3D"
    >
      <ErrorBoundary
        fallback={
          <div className="candle-sanctuary">
            <div className="candle-glow-aura" />
            <div className="candle-flame-core" />
            <div className="candle-wax">
              <div className="candle-wick" />
            </div>
          </div>
        }
      >
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 1.2, 4.2], fov: 45 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            dpr={[1, 1.5]}
            style={{ width: '100%', height: '100%', background: 'transparent' }}
          >
            <ambientLight intensity={0.7} color="#FFF5EA" />
            <directionalLight position={[2, 4, 3]} intensity={0.9} color="#FFE6B3" />
            <CandleWaxBody />
            <FlameMesh />
            <RisingFireSparks count={20} />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
