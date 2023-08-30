import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Effects,
  OrbitControls,
  Stage,
} from "@react-three/drei";
import BoxModel from "@/Components/UI/Background/Models/BoxModel";
import Ground from "@/Components/UI/Ground";
import CustomControlers from "@/Components/UI/Controlers";
import Room from "@/Components/UI/Background/Models/Room";
import Configurator from "@/Components/UI/Configurator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.main}>
      <Canvas
        gl={{ antialias: false, preserveDrawingBuffer: true }}
        shadows
        camera={{ position: [3, 3, 3] }}
      >
        {/* <color attach="background" args={["#191920"]} /> */}
        {/* <fog attach="fog" args={["#191920", 0, 30]} /> */}
        <hemisphereLight intensity={3} />
        <OrbitControls />
        <Room />
        <Ground />
      </Canvas>
      <Configurator />
    </div>
  );
}
