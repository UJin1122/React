import PostList from "@/PostList";
import { Suspense } from "react";

function App() {
  return (
    <>
      <h1>05 데이터 패칭 패턴 - Render-as-you-fetch(Suspense)</h1>
      <Suspense fallback={<div>게시물 목록 로딩중...</div>}>
        <PostList />
      </Suspense>
    </>
  );  
}

export default App
