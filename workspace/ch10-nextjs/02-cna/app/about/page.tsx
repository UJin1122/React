import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: '게시판 About 페이지입니다.',
}

export default function About(){
  return (
    <h1>About</h1>
  );
}