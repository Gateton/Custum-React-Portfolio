import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const Particles = () => {
  const points = Array.from({ length: 5000 }, () => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ],
  }));

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      camera={{ position: [0, 0, 10] }}
    >
      <Points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array(points.flatMap((p) => p.position))}
            count={points.length}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial size={0.05} sizeAttenuation color="#6C63FF" />
      </Points>
    </Canvas>
  );
};

export default Particles;
