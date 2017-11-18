import React, { Component } from 'react';
import TimerForm from './TimerForm';


class ToggleableTimerForm extends Component {
  render() {
    if(this.props.isOpen){
      return(
        <TimerForm />
      );
    }else{
      return(
        <div className='ui basic content center aligned segmet'>
          <button className='ui basic button icon'>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      );
    }
  }
}

export default ToggleableTimerForm;
