let _stateValue;

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
  },
  // 상태값(데이터) 관리
  useState: (initValue) => {
    // || 논리합 연산자
    //    왼쪽 피연산자가 truthy일 때 왼쪽 값을,
    //    왼쪽 피연산자가 falsy(null, undefined, 0, '', flase, NaN)일 때 오른쪽 값을 사용
    // ?? null 병합 연산자
    //    왼쪽 피연산자가 null, undefined가 아닐 때 왼쪽 값을,
    //    왼쪽 피연산자가 null, undefined일 때 오른쪽 값을 사용

    _stateValue = _stateValue ?? initValue;
  }
};

export default reaction;