import React from "react";

interface ShippingProps{
  fees: number;
  handlePayment: () => void;
}

function Shipping({ fees, handlePayment }:ShippingProps){
  console.log('\tShipping 렌더링');

  return(
    <>
    <h2>배송비</h2>
    <div>
    배송비: { fees.toLocaleString() }원<br />
    </div>
    <br />
    {/* handlePayment 함수가 매번 App에서 생성됨. 메모이제이션 의미 없음 */}
    <button type="button" onClick={ handlePayment }>결제</button>

    </>
  );
}

// 메모이제이션을 제대로 사용하기 위해서는 handlePayment 새로 생성이 안되게 해야 함
export default React.memo(Shipping);