import { useDispatch } from "react-redux";
 
 

const Controls = () => {
  const dispatchValue = useDispatch()

  const handleIncreament = () =>{
    dispatchValue({type:"INCREAMENT"});
  }

  const handleDecreament = () =>{
    dispatchValue({type:"DECREAMENT"});
  }

  const handleToggle = () =>{
   dispatchValue({type:"TOGGLE"})
  }

  return <> 
  <div className="button-container">
   <button onClick={handleIncreament} style={{margin:"10px"}} type="button" className="btn btn-primary">+</button>

   <button onClick={handleDecreament} type="button" className="btn btn-secondary">-</button>

   <button onClick={handleToggle} style={{margin:"10px"}} type="button" class="btn btn-warning">Toggle</button>
  </div>
  </>
}

export default Controls;