
export function CompA() {
    return (
      <>
        <h1>Component A</h1>
        <p>Hello Component A</p>
        <CompB/>
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