import React from "react";
import Timer from "./components/Timer";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux"; // 자동으로 state를 복사해 칠드런 컴포넌트에 넣음.
import { LinearGradient } from "expo-linear-gradient";

let store = createStore(reducer);

// console.log(store.getState());

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={["#ff6e7f", "#bfe9ff"]}
        style={{ alignItems: "center" }}
      >
        <Provider store={store}>
          <Timer />
        </Provider>
      </LinearGradient>
    );
  }
}
