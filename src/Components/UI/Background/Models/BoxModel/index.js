const BoxModel = () => {
  return (
    <mesh position={[0, 2, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
};
export default BoxModel;
