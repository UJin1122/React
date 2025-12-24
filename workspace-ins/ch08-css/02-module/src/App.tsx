import Button from "@components/ui/Button";
import Login from "@pages/auth/Login";

import styles from './App.module.css';

function App(){
  return (
    <>
      <h1 className={styles['bg-gray-text-blue']}>02 CSS Module</h1>

      <div className={styles.container}>
        <Button>기본 버튼</Button>
        <Button bg="blue" color="red">파란 배경의 빨간 버튼</Button>
        <Button bg="yellow" color="red">노란 배경의 빨간 버튼</Button>
        <Button bg="gray" color="blue">회색 배경의 파란 버튼</Button>
      </div>
      
      <Login />
    </>
  );
}

export default App;