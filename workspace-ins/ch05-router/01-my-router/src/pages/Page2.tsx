import Header from "@components/Header";
import MyLink from "@components/MyLink";

function Page2() {
  console.log('Page2 렌더링');
  return (
    <>
      <Header />
      <h2>SPA Page2</h2>
      <p><MyLink to="home">홈으로</MyLink></p>
    </>
  )
}

export default Page2;