import { Metadata } from "next";

export async function generateMetadata({ params }:{ params: Promise<{ id: string }> }): Promise<Metadata> {
  // TODO: API 서버 호출 필요
    const { id } = await params;

  const data = {
    title: `${ id }번 게시물`,
    content: '게시판 이용 수칙입니다.',
  };

  return {
    title: data.title,
    description: data.content,
  }
}

// 밑의 함수가 반환한 배열 만큼 PostInfo함수를 빌드 시점에 미리 호출
export function generateStaticParams(){
  const paramsList = [
    { id : '1'},
    { id : '2'},
  ];

  return paramsList;
}

// 동적 세그먼트의 값을 꺼낼때 params prop을 사용
export default async function PostInfo({ params }:{ params: Promise<{ id: string }> }){
  await new Promise(resolve => setTimeout(resolve, 1000));
  const { id } = await params;
  
  if(id === '444') throw new Error('4444444444444444444444444444444');

  console.log(id, '게시물 조회');
  return (
    <h1>{ id }번 게시물 상세 조회</h1>
  );
}