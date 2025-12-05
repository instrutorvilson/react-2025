function Car(props:any) {
  const {placa} = props
  return (
    <h2>Hi, I am a Car with board: {placa}</h2>
  );
}
export default Car