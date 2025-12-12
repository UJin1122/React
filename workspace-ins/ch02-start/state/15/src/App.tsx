import { useState } from 'react';
import './App.css';

// 이메일 검증 정규식
const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// 휴대폰 검증 정규식
const cellphoneExp = /^010[0-9]{4}[0-9]{4}$/;

interface Member {
  name: string;
  email: string;
  cellphone: string;
}

interface FormErrors {
  name?: { message: string };
  email?: { message: string };
  cellphone?: { message: string };
}

interface ValidateOptions {
  criteriaMode?: 'firstError' | 'all';
  data?: Member;
}

function App() {
  console.log('App 렌더링');

  // input 요소를 제어 컴포넌트로 만들기 위해서 상태로 정의
  /*
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ cellphone, setCellphone ] = useState('010');

  const user: Member = {
    name,
    email,
    cellphone
  };

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function handleCellphoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCellphone(event.target.value);
  }
  */

  const [ user, setUser ] = useState<Member>({
    name: '',
    email: '',
    cellphone: '010'
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newUser = {
      ...user,
      [event.target.name]: event.target.value,
    };
    setUser(newUser);
    validate({ data: newUser });
  }

  const [ errors , setErrors ] = useState<FormErrors>({});

  
  function validate({ criteriaMode = 'firstError', data }: ValidateOptions = {}){
    const userInfo = data || user;

    const newErrors: FormErrors = {};

    // 필수 입력 체크
    if(userInfo.name.trim() === ''){
      newErrors.name = { message: '이름을 입력하세요.' };
      if (criteriaMode === 'firstError') {
        setErrors(newErrors);
        return;
      }
    }else if(userInfo.name.trim().length < 2){
      newErrors.name = { message: '2글자 이상 입력하세요.' };
      if (criteriaMode === 'firstError') {
        setErrors(newErrors);
        return;
      }
    }
    
    if(userInfo.email.trim() === ''){
      newErrors.email = { message: '이메일을 입력하세요.' };
      if (criteriaMode === 'firstError') {
        setErrors(newErrors);
        return;
      }
    }else if(emailExp.test(userInfo.email) === false){
      newErrors.email = { message: '이메일 양식에 맞지 않습니다.' };
      if (criteriaMode === 'firstError') {
        setErrors(newErrors);
        return;
      }
    }
    
    if(userInfo.cellphone.trim() === ''){
      newErrors.cellphone = { message: '휴대폰 번호를 입력하세요.' };
      if (criteriaMode === 'firstError') {
        setErrors(newErrors);
        return;
      }
    }else if(cellphoneExp.test(userInfo.cellphone) === false){
      newErrors.cellphone = { message: '휴대폰 형식에 맞지 않습니다.' };
      if (criteriaMode === 'firstError') {
        setErrors(newErrors);
        return;
      }
    }
    
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
    
    // if(Object.keys(newErrors).length > 0){  // 입력값 검증 실패
    //   return false;
    // }else{  // 입력값 검증 통과
    //   return true;
    // }
  }
  

  // 소혜림, 이승규
  /*  
  function validate({ criteriaMode = 'firstError' }: ValidateOptions){
    let newErrors: FormErrors = {};

    // 필수 입력 체크
    if (criteriaMode === "firstError") {
      if (user.name.trim() === "") {
        newErrors = {
          name: { message: "이름을 입력하세요." },
        };
      } else if (user.name.trim().length < 2) {
        newErrors = {
          name: { message: "2글자 이상 입력하세요." },
        };
      } else if (user.email.trim() === "") {
        newErrors = {
          email: { message: "이메일을 입력하세요." },
        };
      } else if (emailExp.test(user.email) === false) {
        newErrors = {
          email: { message: "이메일 양식에 맞지 않습니다." },
        };
      } else if (user.cellphone.trim() === "") {
        newErrors = {
          cellphone: { message: "휴대폰 번호를 입력하세요." },
        };
      } else if (cellphoneExp.test(user.cellphone) === false) {
        newErrors = {
          cellphone: { message: "휴대폰 형식에 맞지 않습니다." },
        };
      }
    } else if (criteriaMode === "all") {
      if (user.name.trim() === "") {
        newErrors.name = { message: "이름을 입력하세요." };
      } else if (user.name.trim().length < 2) {
        newErrors.name = { message: "2글자 이상 입력하세요." };
      }

      if (user.email.trim() === "") {
        newErrors.email = { message: "이메일을 입력하세요." };
      } else if (emailExp.test(user.email) === false) {
        newErrors.email = { message: "이메일 양식에 맞지 않습니다." };
      }

      if (user.cellphone.trim() === "") {
        newErrors.cellphone = { message: "휴대폰 번호를 입력하세요." };
      } else if (cellphoneExp.test(user.cellphone) === false) {
        newErrors.cellphone = { message: "휴대폰 형식에 맞지 않습니다." };
      }
    }

    setErrors(newErrors);
    
    if(Object.keys(newErrors).length > 0){  // 입력값 검증 실패
      console.log('입력값 검증 실패', newErrors);
    }else{  // 입력값 검증 통과
      console.log('서버에 전송...', user);
      setUser({
        name: '',
        email: '',
        cellphone: '010'
      });
    }
  }
  */

  // 김지유
  /*
  function validate(options: ValidateOptions){
    let newErrors: FormErrors = {};

    // 필수 입력 체크
    if (user.name.trim() === '') {
      newErrors.name = { message: '이름을 입력하세요.' };
      if (options.criteriaMode === 'firstError') {
        setErrors(newErrors);
        return;
      }
    } else if (user.name.trim().length < 2) {
      newErrors.name = { message: '2글자 이상 입력하세요.' };
      if (options.criteriaMode === 'firstError') {
        setErrors(newErrors);
        return;
      }
    }
  
    if (user.email.trim() === '') {
      newErrors.email = { message: '이메일을 입력하세요.' };
      if (options.criteriaMode === 'firstError') {
        setErrors(newErrors);
        return;
      }
    } else if (!emailExp.test(user.email)) {
      newErrors.email = { message: '이메일 양식에 맞지 않습니다.' };
      if (options.criteriaMode === 'firstError') {
        setErrors(newErrors);
        return;
      }
    }
  
    if (user.cellphone.trim() === '') {
      newErrors.cellphone = { message: '휴대폰 번호를 입력하세요.' };
      if (options.criteriaMode === 'firstError') {
        setErrors(newErrors);
        return;
      }
    } else if (!cellphoneExp.test(user.cellphone)) {
      newErrors.cellphone = { message: '휴대폰 형식에 맞지 않습니다.' };
      if (options.criteriaMode === 'firstError') {
        setErrors(newErrors);
        return;
      }
    }
    
    setErrors(newErrors);
    
    if(Object.keys(newErrors).length > 0){  // 입력값 검증 실패
      console.log('입력값 검증 실패', newErrors);
    }else{  // 입력값 검증 통과
      console.log('서버에 전송...', user);
      setUser({
        name: '',
        email: '',
        cellphone: '010'
      });
    }
  }
  */

  function registMember(event: React.FormEvent) {
    event.preventDefault(); // 브라우저의 기본 동작 취소(submit 동작 취소)
    const isValid = validate({
      // criteriaMode: 'firstError', // 첫번째 발견된 에러만 포함(기본값)
      criteriaMode: 'all', // 모든 에러를 포함
    });
    if(isValid){
      console.log('서버에 전송', user);
      setUser({ name: '', email: '', cellphone: '010' });
    }
  }

  return (
    <>
      <h1>15 회원가입 입력값 상태 관리</h1>

      <form onSubmit={ registMember }>
        <label htmlFor="name">이름</label>
        <input id="name" name="name" value={ user.name } onChange={ handleChange } /><br />
        <div className="error-style">{ errors.name?.message }</div>

        <label htmlFor="email">이메일</label>
        <input id="email" name="email" value={ user.email } onChange={ handleChange } /><br />
        <div className="error-style">{ errors.email?.message }</div>

        <label htmlFor="cellphone">휴대폰</label>
        <input id="cellphone" name="cellphone" value={ user.cellphone } onChange={ handleChange } /><br />
        <div className="error-style">{ errors.cellphone?.message }</div>

        <button type="submit">가입</button>
      </form>

      <p>
        이름: { user.name }<br />
        이메일: { user.email }<br />
        휴대폰: { user.cellphone }<br />
      </p>
    </>
  );
}

export default App;