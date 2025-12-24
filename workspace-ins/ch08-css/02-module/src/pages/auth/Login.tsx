import styles from './Login.module.css';

import Button from "@components/ui/Button";

function Login() {
  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form className={styles.form}>
        <div className={styles['input-group']}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className={styles.input} autoComplete="email" required />
        </div>
        <div className={styles['input-group']}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className={styles.input} autoComplete="current-password" required />
        </div>

        <Button>회원가입</Button>
        <Button>로그인</Button>
        <Button>아이디 찾기</Button>
      </form>
    </div>
  );
};

export default Login;