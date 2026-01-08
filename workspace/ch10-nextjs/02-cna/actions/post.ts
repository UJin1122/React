'use server';

// API 서버와 통신 작업

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData): Promise<void>{
  const title = formData.get('title');
  const content = formData.get('content');
  await fetch(`https://fesp-api.koyeb.app/market/posts`,{
    method: 'POST',
    body: JSON.stringify({ title, content }),
    headers:{
      'client-id': 'openmarket',
      'Content-Type': 'application/json'
    }
  });

  revalidatePath('/posts');
  redirect('/posts');
}