import React from "react";
import Day from "./day";

var Week = React.createClass({
  displayName: "Week",

  propTypes: {
    day: React.PropTypes.object.isRequired,
    onDayClick: React.PropTypes.func,
    minDate: React.PropTypes.object,
    maxDate: React.PropTypes.object,
    excludeDates: React.PropTypes.array,
    includeDates: React.PropTypes.array,
    selected: React.PropTypes.object,
    startDate: React.PropTypes.object,
    endDate: React.PropTypes.object
  },

  handleDayClick(day) {
    if (this.props.onDayClick) {
      this.props.onDayClick(day);
    }
  },

  renderDays() {
    const startOfWeek = this.props.day.clone().startOf("week");
    return [0, 1, 2, 3, 4, 5, 6].map(offset => {
      const day = startOfWeek.clone().add(offset, "days");
      return (
        <Day
          key={offset}
          day={day}
          onClick={this.handleDayClick.bind(this, day)}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
          excludeDates={this.props.excludeDates}
          includeDates={this.props.includeDates}
          selected={this.props.selected}
          startDate={this.props.startDate}
          endDate={this.props.endDate} />
      );
    });
  },

  render() {
    return (
      <div className="datepicker__week">
        {this.renderDays()}
      </div>
    );
  }

});

module.exports = Week;
