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
  countUp: (step) => {
    const count = get().count;
    const newCount = count + step;
    const newState = { count: newCount };
    set(newState);
  },
  countReset: () => set({ count: 0 }),
  countDown: (step) => { 
    const count = get().count;
    const newCount = count - step;
    const newState = { count: newCount };
    set(newState);
   },
   user:{ name:'dd', age: 11}
}));

export default useCounterStore;