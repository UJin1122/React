import { Metadata } from "next";
import RegistForm from "@/app/posts/new/RegistForm";

export const metadata: Metadata = {
  title: '게시글 등록',
  description: '게시글 등록 페이지입니다.',
}

export default async function PostNew(){
  return (
    <div>
      <h1 style={{ marginBottom: '16px' }}>게시글 등록</h1>
      <RegistForm/>
    </div>
  );
}
