import React from "react";
import ReactDOM from "react-dom";

const App = props => {
  return <NumberOfStudents />;
};

class NumberOfStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: 87,
      addStudents: 0
    };
  }

  incrementOne = () => {
    this.setState({
      students: this.state.students + 1
    });
  }


  increment = () => {
    this.setState({
      students: this.state.students + parseInt(this.state.addStudents)
    });
  }

  render() {
    return (
      <div>
        <h1>Enrolled Students: {this.state.students}</h1>
        <button onClick={this.increment.bind(this)}>Add 1 Enrolled Student</button>
        <br />
        <h3>Add Multiple Enrolled Students</h3>
        <input
          type="number"
          onChange={event => this.setState({ addStudents: event.target.value })}
          value={this.state.addStudents}
        />
        <button onClick={this.increment.bind(this)}>Increase Students</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
