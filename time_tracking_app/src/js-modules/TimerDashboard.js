import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import helpers from './helpers';
const uuidv4 = require('uuid/v4'); //instalado con npm


class TimerDashboard extends Component {
  state = {
    timers: [
      {
        title: 'Practice squad',
        project: 'Gym Chores',
        id: uuidv4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },{
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuidv4(),
        elapsed: 1273998,
        runningSince: null,
      }
    ],
  };

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  }

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  }

  createTimer = (timer) => {
    const newTimer = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(newTimer),
    });
  }

  updateTimer = (attrs) => {
    this.setState({
      timers: this.state.timers.map((timer)=>{
        if(timer.id === attrs.id){
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        }else{
          return timer;
        }
      })
    });
  }

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  }

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId),
    });
  }

  handleStartClick = (timerId) => {
    this.startTimer(timerId);
  }

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  }

  startTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if(timer.id === timerId){
          return Object.assign({}, timer, {
            runningSince: now,
          });
        }else{
          return timer;
        }
      }),
    });
  }

  stopTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if(timer.id === timerId){
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        }else{
          return timer;
        }
      }),
    });
  }

  render() {
    console.log(uuidv4());
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
          <ToggleableTimerForm
            isOpen={true}
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}

export default TimerDashboard;
