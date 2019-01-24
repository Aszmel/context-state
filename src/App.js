import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "Aszmel",
    age: 100,
    cool: true
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growOneYear: () => this.setState({ age: this.state.age + 1 }),
          downOneYear: () => this.setState({ age: this.state.age - 1 })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {context => (
            <>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.growOneYear}>+1 Year</button>
              <button onClick={context.downOneYear}>-1 Year</button>
            </>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

const Family = props => {
  return (
    <div className="family">
      <Person />
    </div>
  );
};

class App extends Component {
  state = {
    name: "Aszmel",
    age: 100,
    cool: true
  };
  render() {
    return (
      <MyProvider>
        <div className="App">
          <p>I'm the app</p>
          <Family name={this.state.name} />
        </div>
      </MyProvider>
    );
  }
}

export default App;
