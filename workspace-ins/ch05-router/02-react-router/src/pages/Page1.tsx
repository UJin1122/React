import Header from "@components/Header";
<<<<<<< HEAD

function Page1() {
=======
import { Link } from "react-router";

function Page1() {
  console.log('Page1 렌더링');
>>>>>>> upstream/main
  return (
    <>
      <Header />
      <h2>SPA Page1</h2>
<<<<<<< HEAD
    </>
  );
=======
      <p><Link to="/home">홈으로</Link></p>
    </>
  )
>>>>>>> upstream/main
}

export default Page1;