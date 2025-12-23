# 7장 전역 상태 관리
* 코드 실행(GitHub Page): <https://febc-15.github.io/react/workspace-ins/index.html#07>

## 목차
- [전역 상태 관리란?](#1-전역-상태-관리란)
  - [1.1 상태 관리](#11-상태-관리)
  - [1.2 전역 상태 관리](#12-전역-상태-관리)
  - [1.3 전역 상태 관리 라이브러리](#13-전역-상태-관리-라이브러리)
  - [1.4 전역 상태 관리 사용 사례](#14-전역-상태-관리-사용-사례)
- [Redux](#2-redux)
  - [2.1 Redux란?](#21-redux란)
  - [2.2 Redux의 특징](#22-redux의-특징)
  - [2.3 Redux 사용 사례](#23-redux-사용-사례)
  - [2.4 Flux 아키텍처](#24-flux-아키텍처)
  - [2.5 Redux 구성 요소](#25-redux-구성-요소)
  - [2.6 Redux 설치](#26-redux-설치)
  - [2.7 Redux DevTools 설치](#27-redux-devtools-설치)
  - [2.8 Redux의 단점](#28-redux의-단점)
  - [2.9 Redux Toolkit](#29-redux-toolkit)
- [Jotai](#3-jotai)
  - [3.1 설치](#31-설치)
  - [3.2 atom](#32-atom)
  - [3.3 derived atom (파생 atom)](#33-derived-atom-파생-atom)
- [Zustand](#4-zustand)
  - [4.1 설치](#41-설치)
  - [4.2 Store](#42-store)
  - [4.3 Store 사용](#43-store-사용)
  - [4.4 성능 최적화를 위해 Store 사용시 고려 사항](#44-성능-최적화를-위해-store-사용시-고려-사항)
- [전역 상태 관리 라이브러리 비교](#5-전역-상태-관리-라이브러리-비교)
  - [5.1 라이브러리별 특징](#51-라이브러리별-특징)
  - [5.2 라이브러리 선택 기준](#52-라이브러리-선택-기준)
- [Context API vs 전역 상태 관리 라이브러리](#6-context-api-vs-전역-상태-관리-라이브러리)
  - [6.1 Context API의 한계](#61-context-api의-한계)
  - [6.2 전역 상태 관리 라이브러리의 장점](#62-전역-상태-관리-라이브러리의-장점)
  - [6.3 Context API를 사용하는 경우](#63-context-api를-사용하는-경우)
  - [6.4 전역 상태 관리 라이브러리를 사용하는 경우](#64-전역-상태-관리-라이브러리를-사용하는-경우)

# 1 전역 상태 관리란?

## 1.1 상태 관리
- 리액트는 `useState`와 `useReducer` 훅을 사용해 컴포넌트 내부의 상태를 관리할 수 있음.
- 상태가 변경되면 해당 컴포넌트가 다시 렌더링되며 화면이 업데이트됨.
- 하지만 `useState`와 `useReducer`는 컴포넌트 내부 상태만 관리하므로, 다른 컴포넌트와 상태를 공유할 수 없음.

## 1.2 전역 상태 관리
- 애플리케이션 전반에 걸쳐 사용되는 데이터를 관리하거나, 여러 컴포넌트가 상태를 공유해야 하고 특정 컴포넌트에서 상태를 변경하면 공유된 모든 컴포넌트가 리렌더링되도록 하는 상태 관리를 전역 상태 관리라고 함.
- 전역 상태 관리를 직접 구현하고 관리하기가 어렵기 때문에 주로 라이브러리를 사용함.

## 1.3 전역 상태 관리 라이브러리
- 대표적인 라이브러리
  - Redux, MobX, Recoil, Zustand, Jotai, Valtio 등.
- 각 라이브러리는 상태 관리 방식, 성능 최적화, 사용 편의성에서 차이를 가짐.

## 1.4 전역 상태 관리 사용 사례
### 인증 상태 관리
- 사용자 로그인 여부와 사용자 정보를 전역 상태로 관리
- 로그인 여부에 따라 UI 렌더링(예: 로그인/로그아웃 버튼, 프로필 이미지)
- API 호출 시 인증 토큰을 전역에서 참조

### 테마 및 환경 설정
- 다크모드, 폰트 크기, 언어와 같은 전역 설정
- 모든 컴포넌트에서 접근 가능해야 하며, 설정 변경 시 전체 컴포넌트의 UI가 업데이트됨

### 쇼핑 카트 관리
- 여러 페이지에서 접근해야 하는 데이터(예: 상품 추가, 삭제)
- 상품의 총 수량과 금액 계산

### 알림 및 메시지 관리
- 앱 전역에서 알림/메시지 관리
- 읽지 않은 메시지의 수를 보여주거나, 실시간 알림 UI 구현

### 멀티스텝 폼 데이터
- 여러 단계로 나뉜 폼 데이터(예: 회원가입, 주문서 작성)를 상태로 관리
- 각 단계의 입력값을 저장하고, 이전 단계로 돌아가도 데이터가 유지되도록 함

# 2. Redux
* 참고: <https://ko.redux.js.org>

## 2.1 Redux란?
* Redux는 JavaScript 애플리케이션의 상태를 관리하기 위한 라이브러리
* 모든 자바스크립트 기반 애플리케이션에서 사용 가능하지만 주로 React와 함께 사용됨
* 컴포넌트 간 상태 공유를 단순화하고, 상태 관리의 예측 가능성을 높이는 데 초점을 맞춤
* Flux 아키텍처를 바탕으로 만들어졌으며, 복잡한 상태 관리를 단순화
* 시간여행 디버깅(상태 변경을 되돌아보는 기능)과 상태 변경 추적 같은 개발 편의 기능 제공

## 2.2 Redux의 특징
- 중앙 집중식 상태 관리: 애플리케이션 전체 상태를 한 곳(`Store`)에서 관리
- 예측 가능성: 상태 변경은 항상 순수 함수(`Reducer`)를 통해 이루어지며, 동일한 입력은 동일한 출력을 보장
- 단방향 데이터 흐름: 데이터는 컴포넌트(이벤트 발생) → 액션(작업 정의) → 리듀서(상태 관리) → 스토어(상태 저장) 순으로 한 방향으로 흐름

## 2.3 Redux 사용 사례
- 대규모 애플리케이션에서 전역 상태 관리가 필요한 경우
- 상태 변경 추적, 디버깅, 테스트가 중요한 프로젝트

## 2.4 Flux 아키텍처
* 웹 애플리케이션을 만들 때 사용하는 설계 패턴
* 데이터가 한 방향으로만 흐르도록 관리해 애플리케이션 구조를 단순화
* React와 함께 사용하면, 데이터 흐름을 명확히 하여 UI 컴포넌트를 더 쉽게 관리할 수 있음

### Flux 구성 요소

<img src="../../images/flux-won2.png" width="800">
[그림 1. Flux 구조] 출처 "원쌤의 리액트 퀵스타트 with 타입스트립트"

* Stores
  - 애플리케이션의 상태와 상태를 변경하는 로직을 관리
  - 상태를 직접 수정하지 않고 항상 새 상태를 만들어야 함 (불변성 유지)

* Views
  - Store에서 제공하는 상태를 UI로 보여줌
  - 사용자의 액션(클릭, 입력 등)을 통해 Action을 실행할 수 있는 환경을 제공함

* ActionCreators
  - 상태를 변경하기 위한 주요 로직(비즈니스 로직)을 처리
  - 처리 결과를 Action으로 만들어 Dispatcher로 전달

* Action
  - Store의 상태를 어떻게 바꿀지에 대한 정보가 담긴 객체
  - Dispatcher를 통해 Store로 전달되어 상태 변경을 유도함
  ```js
  { type: 'countDown', payload: { step: 2 } }
  ```

* Dispatcher
  - 데이터를 전달하는 중심 역할을 하는 하나의 통로
  - Action에서 받은 메시지를 Store로 전달
  - 모든 데이터 흐름이 여기서 시작됨

## 2.5 Redux 구성 요소

<img src="../../images/redux-won.png" width="800">
[그림 2. Redux 구조] 출처 "원쌤의 리액트 퀵스타트 with 타입스크립트"

* Store
  - 애플리케이션 전체 상태를 한 곳에서 관리하는 중앙 저장소
  - Store를 보면 현재 상태와 상태 변경 기록을 알 수 있음
  - Flux와 달리 상태 변경 작업은 Reducer라는 별도 함수로 나눠서 관리해 복잡성을 줄임

* ActionCreators
  - 상태를 변경하기 위해 액션을 만드는 역할
  - 액션을 Store로 전달(dispatch)하면 Store는 이를 Reducer에 넘김
  - Reducer가 새로운 상태를 만들어 반환하면, 이 상태가 Store에 저장됨

* Reducers
  - 상태 변경 로직을 처리하는 순수 함수
  - 기존 상태를 복제한 뒤, Action의 요청에 따라 새로운 상태를 생성해 반환
  - 상태가 변경될 때마다 새로운 상태 객체가 생성되므로, 변경 내역 추적이 쉬워짐

## 2.6 Redux 설치
```sh
npm i redux react-redux
```

## 2.7 Redux DevTools 설치
* 리덕스 디버깅에 유용한 개발 도구
* Chrome: 크롬 웹스토어에서 `Redux DevTools`로 검색 후 설치
  - <https://chromewebstore.google.com/search/Redux%20DevTools>
* 설치하면 크롬 개발자 도구에 Redux 탭이 생김

## 2.8 Redux의 단점
- 초기 설정이 복잡할 수 있음
- 코드량이 많아질 수 있음
- 작은 애플리케이션에서는 불필요하게 복잡할 수 있음

## 2.9 Redux Toolkit
* Redux의 복잡함을 줄이고 사용을 간편하게 하기 위해 제공되는 도구로, 보일러플레이트 코드 감소와 기본 설정 제공
* Redux의 공식 권장 툴킷
* `createSlice`, `configureStore` 등의 유틸리티 함수 제공
* Immer가 내장되어 있어 불변성을 신경 쓰지 않고 상태를 업데이트할 수 있음

### 설치
```sh
npm i @reduxjs/toolkit
```

### 주요 기능
- `createSlice`: 액션과 리듀서를 함께 정의
- `configureStore`: Redux Store 설정을 간소화
- `createAsyncThunk`: 비동기 작업 처리

# 3. Jotai
* Recoil의 아이디어를 계승하여 만들어진 현대적인 상태 관리 라이브러리
* 작은 단위의 상태(atom)를 만들고, 이를 조합해 전체 앱 상태를 구성하는 방식
* 더 가볍고 단순한 구조를 가지며, key가 필요 없고 Provider도 선택적으로만 사용
* 서버사이드 렌더링(SSR) 지원과 작은 번들 크기, 빠른 업데이트 등의 장점을 가짐

## 3.1 설치
```sh
npm i jotai
```

## 3.2 atom
* atom은 상태를 정의하는 데 사용
* Jotai는 여러 종류의 상태를 관리할 수 있는데 atom은 상태의 일부를 나타냄(로그인 상태, 다크모드 여부 상태 등 상태값 하나)
* atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독하게 됨
* atom이 바뀌면(상태가 바뀌면) 그 atom을 구독하는 모든 컴포넌트가 리렌더링됨

### 3.2.1 atom을 정의하는 방법
* atom 함수 사용

#### 기본 atom (Read-Write atom)
* 초기값만 전달하면 자동으로 getter/setter가 생성됨
* 가장 일반적으로 사용하는 방법
* atoms.ts
  ```ts
  import { atom } from "jotai";
  export const countAtom = atom(5);
  export const nameAtom = atom("홍길동");
  export const isLoggedInAtom = atom(false);
  ```

#### Read-Only atom (파생 atom)
* getter 함수만 제공하면 읽기 전용
* 다른 atom의 값을 기반으로 계산된 값을 제공할 때 사용
* atoms.ts
  ```ts
  import { atom } from "jotai";
  import { countAtom } from "@/jotai/atoms";
  
  // 파생 atom - 계산된 값 제공
  export const doubleCountAtom = atom((get) => get(countAtom) * 2);
  export const isEvenAtom = atom((get) => get(countAtom) % 2 === 0);
  
  // 내부 atom 캡슐화 - 직접 수정 방지
  const _internalCountAtom = atom(0);
  export const readOnlyCountAtom = atom((get) => get(_internalCountAtom));
  ```

#### Write-Only atom
* getter 함수를 null로 설정하고 setter 함수만 제공
* 값 변경만 필요하고 읽을 필요가 없을 때 사용 (성능 최적화)
* atoms.ts
  ```ts
  import { atom } from "jotai";
  import { countAtom } from "@/jotai/atoms";
  
  export const countUpAtom = atom(
    null, // getter 함수 - null일 경우 "읽기 불가능"을 의미
    (get, set, step: number) => { // setter 함수
      const count = get(countAtom);
      set(countAtom, count + step);
    }
  );
  ```

#### Read-Write atom (커스텀)
* getter와 setter 함수를 모두 직접 정의
* 유효성 검사나 복잡한 로직이 필요할 때 사용
* atoms.ts
  ```ts
  import { atom } from "jotai";
  
  const _countAtom = atom(0);
  
  export const countAtom = atom(
    (get) => get(_countAtom), // getter 함수
    (get, set, value: number) => { // setter 함수
      if (value >= 0 && value <= 100) { // 유효성 검사
        set(_countAtom, value);
      }
    }
  );
  ```

### 3.2.2 atom에서 읽기(getter)
* atom에서 읽기 작업을 하는 컴포넌트는 자동으로 atom을 구독하게 되고 구독중인 atom에 변경이 발생하면 리렌더링됨
* 읽기 작업만 필요할 때는 useAtomValue 훅 사용
* Left3.tsx
  ```tsx
  import { countAtom } from '@/jotai/atoms';
  import { useAtomValue } from 'jotai';

  function Left3() {
    const count = useAtomValue(countAtom);
    return (
      <div>
        <h3>Left3</h3>
        <span>{ count }</span>
      </div>
    );
  }

  export default Left3;
  ```

### 3.2.3 atom을 변경(setter)
* 변경 작업만 필요할 때는 useSetAtom 훅 사용
* Right3.tsx
  ```tsx
  import { useSetAtom } from 'jotai';
  import { countAtom } from '@/jotai/atoms';

  function Right3() {
    const setCount = useSetAtom(countAtom);  
    const countUp = (step: number) => {
      setCount((count) => count + step);
    };

    return (
      <div>
        <h3>Right3</h3>
        <button onClick={ () => countUp(1) }>+1</button>
      </div>
    );
  }

  export default Right3;
  ```

### 3.2.4 atom을 읽고 쓰기
* 읽고 쓰는 작업이 다 필요하면 useAtom 훅 사용
* Right3.tsx
  ```tsx
  import { useAtom } from 'jotai';
  import { countAtom } from '@/jotai/atoms';

  function Right3() {
    const [count, setCount] = useAtom(countAtom);
    const countUp = function(step: number){
      setCount(count + step);
    };

    return (
      <div>
        <h1>Right3 : { count }</h1>
        <button onClick={ () => countUp(1) }>+1</button>
      </div>
    );
  }

  export default Right3;
  ```

## 3.3 derived atom (파생 atom)
* atom이나 다른 파생 atom을 통해서 읽은 상태값을 기반으로 가공된 값을 반환
* 컴포넌트가 atom을 읽을 경우는 현재 상태값 그대로 읽게 되지만 파생 atom을 통해서 읽을 경우에는 현재 상태값을 기반으로 파생된 다른 값으로 사용 가능
* 파생 atom은 기본 atom 값이 변하지 않으면 언제나 같은 값을 반환하는 순수 함수로 만들어야 함

### 3.3.1 파생 atom을 정의하는 방법
* atom 함수에 getter 함수를 전달하여 파생 atom 생성
* derived.ts
  ```ts
  import { atom } from "jotai";
  import { countAtom } from "@/jotai/atoms";

  export const doubleCountAtom = atom((get) => get(countAtom) * 2);
  export const dualDoubleCountAtom = atom((get) => get(doubleCountAtom) * 2);
  ```

### 3.3.2 파생 atom에서 읽기(getter)
* 파생 atom에서 읽기 작업을 하는 컴포넌트는 자동으로 파생 atom이 사용하는 기본 atom을 구독하게 되고 구독중인 atom에 변경이 발생하면 리렌더링됨
* 파생 atom은 주로 읽기 전용으로 사용되며 useAtomValue 훅 사용
* Left2.tsx
  ```tsx
  import Left3 from '@/components/Left3';
  import { useAtomValue } from 'jotai';
  import { doubleCountAtom } from '@/jotai/derived';

  function Left2() {
    const doubleCount = useAtomValue<number>(doubleCountAtom);

    return (
      <div>
        <h2>Left2</h2>
        <span>{ doubleCount }</span>
        <Left3 />
      </div>
    );
  }

  export default Left2;
  ```

#### Jotai 참고: <https://jotai.org>

# 4. Zustand  
* Zustand는 독일어로 "상태"를 의미하며, React를 위한 간단하고 가벼운 상태 관리 라이브러리
* Context API나 Provider 없이 훅 기반 API를 통해 상태를 간편하게 관리 가능
* 직관적인 설계와 빠른 성능으로 소규모 애플리케이션이나 특정 상태 관리에 적합
* Flux 패턴이나 복잡한 설정 없이 사용 가능

## 4.1 설치
```sh
npm i zustand
```

## 4.2 Store
* 상태와 상태를 관리하는 함수로 구성되며 커스텀 훅으로 작성
* `create` 함수로 생성하며, `create` 함수에 전달하는 함수에서 상태 정의와 상태 관리 로직을 구현한 객체를 반환
* `create`에 전달하는 함수의 매개변수
  - set
    + `set(newState)`: 상태를 newState로 업데이트
    + `set(state => newState)`: 이전 상태를 인자로 받고 newState를 반환하면 반환된 상태로 업데이트됨
  - get: 이전 상태를 반환하는 함수

### 사용 예시
* counter.ts
  ```ts
  import { create } from "zustand";

  interface CounterState {
    count: number;
    countDown: (step: number) => void;
    countUp: (step: number) => void;
    reset: () => void;
  }

  const useCounterStore = create<CounterState>((set, get) => ({
    count: 10,
    countDown: (step) => set({ count: get().count - step }),
    countUp: (step) => set((state) => ({ count: state.count + step })),
    reset: () => set({ count: 0 }),
  }));

  export default useCounterStore;
  ```

## 4.3 Store 사용
* 커스텀 훅 사용과 동일하게 사용
* Store를 사용하는 컴포넌트는 자동으로 Store를 구독하게 되며 Store의 상태가 변경되면 리렌더링됨

* Left3.tsx
  ```tsx
  import useCounterStore from '@/zustand/counter';

  function Left3() {
    const { count } = useCounterStore();
    return (
      <div>
        <h3>Left3</h3>
        <span>{ count }</span>
      </div>
    );
  }

  export default Left3;
  ```

* Right3.tsx
  ```tsx
  import useCounterStore from '@/zustand/counter';

  function Right3() {
    const { countUp, countDown, countReset } = useCounterStore();
    return (
      <div>
        <h3>Right3</h3>
        <button onClick={ () => countDown(1) }>-1</button>
        <button onClick={ () => countReset() }>0</button>
        <button onClick={ () => countUp(1) }>+1</button>
      </div>
    );
  }

  export default Right3;
  ```

## 4.4 성능 최적화를 위해 Store 사용시 고려 사항

### 4.4.1 선택적 구독 (Selective Subscription)
* Store에서 필요한 상태만 구독하여 불필요한 리렌더링 방지
* 객체 구조분해를 사용하면 모든 상태 변경에 리렌더링이 발생하므로 필요한 상태만 선택해서 사용

#### 비효율적인 방법 (모든 상태 구독)
```tsx
function Right3() {
  // count를 사용하지 않더라도 자동으로 구독이 되므로 count 변경시 Right3가 리렌더링됨
  const { countUp } = useCounterStore();
  
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => countUp(1)}>+1</button>
    </div>
  );
}
```

#### 효율적인 방법 (필요한 상태만 구독)
```tsx
function Right3() {
  // count가 변경되어도 countUp 함수만 구독하므로 리렌더링 안됨
  const countUp = useCounterStore((state) => state.countUp);
  
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => countUp(1)}>+1</button>
    </div>
  );
}
```

### 4.4.2 Store 분할 (Store Splitting)
* Zustand는 선택적 구독을 지원하므로 하나의 큰 스토어를 사용해도 구독한 속성에 대해서만 변경이 발생했을 때 리렌더링이 발생하므로 하나의 큰 Store에서 여러 상태를 관리해도 성능상 큰 차이는 없음
* 코드 조직화와 유지보수 측면에서 관련 없는 상태들은 별도 Store로 분할하여 코드 구조 개선
* Store 분할의 장점
  - 코드 조직화: 관련된 상태를 논리적으로 그룹화
  - 타입 안정성: 작은 스토어가 타입 추론을 더 쉽게 만듦
  - 모듈화: 필요한 스토어만 import 가능
  - 유지보수성: 작은 스토어가 더 관리하기 쉬움
  - 테스트 용이성: 작은 단위로 테스트 가능

```tsx
// 사용자 정보 Store
const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

// 카운터 Store
const useCounterStore = create((set) => ({
  count: 0,
  countUp: () => set((state) => ({ count: state.count + 1 })),
}));
```

#### Zustand 참고: <https://zustand.docs.pmnd.rs>

# 5. 전역 상태 관리 라이브러리 비교

## 5.1 라이브러리별 특징

| 라이브러리 | 번들 크기 | 학습 곡선 | 사용 편의성 | 적합한 프로젝트 |
|-----------|---------|----------|------------|---------------|
| Redux | 큼 | 가파름 | 복잡 | 대규모, 복잡한 상태 관리 |
| Redux Toolkit | 큼 (Redux + 추가 유틸리티) | 중간 | 중간 | Redux를 사용하되 간소화하고 싶을 때 |
| Jotai | 작음 | 낮음 | 높음 | 작은 단위의 상태 관리, 원자적 접근 |
| Zustand | 매우 작음 | 낮음 | 매우 높음 | 소규모~중규모, 간단한 상태 관리 |
| Context API | 없음 | 낮음 | 중간 | 간단한 전역 상태, 테마/인증 등 |

## 5.2 라이브러리 선택 기준

### Redux / Redux Toolkit
- 대규모 애플리케이션
- 복잡한 상태 관리 로직
- 상태 변경 추적과 디버깅이 중요한 경우
- 팀이 Redux에 익숙한 경우

### Jotai
- 작은 단위의 상태를 독립적으로 관리하고 싶을 때
- 파생 상태(derived state)를 많이 사용할 때
- 번들 크기를 최소화하고 싶을 때
- 팀이 Recoil에 익숙한 경우. 더 가벼운 대안이 필요할 때

### Zustand
- 간단하고 직관적인 API를 원할 때
- Provider 설정 없이 사용하고 싶을 때
- 소규모~중규모 애플리케이션
- 빠르게 프로토타입을 만들고 싶을 때

### Context API
- 간단한 전역 상태(테마, 인증 등)
- 외부 라이브러리 의존성을 피하고 싶을 때
- 상태가 자주 변경되지 않는 경우

# 6. Context API vs 전역 상태 관리 라이브러리

## 6.1 Context API의 한계
- Context 값이 변경되면 해당 Context를 구독하는 모든 컴포넌트가 리렌더링됨
- 불필요한 리렌더링이 발생하지 않도록 성능 최적화를 위해서는 Context를 더 작은 단위로 분리해야 함
- 복잡한 상태 관리 로직을 구현하기 어려움

## 6.2 전역 상태 관리 라이브러리의 장점
- 선택적 구독으로 불필요한 리렌더링을 방지함
- 상태 관리 로직을 체계적으로 구조화 가능함
- 개발자 도구 지원으로 디버깅이 용이함
- 미들웨어, 비동기 처리 등 고급 기능 제공

## 6.3 Context API를 사용하는 경우
- 간단한 전역 상태
  - 예: 테마(light/dark), 사용자 인증 정보(로그인 여부, 사용자 ID), 언어 설정(ko/en)
  - 상태 구조가 단순하고 값이 자주 변경되지 않음
- 상태가 자주 변경되지 않는 경우
  - 예: 사용자 프로필 정보는 로그인 시 한 번만 설정되고 이후 변경이 드묾
  - 테마 변경은 사용자가 명시적으로 버튼을 클릭할 때만 발생
- 외부 라이브러리 의존성을 최소화하고 싶을 때
  - 예: 작은 프로젝트에서 추가 패키지 설치를 피하고 싶을 때
  - 번들 크기를 최소화해야 하는 경우

## 6.4 전역 상태 관리 라이브러리를 사용하는 경우
- 복잡한 상태 관리 로직이 필요한 경우
  - 예: 쇼핑 카트에서 상품 추가/삭제/수량 변경, 할인 쿠폰 적용, 배송비 계산 등 여러 상태가 서로 연관됨
  - 예: 대시보드에서 여러 필터 조건(날짜, 카테고리, 상태)에 따라 데이터를 필터링하고 정렬하는 복잡한 로직
- 성능 최적화가 중요한 경우
  - 예: 대규모 리스트에서 특정 항목만 업데이트해야 하는데 Context API를 사용하면 전체 리스트가 리렌더링됨
  - 예: 실시간 데이터 업데이트가 빈번한 경우(예: 주식 차트, 채팅 앱)
- 상태 변경 추적과 디버깅이 필요한 경우
  - 예: 사용자가 특정 액션을 취했을 때 상태가 어떻게 변경되었는지 추적해야 함
  - 예: Redux DevTools처럼 상태 변경 이력을 시각적으로 확인하고 되돌려야 하는 경우

