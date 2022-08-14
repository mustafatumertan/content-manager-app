import {CompA, CompC} from './ComponentRepo';
import React, {useState, useEffect} from 'react'

function Home() {

	// [stateValue, mutateState]
	// const stateValue = useState("mustafa");
	const [stateValue, setStateValue] = useState(10);
	const [otherValue, setOtherValue] = useState(100);

	useEffect(() => {
		console.log("Use Effect Called for Other Value");
	}, [])
	

  	return (
   	<div>
   		Value: <h1>{stateValue}</h1>
			<button onClick={() => setStateValue(stateValue + 1)}>+</button>
			<button onClick={() => setStateValue(stateValue - 1)}>-</button>
			<hr/>
			Other Value: <h1>{otherValue}</h1>
			<button onClick={() => setOtherValue(otherValue + 10)}>+</button>
			<button onClick={() => setOtherValue(otherValue - 10)}>-</button>
			<hr/>
			<CompA 
				myProp1={stateValue}
				myProp2="My Custom Value"
				myProp3={true}
				MyProp4={() => <div>New JSX Passed as a Prop</div>}
				myProp5={{item1: 2, item2: 7}}
			/>
   	</div>

  	)
}

export default Home;