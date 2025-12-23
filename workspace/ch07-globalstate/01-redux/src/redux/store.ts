// 3. Store 생성

// Redux에서는 redux-toolkit 사용을 권잔
import { createStore } from "redux";
import counterReducer from "@/redux/counterReducer";

const store = createStore(counterReducer);

export type RootState = ReturnType<typeof store.getState>

export default store;