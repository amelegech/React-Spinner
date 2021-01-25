import React from "react";
import "./App.css";
import MySpinner from "./components/MySpinner";
import IsLoading from "./components/IsLoading";
import Linear from './components/Linear';

function App() {
  return (
    <div className="App">
      <h3>
        I asked to explain about spinner in react component how to manage the
        gap or the loading delay to get thedata from server?{" "}
      </h3>
      <h5>Use this powerful command "npm install @material-ui/core" </h5>
      <p>
      Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process. The animation works with CSS, not JavaScript.
        <a href="https://material-ui.com/components/backdrop/">
          Please read more....
        </a>
      </p>
      <hr />
      <MySpinner />
      <hr/>
      <Linear />
      <hr />
      <IsLoading />
      
    </div>
  );
}

export default App;
