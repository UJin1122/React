import { Component } from "react";

// Props의 타입 정의
interface ClickMeProps {
  level: number;
}

// state의 타입 정의
interface ClickMeState {
  count: number;
}

class ClickMe extends Component<ClickMeProps, ClickMeState> {

  state = { count: 0 };

  // 1-1
  constructor(props: ClickMeProps){
    console.log('1 Mounting');
    console.log('\t1-1 constructor 호출됨.');
    super(props);
  }

  // 1-2
  static getDerivedStateFromProps(props:ClickMeProps, state: ClickMeState){
    console.log('\t1-2 getDerivedStateFromProps 호출됨.');
    console.log('\t\tprops', props);
    console.log('\t\tstate', state);

    
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

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