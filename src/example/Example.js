import React from 'react';
import Select from '..';


const App = React.createClass({
  render() {
    return (
      <div>
        <Select />
      </div>
    );
  }
});


React.render(<App />, document.body);
