import { Fragment, useState } from "react";
import UserInfo from "./components/UserInfo";
import type { User } from "./Type";
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
  };
  
  const [ user, setUser ] = useState(initialUser);
  const [ prevUser, setprevUser ] = useState(initialUser);
  
  function handleAddressChange(id:number, value:string){
    console.log(id, value);
    
    // const newAddressBook = user.extra.addressBook.map(address => {
    //   if(address.id == id){
    //     return{...address, value};
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

    // user 를 Proxy로 감싼 새로운 객채(draft)를 만들어서 콜백 함수의 인자로 전달
    const newUser = produce(user, (draft)=>{
      const address = draft.extra.addressBook.find(address => address.id === id)
      if(address){
        address.value = value;
      }
    });
    
    setUser(newUser);
    setprevUser(prevUser);
  }
  
  
  const list = user.extra.addressBook.map((address)=>{
    return(
      <Fragment key={address.id}>
      <label htmlFor="1">{ address.name }</label>
      <input id={address.id.toString()} 
      type="text" 
      name={ address.name }
      onChange={event => handleAddressChange(address.id, event.target.value)}/>
      <br/>
      </Fragment>
    );
  });
  

  return(
    <>
    <h1>14 상태관리 대상이 복합 객체일 경우 불변성 (feat. immer)</h1>
    <div style={{display:"flex", flexFlow:"column", gap:"2rem"}}>
      <div style={{display:"flex",gap:"2rem"}}>
        <UserInfo user = { initialUser } title="변경 전"/>
        <UserInfo user = { user } title="변경 후"/>
      </div>
    
      <div style={{display:"flex",gap:"2rem"}}>
        <UserInfo user = { prevUser } title="변경 전"/>
        <UserInfo user = { user } title="변경 후"/>
      </div>
    </div>
    <p>
      { list }
    </p>
    </>
  

  );
}

export default App;