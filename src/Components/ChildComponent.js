export const ChildComponent = (props) => {
  return (
    <>
      <button onClick={() => props.greetHandler("Child")}>Greet Parent</button>
    </>
  );
};
