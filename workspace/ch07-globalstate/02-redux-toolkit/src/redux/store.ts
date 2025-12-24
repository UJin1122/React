// TODO 3. Store 생성

// Redux에서는 redux-toolkit 사용을 권장
import counterSlice from "@/redux/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,
    // userStore: userSlice.reducer,
  }
});

// store.getState가 리턴하는 타입을 RootState 타입으로 지정
export type RootState = ReturnType<typeof store.getState>;

export default store;