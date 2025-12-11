import React from "react";

interface ShippingProps {
  fees: number;
  handlePayment: () => void;
}

function Shipping({ fees, handlePayment }: ShippingProps) {
  console.log('\tShipping 렌더링');

  return (
    <>
      <h2>배송비</h2>
      <div>
        배송비: { fees.toLocaleString() }원<br />
      </div>
      <br />
      <button type="button" onClick={ handlePayment }>결제</button>
    </>
  );
}

export default Shipping;
// handlePayment 함수가 매번 App에서 새로 생성되면 메모이제이션을 해도 의미가 없음
// 메모이제이션이 제대로 사용되려면 handlePayment 함수가 새로 생성되지 않도록 해야 함
// export default React.memo(Shipping);