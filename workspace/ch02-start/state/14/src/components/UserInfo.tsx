import type { User } from "../Type";

interface UserInfoProps{
  title:string;
  user: User;
}

function UserInfo({ title, user }: UserInfoProps){

return(
  <div style={{ border:"1px solid", padding:"1rem", borderRadius:"10px"}}>
    <h2>{ title }</h2>
    <p>
      이메일: {user.email}<br/>
      이름: {user.name}<br/>
      전화번호: {user.phone}<br/>
    </p>
    <ul>
      { user.extra.addressBook.map(address=><li key={ address.id }>{ address.name }: { address.value }</li>)}
      {/* <li>{user.extra.addressBook[0].name}: {user.extra.addressBook[0].value}</li>
      <li>{user.extra.addressBook[1].name}: {user.extra.addressBook[1].value}</li> */}
    </ul>
  </div>
);
}

export default UserInfo;