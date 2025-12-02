const reaction = {
  createElement: (tag, props, ...children) => {
    // 요소 노드 생성
    const elem = document.createElement(tag);

    // 속성 추가
    if(props){
      for(const attrName in props){
        const value = props[attrName];
        if(attrName.toLowerCase().startsWith('on')){
          elem.addEventListener(attrName.toLowerCase().substring(2), value);
        }
        elem.setAttribute(attrName, value);
      }
    }

    // 자식 노드 추가
    for(let child of children){
      if(typeof child === 'string' || typeof child === 'number'){
        child = document.createTextNode(child);
      }else if(typeof child === 'function'){
        child = child();
      }
      elem.appendChild(child);
    }

    // 요소 노드 반환
    return elem;
  },
  // 루트 노드를 관리하는 객체를 반환
  createRoot: (rootNode) => {
    return {
      render: (appFn) => {
        // appFn을 실행한 결과 노드를 루트 노드의 자식으로 렌더링 한다.
        rootNode.appendChild(appFn());
      }
    };
  }
};

export default reaction;