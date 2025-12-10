interface ProductProps {
  name: string;
  price: number;
  mainImage: string;
  content: string;
}

function Product({ name, price, mainImage, content }: ProductProps) {
  return (
    <>
      <h2>상품 설명</h2>
      <p>상품명: { name }</p>
      <p>가격: { price }원</p>
      <p>상품 설명</p>
      <div>
        <img src={ mainImage } width="600" />
        <p>{ content }</p>
      </div>
    </>
  );
}

export default Product;