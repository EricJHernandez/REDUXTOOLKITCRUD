import React from 'react';
import { useSelector } from 'react-redux';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

export const App = () => {



	return (
		<>
			<TaskForm/>
			<TaskList/>
		</>
	)
}
