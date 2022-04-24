import "./App.css";
import Greet from "./Components/Greet";
import { Message } from "./Components/Message";
import { ClickHandler } from "./Components/ClickHandler";
import { ParentComponent } from "./Components/ParentComponent";
import { UserGreeting } from "./Components/UserGreeting";
import { NameList } from "./Components/NameList";
import { StyleSheet } from "./Components/StyleSheet";
import { Inline } from "./Components/Inline";
import "./AppStyles.css";
import styles from "./AppStyles.module.css";
import { Form } from "./Components/Form";
import { PostList } from "./Components/PostList";
import { PostForm } from "./Components/PostForm";
import NAMES from "./Components/data.json";
import { useState, useTransition } from "react";
function App() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, setTransition] = useTransition();
  const filteredNames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });
  const setHandler = (e) => {
    setInputValue(e.target.value);
    setTransition(() => setQuery(e.target.value));
  };
  return (
    <div className="App">
      {/* <Greet name="bruce" heroName="The Batman" />
      <Greet name="clark" heroName="Superman">
        <button>Click Me</button>
      </Greet>
      <Greet name="diana" heroName="Wonder Women">
        <p>This is sourav majumder</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet /> */}
      {/* <Inline />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form /> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      <input type="text" value={inputValue} onChange={setHandler} />
      {isPending && <p>Updating List... </p>}
      {filteredNames.map((item) => {
        return (
          <>
            <p key={item.id}>
              {item.first_name} {item.last_name}
            </p>{" "}
          </>
        );
      })}
    </div>
  );
}

export default App;
