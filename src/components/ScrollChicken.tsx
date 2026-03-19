import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ── Simple Cartoon Hen (exact match to reference) ── */
function ChickenModel({ scrollY }: { scrollY: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollY * 0.03;
      groupRef.current.position.y = Math.sin(scrollY * 0.05) * 0.1;
    }
  });

  const white = new THREE.MeshToonMaterial({ color: "#f5f0e8" });
  const brown = new THREE.MeshToonMaterial({ color: "#c07830" });
  const red = new THREE.MeshToonMaterial({ color: "#d42020" });
  const yellow = new THREE.MeshToonMaterial({ color: "#e8a020" });
  const black = new THREE.MeshToonMaterial({ color: "#111111" });

  return (
    <group ref={groupRef} scale={1.1}>
      {/* ── BIG round white body (dominates the shape) ── */}
      <mesh position={[0, -0.2, 0]} material={white}>
        <sphereGeometry args={[1.1, 32, 32]} />
      </mesh>

      {/* ── Small brown head sitting on top of body ── */}
      <mesh position={[0, 0.85, 0.3]} material={brown}>
        <sphereGeometry args={[0.42, 32, 32]} />
      </mesh>

      {/* ── Red comb (simple 3 bumps) ── */}
      <mesh position={[0, 1.28, 0.28]} material={red}>
        <sphereGeometry args={[0.1, 12, 12]} />
      </mesh>
      <mesh position={[0.08, 1.22, 0.3]} material={red}>
        <sphereGeometry args={[0.08, 12, 12]} />
      </mesh>
      <mesh position={[-0.06, 1.22, 0.3]} material={red}>
        <sphereGeometry args={[0.07, 12, 12]} />
      </mesh>

      {/* ── Small yellow beak (pointy triangle) ── */}
      <mesh position={[0, 0.78, 0.72]} rotation={[0.3, 0, 0]} material={yellow}>
        <coneGeometry args={[0.06, 0.18, 6]} />
      </mesh>

      {/* ── Red wattle under beak ── */}
      <mesh position={[0, 0.62, 0.65]} material={red}>
        <sphereGeometry args={[0.06, 12, 12]} />
      </mesh>

      {/* ── Dot eyes ── */}
      <mesh position={[-0.15, 0.92, 0.62]} material={black}>
        <sphereGeometry args={[0.05, 12, 12]} />
      </mesh>
      <mesh position={[0.15, 0.92, 0.62]} material={black}>
        <sphereGeometry args={[0.05, 12, 12]} />
      </mesh>

      {/* ── Stubby white tail (pointing up-back) ── */}
      <mesh position={[0, 0.3, -0.95]} rotation={[-0.6, 0, 0]} material={white} scale={[0.6, 1, 0.4]}>
        <sphereGeometry args={[0.35, 16, 16]} />
      </mesh>
      <mesh position={[0.08, 0.5, -0.95]} rotation={[-0.4, 0.1, 0]} material={white} scale={[0.3, 0.8, 0.3]}>
        <sphereGeometry args={[0.28, 16, 16]} />
      </mesh>
      <mesh position={[-0.08, 0.5, -0.95]} rotation={[-0.4, -0.1, 0]} material={white} scale={[0.3, 0.8, 0.3]}>
        <sphereGeometry args={[0.28, 16, 16]} />
      </mesh>

      {/* ── Short orange legs ── */}
      <mesh position={[-0.25, -1.2, 0.15]} material={yellow}>
        <cylinderGeometry args={[0.05, 0.04, 0.35, 8]} />
      </mesh>
      <mesh position={[0.25, -1.2, 0.15]} material={yellow}>
        <cylinderGeometry args={[0.05, 0.04, 0.35, 8]} />
      </mesh>
      {/* Feet */}
      {[-0.25, 0.25].map((x, i) => (
        <group key={i} position={[x, -1.38, 0.2]}>
          <mesh rotation={[1.3, 0, 0]} material={yellow}>
            <cylinderGeometry args={[0.025, 0.02, 0.18, 6]} />
          </mesh>
          <mesh rotation={[1.3, 0, 0.35]} material={yellow}>
            <cylinderGeometry args={[0.025, 0.02, 0.15, 6]} />
          </mesh>
          <mesh rotation={[1.3, 0, -0.35]} material={yellow}>
            <cylinderGeometry args={[0.025, 0.02, 0.15, 6]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Shadow() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.55, 0.1]}>
      <circleGeometry args={[0.55, 32]} />
      <meshBasicMaterial color="#000000" transparent opacity={0.15} />
    </mesh>
  );
}

function Scene({ scrollY }: { scrollY: number }) {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 5]} intensity={1} />
      <directionalLight position={[-2, 3, -1]} intensity={0.3} />
      <ChickenModel scrollY={scrollY} />
      <Shadow />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

const ScrollChicken = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto" style={{ width: 180, height: 180 }}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>
        <Scene scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default ScrollChicken;
