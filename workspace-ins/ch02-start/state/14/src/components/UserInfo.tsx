import type { User } from "../types";

interface UserInfoProps {
  title: string;
  user: User;
}

function UserInfo({ title, user }: UserInfoProps){
  const list = user.extra.addressBook.map(address => <li key={ address.id }>{ address.name }: { address.value }</li>);
  return (
    <div style={{ border: '1px solid', padding: '1rem', borderRadius: '10px' }}>
      <h2>{ title }</h2>
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