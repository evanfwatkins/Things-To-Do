import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/Layout/AddTodo';
import About from './components/Pages/About';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';
import Axios from 'axios';


class App extends React.Component {
  state = {
    todos: []
  } 

componentDidMount() {
  Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then(res => this.setState({ todos: res.data }))
  }


  // Add Todo
  addTodo = (title, id) => {
    axios.put('https://jsonplaceholder.typicode.com/todos', {
      id,
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    
  }

  // Toggle Complete 
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  //  Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
