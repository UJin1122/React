function Price() {
  return (
    <>
      <h2>수량 선택</h2>
      <div>
        가격: 125000원<br />
        수량: <input type="number" min="1" max="10" 
          value="1" />
        (배송비는 5개당 3000원씩 추가됩니다.)<br />
        상품 금액: 125000원
      </div>
    </>
  );
}

export default Price;