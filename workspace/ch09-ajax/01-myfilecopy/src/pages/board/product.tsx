import { _id, url } from "@/types/board";
import type { ProductType, ProductDetailResponse } from "@/types/board";
import { useEffect, useState } from "react";
import "@/pages/style/product.css";

function Product() {
  const [product, setProduct] = useState<ProductType | null>(null);

  const requestInfo = async () => {
    try {
      const response = await fetch(`${url}/products/${_id}`, {
        method: "GET",
        headers: {
          "client-id": "openmarket",
        },
      });

      if (!response.ok) {
        throw new Error("상품 정보를 불러오지 못함.");
      }

      const data: ProductDetailResponse = await response.json();
      setProduct(data.item);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestInfo();
  }, []);

  if (!product) {
    return <div className="loading">로딩 중...</div>;
  }

  return (
    <div className="product-container">
      <div className="product-image">
        {product.mainImages.length > 0 && (
          <img
            src={product.mainImages[0].path}
            alt={product.mainImages[0].name}
          />
        )}
      </div>

      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>

        <div className="product-badges">
          {product.extra.isBest && <span className="badge best">BEST</span>}
          {product.extra.isNew && <span className="badge new">NEW</span>}
        </div>

        <div className="product-price">
          <span className="price-label">판매가</span>
          <span className="price-value">
            {product.price.toLocaleString()}원
          </span>
        </div>

        <div className="product-seller">
          <span className="seller-label">판매자</span>
          <span className="seller-name">{product.seller.name}</span>
        </div>

        <div className="product-shipping">
          <span className="shipping-label">배송비</span>
          <span className="shipping-value">
            {product.shippingFees === 0
              ? "무료배송"
              : `${product.shippingFees.toLocaleString()}원`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;