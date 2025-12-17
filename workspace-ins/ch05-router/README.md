# 5장 리액트 라우터
* 코드 실행(GitHub Page): <https://febc-15.github.io/react/workspace-ins/index.html#05>

# 1. 클라이언트 측 라우팅이란?

## 1.1 전통적인 웹의 페이지 이동
### 1.1.1 최초 웹 서버 접속
1. 브라우저가 웹 서버에 HTML 문서를 요청
2. 웹 서버는 브라우저의 요청을 분석하고 필요한 작업을 수행 한 후 완성된 HTML 파일을 응답
3. 브라우저는 웹 서버로부터 받은 HTML 코드를 파싱
4. HTML 파싱 중 추가 리소스(css, js, 이미지 등)가 필요하면 웹 서버에 추가로 요청해서 완성된 화면을 렌더링

### 1.1.2 페이지 이동
5. 사용자가 HTML 요소 내의 링크를 클릭하면 현재 화면을 비운 후 1~4번 까지의 작업이 다시 수행되면서 새로운 화면으로 이동(새로고침이 발생) 
    - 브라우저의 주소창에는 새로운 URL이 표시되고
    - 이전 URL은 브라우저의 히스토리에 쌓이며
    - 이 히스토리 정보를 이용해서 이전/다음 페이지 이동이 가능(브라우저에서 기본으로 제공됨)

## 1.2 리액트(SPA)의 페이지 이동
### 1.2.1 최초 웹 서버 접속
1. 브라우저가 웹 서버에 HTML 문서를 요청
2. 웹 서버는 빈 초기 페이지를 즉시 응답(index.html)
3. 브라우저는 웹 서버로부터 받은 HTML 코드를 파싱
4. HTML 파싱 중 추가 리소스(css, js, 이미지 등)가 필요하면 웹 서버에 추가로 요청해서 자바스크립트를 실행 하고 자바스크립트에 의해 완성된 화면을 렌더링

### 1.2.2 페이지 이동
5. 사용자가 HTML 요소 내의 링크를 클릭하면 4번에서 다운로드 받은 자바스크립트를 이용해 새로운 컴포넌트를 렌더링
    - 최초에 다운로드 받은 자바스크립트 파일에 페이지 렌더링에 필요한 모든 컴포넌트가 포함되어 있음
    - 최초 웹 서버에 접속한 후 필요한 모든 파일을 다운로드 했기 때문에 더이상 웹 서버에 페이지 요청을 보내지 않음
    - 브라우저의 주소창에 새로운 URL을 표시하고 이전 URL은 브라우저의 히스토리에 쌓이도록 자바스크립트로 구현해야 함(클라이언트 라우팅)

# 2. 리액트 라우터란?
* 참고: https://reactrouter.com/home
* 리액트 기반의 강력한 라우팅 라이브러리
* 화면에 렌더링하는 컴포넌트와 URL 경로를 동기화 하면서 새로운 화면과 흐름을 애플리케이션에 추가할 수 있는 클라이언트 라우팅 기능 제공
* React Router는 React의 공식 라우터가 아닌 서드파티 라이브러리임
  - React는 UI 라이브러리이지 프레임워크가 아니므로 공식 라우터를 제공하지 않음
  - React의 철학은 개발자에게 선택의 자유를 제공하는 것이며, 다양한 라우팅 요구사항을 가진 프로젝트에 맞는 라이브러리를 선택할 수 있도록 함
  - 커뮤니티가 다양한 라우팅 솔루션을 개발할 수 있도록 유연성을 제공

## 2.1 리액트 라우터 모드
* React Router는 세 가지 모드로 사용할 수 있음
  - Declarative Mode (선언적 방식): 기본 라우팅 기능 제공 (`<BrowserRouter>`, `<Routes>`, `<Route>` 사용)
  - Data Mode: 데이터 로딩 및 액션 기능 추가 (`createBrowserRouter`, `loader`, `action` 사용)
  - Framework Mode: 파일 시스템 기반 라우팅 및 타입 안전성 제공
* 이 문서는 Data Mode를 다룸
  - Data Mode는 서버 사이드 렌더링(SSR), 데이터 로딩, 폼 액션 처리 등의 개념을 다루며, 이는 추후 학습할 Next.js의 핵심 기능들과 유사함
  - Next.js는 파일 시스템 기반 라우팅과 서버 컴포넌트를 제공하지만, Data Mode에서 학습하는 `loader`와 `action`의 개념은 Next.js의 Server Actions 및 Data Fetching 패턴과 연결됨
  - Data Mode를 통해 라우팅과 데이터 페칭의 관계, 서버와 클라이언트 간의 상호작용을 이해하면 Next.js 학습에 도움이 됨

## 2.2 패키지 설치
```sh
npm i react-router
```

# 3. 리액트 라우터가 제공하는 라우터

## 3.1 createBrowserRouter
- History API를 사용해 URL과 UI를 동기화
- 브라우저의 history 스택 관리로 이전/다음 페이지 이동 가능
- 모든 URL 요청에 대해 초기페이지(index.html)를 응답하도록 서버 구현 필요
- 일반 웹 애플리케이션에서 사용하기 적합

