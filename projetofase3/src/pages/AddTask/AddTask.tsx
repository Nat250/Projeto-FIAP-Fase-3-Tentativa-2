import React, { useState } from 'react';
import styled from 'styled-components';

interface AddTaskProps {
    onAddTask: (taskName: string) => void;
}

const Form = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 50vw;
`;

const Input = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: red;
    }

    @media (max-width: 600px) {
        display: none;
    }
`;

const AddTask: React.FC<AddTaskProps> = ({ onAddTask}) => {
    const [taskName, setTaskName] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddTask(taskName);
        setTaskName('');
    };
    return (
        <form onSubmit = {handleSubmit}>
            <input
                type = "text"
                value = {taskName}
                onChange = {(e) => setTaskName(e.target.value)}
                placeholder = "Adicione uma nova tarefa"
            />
            <button type = "submit"> Adicionar </button>
        </form>
    );
}

export default AddTask;