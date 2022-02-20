import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minute, setMinute] = useRecoilState(minuteState)
  const [hours, setHours] = useRecoilState(hourSelector)
  const onMinuteChange = (event:React.FormEvent<HTMLInputElement>) => {
    setMinute(+event.currentTarget.value)
  }
  const onHoursChange = (event:React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value)
  }

  return (
    <div>
      <input value={minute} onChange={onMinuteChange} type="number" placeholder="Minutes" />
      <input value={hours} onChange={onHoursChange} type="number" placeholder="Hours" />
    </div>
  )
}


export default App;