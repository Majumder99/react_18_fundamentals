export const NameList = () => {
  const names = ["Bruce", "Clark", "Diana"];
  return (
    <>
      {names.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
    </>
  );
};
