import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { RoomJSX } from "./RoomJSX";

const Room = () => {
  const room = useGLTF("./models/room/room-opt.glb");
  console.log(room);
  return (
    <mesh>
      <Suspense>
        <mesh scale={0.01}>
          <RoomJSX />
        </mesh>
        {/* <primitive object={room.scene.scale.set(0.01, 0.01, 0.01)} /> */}
      </Suspense>
    </mesh>
  );
};
export default Room;
