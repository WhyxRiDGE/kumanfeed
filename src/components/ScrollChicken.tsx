import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ── Cartoon Chicken built from primitives ── */
function ChickenModel({ scrollY }: { scrollY: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollY * 0.03;
      // Gentle bob
      groupRef.current.position.y = Math.sin(scrollY * 0.05) * 0.15;
    }
  });

  const white = new THREE.MeshToonMaterial({ color: "#f5f0e8" });
  const skin = new THREE.MeshToonMaterial({ color: "#f0c070" });
  const red = new THREE.MeshToonMaterial({ color: "#e23030" });
  const orange = new THREE.MeshToonMaterial({ color: "#e8952a" });
  const darkBrown = new THREE.MeshToonMaterial({ color: "#1a1a1a" });
  const eyeWhite = new THREE.MeshToonMaterial({ color: "#ffffff" });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Body */}
      <mesh position={[0, -0.3, 0]} material={white}>
        <sphereGeometry args={[1, 32, 32]} />
      </mesh>
      {/* Body bottom (slightly bigger for pear shape) */}
      <mesh position={[0, -0.7, 0]} material={white}>
        <sphereGeometry args={[0.9, 32, 32]} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.85, 0.15]} material={white}>
        <sphereGeometry args={[0.55, 32, 32]} />
      </mesh>

      {/* Comb (three bumps on top) */}
      <mesh position={[-0.1, 1.45, 0.15]} material={red}>
        <sphereGeometry args={[0.13, 16, 16]} />
      </mesh>
      <mesh position={[0.05, 1.52, 0.15]} material={red}>
        <sphereGeometry args={[0.15, 16, 16]} />
      </mesh>
      <mesh position={[0.2, 1.45, 0.15]} material={red}>
        <sphereGeometry args={[0.13, 16, 16]} />
      </mesh>

      {/* Wattle (red thing under beak) */}
      <mesh position={[0, 0.45, 0.55]} material={red}>
        <sphereGeometry args={[0.1, 16, 16]} />
      </mesh>

      {/* Beak */}
      <mesh position={[0, 0.7, 0.65]} rotation={[0.3, 0, 0]} material={orange}>
        <coneGeometry args={[0.12, 0.3, 8]} />
      </mesh>

      {/* Eyes */}
      {/* Left eye white */}
      <mesh position={[-0.2, 0.95, 0.55]} material={eyeWhite}>
        <sphereGeometry args={[0.13, 16, 16]} />
      </mesh>
      {/* Left pupil */}
      <mesh position={[-0.2, 0.95, 0.67]} material={darkBrown}>
        <sphereGeometry args={[0.07, 16, 16]} />
      </mesh>
      {/* Right eye white */}
      <mesh position={[0.2, 0.95, 0.55]} material={eyeWhite}>
        <sphereGeometry args={[0.13, 16, 16]} />
      </mesh>
      {/* Right pupil */}
      <mesh position={[0.2, 0.95, 0.67]} material={darkBrown}>
        <sphereGeometry args={[0.07, 16, 16]} />
      </mesh>

      {/* Left Wing */}
      <mesh position={[-0.85, -0.15, 0]} rotation={[0, 0, 0.4]} material={white}>
        <sphereGeometry args={[0.45, 16, 16]} />
      </mesh>
      {/* Right Wing */}
      <mesh position={[0.85, -0.15, 0]} rotation={[0, 0, -0.4]} material={white}>
        <sphereGeometry args={[0.45, 16, 16]} />
      </mesh>

      {/* Tail feathers */}
      <mesh position={[0, 0.1, -0.9]} rotation={[-0.6, 0, 0]} material={white}>
        <sphereGeometry args={[0.35, 16, 16]} />
      </mesh>
      <mesh position={[0.15, 0.3, -1.0]} rotation={[-0.4, 0.2, 0]} material={white}>
        <sphereGeometry args={[0.25, 16, 16]} />
      </mesh>
      <mesh position={[-0.15, 0.3, -1.0]} rotation={[-0.4, -0.2, 0]} material={white}>
        <sphereGeometry args={[0.25, 16, 16]} />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.3, -1.4, 0.1]} material={orange}>
        <cylinderGeometry args={[0.06, 0.06, 0.5, 8]} />
      </mesh>
      {/* Left Foot */}
      <mesh position={[-0.3, -1.65, 0.2]} rotation={[1.2, 0, 0]} material={orange}>
        <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.3, -1.4, 0.1]} material={orange}>
        <cylinderGeometry args={[0.06, 0.06, 0.5, 8]} />
      </mesh>
      {/* Right Foot */}
      <mesh position={[0.3, -1.65, 0.2]} rotation={[1.2, 0, 0]} material={orange}>
        <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
      </mesh>
    </group>
  );
}

function Scene({ scrollY }: { scrollY: number }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 5]} intensity={1} />
      <directionalLight position={[-3, 2, -2]} intensity={0.3} />
      <ChickenModel scrollY={scrollY} />
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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto" style={{ width: 160, height: 160 }}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>
        <Scene scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default ScrollChicken;