interface PriceProps {
  price: number;
  maxQuantity: number;
  shippingFees: number;
  quantity: number;
  handleQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Price({ price, maxQuantity, shippingFees, quantity, handleQuantityChange }: PriceProps) {
  console.log('\tPrice 렌더링');

  return (
    <>
      <h2>수량 선택</h2>
      <div>
        가격: { price.toLocaleString() }원<br />
        수량: <input type="number" min="1" max={ maxQuantity } 
          value={ quantity } onChange={ handleQuantityChange } />
        (배송비는 5개당 { shippingFees.toLocaleString() }원씩 추가됩니다.)<br />
        상품 금액: { (price * quantity).toLocaleString() }원
      </div>
    </>
  );
}

export default Price;