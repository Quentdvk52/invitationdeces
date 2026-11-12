import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import ErrorBoundary from './ErrorBoundary';

// Anneau sacré céleste en rotation douce (halo de gloire éternelle)
function SacredMemorialRing() {
  const ringRef = useRef();

  useFrame((state) => {
    if (!ringRef.current) return;
    const t = state.clock.elapsedTime;
    ringRef.current.rotation.x = Math.sin(t * 0.15) * 0.2 + 0.5;
    ringRef.current.rotation.y = t * 0.08;
    ringRef.current.rotation.z = Math.cos(t * 0.1) * 0.15;
  });

  return (
    <group ref={ringRef} position={[0, 2, -5]}>
      <mesh>
        <torusGeometry args={[8.5, 0.04, 16, 100]} />
        <meshBasicMaterial
          color="#F3DC8C"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh>
        <torusGeometry args={[9.2, 0.02, 16, 100]} />
        <meshBasicMaterial
          color="#FFF5DF"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// Poussière d'étoiles dorées & nacrées en apesanteur
function PearlescentGoldenDust({ count = 380 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Volume spatial large
      pos[i3] = (Math.random() - 0.5) * 45;
      pos[i3 + 1] = (Math.random() - 0.5) * 45;
      pos[i3 + 2] = (Math.random() - 0.5) * 30;

      // Palette : or chaud, or blanc nacré et ambre doux
      const r = Math.random();
      if (r > 0.65) {
        // Reflet nacré opale
        col[i3] = 1.0;
        col[i3 + 1] = 0.96;
        col[i3 + 2] = 0.90;
      } else if (r > 0.3) {
        // Or impérial lumineux
        col[i3] = 0.95;
        col[i3 + 1] = 0.82;
        col[i3 + 2] = 0.42;
      } else {
        // Ambre chaleureux
        col[i3] = 0.88;
        col[i3 + 1] = 0.62;
        col[i3 + 2] = 0.25;
      }
    }

    return [pos, col];
  }, [count]);

  const posAttrRef = useRef();

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    pointsRef.current.rotation.y = t * 0.025;
    pointsRef.current.rotation.x = Math.sin(t * 0.04) * 0.04;
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
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.18}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Étincelles ascensionnelles poétiques (symbolisant les âmes et prières qui montent)
function AscendingWarmMotes({ count = 160 }) {
  const pointsRef = useRef();

  const [positions, speeds, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const phs = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 36;
      pos[i3 + 1] = (Math.random() - 0.5) * 36;
      pos[i3 + 2] = (Math.random() - 0.5) * 20;

      spd[i] = 0.02 + Math.random() * 0.035;
      phs[i] = Math.random() * Math.PI * 2;
    }

    return [pos, spd, phs];
  }, [count]);

  const posAttrRef = useRef();

  useFrame((state, delta) => {
    if (!posAttrRef.current) return;
    const array = posAttrRef.current.array;
    const t = state.clock.elapsedTime;
    const safeDelta = Math.min(delta, 0.1);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      array[i3 + 1] += speeds[i] * (safeDelta * 60);
      array[i3] += Math.sin(t * 0.7 + phases[i]) * 0.015;

      if (array[i3 + 1] > 20) {
        array[i3 + 1] = -20;
        array[i3] = (Math.random() - 0.5) * 36;
        array[i3 + 2] = (Math.random() - 0.5) * 20;
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
        color="#F3DC8C"
        size={0.14}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Parallaxe 3D cinématique douce réactive à la souris / toucher
function CameraFluidParallax() {
  useFrame((state) => {
    const { pointer, camera } = state;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 2.8, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 1.8, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ThreeScene() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
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
              background: 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.15) 0%, #0A0807 80%)'
            }}
          />
        }
      >
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 22], fov: 65 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            dpr={[1, 1.5]}
            style={{ pointerEvents: 'none', background: 'transparent' }}
          >
            <fog attach="fog" args={['#0A0807', 10, 38]} />
            <ambientLight intensity={0.5} color="#FFF8EE" />
            <pointLight position={[0, 6, 8]} intensity={2.2} color="#F3DC8C" distance={35} />
            <SacredMemorialRing />
            <PearlescentGoldenDust count={340} />
            <AscendingWarmMotes count={150} />
            <CameraFluidParallax />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
