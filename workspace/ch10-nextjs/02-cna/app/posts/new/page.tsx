import { Metadata } from "next";

export const metadata: Metadata = {
  title: '게시글 등록',
  description: '게시글 등록 페이지입니다.',
}

export default async function PostNew(){
  // new에는 loading 이 없기 때문에 상위 폴더의 로딩이 사용됨
  // 게시물 로딩중...이 출력됨
  // await new Promise(resolve => setTimeout(resolve, 1000*3));
  return (
    <h1>게시글 등록</h1>
  );
}