import { Link } from "react-router";

function Page1() {
  console.log('Page1 렌더링');
  return (
    <>
      <h2>SPA Page1</h2>
      <p><Link to="/home">홈으로</Link></p>
    </>
  )
}

export default Page1;