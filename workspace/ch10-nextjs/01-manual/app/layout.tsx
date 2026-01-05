export default function RootLayout({ 
  children 
}: Readonly<{ 
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/">Hello</a></li>
              <li><a href="/user/signup">회원가입</a></li>
              <li><a href="/user/login">로그인</a></li>
            </ul>
          </nav>
        </header>
        { children }
      </body>
    </html>
  );
}