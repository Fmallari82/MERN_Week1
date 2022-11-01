import React from 'react'
import { useState } from 'react';

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [newTodoList, setNewTodoList] = useState([])



    
    const handleSubmit = (e) => {
        console.log("New todo list created")
        e.preventDefault();
        let todoObj = {
            todo: todo,
            complete: false
        }

        setNewTodoList([...newTodoList, todoObj])
        setTodo('');
    };
    
    const taskDelete = (deleteIndex) => {
        const filteredTodos = newTodoList.filter((t,i)=>{
            return i !== deleteIndex;
        });
        setNewTodoList(filteredTodos);
    }
    const handleComplete = (index) => {
        const updatedTodos = newTodoList.map((t, i) => {
            if( index === i) {
                t.complete = !t.complete;
                // best practice use this to avoid mutating directly
                // const updatedTodo = { ...t, complete: !t.complete}
                // return updatedTodo;
            }
            return t;
        });
        setNewTodoList(updatedTodos)
    }


    return (
        <>
        <h1>Todo List</h1>
            <form onSubmit={handleSubmit} >
                <input
                    onChange={(e) => setTodo(e.target.value)} type="text" value={todo}
                ></input>
                <br />
                <input type="submit" value="add" />
            </form>
            {
                newTodoList.map((t,i) => {
                    const todoClasses = [];
                    if (t.complete) {
                        todoClasses.push("strike")
                    }
                    return (
                        <div key={i}>  
                        <span className={todoClasses.join(" ")}>{t.todo}</span>
                        <input onChange={(e) => {
                            handleComplete(i);
                        }} checked={t.complete} type="checkbox" />
                        <button onClick={(e) => {taskDelete(i)}}>Remove</button>                  
                        </div>
                    )
                }
                )
            }
        </>
    );
};


export default TodoList