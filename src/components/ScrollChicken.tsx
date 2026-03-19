import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ── Cute Cartoon Hen (matching reference) ── */
function ChickenModel({ scrollY }: { scrollY: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollY * 0.03;
      groupRef.current.position.y = Math.sin(scrollY * 0.05) * 0.1;
    }
  });

  const white = new THREE.MeshToonMaterial({ color: "#f5f0e6" });
  const brown = new THREE.MeshToonMaterial({ color: "#b5723a" });
  const darkBrown = new THREE.MeshToonMaterial({ color: "#8a5528" });
  const red = new THREE.MeshToonMaterial({ color: "#d42020" });
  const orange = new THREE.MeshToonMaterial({ color: "#e89030" });
  const black = new THREE.MeshToonMaterial({ color: "#111111" });
  const eyeWhite = new THREE.MeshToonMaterial({ color: "#ffffff" });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* ── Big round white body ── */}
      <mesh position={[0, -0.35, 0]} material={white} scale={[1, 0.9, 1.1]}>
        <sphereGeometry args={[1, 32, 32]} />
      </mesh>
      {/* Belly highlight */}
      <mesh position={[0, -0.55, 0.3]} material={white} scale={[0.8, 0.7, 0.6]}>
        <sphereGeometry args={[0.8, 24, 24]} />
      </mesh>

      {/* ── Brown neck ── */}
      <mesh position={[0, 0.4, 0.35]} material={brown} scale={[0.45, 0.55, 0.45]}>
        <sphereGeometry args={[0.5, 24, 24]} />
      </mesh>

      {/* ── Brown head ── */}
      <mesh position={[0, 0.8, 0.4]} material={brown}>
        <sphereGeometry args={[0.38, 32, 32]} />
      </mesh>
      {/* Darker brown top of head */}
      <mesh position={[0, 0.95, 0.35]} material={darkBrown} scale={[0.8, 0.5, 0.8]}>
        <sphereGeometry args={[0.28, 24, 24]} />
      </mesh>

      {/* ── Red comb (3 round bumps on top) ── */}
      <mesh position={[-0.06, 1.2, 0.35]} material={red}>
        <sphereGeometry args={[0.1, 16, 16]} />
      </mesh>
      <mesh position={[0.06, 1.27, 0.33]} material={red}>
        <sphereGeometry args={[0.12, 16, 16]} />
      </mesh>
      <mesh position={[0.15, 1.18, 0.35]} material={red}>
        <sphereGeometry args={[0.09, 16, 16]} />
      </mesh>

      {/* ── Red wattle (under beak) ── */}
      <mesh position={[0, 0.5, 0.72]} material={red} scale={[0.7, 1, 0.6]}>
        <sphereGeometry args={[0.09, 16, 16]} />
      </mesh>

      {/* ── Small orange beak ── */}
      <mesh position={[0, 0.68, 0.75]} rotation={[0.3, 0, 0]} material={orange}>
        <coneGeometry args={[0.07, 0.2, 8]} />
      </mesh>

      {/* ── Eyes (big cute cartoon eyes) ── */}
      <mesh position={[-0.15, 0.88, 0.65]} material={eyeWhite}>
        <sphereGeometry args={[0.1, 16, 16]} />
      </mesh>
      <mesh position={[-0.15, 0.88, 0.74]} material={black}>
        <sphereGeometry args={[0.06, 16, 16]} />
      </mesh>
      <mesh position={[0.15, 0.88, 0.65]} material={eyeWhite}>
        <sphereGeometry args={[0.1, 16, 16]} />
      </mesh>
      <mesh position={[0.15, 0.88, 0.74]} material={black}>
        <sphereGeometry args={[0.06, 16, 16]} />
      </mesh>

      {/* ── Small wing bumps on sides ── */}
      <mesh position={[-0.75, -0.2, -0.1]} rotation={[0, 0, 0.3]} material={white} scale={[0.35, 0.65, 0.5]}>
        <sphereGeometry args={[0.5, 16, 16]} />
      </mesh>
      <mesh position={[0.75, -0.2, -0.1]} rotation={[0, 0, -0.3]} material={white} scale={[0.35, 0.65, 0.5]}>
        <sphereGeometry args={[0.5, 16, 16]} />
      </mesh>

      {/* ── White tail feathers (small, perky) ── */}
      <mesh position={[0, 0.1, -0.9]} rotation={[-0.7, 0, 0]} material={white} scale={[0.6, 0.8, 0.4]}>
        <sphereGeometry args={[0.35, 16, 16]} />
      </mesh>
      <mesh position={[0.1, 0.3, -0.95]} rotation={[-0.5, 0.1, 0]} material={white} scale={[0.3, 0.7, 0.3]}>
        <sphereGeometry args={[0.28, 16, 16]} />
      </mesh>
      <mesh position={[-0.1, 0.3, -0.95]} rotation={[-0.5, -0.1, 0]} material={white} scale={[0.3, 0.7, 0.3]}>
        <sphereGeometry args={[0.28, 16, 16]} />
      </mesh>

      {/* ── Orange legs ── */}
      <mesh position={[-0.25, -1.15, 0.1]} material={orange}>
        <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
      </mesh>
      <mesh position={[0.25, -1.15, 0.1]} material={orange}>
        <cylinderGeometry args={[0.05, 0.04, 0.45, 8]} />
      </mesh>
      {/* Feet - 3 toes each */}
      {[-0.25, 0.25].map((x, i) => (
        <group key={i} position={[x, -1.38, 0.15]}>
          <mesh rotation={[1.3, 0, 0]} material={orange}>
            <cylinderGeometry args={[0.025, 0.02, 0.2, 6]} />
          </mesh>
          <mesh rotation={[1.3, 0, 0.4]} material={orange}>
            <cylinderGeometry args={[0.025, 0.02, 0.18, 6]} />
          </mesh>
          <mesh rotation={[1.3, 0, -0.4]} material={orange}>
            <cylinderGeometry args={[0.025, 0.02, 0.18, 6]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Shadow() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.7, 0.1]}>
      <circleGeometry args={[0.6, 32]} />
      <meshBasicMaterial color="#000000" transparent opacity={0.18} />
    </mesh>
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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto" style={{ width: 260, height: 260 }}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>
        <Scene scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default ScrollChicken;