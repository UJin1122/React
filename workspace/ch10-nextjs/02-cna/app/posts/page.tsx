import { Metadata } from "next";

export const metadata: Metadata = {
  title: '목록 조회',
  description: '게시판 목록 조회 페이지입니다.',
}

export default function PostList(){
  return (
    <h1>목록 조회</h1>
  );
}