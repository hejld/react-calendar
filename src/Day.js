/** @jsx React.DOM */
"use strict";

var React = require('react');

var propTypes = require('./propTypes');
var ClassNameMixin = require('./ClassNameMixin');

var Day = React.createClass({
  mixins: [propTypes.Mixin(true,
    'Day'
  ), ClassNameMixin],

  makeHeader: function (classes) {
    if (this.getPropOrCtx('dayHeader')) {
      return (
        <header className={classes()}>
          {this.porps.date.format(this.getPropOrCtx('dayHeaderFormat'))}
        </header>
      );
    } else {
      return null;
    }
  },

  makeBody: function (classes) {
    return (
      <span className={classes()}>
        {this.props.date.format(this.getPropOrCtx('dayFormat'))}
      </span>
    );
  },

  makeAgenda: function (classes) {
    if (this.getPropOrCtx('dayAgenda')) {
      return (
        <div className={classes()}>
        </div>
      );
    } else {
      return null;
    }
  },

  render: function () {
    return React.withContext(this.getCalendarCtx(), () => {
      var classes = this.className({
        modifiers: this.props.modifiers,
        classes: this.props.classes
      });

      return (
        <div className={classes()}>
          {this.makeHeader(classes.descendant('header'))}
          {this.makeBody(classes.descendant('body'))}
          {this.makeAgenda(classes.descendant('agenda'))}
        </div>
      );
    });
  }
});

module.exports = Day;