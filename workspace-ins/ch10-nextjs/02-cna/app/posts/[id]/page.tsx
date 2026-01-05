import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // TODO: API 서버 호출 필요

  const data = {
    title: `1번 게시물`,
    content: '게시판 이용 수칙입니다.',
  };

  return {
    title: data.title,
    description: data.content,
  }
}

export default function PostInfo(){
  return (
    <h1>1번 게시물 상세 조회</h1>
  );
}