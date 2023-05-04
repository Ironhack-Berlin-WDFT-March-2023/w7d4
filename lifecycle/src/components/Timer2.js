import { useState, useEffect } from "react"

function Timer2() {
	const [count, setCount] = useState(0)
		
	useEffect(() => {
		// useEffect() with an empty dependency array - [] - is called only once when the component is MOUNTED
		console.log("Timer2 is mounted")
		const intervalId = setInterval(() => {
			setCount(prevCount => prevCount + 1)
		}, 1000)

		// The returned function is called when the component is UNMOUNTED
		return () => {
			console.log("Timer2 is unmounted")
			clearInterval(intervalId)
		}
	}, [])

	// This useEffect() is only called when the "count"-variable is UPDATED
	useEffect(() => {
		console.log("Timer2 is updated")
		document.title = count
	}, [count])

	return (
		<div className="Timer2">
			<h2>Timer 2</h2>
			<h3>{count}</h3>
		</div>
	) 
}

export default Timer2
