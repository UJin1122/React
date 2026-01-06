import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: '목록 조회',
  description: '게시판 목록 조회 페이지입니다.',
}

interface Post {
  _id: number;
  title: string;
}

export default async function PostList(){
  console.log('게시물 목록 조회');

  // api/route.ts 호출: 
  // const res = await fetch('http://localhost:3000/api');
  
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();

  const list = data.item.map((post: Post) =>
  <li key={post._id}><Link href ={`/posts/${post._id}`}>{post._id} - {post.title}</Link></li>);

  // const list = Object.entries(data).map(([key, value]) =>
  //   <li key={key}>{key}: {value as string}</li>);
  
  return (
    <div>
      <h1>목록 조회</h1>
      <ul>{ list }</ul>
    </div>
  );
}