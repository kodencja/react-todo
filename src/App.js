import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import './fontello/css/fontello.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

class App extends React.Component {
  state = {
    todos: [ ]
  }


  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data}));
  }

  // funkcja mająca za zadanie zmianę wartość właściwości 'completed' po naciśnięciu w checkbox
  // markComplete(id){
  markComplete = (id) => {
    // console.log(id);
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        // here we toggle the value of 'completed' property; if it's 'true' it's gonna be changed to 'false' and if it's 'false' it's gonna be changed to 'true'
        todo.completed = !todo.completed;
      }
      return todo;
    })
  })
  }

  deleteTodo = (id) => {
axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
.then(res => {  this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id ) ]   }); });

  }

  addTodo = (title) => {
    let lastid;
    
    lastid = this.state.todos[this.state.todos.length-1].id+1
    // console.log(lastid);

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      // id: lastid,
      // id: uuidv4(),
      title,
      completed: false
    }).then( (res) => {
      console.log(res.data);
      res.data.id = lastid;
      console.log(res.data.id);
      this.setState({ todos: [...this.state.todos, res.data]
      })    
    });
    
  }

  render(){
  return (
    <Router>
      <div className="App">

        <div className="container">
        <Header />
        
        <Route exact path="/" render={ props => (
          <React.Fragment>
            <AddTodo addTodos={this.addTodo}  />
            <Todos todosl = {this.state.todos} markComp={this.markComplete} delTodos={this.deleteTodo} />
          </React.Fragment>
        )} />

        <Route path="/about" component={ About} />

        </div>

      </div>
    </Router>
  );
  }

}

export default App;
