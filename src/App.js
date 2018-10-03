import React, { Component } from "react";
import { makeCalendar } from "./calendar/make-calendar";
import { YEARS, MONTHS, DAYS } from  './calendar/years-months-days';
import "./App.css";

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
      calendar: makeCalendar(this.state.year, month)
    });
  }

  handleYearChange(e) {
    const year = Number(e.target.value);

    this.setState({
      year,
      calendar: makeCalendar(year, this.state.month)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="MonthYearInput">
          <select onChange={this.handleYearChange}>
            {
              YEARS.map((year, i) => 
                <option value={year} key={i}>{year}</option>
              )
            }
          </select>

          <select onChange={this.handleMonthChange}>
            {
              MONTHS.map((month, i) => 
                <option value={i + 1} key={i}>{month}</option>
              )
            }
          </select>
        </div>

        <div className="Info">(use google chrome for proper print)</div>

        <div className="MonthYearContainer">
          <span className="Month">{this.state.calendar.month} &nbsp;</span>
          <span className="Year">{this.state.year}</span>
        </div>

        <div className="DatesTableContainer">
          <table className="DatesTable">
            <thead className="DaysContainer">
              <tr>
                {
                  DAYS.map((day, i) => <th className="Day" key={i}>{day}</th>)
                }
              </tr>
            </thead>
            <tbody>
                {this.state.calendar.dates.map((week, i) => (
                    <tr className="Week" key={i}>
                      {week.map((date, _i) => (
                        <td
                          className={"Date " + (date === 0 ? "empty" : "")}
                          key={_i}
                        >
                          {date === 0 ? "" : date}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
