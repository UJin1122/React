import ClickMe from "@/ClickMe";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>01 클래스 컴포넌트</h1>
        <ClickMe level={2} />
        <ClickMe level={3} />
      </div>
    );
  }
}

export default App;