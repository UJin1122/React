import type { User } from "../types";

interface UserInfoProps {
  user: User;
}

function UserInfo({ user }: UserInfoProps){
  const list = user.extra.addressBook.map(address => <li key={ address.id }>{ address.name }: { address.value }</li>);
  return (
    <div>
      <p>
        이메일: { user.email }<br/>
        이름: { user.name }<br/>
        전화번호: { user.phone }<br/>
      </p>
      <ul>
        { list }
      </ul>
    </div>
  );
}

export default UserInfo;