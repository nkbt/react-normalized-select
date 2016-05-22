import React from 'react';
import Select from '../..';
import css from './App.css';


const App = React.createClass({
  getInitialState() {
    return {
      single: 'apples',
      multi: ['apples']
    };
  },


  renderOptions() {
    return ['apples', 'oranges', 'bananas', 'kiwis']
      .map(option => <option key={option} value={option}>{option}</option>);
  },


  render() {
    return (
      <div className={css.app}>
        <h1>react-normalized-select</h1>
        <div>
          <h2>Single choice select</h2>
          <p>(drop-in replacement)</p>
          <label>
            <Select
              value={this.state.single}
              onChange={e => this.setState({single: e.target.value})}>
              {this.renderOptions()}
            </Select>
          </label>

          <pre>this.state.single = {JSON.stringify(this.state.single, null, '  ')}</pre>
        </div>

        <div>
          <h2>Multi-choice select</h2>
          <label>
            <Select multiple={true}
              size={5}
              value={this.state.multi}
              onChange={e => this.setState({multi: e.target.value})}>
              {this.renderOptions()}
            </Select>
          </label>

          <pre>this.state.multi = {JSON.stringify(this.state.multi, null, '  ')}</pre>
        </div>
      </div>
    );
  }
});


export default App;