### 사용 예시
* routes.tsx
  ```tsx
  import { createBrowserRouter } from "react-router";
  import Home from "@pages/Home";
  import Page1 from "@pages/Page1";
  import Page2 from "@pages/Page2";

  const router = createBrowserRouter([
    { path: '/home', element: <Home /> },
    { path: '/page1', element: <Page1 /> }, 
    { path: '/page2', element: <Page2 /> },
  ]);

  export default router;
  ```

* App.tsx
  ```tsx
  import { RouterProvider } from "react-router";
  import router from "@/routes";

  function App() {
    return (
      <>
        <RouterProvider router={ router } />
      </>
    );
  }

  export default App;
  ```

## 3.2 createHashRouter
- URL에 해시(#)를 추가해서 라우팅 하며 서버에 요청하는 URL은 항상 초기페이지(index.html)가 됨
- 모든 URL 요청에 대해 초기페이지(index.html)를 응답할 수 없는 환경에서 사용
- createHashRouter를 사용하면 URL이 `http://example.com/#/home` 형태로 표시됨

### 사용 예시
* routes-hash.tsx
  ```tsx
  import { createHashRouter } from "react-router";
  import Home from "@pages/Home";
  import Page1 from "@pages/Page1";
  import Page2 from "@pages/Page2";

  const router = createHashRouter([
    { path: '/home', element: <Home /> },
    { path: '/page1', element: <Page1 /> }, 
    { path: '/page2', element: <Page2 /> },
  ]);

  export default router;
  ```

* App.tsx
  ```tsx
  import { RouterProvider } from 'react-router';
  import router from "@/routes";

  function App() {
    return (
      <>
        <RouterProvider router={ router } />
      </>
    );
  }

  export default App;
  ```

## 3.3 MemoryRouter
- 메모리에 라우팅 정보를 저장하고 주소창은 항상 초기페이지 표시
- 이전/다음 페이지 이동 기능 없음
- 하이브리드 앱 등 history 정보가 필요 없는 환경에서 사용

## 3.4 NativeRouter
* React Native 앱에서 사용

## 3.5 StaticRouter
* Node.js에서 웹 앱을 렌더링하는데 사용
* 서버 사이드 렌더링(SSR) 시 사용

# 4. 리액트 라우터가 제공하는 주요 컴포넌트

## 4.1 Link
* 사용자가 클릭해서 다른 페이지로 이동할 수 있게 `<a>` 요소를 렌더링 해주는 컴포넌트
* 주요 속성
  - to: 이동할 URL 지정
  - replace?: `true`로 지정할 경우 history 스택에 추가하지 않고 현재 스택을 교체
  - state?: 이동할 컴포넌트에 추가 데이터 전달
    - `state` 속성으로 전달한 데이터는 이동한 컴포넌트에서 `useLocation` hook을 통해 접근할 수 있음

### 사용 예시
* Header.tsx
  ```tsx
  import { Link } from "react-router";

  function Header() {
    return (
      <header>
        <h1>리액트 라우터 - 02 react-router 사용</h1>
        <Link className="menu-dark" to="/home">home</Link><br/>
        <Link className="menu" to="/page1">page1</Link><br/>
        <Link className="menu" to="/page2">page2</Link>
      </header>
    );
  }

  export default Header;
  ```

## 4.2 NavLink
* `<Link>` 컴포넌트에 추가 기능 제공
* `className`, `style` 속성에 함수 정의 가능
  - 함수의 매개변수로 객체가 전달되고 객체의 isActive 속성에 현재 URL이 `<NavLink>`의 `to` 속성과 일치하는 경우 true, 일치하지 않으면 false가 전달되므로 URL 매칭 여부에 따라서 각각 다른 스타일 적용 가능

### 사용 예시
* Header.tsx
  ```tsx
  import { NavLink } from "react-router";

  function Header() {
    return (
      <header>
        <h1>리액트 라우터 - 02 react-router 사용</h1>
        <NavLink className={({ isActive }) => isActive ? 'menu-dark' : 'menu'} to="/home">home</NavLink><br/>
        <NavLink className={({ isActive }) => isActive ? 'menu-dark' : 'menu'} to="/page1">page1</NavLink><br/>
        <NavLink className={({ isActive }) => isActive ? 'menu-dark' : 'menu'} to="/page2">page2</NavLink>
      </header>
    );
  }

  export default Header;
  ```

## 4.3 Outlet
* 중첩 라우트에서 자식 컴포넌트가 렌더링될 위치를 지정하는 컴포넌트
* 부모 컴포넌트 내에서 `<Outlet />`을 배치하면, 해당 위치에 자식 라우트의 컴포넌트가 렌더링됨
* `context` 속성을 통해 자식 컴포넌트에 데이터를 전달할 수 있음

### 사용 예시
* Layout.tsx
  ```tsx
  import { Outlet } from "react-router";
  import Header from "@components/Header";

  function Layout() {
    return (
      <>
        <Header />
        <Outlet /> {/* 자식 라우트 컴포넌트가 여기에 렌더링됨 */}
      </>
    );
  }

  export default Layout;
  ```

* routes.tsx
  ```tsx
  import { createBrowserRouter } from "react-router";
  import Home from "@pages/Home";
  import Page1 from "@pages/Page1";
  import Page2 from "@pages/Page2";
  import Layout from "@components/Layout";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/home', element: <Home /> },
        { path: '/page1', element: <Page1 /> },
        { path: '/page2', element: <Page2 /> }
      ]
    }
  ]);

  export default router;
  ```

## 4.4 Navigate
* 요청한 URL 대신 다른 경로로 이동시킬 경우 `<Navigate>` 컴포넌트 사용
* `replace` 속성을 사용하면 history 스택에 추가하지 않고 현재 항목을 교체. 기본값은 `false`

### 사용 예시
* routes.tsx
  ```tsx
  import { Navigate } from "react-router";
  
  { path: '/', element: <Navigate to="/home" replace /> },
  { path: '/home', element: <Home /> },
  ```

# 5. 리액트 라우터가 제공하는 주요 기능

## 5.1 동적 세그먼트
* URL 파라미터: URL 경로에 동적인 값이 포함될 때 사용
* 경로에 `:파라미터명` 형태로 지정하면 `useParams` hook을 사용하여 URL 파라미터 값을 가져올 수 있음
  - 모든 값은 `string` 타입이므로 숫자나 다른 타입이 필요한 경우 변환 필요.

### 사용 예시
* routes.tsx
  ```tsx
  import { createBrowserRouter } from "react-router";
  import TodoInfo from "@pages/TodoInfo";

  const router = createBrowserRouter([
    { path: 'list/:_id', element: <TodoInfo /> },
  ]);
  ```

* TodoInfo.tsx
  ```tsx
  import { useParams } from 'react-router';

  function TodoInfo() {
    // URL이 list/3일 때 useParams()는 { _id: '3' }을 반환 (모든 값은 string 타입)
    const { _id } = useParams();
    // 숫자로 변환이 필요한 경우
    const id = Number(_id);
    
    return (
      <div>
        <h2>할일 상세 보기</h2>
        <div>ID: {id}</div>
      </div>
    );
  }
  ```

## 5.2 중첩 라우트 (nested route)
* 라우트 설정에서 `children` 속성으로 자식 라우트를 정의
* 부모 라우트와 매칭되면 부모 컴포넌트를 렌더링하고, 하위 경로가 자식 라우트와 매칭되면 자식 컴포넌트도 추가로 렌더링
* 부모 컴포넌트에서는 자식 컴포넌트가 렌더링될 영역에 `<Outlet>` 컴포넌트를 추가

### 사용 예시
* `list/3` 요청 시 `<TodoInfo>`가 렌더링되고, 수정 링크를 클릭하면 주소가 `list/3/edit`로 변경되며 `<Outlet>` 영역에 `<TodoEdit>` 컴포넌트가 추가로 렌더링됨

* routes.tsx
  ```tsx
  { 
    path: 'list/:_id',
    element: <TodoInfo />,
    children: [
      { path: 'edit', element: <TodoEdit /> }
    ]
  }
  ```

* TodoInfo.tsx
  ```tsx
  import { Link, Outlet, useParams } from 'react-router';

  function TodoInfo() {
    const { _id } = useParams();
    const id = Number(_id);
    
    return (
      <>
        <h2>할일 상세 보기</h2>
        <Link to={`/todo/list/${id}/edit`}>수정</Link>
        <Link to="/todo/list">목록</Link>

        <Outlet /> {/* <TodEdit> 컴포넌트가 들어갈 영역 */}

      </>
    );
  };

  export default TodoInfo;
  ```

* TodoEdit.tsx
  ```tsx
  function TodoEdit() {
    return (
      <h2>할일 수정</h2>
    );
  }

  export default TodoEdit;
  ```

## 5.3 index 라우트
* URL이 부모 컴포넌트의 URL과 일치할 경우 기본으로 렌더링 할 자식 라우트 지정

### 사용 예시
```tsx
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/home', element: <Navigate to="/" /> },
  { path: '/about', element: <About /> }
]);
```

## 5.4 fallback UI와 404 라우트

### 5.4.1 fallback UI
* SPA(Single Page Application)는 모든 페이지 구성 요소가 번들링되어 하나의 시작 페이지(index.html)에 포함됨
* 사용자가 브라우저 주소창에 `list/3`처럼 URL을 직접 입력하면 서버에는 해당 URL이 존재하지 않아 일반적으로 404 에러가 발생함
* SPA를 서비스하는 웹서버는 모든 URL 요청에 대해 시작 페이지(index.html)를 전송하도록 구성해야 하며, 이를 fallback UI라고 함

#### Vite 기반으로 개발할 경우 fallback UI 지정 예시
* Vite의 개발 서버에 기본으로 fallback UI가 지정되어 있음
* vite.config.js
  ```js
  appType: 'mpa', // fallback UI 사용 안함
  appType: 'spa', // fallback UI 사용(기본)
  ```

### 5.4.2 에러 처리 전용 라우트
* 요청한 URL과 일치하는 라우트가 없을 경우 보여줄 컴포넌트 지정 (404 에러 처리)
* 리액트 라우터 작업 중 오류 발생 시 보여줄 컴포넌트 지정
* `errorElement` 속성으로 사용
* 서버와 통신에 사용하는 `loader`나 `action`에서 에러가 발생하면 `errorElement`가 렌더링됨
* 404 처리를 위해 catch-all 라우트(`path: '*'`)를 사용할 수도 있음

#### 사용 예시 1: errorElement 사용
* routes.tsx
  ```tsx
  import { createBrowserRouter } from "react-router";
  import Layout from "@components/Layout";
  import ErrorPage from "@pages/ErrorPage";

  const router = createBrowserRouter([
    {
      path: '/todo',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        // ...
      ]
    }
  ]);
  ```

* ErrorPage.tsx
  ```tsx
  import { useRouteError, isRouteErrorResponse } from "react-router";

  function ErrorPage(){
    const error = useRouteError();
    let message = '예상하지 못한 에러가 발생했습니다.';
    
    if (isRouteErrorResponse(error)) { // 라우터가 만든 에러
      if (error.status === 404) {
        message = '존재하지 않는 페이지입니다.';
      }
    }else if (error instanceof Error) { // loader, action에서 throw한 에러
      message = error.message;
    }
    
    return (
      <div>
        <h2>에러 발생</h2>
        <p>{message}</p>
      </div>
    );
  }
  export default ErrorPage;
  ```

#### 사용 예시 2: catch-all 라우트 사용
* routes.tsx
  ```tsx
  import { createBrowserRouter } from "react-router";
  import Layout from "@components/Layout";
  import NotFound from "@pages/NotFound";

  const router = createBrowserRouter([
    {
      path: '/todo',
      element: <Layout />,
      children: [
        // ... 다른 라우트들
        { path: '*', element: <NotFound /> } // 위의 라우트와 일치하지 않는 모든 경로
      ]
    }
  ]);
  ```

* NotFound.tsx
  ```tsx
  function NotFound(){
    return (
      <div>
        <h2>404 - 페이지를 찾을 수 없습니다</h2>
        <p>요청하신 페이지가 존재하지 않습니다.</p>
      </div>
    );
  }
  export default NotFound;
  ```

# 6. 리액트 라우터가 제공하는 주요 Hook

## 6.1 useRouteError
* 에러 처리 전용 라우트에서 발생한 Error 객체를 반환

### 사용 예시
* ErrorPage.tsx
  ```tsx
  import { isRouteErrorResponse, useRouteError } from "react-router";

  function ErrorPage() {
    const error = useRouteError();
    let message = '예상하지 못한 에러가 발생했습니다.';
    
    if (isRouteErrorResponse(error)) { // 라우터가 만든 에러
      if (error.status === 404) {
        message = '존재하지 않는 페이지입니다.';
      }
    }else if (error instanceof Error) { // loader, action에서 throw한 에러
      message = error.message;
    }
    
    return (
      <div id="main">
        <div className="todo">
          <h2>에러 발생</h2>
          <p>{ message }</p>
        </div>
      </div>
    );
  }

  export default ErrorPage;
  ```

## 6.2 useParams
* URL 파라미터 값을 꺼낼 때 사용

### 사용 예시
* routes.tsx
  ```tsx
  import { createBrowserRouter } from "react-router";
  import TodoInfo from "@pages/TodoInfo";

  const router = createBrowserRouter([
    { 
      path: 'list/:_id', 
      element: <TodoInfo />
      },
  ]);
  ```

* TodoInfo.tsx
  ```tsx
  import { useParams } from 'react-router';

  function TodoInfo() {
    // URL이 list/3일 때 useParams()는 { _id: '3' }을 반환 (모든 값은 string 타입)
    const { _id } = useParams();
    // 숫자로 변환이 필요한 경우
    const id = Number(_id);
    
    return (
      <div>
        <h2>할일 상세 보기</h2>
        <div>ID: {id}</div>
      </div>
    );
  }
  ```

## 6.3 useMatch
* useMatch(pattern)
* pattern은 url 문자열이거나 다음 속성을 가진 객체를 지정
  - caseSensitive?: boolean; // 대소문자 일치 여부. 기본 false
  - end?: boolean; // true(기본값): url 전체 일치, false: 전방 일치
  - path: Path; / url 경로
* 현재 요청된 URL 경로가 인자로 전달한 경로 패턴과 매칭되는지 확인 후 PathMatch 객체를 반환
* 현재 컴포넌트가 지정한 url에서 렌더링 되고 있는지 여부 확인에 사용
* 일치하면 PathMatch 객체를 반환하고, 일치하지 않으면 `null`을 반환
* PathMatch의 속성
  - params: URL 파라미터
  - pathname: 요청된 경로
  - pattern: 요청된 경로 패턴

### 사용 예시
* TodoInfo.tsx
  ```tsx
  import { Link, Outlet, useMatch } from "react-router";

  const TodoInfo = function(){
    const infoMatch = useMatch('/todo/list/:_id');
    const id = Number(infoMatch?.params._id);

    return (
      <div id="main">
        <h2>할일 상세 보기</h2>
        <div className="todo">
          <div>ID: {id}</div>
          <div>제목 : 잠자기</div>
          <div>내용 : 주말에 수업 끝나면 잠이나 실컷 자야지</div>
          <div>상태 : 미완료</div>
          <div>작성일 : 2025.06.16 12:23:45</div>
          <div>수정일 : 2025.06.16 13:45:12</div>
          { infoMatch && // 상세보기 화면에서만 노출
            <>
              <Link to={`/todo/list/${id}/edit`}>저장</Link>
              <Link to="/todo/list">목록</Link>
            </>
          }   
        </div>

        <Outlet />

      </div>
    );
  }

  export default TodoInfo;
  ```

## 6.4 useSearchParams
* 쿼리 스트링(URL에 포함된 `?` 뒷부분) 정보를 읽거나 설정할 때 사용
* `URLSearchParams` 객체를 반환하며, `get()`, `set()`, `delete()` 등의 메서드 사용 가능
* `setSearchParams`에 객체를 전달하면 쿼리 파라미터를 한 번에 설정 가능
  - 예시: `setSearchParams({ page: '2', keyword: 'react' })`

### 사용 예시
* Pagination.tsx
  ```tsx
  import { useSearchParams } from 'react-router';

  function Pagination() {
    // list?page=2 요청시
    const [ searchParams, setSearchParams ] = useSearchParams();
    const page = Number(searchParams.get('page') || 1);
    
    const handleNextPage = () => {
      // 다음 페이지로 이동
      searchParams.set('page', (page+1).toString());
      setSearchParams(searchParams);
    };
    
    const handlePrevPage = () => {
      // 이전 페이지로 이동
      if (page > 1) {
        searchParams.set('page', (page-1).toString());
        setSearchParams(searchParams);
      }
    };
    
    return (
      <div>
        <button onClick={handlePrevPage}>이전</button>
        <span>현재 페이지: {page}</span>
        <button onClick={handleNextPage}>다음</button>
      </div>
    );
  }
  ```

## 6.5 useNavigate
* 페이지를 이동할 수 있는 navigate 함수 반환
* `navigate(to, options)`: `to`는 이동할 경로(문자열 또는 숫자), `options`는 `{ replace?: boolean, state?: any }` 형태
* `navigate(-1)`: 이전 페이지로 이동 (뒤로 가기)
* `navigate(1)`: 다음 페이지로 이동 (앞으로 가기)
* `replace: true`를 사용하면 history 스택에 추가하지 않고 현재 항목을 교체

### 사용 예시
* TodoEdit.tsx
  ```tsx
  import { useNavigate } from 'react-router';

  function TodoEdit() {
    const navigate = useNavigate();
    
    const handleCancel = () => {
      // 이전 페이지로 이동
      navigate(-1);
    };

    const handleSave = () => {
      // 수정 로직...
      // 수정 후 상세 페이지로 이동 (state 전달)
      navigate('/todo/list/3', { state: { from: 'edit', message: '수정되었습니다.' } });
    };
    
    return (
      <div>
        <button type="button" onClick={handleSave}>저장</button>
        <button type="button" onClick={handleCancel}>취소</button>
      </div>
    );
  }
  ```

## 6.6 useLocation
* 요청된 URL 정보를 담고 있는 location 객체 반환

### location 객체의 속성
* pathname: 현재 요청된 경로
* search: 쿼리 문자열
* state: navigate()로 이동할 때 전달된 state 객체
* `location.state`는 `navigate()`의 `state` 옵션으로 전달한 데이터

### 사용 예시
* TodoInfo.tsx
  ```tsx
  import { useLocation } from 'react-router';

  function TodoInfo() {
    const location = useLocation();
    
    // navigate()로 전달한 state 접근
    const state = location.state;
    const message = state?.message;
    console.log('state', state);
    console.log('message', message);

    return (
      <div id="main">
        <h2>할일 상세 보기</h2>
        { message && <p>{ message }</p> }
        {/* ... */}
      </div>
    );
  }
  ```

## 6.7 useOutletContext
* 중첩 라우팅에서 부모가 Outlet 컴포넌트의 context 속성으로 전달한 값을 자식 컴포넌트에서 꺼낼 때 사용

### 사용 예시
* routes.tsx
  ```tsx
  { 
    path: 'list/:_id', 
    element: <TodoInfo />,
    children: [
      { path: 'edit', element: <TodoEdit /> }
    ]
  }
  ```

* TodoInfo.tsx
  ```tsx
  import { Outlet } from 'react-router';
  
  function TodoInfo() {
    const item = { /* ... */ };
    
    return (
      <>
        <h2>할일 상세 보기</h2>
        {/* ... */}
        <Outlet context={{ item }} />
      </>
    );
  }
  ```

* TodoEdit.tsx
  ```tsx
  import { useOutletContext } from 'react-router';
  
  interface OutletContextProps {
    item: TodoItem;
  }

  function TodoEdit() {
    const { item } = useOutletContext<OutletContextProps>();
    
    return (
      <div>
        <h2>할일 수정</h2>
        <label htmlFor="title">제목 :</label>
        <input type="text" id="title" value={ item.title } autoFocus />
        {/* ... */}
      </div>
    );
  }
  ```

# 7. 레이지 로딩 (lazy loading)
* SPA는 하나의 시작 페이지(index.html)와 모든 컴포넌트를 포함하는 하나 또는 몇 개의 큰 js 파일, 모든 CSS를 포함한 하나 또는 몇 개의 큰 CSS 파일로 구성됨
* 첫 페이지를 접근할 때 번들링된 큰 파일을 로딩하면 초기 로딩 속도가 느려짐
* 레이지 로딩을 적용하면 초기 페이지에 필요한 js만 로딩하고, 다른 페이지의 js 파일은 해당 URL에 접근할 때 추가로 다운로드하여 초기 로딩 속도 개선 가능
* React의 `lazy()` 함수와 동적 import를 사용하면 해당 컴포넌트가 별도의 청크 파일로 분리되어 필요할 때만 로드됨

### 사용 예시
* routes-lazy.tsx
  ```tsx
  import { lazy } from "react";
  import { createBrowserRouter, Navigate } from "react-router";

  // 정적 import (번들링 시 컴포넌트가 포함됨)
  import Layout from "@components/Layout";

  // 동적 import (해당 컴포넌트가 필요한 시점에 다운로드)
  const Home = lazy(() => import("@pages/Home"));
  const Page1 = lazy(() => import("@pages/Page1"));
  const Page2 = lazy(() => import("@pages/Page2"));

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/home" /> },
        { path: '/home', element: <Home /> },
        { path: '/page1', element: <Page1 /> },
        { path: '/page2', element: <Page2 /> }
      ]
    }
  ]);

  export default router;
  ```

# 8. React.Suspense 컴포넌트
* 동적 import를 사용하면 해당 컴포넌트는 네트워크를 통해 가져오기 때문에 지연시간이 발생할 수 있음
* 사용자에게 로딩 중임을 나타내는 적절한 UI 필요
* Suspense 컴포넌트를 이용하면 쉽게 구현 가능
* fallback 속성을 이용해서 대체 UI를 지정

### 사용 예시
* routes-lazy.tsx
  ```tsx
  { path: '/home', element: <Suspense key="home" fallback={<div>로딩중...</div>}><Home /></Suspense> },
  { path: '/page1', element: <Suspense key="page1" fallback={<div>로딩중...</div>}><Page1 /></Suspense> },
  { path: '/page2', element: <Suspense key="page2" fallback={<div>로딩중...</div>}><Page2 /></Suspense> }
  ```

# 9. 데이터 로딩 및 액션
* Data Mode에서 제공하는 `loader`와 `action` 기능을 통해 서버와의 데이터 통신을 처리

## 9.1 데이터 로딩 (loader)
* Data Mode에서 라우트가 렌더링되기 전에 데이터를 로드하는 함수
* 비동기 함수로 작성하며, 반환값은 `useLoaderData` hook을 통해 접근 가능
* 라우트 객체의 `loader` 속성에 함수를 지정

### loader 함수의 매개변수
* `loader` 함수는 `LoaderFunctionArgs` 객체를 매개변수로 받음
* `LoaderFunctionArgs` 객체의 주요 속성:
  - `request`: 현재 요청에 대한 `Request` 객체 (URL, 헤더, 쿼리 파라미터 등 접근 가능)
  - `params`: URL 파라미터 객체 (예: `/todos/:_id`에서 `_id` 값은 `params._id`로 사용)
  - `context`: 라우터에 전달된 컨텍스트 데이터 (선택적)

### 사용 예시
* todo.ts
  ```tsx
  // 할일 목록 조회
  export async function getTodoList(): Promise<TodoListRes> {
    try{
      const res = await fetch(`${API_URL}/todolist`);
      console.log('getTodoList', res);
      return res.json();
    }catch(error){ // 네트워크 오류 처리
      console.error(error);
      throw new Error('일시적인 네트워크 문제가 발생했습니다. 잠시후 다시 이용해 주시기 바랍니다.');
    }
  }

  // 할일 상세 조회
  export async function getTodoInfo(_id: number): Promise<TodoInfoRes> {
    try{
      const res = await fetch(`${API_URL}/todolist/${_id}`);
      console.log('getTodoInfo', res);
      return res.json();
    }catch(error){ // 네트워크 오류 처리
      console.error(error);
      throw new Error('일시적인 네트워크 문제가 발생했습니다. 잠시후 다시 이용해 주시기 바랍니다.');
    }
  }
  ```

* routes.tsx
  ```tsx
  const router = createBrowserRouter([
    { path: 'list', element: <TodoList />, loader: getTodoList },
    { 
      path: 'list/:_id', 
      element: <TodoInfo />,
      loader: ({ params }) => getTodoInfo(Number(params._id)),
      children: [
        { path: 'edit', element: <TodoEdit /> }
      ]
    },
  ]);
  ```
## 9.2 useLoaderData
* Data Mode에서 라우트의 `loader` 함수가 반환한 데이터에 접근할 때 사용
* `loader`는 라우트가 렌더링되기 전에 실행되어 데이터를 준비함

### 사용 예시
* TodoList.tsx
  ```tsx
  import { useLoaderData } from 'react-router';

  function TodoList() {
    const data = useLoaderData<TodoListRes>();
    // ...
  }
  ```

* TodoInfo.tsx
  ```tsx
  import { useLoaderData } from 'react-router';

  function TodoInfo() {
    const data = useLoaderData<TodoInfoRes>();
    // ...
  }
  ```

## 9.3 useNavigation
* Data Mode에서 현재 네비게이션 상태를 확인할 때 사용
* `state` 속성으로 `idle`, `loading`, `submitting` 상태를 확인 가능
* `formData`, `formMethod` 등 폼 제출 정보도 확인 가능

### useNavigation 반환 객체의 속성
* `useNavigation()`은 네비게이션 상태를 담은 객체를 반환
* 반환 객체의 주요 속성:
  - `state`: 현재 네비게이션 상태
    * `idle`: 네비게이션이 진행되지 않음
    * `loading`: 라우트 전환 중 (loader가 실행 중)
    * `submitting`: 폼 제출 중 (action이 실행 중)
  - `location`: 현재 네비게이션 중인 `Location` 객체 (전환 중인 경로 정보)
  - `formData`: 폼 제출 시 전달된 `FormData` 객체 (폼 제출이 아닌 경우 `undefined`)
  - `formMethod`: 폼 제출 메서드 (`'get'`, `'post'`, `'put'`, `'patch'`, `'delete'` 중 하나, 폼 제출이 아닌 경우 `undefined`)
  - `formAction`: 폼이 제출되는 URL (폼 제출이 아닌 경우 `undefined`)

### 사용 예시
* Layout.tsx
  ```tsx
  function Layout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
      <div className="todoapp">
        <Header />
        { isLoading ? <div> 로딩 중... </div> : <Outlet /> }
        <Footer />
      </div>
    );
  }
  ```

## 9.4 액션 (action)
* Data Mode에서 폼 제출이나 뮤테이션을 처리하는 함수
* `Form` 컴포넌트의 제출을 처리하며, 반환값은 `useActionData` hook을 통해 접근 가능
* 라우트 객체의 `action` 속성에 함수를 지정

### 사용 예시
* routes.tsx
  ```tsx
  import { createBrowserRouter } from "react-router";
  import TodoForm from "@pages/TodoForm";

  async function createTodo({ request }) {
    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');
    
    // 저장 로직...
    const response = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ title, content })
    });
    
    if (!response.ok) {
      return { error: '저장에 실패했습니다.' };
    }
    
    return { success: true, message: '저장되었습니다.' };
  }

  const router = createBrowserRouter([
    {
      path: '/todos/new',
      element: <TodoForm />,
      action: createTodo
    }
  ]);
  ```

* TodoForm.tsx
  ```tsx
  import { Form, useActionData, useNavigation } from 'react-router';

  function TodoForm() {
    const actionData = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    
    return (
      <div>
        {actionData?.error && <div>{actionData.error}</div>}
        {actionData?.message && <div>{actionData.message}</div>}
        <Form method="post">
          <input type="text" name="title" disabled={isSubmitting} />
          <textarea name="content" disabled={isSubmitting} />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? '저장 중...' : '저장'}
          </button>
        </Form>
      </div>
    );
  }
  ```

## 9.5 Form 컴포넌트
* Data Mode에서 제공하는 폼 컴포넌트
* 기본 HTML `<form>`과 유사하지만, React Router의 `action`과 통합되어 사용됨
* `action` 속성으로 라우트의 `action` 함수를 호출
* 제출 시 자동으로 `useNavigation`의 `state`가 업데이트되어 pending 상태 관리 가능

### 사용 예시
* TodoForm.tsx
  ```tsx
  import { Form } from "react-router";

  function TodoForm() {
    return (
      <Form method="post">
        <input type="text" name="title" />
        <textarea name="content" />
        <button type="submit">저장</button>
      </Form>
    );
  }

  export default TodoForm;
  ```

## 9.6 useActionData
* Data Mode에서 라우트의 `action` 함수가 반환한 데이터에 접근할 때 사용
* 폼 제출 후 `action` 함수의 반환값을 받아서 처리할 때 사용

### 사용 예시
* routes.tsx
  ```tsx
  import { createBrowserRouter } from "react-router";
  import TodoForm from "@pages/TodoForm";

  async function createTodo({ request }) {
    const formData = await request.formData();
    const title = formData.get('title');
    
    // 저장 로직...
    return { success: true, message: '저장되었습니다.' };
  }

  const router = createBrowserRouter([
    {
      path: '/todos/new',
      element: <TodoForm />,
      action: createTodo
    }
  ]);
  ```

* TodoForm.tsx
  ```tsx
  import { Form, useActionData } from 'react-router';

  function TodoForm() {
    const actionData = useActionData(); // createTodo()의 반환값
    
    return (
      <div>
        {actionData?.message && <div>{actionData.message}</div>}
        <Form method="post">
          <input type="text" name="title" />
          <button type="submit">저장</button>
        </Form>
      </div>
    );
  }

  export default TodoForm;
  ```

## 9.7 동적 세그먼트와 loader 조합
* `loader` 함수에서도 `params`를 통해 URL 파라미터에 접근 가능
* 동적 세그먼트와 함께 사용하면 URL 파라미터를 기반으로 데이터를 로드할 수 있음

### 사용 예시
* routes.tsx
  ```tsx
  import { createBrowserRouter } from "react-router";
  import TodoInfo from "@pages/TodoInfo";

  async function loadTodo({ params }) {
    const response = await fetch(`/api/todos/${params._id}`);
    if (!response.ok) {
      throw new Response('할일을 찾을 수 없습니다.', { status: 404 });
    }
    return response.json();
  }

  const router = createBrowserRouter([
    {
      path: 'list/:_id',
      element: <TodoInfo />,
      loader: loadTodo
    }
  ]);
  ```

* TodoInfo.tsx
  ```tsx
  import { useParams, useLoaderData } from 'react-router';

  function TodoInfo() {
    const { _id } = useParams();
    const todo = useLoaderData(); // loadTodo()의 반환값
    
    return (
      <div>
        <h2>{todo.title}</h2>
        <p>{todo.content}</p>
      </div>
    );
  }
  ```

# 10. 라우터가 적용된 프로젝트 구조
* 유지보수성과 확장성을 고려한 리액트 라우터 프로젝트 구조 예시

## 폴더 구조
```
src/
├── api/                  # API 호출 함수
│   ├── auth.ts             # 인증 관련 API 함수 (로그인, 로그아웃, 회원가입 등)
│   ├── todo.ts             # Todo 관련 API 함수 (CRUD 작업)
│   └── user.ts             # 사용자 관련 API 함수 (프로필 조회, 수정 등)
├── components/           # 재사용 가능한 컴포넌트
│   ├── common/             # 공통 컴포넌트
│   │   ├── Footer.tsx        # 푸터 컴포넌트
│   │   ├── Header.tsx        # 헤더 컴포넌트
│   │   └── Layout.tsx        # 레이아웃 컴포넌트 (Header, Footer, Outlet 포함)
│   ├── ui/                 # UI 컴포넌트
│   │   ├── Button.tsx        # 버튼 컴포넌트
│   │   └── Modal.tsx         # 모달 컴포넌트
├── hooks/                # 커스텀 훅
│   ├── useAuth.ts          # 인증 관련 커스텀 훅
│   ├── useAxios.ts         # API 클라이언트 설정 (axios/fetch 인스턴스)
│   └── useLocalStorage.ts  # 로컬 스토리지 관련 커스텀 훅
├── pages/                # 페이지 컴포넌트
│   ├── auth/               # 인증 관련 페이지
│   │   ├── Login.tsx         # 로그인 페이지
│   │   └── Register.tsx      # 회원가입 페이지
│   ├── error/              # 에러 페이지
│   │   ├── ErrorPage.tsx     # 일반 에러 페이지
│   │   └── NotFound.tsx      # 404 페이지
│   ├── home/               # 홈 관련 페이지
│   │   ├── About.tsx         # 소개 페이지
│   │   └── Home.tsx          # 홈 페이지
│   └── todo/               # Todo 관련 페이지
│       ├── TodoEdit.tsx      # Todo 수정 페이지
│       ├── TodoInfo.tsx      # Todo 상세 페이지
│       └── TodoList.tsx      # Todo 목록 페이지
├── routes/               # 라우팅 설정
│   ├── adminRoutes.ts      # 관리자 라우트
│   ├── authRoutes.ts       # 인증 관련 라우트
│   ├── index.ts            # 메인 라우터 (모든 라우트 통합)
│   └── todoRoutes.ts       # Todo 관련 라우트
├── types/                # 타입 정의
│   ├── auth.ts             # 인증 관련 타입 정의
│   ├── routes.ts           # 라우트 관련 타입 정의
│   └── todo.ts             # Todo 관련 타입 정의
├── utils/                # 유틸리티 함수
│   ├── api.ts              # API 관련 유틸리티 (인터셉터, 헬퍼 함수 등)
│   └── constants.ts        # 상수 정의
└── App.tsx               # 루트 컴포넌트
```

