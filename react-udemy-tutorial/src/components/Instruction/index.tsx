import React from 'react';
import './style.css';

export const Instruction: React.FC = () => {
    return (
        <div className="instruction-container">
            <h1>Create Note App Using Redux</h1>
            <ol>
                <li>Create reusable <strong>Button Component</strong>.</li>
                <li>Create reusable <strong>Input Component</strong>.</li>
                <li>Create reusable <strong>Textarea Component</strong>.</li>
                <li>Create reusable <strong>Modal Component</strong>.</li>
                <li>Use <strong>Redux</strong> to do <strong>CRUD</strong> for <strong>Note App</strong>.</li>
                <li>Use Modals to view/add/edit a Note.</li>
                <li>Show a prompt when deleting a note.</li>
            </ol>
        </div>
    )
}