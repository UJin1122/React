# 11장 게시판 앱 개발
* TypeScript
* React
* Vite

# 0 개발 준비

## 0.1 샘플 코드 테스트
### 0.1.1 샘플 코드 복사
* 레포지토리 루트 폴더(React)에서 실행
  ```sh
  cp -r sample/11/workspace/ch11-skeleton/lion-board-template workspace/ch11-skeleton/lion-board-template
  ```

### 0.1.2 샘플 코드 실행
* 레포지토리 루트 폴더(React)에서 실행
  ```sh
  cd workspace/ch11-skeleton
  npx live-server lion-board-template
  ```

### 0.1.3 접속 테스트
* http://127.0.0.1:8080

## 0.2 프로젝트 생성
* 참고: https://github.com/FEBC-15/react/tree/main/workspace-ins/ch02-start#211-vite
* workspace/ch11-skeleton 폴더에서 다음 명령 실행
  ```sh
  npm create vite@latest lion-board-react-01
  ```

  - Select a framework: React
  - Select a variant: TypeScript
  - Use rolldown-vite (Experimental)?: No
  - Install with npm and start now? Yes

## 0.3 추가 패키지 설치
* 개발서버 중지
  - 터미널에서 `Ctrl` + `C`

* 프로젝트 루트로 이동
```sh
cd lion-board-react-01
```

* 추가 패키지 설치
```sh
npm i react-hook-form react-router zustand axios @tanstack/react-query @tanstack/react-query-devtools react-spinners react-toastify
npm i -D tailwindcss @tailwindcss/vite
```

## 0.4 불필요한 파일 정리
* ch11-skeleton/lion-board-react-01/src 하위 파일 정리
  - assets 폴더 삭제
  - index.css, App.css 파일의 내용 삭제
  - App.tsx 수정
    ```tsx
    import './App.css'
    function App() {
      return (
        <>
          <h1>라이언 보드 v.01</h1>
        </>
      )
    }
    export default App
    ```

* ch11-skeleton/lion-board-react-01/public/vite.svg 파일 삭제

## 0.5 프로젝트 설정
### 0.5.1 alias 추가
* 참고: https://github.com/FEBC-15/react/tree/main/workspace-ins/ch02-start#viteconfigjs

#### vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
    ],
  },
})
```
#### tsconfig.app.json
```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["./*"],
    }
  }
}
```

### 0.5.2 Tailwind CSS 설정
* 참고: https://github.com/FEBC-15/react/tree/main/workspace-ins/ch08-css#432-vite-플러그인-구성

* vite.config.ts
```js
......
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  ......
  plugins: [
    ......
    tailwindcss(),
  ],
  ......
});
```

* src/index.css
```css
@import 'tailwindcss';

