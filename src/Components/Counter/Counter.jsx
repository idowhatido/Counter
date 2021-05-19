import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {

  constructor(){
    super();
    this.state={
      counter : 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render(){
    return(
      <div className="COunter">
        <CounterButton by={1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
        <CounterButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
        <CounterButton by={10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
        <h1>{this.state.counter}</h1>
        <ResetButton resetMethod = {this.reset}/>
      </div>
    );
  }

  increment(by){
    this.setState(
      (prevState)=>{
        return{
          counter:prevState.counter + by
        }
      }
       
    );

  }

  decrement(by){
    this.setState((prevState)=>{
      return{
        counter:prevState.counter - by
      }
    }
     );
  }

  reset(){
    this.setState(()=>{
      return{
        counter:0
      }
    }
     );
  }


}

class CounterButton extends Component {

  constructor(){
    super();
    this.state={
      counter : 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div className="CounterButton">
        <button className = "button" onClick={this.increment}>+{this.props.by}</button>
        <button className="button" onClick={this.decrement}>-{this.props.by}</button>
      </div>
    );
  }

  increment(){

    this.props.incrementMethod(this.props.by)
  }
  decrement(){
    this.props.decrementMethod(this.props.by)
  }

}

CounterButton.defaultProps={
  by:1
}

CounterButton.propTypes={
  by:PropTypes.number
}

class ResetButton extends Component{

  constructor(){
    super();
    this.state={
      counter : 0
    }
    this.reset = this.reset.bind(this);
  }
  render(){
    return(
      <div className="ResetButton">
        <button className="button" onClick={this.reset}>Reset</button>
      </div>
    )
  }

  reset(){
    this.props.resetMethod()
  }
}



export default Counter;