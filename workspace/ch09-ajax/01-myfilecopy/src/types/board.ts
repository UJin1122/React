// 코드 참고: https://github.com/FEBC-15/react/blob/main/workspace-ins/ch12-app/todolist/06-api/src/types/todo.ts
// API 참고: https://fesp-api.koyeb.app/market/apidocs/#/게시판
export const url = "https://fesp-api.koyeb.app/market";
export const _id = 1;

export interface Post {
  _id: number;
  title: string;
  content: string;
}

export interface CommentUser {
  _id: number;
  name: string;
}

export interface Comment {
  _id: number;
  content: string;
  user: CommentUser;
  createdAt: string;
  updatedAt: string;
  like?: number;
}

// 상품 상세 조회 타입
export interface MainImage {
  path: string;
  name: string;
}

export interface AddressBook {
  id: number;
  name: string;
  value: string;
}

export interface SellerExtra {
  confirm: boolean;
  birthday: string;
  membershipClass: string;
  addressBook: AddressBook[];
}

export interface Seller {
  _id: number;
  email: string;
  name: string;
  phone: string;
  address: string;
  type: string;
  loginType: string;
  createdAt: string;
  updatedAt: string;
  extra: SellerExtra;
}

export interface ProductExtra {
  isNew: boolean;
  isBest: boolean;
  category: string[];
  sort: number;
}

export interface ProductType {
  _id: number;
  seller_id: number;
  price: number;
  shippingFees: number;
  show: boolean;
  active: boolean;
  name: string;
  quantity: number;
  buyQuantity: number;
  mainImages: MainImage[];
  content: string;
  createdAt: string;
  updatedAt: string;
  extra: ProductExtra;
  seller: Seller;
  replies: Comment[];
  bookmarks: number;
  rating: number;
  myBookmarkId: number;
  options: unknown[];
}

export interface ProductDetailResponse {
  ok: number;
  item: ProductType;
}
