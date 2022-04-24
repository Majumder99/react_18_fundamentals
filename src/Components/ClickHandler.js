export const ClickHandler = () => {
  const clickHandler = (e) => {
    console.log(e);
  };
  return (
    <>
      <button onClick={clickHandler}>Click</button>
    </>
  );
};
