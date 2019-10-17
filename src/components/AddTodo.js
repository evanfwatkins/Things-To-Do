import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    render() {
        return (
           <form style={{ display: 'flex' }}>
               <input 
               style={{ flex: '10', padding: '10'}}
               type="text"
                name="title" 
                placeholder="Add Todo ..."
                />
                <input
                type="submit"
                value="Submit"
                className="btn"
                style={{flex: '1'}}
                
                />
           </form>
        )
    }
}

// Prop Types
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default AddTodo
