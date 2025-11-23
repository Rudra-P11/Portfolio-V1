import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, GradientTexture } from "@react-three/drei";

const HeroGeometry = () => {
  return (
    <div className="absolute right-0 top-0 h-full w-full md:w-1/2 z-0 opacity-60 md:opacity-100 pointer-events-none md:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={2} />

        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              distort={0.3}
              speed={3}
              roughness={0.4}
              metalness={1}
            >
              <GradientTexture
                stops={[0, 0.7, 1]}              // where the colors blend
                colors={["#5b2cff", "#7a4afc", "#4fb4ff"]} // purple → indigo → blue
                size={1024}
              />
            </MeshDistortMaterial>
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
};

export default HeroGeometry;
