import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';	

function HomePage({setExerciseToEdit}) {

    const navigate = useNavigate();
    const [exercises, setExercises] = useState([]);

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
        const getResponse = await fetch('/exercises');
        const exercises = await getResponse.json();
        setExercises(exercises);
        } else {
        console.error(`Failed to delete exercise with id = ${_id}, status code = ${response.status}`)
        }
    }	

    const onEdit = async exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit);
        navigate("/edit-exercise");
    }

    const loadExercises = async() => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);       
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>List of Exercises</h2>
            <ExerciseList   exercises={exercises} 
                        onDelete={onDelete}
                        onEdit={onEdit}>
            </ExerciseList>
        </>
    );
}

export default HomePage;