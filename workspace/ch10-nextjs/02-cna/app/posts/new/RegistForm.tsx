'use client';

import { createPost } from "@/actions/post";
// import { redirect } from "next/navigation";

export default function RegistForm(){
  console.log('RegistForm',global.navigator.userAgent);
  // async function handleSubmit(formData: FormData){
  //     const post = await createPost(formData);
  //     redirect(`/posts/${post._id}`);
  // }
    return(
    <form action={createPost}>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="제목을 입력하세요"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            name="content"
            rows={10}
            placeholder="내용을 입력하세요"
            required
          />
        </div>
        <button type="submit">등록</button>
      </form>
    );
  
}