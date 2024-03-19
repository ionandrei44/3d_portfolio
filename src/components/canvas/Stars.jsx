import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const CustomGeometryParticles = (props) => {
  const { count } = props;

  const points = useRef();

  useFrame((state, delta) => {
    points.current.rotation.x += delta / 10;
    points.current.rotation.y += delta / 15;
  });

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const distance = 1;

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      let x = distance * Math.sin(phi) * Math.cos(theta);
      let y = distance * Math.sin(phi) * Math.sin(theta);
      let z = distance * Math.cos(phi);

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.003}
        color="#5786F5"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 0.01] }}>
        <Suspense fallback={<CanvasLoader />}>
          <CustomGeometryParticles count={5000} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
