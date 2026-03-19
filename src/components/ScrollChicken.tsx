import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ── Realistic Chicken built from primitives ── */
function ChickenModel({ scrollY }: { scrollY: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollY * 0.03;
      groupRef.current.position.y = Math.sin(scrollY * 0.05) * 0.1;
    }
  });

  const bodyMat = new THREE.MeshStandardMaterial({ color: "#d4a04a", roughness: 0.7, metalness: 0.05 });
  const breastMat = new THREE.MeshStandardMaterial({ color: "#e8c06a", roughness: 0.75, metalness: 0.02 });
  const headMat = new THREE.MeshStandardMaterial({ color: "#c8922e", roughness: 0.65, metalness: 0.05 });
  const combMat = new THREE.MeshStandardMaterial({ color: "#cc2020", roughness: 0.5, metalness: 0.1 });
  const wattleMat = new THREE.MeshStandardMaterial({ color: "#b81818", roughness: 0.5, metalness: 0.1 });
  const beakMat = new THREE.MeshStandardMaterial({ color: "#e8a020", roughness: 0.4, metalness: 0.15 });
  const legMat = new THREE.MeshStandardMaterial({ color: "#d4932a", roughness: 0.5, metalness: 0.1 });
  const eyeWhiteMat = new THREE.MeshStandardMaterial({ color: "#f8f4f0", roughness: 0.3 });
  const pupilMat = new THREE.MeshStandardMaterial({ color: "#0a0a0a", roughness: 0.2, metalness: 0.3 });
  const wingMat = new THREE.MeshStandardMaterial({ color: "#b8842a", roughness: 0.7, metalness: 0.05 });
  const tailMat = new THREE.MeshStandardMaterial({ color: "#2a2a2a", roughness: 0.6, metalness: 0.1 });
  const tailAccent = new THREE.MeshStandardMaterial({ color: "#1a3a1a", roughness: 0.5, metalness: 0.15 });

  return (
    <group ref={groupRef} scale={1.15}>
      {/* Main body - elongated */}
      <mesh position={[0, -0.25, 0]} material={bodyMat}>
        <sphereGeometry args={[0.85, 32, 32]} />
      </mesh>
      {/* Lower body / belly */}
      <mesh position={[0, -0.65, 0.1]} material={breastMat} scale={[1, 0.8, 1.05]}>
        <sphereGeometry args={[0.75, 32, 32]} />
      </mesh>
      {/* Chest puff */}
      <mesh position={[0, -0.1, 0.45]} material={breastMat} scale={[0.7, 0.7, 0.5]}>
        <sphereGeometry args={[0.6, 24, 24]} />
      </mesh>
      {/* Back hump */}
      <mesh position={[0, 0.05, -0.3]} material={bodyMat} scale={[0.8, 0.6, 0.9]}>
        <sphereGeometry args={[0.65, 24, 24]} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 0.45, 0.2]} material={headMat} scale={[0.5, 0.7, 0.5]}>
        <sphereGeometry args={[0.45, 24, 24]} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.85, 0.25]} material={headMat}>
        <sphereGeometry args={[0.4, 32, 32]} />
      </mesh>
      {/* Cheeks */}
      <mesh position={[-0.15, 0.78, 0.5]} material={headMat} scale={[0.6, 0.5, 0.4]}>
        <sphereGeometry args={[0.25, 16, 16]} />
      </mesh>
      <mesh position={[0.15, 0.78, 0.5]} material={headMat} scale={[0.6, 0.5, 0.4]}>
        <sphereGeometry args={[0.25, 16, 16]} />
      </mesh>

      {/* Comb - serrated, more detailed */}
      <mesh position={[0, 1.22, 0.2]} material={combMat} scale={[0.15, 1, 0.6]}>
        <sphereGeometry args={[0.18, 16, 16]} />
      </mesh>
      <mesh position={[0, 1.32, 0.15]} material={combMat} scale={[0.12, 0.8, 0.5]}>
        <sphereGeometry args={[0.15, 16, 16]} />
      </mesh>
      <mesh position={[0, 1.18, 0.3]} material={combMat} scale={[0.12, 0.6, 0.5]}>
        <sphereGeometry args={[0.14, 16, 16]} />
      </mesh>
      <mesh position={[0, 1.28, 0.28]} material={combMat} scale={[0.1, 0.5, 0.4]}>
        <sphereGeometry args={[0.12, 16, 16]} />
      </mesh>

      {/* Wattle */}
      <mesh position={[0, 0.5, 0.6]} material={wattleMat} scale={[0.6, 1, 0.5]}>
        <sphereGeometry args={[0.1, 16, 16]} />
      </mesh>
      <mesh position={[0, 0.42, 0.58]} material={wattleMat} scale={[0.5, 0.8, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
      </mesh>

      {/* Beak - upper */}
      <mesh position={[0, 0.72, 0.65]} rotation={[0.4, 0, 0]} material={beakMat}>
        <coneGeometry args={[0.08, 0.25, 8]} />
      </mesh>
      {/* Beak - lower */}
      <mesh position={[0, 0.65, 0.62]} rotation={[0.6, 0, 0]} material={beakMat} scale={[0.8, 0.5, 0.8]}>
        <coneGeometry args={[0.06, 0.18, 8]} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.18, 0.92, 0.52]} material={eyeWhiteMat}>
        <sphereGeometry args={[0.09, 16, 16]} />
      </mesh>
      <mesh position={[-0.18, 0.92, 0.6]} material={pupilMat}>
        <sphereGeometry args={[0.05, 16, 16]} />
      </mesh>
      {/* Eye highlight */}
      <mesh position={[-0.16, 0.94, 0.62]} material={eyeWhiteMat}>
        <sphereGeometry args={[0.015, 8, 8]} />
      </mesh>
      <mesh position={[0.18, 0.92, 0.52]} material={eyeWhiteMat}>
        <sphereGeometry args={[0.09, 16, 16]} />
      </mesh>
      <mesh position={[0.18, 0.92, 0.6]} material={pupilMat}>
        <sphereGeometry args={[0.05, 16, 16]} />
      </mesh>
      <mesh position={[0.2, 0.94, 0.62]} material={eyeWhiteMat}>
        <sphereGeometry args={[0.015, 8, 8]} />
      </mesh>

      {/* Wings - layered feathers */}
      <mesh position={[-0.8, -0.1, -0.05]} rotation={[0, 0, 0.35]} material={wingMat} scale={[0.4, 0.9, 0.7]}>
        <sphereGeometry args={[0.5, 16, 16]} />
      </mesh>
      <mesh position={[-0.85, -0.3, -0.15]} rotation={[0, 0, 0.5]} material={wingMat} scale={[0.3, 0.7, 0.55]}>
        <sphereGeometry args={[0.45, 16, 16]} />
      </mesh>
      <mesh position={[0.8, -0.1, -0.05]} rotation={[0, 0, -0.35]} material={wingMat} scale={[0.4, 0.9, 0.7]}>
        <sphereGeometry args={[0.5, 16, 16]} />
      </mesh>
      <mesh position={[0.85, -0.3, -0.15]} rotation={[0, 0, -0.5]} material={wingMat} scale={[0.3, 0.7, 0.55]}>
        <sphereGeometry args={[0.45, 16, 16]} />
      </mesh>

      {/* Tail feathers - dramatic upward sweep */}
      <mesh position={[0, 0.2, -0.95]} rotation={[-0.8, 0, 0]} material={tailMat} scale={[0.5, 1.2, 0.4]}>
        <sphereGeometry args={[0.35, 16, 16]} />
      </mesh>
      <mesh position={[0.12, 0.45, -1.05]} rotation={[-0.5, 0.15, 0]} material={tailAccent} scale={[0.25, 1, 0.3]}>
        <sphereGeometry args={[0.3, 16, 16]} />
      </mesh>
      <mesh position={[-0.12, 0.45, -1.05]} rotation={[-0.5, -0.15, 0]} material={tailAccent} scale={[0.25, 1, 0.3]}>
        <sphereGeometry args={[0.3, 16, 16]} />
      </mesh>
      <mesh position={[0, 0.55, -1.0]} rotation={[-0.4, 0, 0]} material={tailMat} scale={[0.2, 0.9, 0.25]}>
        <sphereGeometry args={[0.28, 16, 16]} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.25, -1.25, 0.1]} material={legMat}>
        <cylinderGeometry args={[0.05, 0.04, 0.55, 8]} />
      </mesh>
      <mesh position={[0.25, -1.25, 0.1]} material={legMat}>
        <cylinderGeometry args={[0.05, 0.04, 0.55, 8]} />
      </mesh>
      {/* Feet - 3 toes each */}
      {[-0.25, 0.25].map((x, i) => (
        <group key={i} position={[x, -1.52, 0.15]}>
          <mesh rotation={[1.3, 0, 0]} material={legMat}>
            <cylinderGeometry args={[0.025, 0.02, 0.22, 6]} />
          </mesh>
          <mesh rotation={[1.3, 0, 0.4]} material={legMat}>
            <cylinderGeometry args={[0.025, 0.02, 0.2, 6]} />
          </mesh>
          <mesh rotation={[1.3, 0, -0.4]} material={legMat}>
            <cylinderGeometry args={[0.025, 0.02, 0.2, 6]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Scene({ scrollY }: { scrollY: number }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#b0c4de" />
      <pointLight position={[0, 3, 3]} intensity={0.3} color="#fff5e0" />
      <hemisphereLight args={["#87ceeb", "#8b6914", 0.3]} />
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