import { useState } from "react";
import UserInfo from "./components/UserInfo";
import type { User } from "./types";

function App(){

  const initialUser: User = {
    "_id": 4,
    "email": "u1@market.com",
    "name": "데이지",
    "phone": "01044445555",
    "address": "서울시 강남구 논현동 222",
    "type": "user",
    "createdAt": "2025.05.25 21:08:14",
    "updatedAt": "2025.06.04 09:38:14",
    "extra": {
      "birthday": "11-30",
      "addressBook": [
        {
          "id": 1,
          "name": "회사",
          "value": "서울시 강동구 천호동 123"
        },
        {
          "id": 2,
          "name": "집",
          "value": "서울시 강동구 성내동 234"
        }
      ]
    }
  }

  // 사용자 정보 변경시 리렌더링이 필요하므로 상태로 관리
  const [ user, setUser ] = useState(initialUser);

  return (
    <>
      <h1>14 상태관리 대상이 복합 객체일 경우 불변성 (feat. immer)</h1>
      <UserInfo user={ user } />

      <p>
        <label htmlFor="1">회사</label>
        <input id="1" type="text" name="1" />
        <br />
        <label htmlFor="1">집</label>
        <input id="2" type="text" name="2" />
        <br />
      </p>
    </>
  );
}

export default App;