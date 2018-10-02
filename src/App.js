import React, { Component } from 'react';
import { makeCalendar } from './make-calendar.js';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    this.state = {
      year,
      month,
      calendar: makeCalendar(year, month)
    };

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);

  }

  handleMonthChange(e) {

    const month = Number(e.target.value);

    this.setState({
      month,
      calendar: makeCalendar(
        this.state.year,
        month
      )
    });

  }

  handleYearChange(e) {

    const year = Number(e.target.value);

    this.setState({
      year,
      calendar: makeCalendar(
        year,
        this.state.month
      )
    });

  }

  render() {
    return (
      <div className="App">

        <div className="MonthYearInput">
          <select onChange={this.handleYearChange}>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>

          <select onChange={this.handleMonthChange}>
            <option value="10">
              October
            </option>
            <option value="11">
              November
            </option>
          </select>
        </div>

        <div className="MonthYear">
          <span className="Month">
            {this.state.calendar.month} &nbsp;
          </span>
          <span className="Year">
            {this.state.year}
          </span>
        </div>

        <div className="DatesTable">

          {this.state.calendar.dates.map((week, i) =>

            <div className="Week" key={i}>
              {week.map((date, _i) => 
                <div className={'Date ' + ((date === 0) ? 'empty' : '')} key={_i}>
                  {(date === 0) ? '' : date}
                </div>
              )}
            </div>

          )}
        </div>
      </div>
    );
  }
}

export default App;

