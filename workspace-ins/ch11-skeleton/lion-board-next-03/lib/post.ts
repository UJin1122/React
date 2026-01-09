import { ErrorRes, PostInfoRes, PostListRes, ReplyListRes } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 게시판 타입에 해당하는 게시글 목록을 가져옵니다.
 * @param {string} boardType - 게시판 타입(예: notice, free 등)
 * @returns {Promise<PostListRes | ErrorRes>} - 게시글 목록 응답 객체
 */
export async function getPosts(boardType: string): Promise<PostListRes | ErrorRes> {
  try{
    const res = await fetch(`${API_URL}/posts?type=${boardType}`, {
      headers: {
        'Client-Id': CLIENT_ID,
      },
      cache: 'force-cache',
    });
    return res.json();
  }catch(error){ // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}

/**
 * 특정 게시글의 상세 정보를 가져옵니다.
 * @param {number} _id - 게시글의 고유 ID
 * @returns {Promise<PostInfoRes | ErrorRes>} - 게시글 상세 정보 응답 객체
 */
export async function getPost(_id: string): Promise<PostInfoRes | ErrorRes> {
  try{
    const res = await fetch(`${API_URL}/posts/${_id}`, {
      headers: {
        'Client-Id': CLIENT_ID,
      },
      cache: 'force-cache',
    });
    return res.json();
  }catch(error){ // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}

/**
 * 특정 게시글의 댓글 목록을 가져옵니다.
 * @param {number} _id - 게시글의 고유 ID
 * @returns {Promise<ReplyListRes | ErrorRes>} - 댓글 목록 응답 객체
 */
export async function getReplies(_id: string): Promise<ReplyListRes | ErrorRes> {
  try{
    const res = await fetch(`${API_URL}/posts/${_id}/replies`, {
      headers: {
        'Client-Id': CLIENT_ID,
      },
    });
    return res.json();
  }catch(error){ // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}