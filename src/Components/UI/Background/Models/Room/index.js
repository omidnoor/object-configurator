import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Room = () => {
  const room = useGLTF("./models/room/room-opt.glb");
  console.log(room);
  return (
    <mesh>
      <Suspense>
        <primitive object={room.scene.scale.set(0.01, 0.01, 0.01)} />
      </Suspense>
    </mesh>
  );
};
export default Room;
