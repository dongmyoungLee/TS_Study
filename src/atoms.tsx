import { atom, selector } from "recoil";


export const minuteState = atom({
  key : "minutes",
  default : 0
})

export const hourSelector = selector<number>({
  key : "hours",
  
  get : ({get}) => {
    //get은 atom의 값을 가져오게끔 하는 함수이다.
    const minutes = get(minuteState)
    return minutes / 60 ;
    // 어떤값을 return 하든 그 값은 hourSelector의 값으로들어감.
  },
  set: ({set}, newValue) => {
    const minutes = Number(newValue) * 60
    set(minuteState, minutes)
  }
  
})