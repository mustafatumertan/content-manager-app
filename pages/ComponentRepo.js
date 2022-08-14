import React, {useEffect} from 'react';

const ArrowFunction = () => {
  return (
    <div>
      <h1>I am arrow function</h1>
    </div>
  );
}

const ArrowFunction2 = _ =>
  <div>
  <h1>I am arrow function 2</h1>
  </div>

export function CompA(props) {
    
    const {myProp1, myProp2, myProp3, MyProp4, myProp5} = props;
    
    useEffect(() => {
      console.log("Component A Use Effect");
    })

    return (
      <>
        <h1>Component A</h1>
        <p>Hello Component A</p>
        <div>My Prop1: {myProp1}</div>
        <div>My Prop2: {myProp2}</div>
        <div>My Prop3: {myProp3.toString()}</div>
        <div>My Prop4: {<MyProp4/>}</div>
        <div>My Prop5: {JSON.stringify(myProp5)}</div>


      </>
    )
  }
  
  export function CompB() {
    return (
      <>
        <h1>Component B</h1>
        <p>Hello Component B</p>
      </>
    )
  }

  export class CompC extends React.Component {

    constructor() {
      super();

      this.state = {
        myValue: 10
      }
    }

    changeState(newVal) {
      this.setState({
        myValue: newVal
      });
    }


    render() {
      
      const {myValue} = this.state;
      return (
        <>
          <h1>Component C</h1>
          Current Value: <h1>{this.state.myValue}</h1>
          <button onClick={() => this.changeState(myValue + 1)}>+</button>
			    <button onClick={() => this.changeState(myValue - 1)}>-</button>
        </>
      );
    }
  }