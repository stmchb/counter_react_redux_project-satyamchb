import { useSelector } from "react-redux";

const CounterHeading = () => {

  const counter = useSelector(store=>store.counter)
  
  return <h1>Counter:{counter}</h1>
}
export default CounterHeading;