@layer base {
  button {
    cursor: pointer;
  }
}
```

# 1 Step 01 - html 파일을 리액트 컴포넌트로 변환
* HTML 코드를 기반으로 리액트 컴포넌트 생성
* 리액트 라우터 적용
* 작업 폴더: workspace/ch11-skeleton/lion-board-react-01

## 1.1 정적인 자원 처리
* lion-board-template/images 폴더를 lion-board-react-01/public 폴더에 복사
* lion-board-react-01/index.html 파일 수정
  - 언어 설정
    ```html
    <html lang="ko">
    ```
  - favicon 설정
    ```html
    <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
    ```
    
## 1.2 UI 컴포넌트 작성
* 참고: https://github.com/FEBC-15/react/tree/main/workspace-ins/ch02-start#4-tsx
* workspace/ch11-skeleton/lion-board-template 폴더의 html 코드를 컴포넌트로 이동
  - header 태그는 Header.tsx에서 사용
  - footer 태그는 Footer.tsx에서 사용
  - div id="main" 태그는 각 페이지의 컴포넌트에서 사용
  - JSX 문법에 맞게 수정

### 1.2.1 공통 컴포넌트
* lion-board-react-01/src/components/layout 폴더 생성후 파일 작성
* Header.tsx
  - lion-board-template/index.html의 `<header>` 영역 복사
  - JSX 문법에 맞게 수정
  - 제목을 `라이언 보드`에서 `라이언 보드 v.01`로 수정

```tsx
function Header() {
  return (
    <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
        <div className="w-1/2 order-1 md:w-auto">
          <a href="/" className="flex items-center gap-2">
            <img className="mr-3 h-6 w-auto sm:h-9" src="/images/favicon.svg" width="24" height="24" alt="로고 이미지" />
            <span className="text-lg font-bold">라이언 보드 v.01</span>
          </a>
        </div>
        <div className="w-auto order-2 text-base mt-4 md:mt-0">
          <ul className="flex items-center gap-6 uppercase">
            <li className="hover:text-amber-500 hover:font-semibold"><a href="/info">정보공유</a></li>
            <li className="hover:text-amber-500 hover:font-semibold"><a href="/info">자유게시판</a></li>
            <li className="hover:text-amber-500 hover:font-semibold"><a href="/info">질문게시판</a></li>
          </ul>
        </div>

        <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">

          <form action="/">
            <p className="flex items-center">
              <img 
                className="w-8 rounded-full mr-2" 
                src="https://res.cloudinary.com/ddedslqvv/image/upload/v1767106161/user-jayg_i3nudk.webp"
                alt="용쌤 프로필 이미지" />
              용쌤님 :)
              <button type="submit" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그아웃</button>
            </p>
          </form>


          <div className="flex justify-end">
            <a href="/user/login" className="bg-orange-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</a>
            <a href="/user/signup" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">회원가입</a>
          </div>

          <button
            type="button"
            data-toggle-dark="dark"
            className="ml-4 flex items-center w-8 h-8 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <svg
              data-toggle-icon="moon"
              className="w-3.5 h-3.5 hidden"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
            </svg>
            <svg
              data-toggle-icon="sun"
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
            </svg>
            <span className="sr-only">Toggle dark/light mode</span>
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Header;
```

* Footer.tsx
  - lion-board-template/index.html의 `<footer>` 영역 복사
  - JSX 문법에 맞게 수정

```tsx
function Footer() {
  return (
    <footer className="p-4 pb-12 w-full border-t border-t-slate-200  dark:border-t-slate-500 dark:bg-gray-600 text-gray-600 dark:text-white transition-color duration-500 ease-in-out">
      <div className="min-w-[320px] flex flex-wrap gap-4 justify-center items-center text-sm text-slate-400">
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">약관</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">게시판 정책</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">회사소개</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">광고</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">마이비즈니스</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">제휴 제안</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">이용약관</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">개인정보취급방침</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">청소년보호 정책</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">고객센터</a>
      </div>
    </footer>
  );
}

export default Footer;
```

### 1.2.2 레이아웃 컴포넌트 작성
* lion-board-react-01/src/components/layout/index.tsx 파일 작성
  ```tsx
  import Header from "@/components/layout/Header";
  import Footer from "@/components/layout/Footer";

  import { Outlet } from "react-router";

  export default function Layout(){
    return (
      <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
  ```

### 1.2.3 페이지별 컴포넌트
#### 메인 페이지
* lion-board-react-01/src/pages/index.tsx 파일 생성
- lion-board-template/index.html의 `<main>` 영역 복사
  - JSX 문법에 맞게 수정
```tsx
function MainPage() {
  return (
    <main className="flex-1 container mx-auto mt-10 p-4 transition-color">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">라이언 보드에 오신 것을 환영합니다!</h1>
        <p className="text-xl mb-6">다양한 주제의 커뮤니티와 활발한 소통을 위한 플랫폼입니다. 관심사에 따라 참여하고, 의견을 나누세요.</p>
        <a href="/" className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">커뮤니티 참여하기</a>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4 text-center">주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-2">정보 공유</h3>
            <p className="mb-4">다양한 정보와 지식을 공유하세요.</p>
            <a href="/info" className="text-orange-500 hover:underline">바로가기</a>
          </div>
          <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-2">자유 게시판</h3>
            <p className="mb-4">자유롭게 이야기를 나누세요.</p>
            <a href="/info" className="text-orange-500 hover:underline">바로가기</a>
          </div>
          <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-2">질문 게시판</h3>
            <p className="mb-4">궁금한 점을 질문하고 답변을 받아보세요.</p>
            <a href="/info" className="text-orange-500 hover:underline">바로가기</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
```

#### 게시판 기능
* lion-board-react-01/src/pages/board 폴더 생성
* lion-board-template 폴더의 각 html 파일에 있는 `<main>` 태그 복사한 후 JSX 문법으로 수정
  - List.tsx: lion-board-template/info/index.html의 `<main>` 태그 복사
    - ListItem.tsx: List.tsx에서 `<tbody>` 내부의 `<tr>` 영역 분리
  - Detail.tsx: lion-board-template/info/1.html의 `<main>` 태그 복사
    - CommentList.tsx: Detail.tsx에서 `<section className="mb-8">` 영역 분리
      - CommentListItem.tsx: CommentList.tsx에서 `<div className="shadow-md rounded-lg p-4 mb-4">` 영역 분리
      - CommentNew.tsx: CommentList.tsx에서 `<div className="p-4 border border-gray-200 rounded-lg">` 영역 분리
  - New.tsx: lion-board-template/new/index.html의 `<main>` 태그 복사
  - Edit.tsx: lion-board-template/info/1/edit/index.html의 `<main>` 태그 복사

#### 회원 기능
* lion-board-react-01/src/pages/user 폴더 생성
* lion-board-template 폴더의 각 html 파일에 있는 `<main>` 태그 복사한 후 JSX 문법으로 수정해서 완성
  - Login.tsx: lion-board-template/user/login/index.html의 `<main>` 태그 복사
  - Signup.tsx: lion-board-template/user/signup/index.html의 `<main>` 태그 복사

#### 에러 페이지
* 에러가 발생할 경우 `Layout` 컴포넌트 대신 에러 페이지를 보여주어야 하므로 `<Header>`, `<Footer>`를 포함한 완전한 페이지로 구성해야 함
* lion-board-react-01/src/pages/ErrorPage.tsx 파일 생성
* lion-board-react-01/src/components/layout/index.tsx 코드 복사
* `<Outlet />` 컴포넌트 대신 lion-board-template/error.html의 `<main>` 영역 복사
  - JSX 문법에 맞게 수정

  ```tsx
  import Footer from "@/components/layout/Footer";
  import Header from "@/components/layout/Header";

  function ErrorPage() {
    return (
      <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
        <Header />
        <main className="flex-1 py-20 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg flex flex-col items-center space-y-2">
          <h2 className="text-xl font-semibold mb-2 text-center">🚧 앗, 무언가 잘못됐네요!</h2>
          <h3 className="text-md font-semibold mb-2 text-center">존재하지 않는 페이지입니다.</h3>
          <p className="pt-12 text-center">이 오류는 더 나은 서비스를 위한 첫걸음이에요. 조금만 기다려 주세요!</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
            ⚙️ 다시 시도
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  export default ErrorPage;
  ```

## 1.3 라우터 작성
* 참고: https://github.com/FEBC-15/react/tree/main/workspace-ins/ch05-router#2-리액트-라우터란

### 1.3.1 라우터 생성
* lion-board-react-01/src/routes.tsx 파일 생성
* BrowserRouter 사용
  ```tsx
  import Layout from "@/components/layout";
  import Detail from "@/pages/board/Detail";
  import Edit from "@/pages/board/Edit";
  import List from "@/pages/board/List";
  import New from "@/pages/board/New";
  import ErrorPage from "@/pages/ErrorPage";
  import MainPage from "@/pages/index";
  import Login from "@/pages/user/Login";
  import Signup from "@/pages/user/Signup";

  import { createBrowserRouter } from "react-router";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: ":type", element: <List /> },
        { path: ":type/new", element: <New /> },
        { path: ":type/:_id", element: <Detail /> },
        { path: ":type/:_id/edit", element: <Edit /> },
        { path: "user/login", element: <Login /> },
        { path: "user/signup", element: <Signup /> },
      ]
    },
  ]);

  export default router;
  ```

### 1.3.2 RouterProvider 추가
* App.tsx 수정
  ```tsx
  import { RouterProvider } from "react-router-dom";
  import router from "@/routes";

  function App() {
    return (
      <RouterProvider router={ router } />
    );
  }

  export default App;
  ```

### 1.3.3 라우팅 테스트
#### 링크 테스트
* 모든 링크가 잘 동작하는지 확인

### 1.3.4 클라이언트 라우팅 적용
#### `<Link>` 컴포넌트 사용
* `<a>` 태그는 페이지 새로고침이 발생하므로 React Router의 `<Link>` 컴포넌트로 수정
  - `href` 속성은 `to`로 수정

* Header.tsx 예시
  ```tsx
  <Link to="/info">정보공유</Link>
  <Link to="/free">자유게시판</Link>
  <Link to="/qna">질문게시판</Link>
  ```

### 1.3.5 클라이언트 라우팅 테스트
* submit 버튼을 제외한 모든 링크 클릭시 페이지 새로고침이 발생하지 않아야 함
  - 개발자 도구의 Network 탭에 서버에 요청한 내역이 없어야 함

## 1.4 Step 01 완료
* 완성된 코드 참고: https://github.com/FEBC-15/react/tree/main/workspace-ins/ch11-skeleton/lion-board-react-01

# 2 Step 02 - API 서버 연동

# 3 Step 03 - 전역 상태 관리

# 4 Step 04 - 배포 및 최적화