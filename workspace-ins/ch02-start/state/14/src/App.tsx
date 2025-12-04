import { Fragment, useState } from "react";
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
  const [ prevUser, setPrevUser ] = useState(user);

  console.log('변경 전', prevUser);
  console.log('변경 후', user);

  // 주소가 수정될때 호출되는 이벤트 핸들러
  function handleAddressChange(id: number, value: string){
    console.log(id, value);
    // user 상태를 변경해서 리렌더링
    const targetAddress = user.extra.addressBook.find(address => address.id === id);
    if(targetAddress){
      targetAddress.value = value;
    }

    setPrevUser(user);

    const newUser = { ...user };
    setUser(newUser);
  }

  const list = user.extra.addressBook.map((address) => {
    return (
      <Fragment key={ address.id }>
        <label htmlFor="1">{ address.name }</label>
        <input 
          id={ address.id.toString() }
          type="text" 
          name={ address.id.toString() }
          value={ address.value }
          onChange={ event => handleAddressChange(address.id, event.target.value) }
        />
        <br />
      </Fragment>
    );
  });

  return (
    <>
      <h1>14 상태관리 대상이 복합 객체일 경우 불변성 (feat. immer)</h1>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <UserInfo title="변경 전" user={ prevUser } />
        <UserInfo title="변경 후" user={ user } />
      </div>

      <p>
        { list }
      </p>
    </>
  );
}

export default App;