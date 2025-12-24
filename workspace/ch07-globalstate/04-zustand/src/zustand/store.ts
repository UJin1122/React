import { create } from "zustand";

interface CounterState{
  count: number;
  countUp: (step:number) => void;
  countReset: () => void;
  countDown: (step:number) => void;
  user: { name:string, age:number };
}

const useCounterStore = create<CounterState>((set, get) => ({
  count: 5,
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
   user:{ name:'dd', age: 11}
}));

export default useCounterStore;