// 아이템 타입
export interface Todo{
  _id: number;
  title: string;
  done: boolean;
  content: string;
  createdAt: string;
  updatedAt: string;
}

// 목록 조회 결과 타입
export interface TodoListRes{
  ok: 1;
  items: Todo[];
}

// 상세 조회 결과 타입
export interface TodoInfoRes {
  ok: 1;
  item: Todo;
}

// 에러 타입
export interface ErrorRes{
  ok: 0;
  message: string;
}

// 서버의 응답
// export type ResData = TodoListRes | ErrorRes;
export type ResData = TodoListRes | TodoInfoRes | TodoCreateRes | ErrorRes;


// 할일 생성 요청 타입
export interface TodoCreateReq {
  title: string;
  content?: string;
  category?: string;
  finishAt?: string;
}

export interface TodoCreateRes {
  ok: 1;
  item: Todo;
}


