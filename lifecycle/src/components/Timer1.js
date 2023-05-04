import { useState } from "react"
 
function Timer1() {
  const [count, setCount] = useState(0)

  setInterval(() => {
    setCount(count + 1)
  }, 1000)

  console.log("Timer1 is rendered")
 
  return (
    <div className="Timer1">
      <h2>Timer 1</h2>
 
      <h3>{count}</h3>

      <button onClick={() => setCount(count - 1)}> - </button>
			<button onClick={() => setCount(count + 1)}> + </button>
    </div>
  )
}

export default Timer1
