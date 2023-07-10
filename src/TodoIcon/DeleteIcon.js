import React from 'react';
import { TodoIcon } from './Index.js';

function DeleteIcon({ onDelete }) {
    return (
    <TodoIcon
        type="delete"
        color="gray"
        onClick={onDelete}
    />
    );
}

export { DeleteIcon };