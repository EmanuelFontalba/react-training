import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {
  render() {
    return (
      <div id="timers">
        <div className="column">
          <EditableTimer
            title='Learn React'
            proyect='Web Domination'
            elapsed='8986300'
            runningSince={null}
            editFormOpen={false}
          />

          <EditableTimer
            title='Learn extreme ironing'
            proyect='World Domination'
            elapsed='3890985'
            runningSince={null}
            editFormOpen={true}
          />
        </div>
      </div>
    );
  }
}

export default EditableTimerList;
