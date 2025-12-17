import Header from "@components/Header";
import MyLink from "@components/MyLink";

function Page1() {
  console.log('Page1 렌더링');
  return (
    <>
      <Header />
      <h2>SPA Page1</h2>
      <p><MyLink to="home">홈으로</MyLink></p>
    </>
  )
}

export default Page1;