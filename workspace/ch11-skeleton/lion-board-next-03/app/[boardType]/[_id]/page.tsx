import { Metadata } from "next";
import CommentList from "@/app/[boardType]/[_id]/CommentList";
import Link from "next/link";
import { getPost } from "@/lib/post";

export async function generateMetadata({ params }: { params: Promise<{ boardType: string, _id: string }> }): Promise<Metadata> {
  const { boardType, _id } = await params;
  return {
    title: `${boardType} - 게시글 수정`,
    description: `${boardType} - 게시글을 수정하세요.`,
    openGraph: {
      title: `${boardType} - 게시글 수정`,
      description: `${boardType} - 게시글을 수정하세요.`,
      url: `/${boardType}/${_id}/edit`,
      images: {
        url: '/images/front-end.png'
      }
    }
  };
}


export default async function InfoPage({ params }: { params: Promise<{ boardType: string, _id: string }> }) {
  const { boardType, _id } = await params;
  const res = await getPost(_id);

  if (!res.ok) {
    return <div>{res.message}</div>;
  }

  const post = res.item;

  return (
    <main className="flex-1 container mx-auto mt-4 px-4">

      <section className="mb-8 p-4">
        <form action={`/${boardType}`}>
        <div className="font-semibold text-xl">제목 : {post.title}</div>
          <div className="text-right text-gray-400">
            <div>작성자 : {post.user.name}</div>
            <div>{post.createdAt}</div>
          </div>
          <div className="mb-4">
            <div>
              <p className="w-full p-2 whitespace-pre-wrap">{post.content}</p>
            </div>
            <hr/>
          </div>
          <div className="flex justify-end my-4">
            <Link href={`/${boardType}`} className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">목록</Link>
            <Link href={`/${boardType}/${_id}/edit`} className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">수정</Link>
            <button type="submit" className="bg-red-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
          </div>
        </form>
      </section>    
      
      <CommentList _id={_id} />

    </main>
  );
}