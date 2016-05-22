import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


export const NormalizedSelect = React.createClass({
  propTypes: {
    multiple: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    children: React.PropTypes.node
  },


  shouldComponentUpdate,


  onChange(event) {
    if (!this.props.multiple) {
      this.props.onChange(event);
      return;
    }
    this.props.onChange({
      ...event,
      target: {
        ...event.target,
        value: Array.prototype.slice.call(event.target.options, 0)
          .filter(o => o.selected)
          .map(o => o.value)
      }
    });
  },


  render() {
    const {onChange, ...props} = this.props;

    return onChange ? <select {...props} onChange={this.onChange} /> : <select {...props} />;
  }
});
