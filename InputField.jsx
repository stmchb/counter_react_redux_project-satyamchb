import { useRef } from "react";
import { useDispatch } from "react-redux";

const inputField = () => {

const dispatchValue = useDispatch()

const refrence = useRef()

const handleAddButton = () =>{
  const valueElement = refrence.current.value;
  dispatchValue({type:'ADD', payload:{
   num: valueElement,
  }
})

}

  return <> <div className="inputFil"> <input className="inputField" type="text" placeholder="Enter the Value" ref={refrence}></input>
  </div>
    <div className="forInputButton">
      <button onClick={handleAddButton} type="button" className="btn btn-info">Add</button>
    </div>
  </>
}

export default inputField;