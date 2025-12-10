interface ShippingProps {
  fees: number;
}

function Shipping({ fees }: ShippingProps) {
  return (
    <>
      <h2>배송비</h2>
      <div>
        배송비: { fees }원<br />
      </div>
      <br />
      <button type="button">결제</button>
    </>
  );
}

export default Shipping;