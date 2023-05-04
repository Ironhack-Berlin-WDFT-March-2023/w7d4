import "./App.css"
import { useState } from "react"
import Timer1 from "./components/Timer1"
import Timer2 from "./components/Timer2"

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <Timer1 />
      {/* {show && <Timer2 />} */}
    </div>
  )
}

export default App
