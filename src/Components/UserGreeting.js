export const UserGreeting = () => {
  const isLoggedIn = true;
  //   return <>{isLoggedIn ? <h1>Welcome Sourav</h1> : <h1>Welcome Guest</h1>}</>;
  return (
    <>
      <h1>Welcome {isLoggedIn && "Sourav"}</h1>
    </>
  );
};
