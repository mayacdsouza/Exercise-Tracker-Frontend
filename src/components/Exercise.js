import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import {MdModeEdit} from 'react-icons/md';

function Exercise({ exercise, onDelete, onEdit}) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><MdModeEdit onClick={() => onEdit(exercise) }/></td>
            <td><MdDeleteForever onClick={() => onDelete(exercise._id) }/></td>
        </tr>
    );
}

export default Exercise;