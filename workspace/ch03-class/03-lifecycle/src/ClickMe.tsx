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

  state = { count : 2 };
  
  // 1-1
  constructor(props: ClickMeProps){
    console.log('1 Mounting');
    console.log('\t1-1 constructor 호출됨.');
    super(props);
  }

  // 1-2/2-1
  static getDerivedStateFromProps(props:ClickMeProps, state:ClickMeState){
    console.log('\t1-2/2-1 getDerivedStateFromProps 호출됨.');
    console.log('\t\tprops', props);
    console.log('\t\tstate', state);

    if(state.count / props.level > 10){
      return { count : props.level };
    }

    return null;

  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  // 2-2
  shouldComponentUpdate(nextProps:ClickMeProps, nextState:ClickMeState){
    console.log('\t2-2 shouldComponentUpdate 호출됨.');
    console.log('\t\t현재값: ', this.props, this.state);
    console.log('\t\t다음값: ', nextProps, nextState);
    if(nextState.count % 4 === 0){
      return false;
    }else{
      return true;
    }
    

  }

  // 1-3/2-3
  render() {
    console.log('\trender 호출됨.');

    const result = this.state.count * this.props.level;
    return (
      <div>
        { this.state.count } X { this.props.level }: { result }
        <button onClick={ this.increment }>클릭</button>
      </div>
    );
  }


  // 1-4
  componentDidMount(){
    // API 서버로부터 데이터 가져오는 작업은 이곳에서 작성
    console.log('\tcomponentDidMount 호출됨.');
  }

  // 2-4
  getSnapshotBeforeUpdate(prevProps:ClickMeProps, prevState:ClickMeState) {
    console.log('\t2-4 getSnapshotBeforeUpdate 호출됨.');
    console.log('\t\t이전값: ', prevProps, prevState);
    console.log('\t\t현재값: ', this.props, this.state);
    return 'hello';
  }

  // 2-5
  componentDidUpdate(prevProps:ClickMeProps, prevState:ClickMeState, snapshot:string) {
    console.log('\t2-5 componentDidUpdate 호출됨.');
    console.log('\t\t이전값: ', prevProps, prevState);
    console.log('\t\t현재값: ', this.props, this.state);
    console.log('\t\tsnapshot: ', snapshot);
  }
  // 3-1
  componentWillUnmount(): void {
    console.log('\t3-1 componentWillUnmount 호출됨.')
  }
}

export default ClickMe;