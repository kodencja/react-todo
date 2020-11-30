import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../fontello/css/fontello.css';

// poniżej wyłuskujemy wartości właściwości 'Todoitem' nadaną w Todos.js
class Todoitem extends Component {

getStyle = () => {
    return {
        backgroundColor: '#f4f4f4', 
        color: '#1a1a1a',
        padding: '5px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todoit.completed ? 'line-through' : 'none'
    }
}

    render() {
    // DESTRUCTURING of an OBJECT
    const {id, title, completed} = this.props.todoit;
        return (

            <div style={this.getStyle()}>
                <p>

                    <input type ="checkbox" className="boxcheck" checked={completed} onChange={this.props.markCompl.bind(this, id)} /> {' '} 
                    { title }
                    <button onClick={this.props.delTodo.bind(this,id)} className="btn-cancel"><i className="icon-cancel"/></button>
                </p>
            </div>
        )
    }
}


// PropTypes - określenie rodzaju właściwości obiektu - property types; here it is an 'object' and is 'required'
Todoitem.propTypes = {
    todoit: PropTypes.object.isRequired,
    markCompl: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

// const btnStyle = {
//     background: '#ff0000',
//     color: '#fff',
//     border: 'none',
//     padding: '5px 9px',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     float: 'right',
//     fontSize: '100px'
// };


export default Todoitem;