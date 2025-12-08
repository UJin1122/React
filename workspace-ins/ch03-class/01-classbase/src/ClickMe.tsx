import { Component } from "react";

// Props의 타입 정의
interface ClickMeProps {
  level: number;
}

// state의 타입 정의
interface ClickMeState {
  count: number;
}

// 클래스 컴포넌트를 만드는 방법
// 1. Component를 상속 받는다.
class ClickMe extends Component<ClickMeProps, ClickMeState> {

  // state/setState()는 부모(Compoment)에 미리 정의되어 있음
  // state 변수 하나만 사용 가능
  // 만약, 여러개의 상태를 관리해야 한다면 state를 객체로 만들어야 함
  // state = { count: 0 }; // 상태를 초기화

  // 이벤트 핸들러는 this 바인딩을 위해 화살표 함수로 작성하는게 편함
  // increment = () => {
  //   this.setState({ count: this.state.count + 1 });
  // }

  constructor(props: ClickMeProps){
    super(props);
    // props를 이용해서 state를 초기화 해야할 경우 constructor에서 수행
    this.state = { count: props.level };

    // 이벤트 핸들러를 일반 함수로 작성할 경우 this.props, this.state에 접근하기 위해서 this 바인딩이 필요
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  // 2. render() 메서드를 작성한다.
  render() {
    const result = this.state.count * this.props.level;
    return (
      <div>
        { this.state.count } X { this.props.level }: { result }
        <button onClick={ this.increment }>클릭</button>
      </div>
    );
  }
}

export default ClickMe;