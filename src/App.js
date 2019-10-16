import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/Layout/AddTodo';
import About from './components/Pages/About';
import uuid from 'uuid';

import './App.css';


class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Make this app',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Grociers for meal prep',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Do my laundry',
        completed: false
      },
    ]
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
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  // Add Todo
  addTodo = (title) => {
    console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
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
