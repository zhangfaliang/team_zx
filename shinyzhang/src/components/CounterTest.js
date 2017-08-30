import React,{Component,PropTypes} from 'react';

class CounterTest extends Component{
  static propTypes = {
    counter:PropTypes.number,
    deComment:PropTypes.func,//减法
    inComment:PropTypes.func,//加法
  }
  static defaultProps={
    counter:'4'
  }
  render(){
    const { counter,deComment,inComment } =this.props;
    return(
      <div>
      times {counter}
      <button onClick={inComment&&inComment}>+</button>
      <button onClick={deComment&&deComment}>-</button>
      </div>
    )
  }

}

export default CounterTest;