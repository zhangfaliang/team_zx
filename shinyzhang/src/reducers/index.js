//qa
const initSatae = 0;
export default (state=initSatae,action)=>{
  switch (action.type) {
    case 'DECREMENT' :
      return --state;
      case 'INCREMENT':
      return ++state;
    default:
    return state

  }
}
