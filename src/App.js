import "./App.css";
import UseFetchHook from "./customhook/UseFetchHook";
import UseCallBackHook from "./useCallback/UseCallBackHook";
import UseContextHook from "./useContext/UseContextHook";
import UseEffectHook from "./useEffecthook/UseEffectHook";
import UseImperativeHook from "./useimperativehook/UseImperativeHook";
import UseLayoutHook from "./useLayout/UseLayoutHook";
import UseMemoHook from "./usememo/UseMemoHook";
import UseReducerHooks from "./usereducer/UseReducerHooks";
import UseRefHook from "./useRef/UseRefHook";
import UseStateHook from "./usestatehook/UseState";
import UseStateChange from "./usestatehook/UseStateChange";

function App() {
  const { data, loading, error } = UseFetchHook(
    "https://jsonplaceholder.typicode.com/comments"
  );
  console.log(data);
  if (error) return <p>error!</p>;
  if (loading) return <p>loading!</p>;
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Hooks</h1>
      {/* <ul>
        {data?.map((item) => {
          return <li>{item.email}</li>;
        })}
      </ul> */}
      <UseStateHook />
      <UseStateChange />
      <UseReducerHooks />
      <UseEffectHook />
      <UseRefHook />
      <UseLayoutHook />
      <UseImperativeHook />
      <UseContextHook />
      <UseMemoHook />
      <UseCallBackHook />
    </div>
  );
}

export default App;
