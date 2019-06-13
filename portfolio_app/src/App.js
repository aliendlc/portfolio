import React, { Component } from 'react';
// {Component} .. Object Deconstruction
// import Form from './components/Form';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentView: 'todo',
            completedTasks: [],
            todoTasks: []
        }
        // this.handleView = this.handleView.bind(this)
    }
      // run one time only lifecycle method...
      // componentDidMount(){
      //     this.fetchTasks()
      //     console.log(this.state);
      // }
    render(){
        // lifecycle
        // 3 states: mounting..updating..unmounting
        return (
          <div className="main-container">
              <h1>PORTFOLIO</h1>
          </div>
        );
    }
}

export default App;
