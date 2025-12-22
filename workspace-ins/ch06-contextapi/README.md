# 6장 Context API
* 코드 실행(GitHub Page): <https://febc-15.github.io/react/workspace-ins/index.html#06>

## 목차
- [1. Context API란?](#1-context-api란)
  - [1.2 상태 끌어올리기](#12-상태-끌어올리기)
  - [1.3 Prop Drilling](#13-prop-drilling)
- [2. 사용 방법](#2-사용-방법)
  - [2.1 Context 객체 생성](#21-context-객체-생성)
  - [2.2 Provider 컴포넌트를 작성해서 export](#22-provider-컴포넌트를-작성해서-export)
  - [2.3 자식 컴포넌트에 Context 제공](#23-자식-컴포넌트에-context-제공)
  - [2.4 자식 컴포넌트에서 Context 사용](#24-자식-컴포넌트에서-context-사용)
- [3. Context API 사용 사례](#3-context-api-사용-사례)
- [4. Context API의 단점 및 주의사항](#4-context-api의-단점-및-주의사항)
  - [4.1 Context API의 한계](#41-context-api의-한계)
  - [4.2 Context 남용 주의](#42-context-남용-주의)

# 1. Context API란?
## Props의 단점
* 컴포넌트 트리에서 부모 컴포넌트의 상태나 데이터를 자식 컴포넌트에 전달할 때 보통 props를 사용하지만, 컴포넌트 트리가 깊어질수록 불편해짐.
  - 트리가 깊어지면 상위 컴포넌트의 데이터를 하위 컴포넌트로 전달하기 위해 많은 중간 컴포넌트를 거쳐야 하므로 코드가 복잡해짐.
  - props 이름이 변경되거나 새로운 props가 추가되면 모든 중간 컴포넌트를 수정해야 하는 번거로움이 있음.
  - 데이터 변경 시 중간 컴포넌트들이 불필요하게 리렌더링되는 문제가 발생.
* 동일한 데이터를 여러 자식 컴포넌트에 전달할 경우 번거롭고 불편해짐.

## Context API의 장점
* Context API는 컴포넌트 트리에서 데이터를 효율적으로 전달하기 위해 React에서 기본으로 제공하는 API
* Context API를 사용하면 매번 자식 컴포넌트에 props를 전달하지 않고, 필요한 데이터를 직접 전달할 수 있어 불필요한 리렌더링과 코드 복잡성을 줄일 수 있음.
* Context API를 이용해서 하위 컴포넌트에 상태와 이를 수정하는 함수를 전달하면 간단한 상태 관리 도구로 사용할 수 있음.
* 다만 Context API 자체적으로 상태를 관리하거나 복잡한 상태 변경 로직을 처리할 수 있는 기능은 없으므로, 복잡한 상태 관리가 필요하다면 글로벌 상태 관리 라이브러리(Redux, Zustand 등)를 사용하는 것이 더 편리함.
* 참고: https://ko.react.dev/learn/passing-data-deeply-with-context

## 1.2 상태 끌어올리기
* 여러 컴포넌트가 상태를 공유해야 한다면 공통의 부모 컴포넌트에서 상태를 관리해야 함.


<img src="https://github.com/FEBC-15/react/blob/main/images/context-lifting.webp">
[그림 1. 상태 끌어올리기]

<img src="https://github.com/FEBC-15/react/blob/main/images/context-lifting2.webp">
[그림 2. Context API]

## 1.3 Prop Drilling
* 상위 컴포넌트의 데이터(state나 함수)를 하위 컴포넌트로 전달하기 위해 중간에 있는 여러 컴포넌트들을 거쳐서 props로 계속 전달하는 작업

<img src="https://github.com/FEBC-15/react/blob/main/images/context-propdrilling.webp">
[그림 3. prop drilling]

<img src="https://github.com/FEBC-15/react/blob/main/images/context-propdrilling2.webp">
[그림 4. Context API]

# 2. 사용 방법
## 2.1 Context 객체 생성
* `React.createContext()` 함수로 Context 객체 생성
* `createContext()`의 인자로 전달하는 값은 기본값(default value)으로, 다음과 같은 역할을 함
  - Provider가 없을 때 사용: Context를 사용하는 컴포넌트가 Provider로 감싸지 않은 경우, 이 기본값이 반환됨
  - 타입 추론: TypeScript를 사용하는 경우, 이 값의 타입을 기반으로 Context의 타입이 추론됨
  - 구조 정의: Context에서 제공할 데이터의 구조를 명시적으로 정의
* 기본값은 실제 Provider에서 제공하는 값과 동일한 구조를 가져야 함
  - 예: `{ count: 0, countUp: () => {}, countDown: () => {}, reset: () => {} }`
  - 함수의 경우 빈 함수(`() => {}`)를 넣어도 되지만, 실제 Provider에서는 구현된 함수를 제공해야 함

## 2.2 Provider 컴포넌트를 작성해서 export
* 상태와 상태 변경 함수를 관리할 컴포넌트 작성
* 자식 컴포넌트를 렌더링하면서 value prop으로 Context를 전달
  ```jsx
  import React, { createContext, useState } from "react";

  interface CounterContextType {
    count: number;
    countDown: (step: number) => void;
    reset: () => void;
    countUp: (step: number) => void;
  }

  // 1. Context 객체 생성
  const CounterContext = createContext<CounterContextType>({
    count: 0,
    countDown: () => {},
    reset: () => {},
    countUp: () => {},
  });

  // 2. Provider 컴포넌트를 작성해서 export
  export function CounterProvider({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0);

    const countDown = (step: number) => {
      setCount(count - step);
    };
    const reset = () => {
      setCount(0);
    };
    const countUp = (step: number) => {
      setCount(count + step);
    };

    return (
      <CounterContext value={ { count, countDown, reset, countUp } }>
        { children }
      </CounterContext>
    );
  }

  export default CounterContext;
  ```

## 2.3 자식 컴포넌트에 Context 제공
* Context를 사용할 컴포넌트들의 최상위 부모 컴포넌트에서 Provider로 감싸서 Context 값을 제공
* Provider의 `value` prop에 전달한 값이 하위 모든 컴포넌트에서 접근 가능해짐
  ```jsx
  import { CounterProvider } from '@contexts/CounterContext';
  ```
  ```jsx
  <CounterProvider>
    <Left1 />
    <Right1 />
  </CounterProvider>
  ```

## 2.4 자식 컴포넌트에서 Context 사용

### 2.4.1 useContext 훅 사용 (기존 방식)
* `React.useContext` 훅을 이용해 Context 값을 가져와서 사용
* Provider가 없으면 `createContext()`에서 설정한 기본값이 반환됨
  ```jsx
  import CounterContext from '@contexts/CounterContext';
  import { useContext } from 'react';

  function SomeComponent() {
    const { count, countUp, countDown, reset } = useContext(CounterContext);
    
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => countUp(1)}>+1</button>
        <button onClick={() => countDown(1)}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
  ```

### 2.4.2 use 훅 사용 (React 19 신규 기능)
* 참고: [리액트 19 새로운 훅들 - use](../ch04-hooks#31-use)
* React 19에서 새롭게 추가된 `use` 훅을 사용하여 Context를 더 유연하게 사용할 수 있음
* `useContext`와 달리 `use` 훅은 조건부로 호출할 수 있어서 더 유연한 사용이 가능
* 단, 조건부로 사용할 경우 옵셔널 체이닝(`?.`)을 사용하여 안전하게 접근해야 함
  ```tsx
  import Left3 from '@/components/Left3';

  function Left2() {
    return (
      <div>
        <h2>Left2</h2>
        <Left3 />
        <Left3 showCounter={false} />
      </div>
    );
  }

  export default Left2;
  ```

  ```jsx
  import { use } from 'react';
  import CounterContext from '@/contexts/CounterContext';

  function Left3({ showCounter = true }) {
    let counterContext = null;
    if (showCounter) {
      counterContext = use(CounterContext);
    }
    return (
      <div>
        <h3>Left3</h3>
        <span>{counterContext?.count}</span>
      </div>
    );
  }

  export default Left3;
  ```

# 3. Context API 사용 사례
## 테마 지정
* 다크 모드, 라이트 모드 등의 테마를 사용자가 수정할 수 있게 제공할 경우, 컴포넌트 트리 상단에서 Context를 제공하고 선택한 테마를 하위 컴포넌트에서 사용

## 로그인 상태 관리
* 사용자의 로그인 상태(로그인/비로그인) 여부를 Context로 제공하고 하위 컴포넌트에서 사용

## 전역 상태 관리
* 여러 컴포넌트가 공통으로 관리해야 하는 상태를 Context로 제공하고, 하위 컴포넌트에서 상태를 수정하면 Context를 구독하는 모든 컴포넌트가 리렌더링되므로 수정된 상태가 즉각 반영됨

# 4. Context API의 단점 및 주의사항

## 4.1 Context API의 한계
* useContext()를 사용하는 컴포넌트는 재활용이 어려울 수 있음
  - Context를 제공하는 Provider에 의존하게 되므로 Provider를 벗어난 곳에서는 사용할 수 없음
* 하나의 Context에는 하나의 상태만 저장할 수 있음
  - 여러 상태를 관리하기 위해서 객체를 상태로 지정할 수 있지만, 객체의 속성 하나만 변경되어도 구독하는 모든 컴포넌트가 리렌더링됨
  - Context를 여러 개 만들어서 각각의 Context에 상태를 분리할 수는 있지만, 상태가 복잡하고 규모가 큰 경우에 Context가 중첩되면 관리가 어려워짐
* Provider의 `value` prop이 변경될 때마다 해당 Context를 구독하는 모든 컴포넌트가 리렌더링됨
  - 불필요한 리렌더링을 방지하려면 `useMemo`를 사용하여 value 객체를 메모이제이션하는 것이 좋음
* 전역 상태 관리를 위한 간단한 도구로만 사용
  - 복잡한 대규모 상태 관리에 적합하지 않음

## 4.2 Context 남용 주의
### Props vs Context 비교
* Props 전달의 장점
  - 데이터 흐름이 명확하고 추적하기 쉬움
  - 컴포넌트 재사용성이 높음
  - 디버깅이 용이함
  - 타입 안정성 보장

* Context 사용의 단점
  - 데이터 흐름 파악이 어려움
  - 컴포넌트가 Context에 강하게 결합됨
  - 테스트하기 어려워짐

### Context 사용 기준
```jsx
// 피해야 할 경우 - props 전달이 2-3단계 정도면 props 사용
function App() {
  const [user, setUser] = useState(null);
  return <Header user={user} />; // 간단한 props 전달
}

// Context가 적합한 경우 - 5단계 이상 깊은 전달
function App() {
  return (
    <UserProvider>
      <Layout>
        <Content>
          <Article>
            <Comments>
              <Comment /> {/* 여기서 user 정보 필요 */}
            </Comments>
          </Article>
        </Content>
      </Layout>
    </UserProvider>
  );
}
```

