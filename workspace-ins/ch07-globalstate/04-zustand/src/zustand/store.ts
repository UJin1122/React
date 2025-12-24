import { create } from "zustand";

interface CounterState {
  count: number;
  countUp: (step: number) => void;
  countDown: (step: number) => void;
  countReset: () => void;
  user: { name: string, age: number };
}

const useCounterStore = create<CounterState>((set, get) => ({
  count: 5,
  user: { name: 'haru', age: 5 },
  // set의 인자값으로 새로운 상태를 지정
  // count 값만 가진 객체를 지정하면 count만 변경되고 다른 상태값을 변경되지 않음
  countReset: () => set({ count: 0 }),
  countDown: (step) => {
    const count = get().count; // 현재 count 값
    let newCount = count - step; // 새로운 count 값
    if(newCount < 0){
      newCount = 0;
    }
    const newState = { count: newCount }; // 새로운 상태값
    set(newState); // 새로운 상태로 변경
  },
  countUp: (step) => set({ count: get().count + step }),
}));

export default useCounterStore;