"use client";
import React, { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Robot() {
  const texture = useTexture("/Banner.png");
  const meshRef = useRef(null);

  // Keep the original aspect ratio of the robot image
  const imageAspect = texture.image.width / texture.image.height;
  // Make the plane large enough to see it clearly
  const planeHeight = 4.5;
  const planeWidth = planeHeight * imageAspect;

  const targetMouse = useMemo(() => new THREE.Vector2(0, 0), []);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse to -1 to 1
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [targetMouse]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const t = state.clock.getElapsedTime();

    // 1. Floating animation (up and down)
    const floatY = Math.sin(t * 1.5) * 0.15;
    
    // 2. Mouse Parallax (move slightly with mouse)
    const targetX = targetMouse.x * 0.4;
    const targetY = targetMouse.y * 0.4 + floatY;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);

    // 3. 3D Tilt effect based on mouse (increased for more 3D feel)
    const targetRotationX = -targetMouse.y * 0.35; // increased rotation
    const targetRotationY = targetMouse.x * 0.35; // increased rotation

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.05);
  });

  return (
    <group>
      {/* Animated Glowing Circles (Particles) */}
      <Sparkles 
        count={6} 
        scale={8} 
        size={25} 
        speed={0.6} 
        opacity={0.8}
        color="#ff8c00" /* Orange/yellow glow */
        position={[0, 0, -2]} 
      />
      <Sparkles 
        count={4} 
        scale={6} 
        size={15} 
        speed={0.4} 
        opacity={0.6}
        color="#ffcc00" /* Yellow glow */
        position={[0, 0, 1]} 
      />

      <mesh ref={meshRef}>
        <planeGeometry args={[planeWidth, planeHeight, 32, 32]} />
        <meshBasicMaterial 
          map={texture} 
          transparent={true} 
          alphaTest={0.01} 
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default function BannerThreeBg() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Robot />
        </Suspense>
      </Canvas>
    </div>
  );
}
