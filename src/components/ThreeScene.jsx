import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import ErrorBoundary from './ErrorBoundary';

// Particules d'or flottantes célestes (univers 3D en rotation lente)
function FloatingCelestialDust({ count = 350 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Distribution sphérique avec dispersion
      const radius = 8 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);

      // Dégradé or impérial / or champagne
      const isBright = Math.random() > 0.7;
      if (isBright) {
        col[i3] = 1.0;
        col[i3 + 1] = 0.88;
        col[i3 + 2] = 0.45;
      } else {
        col[i3] = 0.83;
        col[i3 + 1] = 0.69;
        col[i3 + 2] = 0.22;
      }
    }

    return [pos, col];
  }, [count]);

  const posAttrRef = useRef();

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    // Rotation lente et majestueuse
    pointsRef.current.rotation.y = time * 0.04;
    pointsRef.current.rotation.x = Math.sin(time * 0.06) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            ref={posAttrRef}
            attach="attributes-position"
            args={[positions, 3]}
            count={count}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.16}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

// Particules ascensionnelles (symbolisant les âmes et prières s'élevant vers le ciel)
function AscendingLightMotes({ count = 180 }) {
  const pointsRef = useRef();

  const [positions, speeds, horizontalWiggle] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const wig = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 35;
      pos[i3 + 1] = (Math.random() - 0.5) * 35;
      pos[i3 + 2] = (Math.random() - 0.5) * 25;

      spd[i] = 0.02 + Math.random() * 0.035;
      wig[i] = Math.random() * Math.PI * 2;
    }

    return [pos, spd, wig];
  }, [count]);

  const posAttrRef = useRef();

  useFrame((state, delta) => {
    if (!posAttrRef.current) return;
    const array = posAttrRef.current.array;
    const time = state.clock.elapsedTime;
    const safeDelta = Math.min(delta, 0.1);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Ascension verticale fluide
      array[i3 + 1] += speeds[i] * (safeDelta * 60);

      // Oscillation horizontale douce
      array[i3] += Math.sin(time * 0.8 + horizontalWiggle[i]) * 0.012;

      // Recyclage dès que la particule dépasse le haut de l'écran
      if (array[i3 + 1] > 18) {
        array[i3 + 1] = -18;
        array[i3] = (Math.random() - 0.5) * 35;
        array[i3 + 2] = (Math.random() - 0.5) * 25;
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
        color="#F4D03F"
        size={0.12}
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Effet de parallaxe 3D réactif à la souris et au toucher
function CameraParallax() {
  useFrame((state) => {
    const { pointer, camera } = state;
    // Lissage lerp vers la position de la souris / inclinaison
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 2.5, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 1.5, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

// Scène 3D principale
export default function ThreeScene() {
  return (
    <div
      className="three-canvas-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      <ErrorBoundary
        fallback={
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 50% 20%, rgba(212, 175, 55, 0.12) 0%, #050505 80%)'
            }}
          />
        }
      >
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 24], fov: 65 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            dpr={[1, 1.5]}
            style={{ pointerEvents: 'none', background: 'transparent' }}
          >
            <fog attach="fog" args={['#050505', 12, 40]} />
            <ambientLight intensity={0.4} />
            <pointLight position={[0, 4, 8]} intensity={1.5} color="#D4AF37" distance={30} />
            <FloatingCelestialDust count={300} />
            <AscendingLightMotes count={150} />
            <CameraParallax />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
