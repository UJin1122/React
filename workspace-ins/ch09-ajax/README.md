# 9장 HTTP 통신과 Ajax
* 코드 실행(GitHub Page): <https://febc-15.github.io/react/workspace-ins/index.html#09>

## 목차
- [1. HTTP 프로토콜](https://github.com/FEBC-15/js/blob/main/docs/09.js_ajax.md#1-HTTP-프로토콜)
- [2. API 테스트](https://github.com/FEBC-15/js/blob/main/docs/09.js_ajax.md#2-api-테스트)
- [3. Ajax란?](https://github.com/FEBC-15/js/blob/main/docs/09.js_ajax.md#3-ajax란)
- [4. XMLHttpRequest 객체](https://github.com/FEBC-15/js/blob/main/docs/09.js_ajax.md#4-xmlhttprequest-객체)
- [5. Fetch API](https://github.com/FEBC-15/js/blob/main/docs/09.js_ajax.md#5-fetch-api)
- [6. axios 라이브러리](https://github.com/FEBC-15/js/blob/main/docs/09.js_ajax.md#6-axios-라이브러리)
- [7. 쿠키를 이용한 클라이언트 상태 관리](https://github.com/FEBC-15/js/blob/main/docs/09.js_ajax.md#7-쿠키를-이용한-클라이언트-상태-관리)
- [8. 데이터 패칭 패턴](#8-데이터-패칭-패턴)
  - [8.1 Fetch-on-render](#81-fetch-on-render)
  - [8.2 Fetch-then-render](#82-fetch-then-render)
  - [8.3 Render-as-you-fetch](#83-render-as-you-fetch)
  - [8.4 패턴 비교 및 선택 가이드](#84-패턴-비교-및-선택-가이드)

# 8. 데이터 패칭 패턴
* 컴포넌트 렌더링과 비동기 데이터 로드 간의 관계를 정의하는 패턴으로, 각 패턴은 데이터 요청과 UI 렌더링의 타이밍을 다르게 처리함

## 8.1 Fetch-on-render
* 컴포넌트가 렌더링된 후 데이터 패칭

### 8.1.1 흐름
1. 컴포넌트가 처음 렌더링될 때 데이터가 보여질 영역을 비운 채로 렌더링
2. useEffect 훅에서 데이터 패칭 요청
3. 데이터가 도착하면 상태를 업데이트해서 응답 받은 데이터를 가지고 리렌더링
4. 자식 컴포넌트가 있다면 자식 컴포넌트도 1 ~ 3 순서로 작업

### 8.1.2 장점
* 코드가 간결하고 직관적
* 컴포넌트에서 필요한 데이터는 직접 패칭해서 사용하므로 각 컴포넌트가 독립적으로 동작해서 재사용성이 높음

### 8.1.3 단점
* 페이지 렌더링과 데이터 요청이 순차적으로 발생하여 폭포수 현상 발생
* 부모와 자식이 동일한 데이터를 요청할 경우 네트워크 요청이 중복될 수 있음

### 8.1.4 샘플 코드
```tsx
import axios from "axios";
import { useEffect, useState } from "react";

interface PostRes {
  ok: boolean;
  item: {
    _id: string;
    title: string;
  }
}

interface CommentsRes {
  ok: boolean;
  item: {
    _id: string;
    content: string;
  }[];
}

// 게시글 조회 API 호출
function fetchPost() {
  return axios.get('https://fesp-api.koyeb.app/market/posts/1?delay=3000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 게시글 상세 조회 페이지
function FetchOnRender() {
  const [data, setData] = useState<PostRes>();

  useEffect(() => {
    fetchPost().then(res => {
      setData(res.data);
    });
  }, []);

  if(!data){
    return <div>1번 게시물 로딩 중...</div>;
  }

  return (
    <>
      <h4>{data.item.title}</h4>
      <Comments />
    </>
  );
}

// 댓글 목록 조회 API 호출
function fetchComments() {
  return axios.get<CommentsRes>('https://fesp-api.koyeb.app/market/posts/1/replies?delay=2000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 댓글 목록 조회 화면
export function Comments() {
  const [data, setData] = useState<CommentsRes>();

  useEffect(() => {
    fetchComments().then((res) => {
      setData(res.data);
    });
  }, []);

  if(!data){
    return <div>댓글 로딩 중...</div>;
  }

  const list = data?.item.map((item) => <li key={item._id}>{item.content}</li>);

  return (
    <>
      <ul>{ list }</ul>
    </>
  );
}

export default FetchOnRender;
```

## 8.2 Fetch-then-render
* 필요한 데이터를 모두 패칭한 후 컴포넌트 렌더링

### 8.2.1 흐름
1. 컴포넌트가 처음 렌더링될 때 데이터가 보여질 영역을 비운 채로 렌더링
2. 모듈 탑 레벨에서 데이터 패칭 요청(자식 컴포넌트에서 필요한 데이터도 동시에 패칭)
3. 데이터가 도착하면 상태를 업데이트해서 응답 받은 데이터를 가지고 리렌더링
4. 자식 컴포넌트가 있다면 Props로 데이터 전달. 자식 컴포넌트는 데이터 패칭 없이 바로 렌더링

### 8.2.2 장점
* 데이터를 미리 패칭하여 컴포넌트가 렌더링되는 시점에 로딩 상태가 없거나 짧음
* 부모가 데이터를 미리 가져와서 자식에게 전달하므로 네트워크 중복 요청 방지

### 8.2.3 단점
* 렌더링 전에 데이터를 요청하기 때문에 초기 로딩이 길어질 수 있음
* 부모 컴포넌트가 자식 컴포넌트의 의존성을 모두 관리해야 하므로 복잡성이 증가

### 8.2.4 샘플 코드
```tsx
import axios from "axios";
import { useEffect, useState } from "react";

interface PostRes {
  ok: boolean;
  item: {
    _id: string;
    title: string;
  }
}

interface CommentsRes {
  ok: boolean;
  item: {
    _id: string;
    content: string;
  }[];
}

// 게시글과 댓글 목록 조회를 동시에
function fetchData(){
  return Promise.all([
    fetchPost(),
    fetchComments(),
  ]).then(([ post, comments ]) => {
    return { post: post.data, comments: comments.data };
  });
}

// 데이터 패칭 시작(렌더링 전에 부모 컴포넌트에서 import하는 순간에 실행)
const promise = fetchData();

// 게시글 조회 API 호출
function fetchPost() {
  return axios.get<PostRes>('https://fesp-api.koyeb.app/market/posts/1?delay=3000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 게시글 상세 조회 페이지
function FetchThenRender() {
  const [post, setPost] = useState<PostRes>();
  const [comments, setComments] = useState<CommentsRes>();

  useEffect(() => {
    promise.then(res => {
      setPost(res.post);
      setComments(res.comments);
    });
  }, []);

  if(!post){
    return <div>1번 게시물 로딩 중...</div>;
  }

  return (
    <>
      <h4>{post.item.title}</h4>
      {comments && <Comments comments={comments}/>}
    </>
  );
}

// 댓글 목록 조회 API 호출
function fetchComments() {
  return axios.get<CommentsRes>('https://fesp-api.koyeb.app/market/posts/1/replies?delay=2000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// props로 전달받은 댓글 목록 출력
export function Comments({ comments }: { comments: CommentsRes }) {
  if(!comments){
    return <div>댓글 로딩 중...</div>;
  }

  const list = comments.item.map((item) => <li key={item._id}>{item.content}</li>);

  return (
    <>
      <ul>{ list }</ul>
    </>
  );
}

export default FetchThenRender;
```

## 8.3 Render-as-you-fetch
* React의 Suspense 컴포넌트를 사용
* 데이터 패칭과 동시에 컴포넌트 렌더링

### 8.3.1 Suspense
* React에서 비동기 작업이 완료될 때까지 기다렸다가 컴포넌트를 화면에 보여주는 기능
* 기다리는 동안에는 "로딩 중..." 같은 대체 화면(fallback)을 대신 보여줌

### 8.3.2 동작 원리(사용 방법)
1. 비동기 통신을 사용하는 컴포넌트를 Suspense 컴포넌트로 감싼다.
2. Suspense 컴포넌트의 fallback 속성으로 대체 UI를 지정한다.
    ```ts
    <Suspense fallback={<div>로딩 중...</div>}>
      <AsyncComponent />
    </Suspense>
    ```
3. 자식 컴포넌트(AsyncComponent)는 데이터를 로드하거나 비동기 작업을 수행하는 동안 Promise를 throw한다.
  - React Query, SWR 등의 라이브러리에는 이미 이 동작이 구현되어 있음
4. Suspense는 이 Promise를 감지하고, 자식 컴포넌트의 렌더링을 중지한 후 Suspense의 fallback UI를 렌더링한다.
5. Suspense는 자식 컴포넌트에서 반환받은 Promise가 Fulfilled 상태로 전환되면, 자식 컴포넌트를 리렌더링한다.

### 8.3.3 장점
* 데이터 요청과 컴포넌트 렌더링이 병렬로 진행되어 성능 최적화
* Suspense를 사용해 비동기 로직이 간결해짐

### 8.3.4 단점
* Suspense 컴포넌트를 추가적으로 감싸는 부분이 복잡해질 수 있음
* Suspense와 함께 동작하는 비동기 로직을 직접 작성하기가 복잡해서 외부 라이브러리(React Query, SWR 등)를 사용해야 할 수 있음
  - React 19 버전에 추가된 use() 훅으로 사용 가능

### 8.3.5 코드 샘플
```tsx
import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

interface PostRes {
  ok: boolean;
  item: {
    _id: string;
    title: string;
  }
}

interface CommentsRes {
  ok: boolean;
  item: {
    _id: string;
    content: string;
  }[];
}

// 게시글 조회 API 호출
function fetchPost() {
  return axios.get<PostRes>('https://fesp-api.koyeb.app/market/posts/1?delay=3000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 게시글 상세 조회 페이지
function FetchAsYouRender() {
  // React Query 사용
  const { data } = useSuspenseQuery({
    queryKey: ['posts', 1],
    queryFn: () => fetchPost(),
    select: res => res.data,
    staleTime: 1000*10,
  });

  return (
    <>
      <h4>{data.item.title}</h4>
      <Comments />
    </>
  );
}

// 댓글 조회 API 호출
function fetchComments() {
  return axios.get<CommentsRes>('https://fesp-api.koyeb.app/market/posts/1/replies?delay=2000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 댓글 목록 조회 화면
export function Comments() {
  const { data } = useSuspenseQuery({
    queryKey: ['posts', 1, 'replies'],
    queryFn: () => fetchComments(),
    select: res => res.data,
    staleTime: 1000*10,
  });
  console.log(data);
  
  const list = data.item.map((item) => <li key={item._id}>{item.content}</li>);

  return (
    <>
      <ul>{ list }</ul>
    </>
  );
}

export default FetchAsYouRender;
```

```tsx
import { Suspense } from "react";
import FetchAsYouRender from "./FetchAsYouRender";

function App() {
  return (
    <Suspense fallback={<div>전체 페이지 로딩 중...</div>}>
      <FetchAsYouRender />
    </Suspense>
  );
}
```

## 8.4 패턴 비교 및 선택 가이드

### 8.4.1 각 패턴의 특징 비교

| 패턴 | 설명 | 초기 로딩 시간 | 네트워크 요청 | 코드 복잡도 | 사용 시기 |
|------|------|--------------|-------------|------------|----------|
| Fetch-on-render | 렌더링 후 가져오기 | 짧음 | 중복 가능 | 낮음 | 간단한 프로젝트, 독립적인 컴포넌트 |
| Fetch-then-render | 가져온 후 렌더링 | 길 수 있음 | 중복 없음 | 중간 | 데이터 의존성이 명확한 경우 |
| Render-as-you-fetch | 가져오는 동시에 렌더링 | 최적화됨 | 중복 없음 | 높음 | 성능이 중요한 대규모 프로젝트 |

### 8.4.2 선택 가이드
* **Fetch-on-render**: 프로토타입이나 작은 프로젝트에서 빠르게 개발할 때 적합
* **Fetch-then-render**: 부모-자식 컴포넌트 간 데이터 공유가 필요한 경우 적합
* **Render-as-you-fetch**: 사용자 경험과 성능이 중요한 프로덕션 환경에서 적합
