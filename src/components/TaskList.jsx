import React from 'react';
import { useSelector } from 'react-redux';

export const TaskList = () => {

    const tasks = useSelector(state => state.tasks)
    

    return (
        <>
            {
                tasks.map( task => (
                    <div key={task.id}>
                        <h3>{ task.title }</h3>
                        <h3>{ task.description }</h3>
                    </div>
                ))
            }
        </>
    )
}
