import { Fragment, useState } from "react";
import UserInfo from "./components/UserInfo";
import type { User } from "./types";
import { produce } from "immer";

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
  const [ user, setUser ] = useState(initialUser); // 주소 변경 후 사용자 정보
  const [ prevUser, setPrevUser ] = useState(user); // 주소 변경 전 사용자 정보

  console.log('변경 전', prevUser);
  console.log('변경 후', user);

  // 주소가 수정될때 호출되는 이벤트 핸들러
  function handleAddressChange(id: number, value: string){
    console.log(id, value);

    // user 상태를 변경해서 리렌더링

    // 상태의 불변성이 지켜지지 않음
    // const newUser = { ...user }; // 주소 변경 후의 데이터
    // const targetAddress = newUser.extra.addressBook.find(address => address.id === id);
    // if(targetAddress){
    //   targetAddress.value = value;
    // }

    // 상태의 불변성을 지키기 위해서 추가 작업이 필요
    // const newAddressBook = user.extra.addressBook.map(address => {
    //   if(address.id === id){
    //     return { ...address, value };
    //   }else{
    //     return address;
    //   }
    // });

    // const newUser = {
    //   ...user,
    //   extra: {
    //     ...user.extra,
    //     addressBook: newAddressBook
    //   }
    // };

    // immer 라이브러리 사용
    // user를 Proxy로 감싼 새로운 객체(draft)를 만들어서 콜백 함수의 인자로 전달
    // 콜백함수에서 값을 읽을 때는 원본값을 사용하고
    // 값을 수정하면 Proxy로 변경을 감지해서 해당 속성과 상위 속성들에 대해서만 실제 복사가 일어남
    const newUser = produce(user, (draft) => {
      const address = draft.extra.addressBook.find(address => address.id === id);
      if(address){
        address.value = value;
      }
    });

    setPrevUser(user); // user: 주소 변경 전의 데이터    
    setUser(newUser); // newUser: 주소 변경 후의 데이터
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