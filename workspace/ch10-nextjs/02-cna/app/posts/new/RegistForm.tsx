'use client';

import { createPost } from "@/actions/post";
// import { redirect } from "next/navigation";

export default function RegistForm(){

  // async function handleSubmit(formData: FormData){
  //     const post = await createPost(formData);
  //     redirect(`/posts/${post._id}`);
  // }
    return(
    <form action={createPost}>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '4px' }}>제목</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="제목을 입력하세요"
            required
            style={{ width: '100%', padding: '8px', border: 'solid 1px black', borderRadius:'7px' }}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="content" style={{ display: 'block', marginBottom: '4px' }}>내용</label>
          <textarea
            id="content"
            name="content"
            rows={10}
            placeholder="내용을 입력하세요"
            required
            style={{ width: '100%', padding: '8px', border: 'solid 1px black', borderRadius:'7px' }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 16px', cursor:'pointer', background:'gray', borderRadius:'7px' }}>등록</button>
      </form>

    );
  
}