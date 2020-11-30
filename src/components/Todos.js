import React from 'react';
import '../fontello/css/fontello.css';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
   
    render(){ 
   
    return this.props.todosl.map((todo) => (
    <Todoitem key={todo.id} todoit={todo} markCompl={this.props.markComp} delTodo={this.props.delTodos} />
    ))

   }

}

// PropTypes
Todos.propTypes = {
    todosl: PropTypes.array.isRequired,
    markComp: PropTypes.func.isRequired,
    delTodos: PropTypes.func.isRequired
}

export default Todos;