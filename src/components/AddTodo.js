import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ''
    }

    submit = (e) => {
        e.preventDefault();
        this.props.addTodos(this.state.title);
        this.setState({ title: ''});
    }

    onChanging = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.submit} style={{ display: 'flex', paddingTop: '10px'}}>
                <input type="text" name="title" placeholder="Add Todo" 
                className="addtodo"
                value={this.state.title}
                onChange = {this.onChanging}
                />

                <input type="submit" value="Submit" className="btn" 
                style={{flex: '0.7'}} />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodos: PropTypes.func.isRequired
}


export default AddTodo;