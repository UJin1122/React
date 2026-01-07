import { Metadata } from "next";
import Image from "next/image";

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
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const data = await res.json();
  const post = data.item;

  console.log(id, '게시물 조회');
  return (
    <div>
      <h1>{ id }번 게시물 조회</h1>
      <h2>{data.title}</h2>
      <textarea className="w-full h-full focus:outline-none" defaultValue={ data.content }></textarea>
      <p>작성자: { post.user?.name }</p>
      <p>수정일: { post.updatedAt }</p>
      <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ux4wdRflvmxEDp4igUzKyI-DCgGehN7pvQ&s'} alt={post.title} width={500} height={300} />
      <h1>{ post.title }</h1>
      <p>{ post.content }</p>
    </div>
  );
}