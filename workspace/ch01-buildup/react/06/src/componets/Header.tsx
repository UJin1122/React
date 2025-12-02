function Header(){
      return (
        <header>
          <h1>06 Todo List - React 컴포넌트를 모듈로 분리</h1>
          <div style={{ display:"flex" ,justifyContent:"center", gap:"10px" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSkMo_wH4ZXCN9kV4MJ3Y-VRPN0-8mB1MyA&s"  style={{ borderRadius: "10%", width: 100, height: 100 }}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUflx-qdZp856QodYn517Zw8vESugvFYfgA&s"  style={{ borderRadius: "10%", width: 100, height: 100 }}/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz__Dmsi9QBs2xO7dEyJPF0DKGuXkH0NyYAQ&s" style={{ borderRadius: "10%", width: 100, height: 100 }} />
          </div>
        </header>
      );
}
export default Header;