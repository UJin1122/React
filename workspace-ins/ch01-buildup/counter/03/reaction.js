const reaction = {
  createElement: (tag, props, ...children) => {
    // 요소 노드 생성
    const elem = document.createElement(tag);

    // 속성 추가
    if(props){

    }

    // 자식 노드 추가
    for(let child of children){
      child = document.createTextNode(child);
      elem.appendChild(child);
    }

    // 요소 노드 반환
    return elem;
  }
};

export default reaction;