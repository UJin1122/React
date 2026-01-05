import { Metadata } from "next";

function generateMetadata(){
  const data ={
    title: `1번 게시물`,
    description: '게시판 이용 수칙입니다.',
  };
  return{
    title: data.title,
    description: data.content,
  }
}

export default function PostInfo(){
  return (
    <h1>1번 게시물 상세 조회</h1>
  );
}