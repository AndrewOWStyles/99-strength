import React from 'react';
import ExerciseList from '../exercises/exercisesList';

const Exercises = () => {

    const alphabeticalSort = ExerciseList.slice().sort((a, b) => a.name.localeCompare(b.name))
    

    return (
        <div className="">
            <div>
                {alphabeticalSort.map((exercise, index) => (
                <div key={index}>
                <h2>{exercise.name}</h2>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Exercises;