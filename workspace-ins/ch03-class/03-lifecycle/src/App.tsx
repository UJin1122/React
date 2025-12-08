import ClickMe from "@/ClickMe";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
        <ClickMe level={2} />
      </div>
    );
  }
}

export default App;