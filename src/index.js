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
      addStudents: 0,
      wListStudents: 8,
      addWListStudents: 0
    };
  }


  // This increments the admitted students by one
  incrementOne = () => {
    this.setState({
      students: this.state.students + 1
    });
  }

  // This increments the waitlisted students by one
  incrementWLone = () => {
    this.setState({
      wListStudents: this.state.wListStudents + 1
    });
  }

  // This increments the admitted students in multiples
  increment = () => {
    this.setState({
      students: this.state.students + parseInt(this.state.addStudents)
    });
  }

  // This increments the waitlisted students in multiples
  incrementWL = () => {
    this.setState({
      wListStudents: this.state.wListStudents + parseInt(this.state.addWListStudents)
    });
  }

  render() {
    return (
      <div>
        <h1>Enrolled Students: {this.state.students}</h1>
        <button onClick={this.incrementOne.bind(this)}>Add 1 Enrolled Student</button>
        <br />
        <h3>Add Multiple Enrolled Students</h3>
        <input
          type="number"
          onChange={event => this.setState({ addStudents: event.target.value })}
          value={this.state.addStudents}
        />
        <button onClick={this.increment.bind(this)}>Increase Students</button>
        <br />
        <h1>Waitlisted Students: {this.state.wListStudents}</h1>
        <button onClick={this.incrementWLone.bind(this)}>Add 1 Waitlisted Student</button>
        <br />
        <h3>Add Multiple Waitlisted Students</h3>
        <input
          type="number"
          onChange={event => this.setState({ addWListStudents: event.target.value })}
          value={this.state.addWListStudents}
        />
        <button onClick={this.incrementWL.bind(this)}>Increase Students</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
