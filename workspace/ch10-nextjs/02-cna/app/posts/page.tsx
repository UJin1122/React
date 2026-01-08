// import { getPosts } from "@/lib/post";
import { PostListItem } from "@/types";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: '목록 조회',
  description: '게시판 목록 조회 페이지입니다.',
}

export default async function PostList(){
  console.log('게시물 목록 조회');

  // 외부 API 직접 호출
  const res = await fetch('https://fesp-api.koyeb.app/market/posts', {
    headers: {
      'client-id': 'openmarket'
    }
  });
  const resData = await res.json();
  const data: PostListItem[] = resData.item;

  const list = data.map((post) =>
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