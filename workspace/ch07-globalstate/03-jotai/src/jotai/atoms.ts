import { atom } from "jotai";

export const countAtom = atom(5);

export const doubleCountAtom = atom((get)=> get(countAtom)*2);
export const dadableCountAtom = atom((get)=> get(doubleCountAtom)*2);


export const countDownAtom = atom(
  null, // getter함수가 null일 경우 "읽기 불가능"을 의미하므로 쓰기 전용
  (get, set, step : number) => {
    const count = get(countAtom);
    let newCount = count - step;
    if(newCount < 0){
      newCount = 0;
    }
    set(countAtom, newCount);
  }
);