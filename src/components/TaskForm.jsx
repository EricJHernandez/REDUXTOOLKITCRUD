import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';

export const TaskForm = () => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const dispatch = useDispatch();

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask(task))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='title'
                    placeholder='Title'
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder='Description'
                    onChange={handleChange}
                ></textarea>
                <button>Save</button>
            </form>
        </>
    )
}
