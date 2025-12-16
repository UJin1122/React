/**
 * SPA 라우팅을 위한 커스텀 Link 컴포넌트
 * 브라우저의 기본 동작 취소
 * History API를 사용해서 클라이언트 라우팅 구현
 */

interface MyLinkPops extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
  children: React.ReactNode;
  to: string;
}

function MyLink({ children, to, ...props }:MyLinkPops){
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 브라우저의 기본동작 취소
    e.preventDefault();

    // History API를 사용해서 URL 변경하고 history에 쌓음
    window.history.pushState(null, '', e.currentTarget.href);

    // 이벤트를 수동으로 발생시킴
    // distpatchEvent : 이벤트를 수동으로 발생
    // new PopstateEvent() : 브라우저의 앞/뒤 이동 등 이벤트 생성
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  return(
  <a { ...props } href={to} onClick={ handleClick }>{children}</a>
  );
    
}
export default MyLink;