import React from 'react';

const ExerciseInfo = ({ exercise }) => {
  return (
    <div className=''>
      <p>Name: {exercise.name}</p>
      <p>Muscle Group: {exercise.muscleGroup}</p>
      <p>Equipment: {exercise.equipment}</p>
      <p>Description: {exercise.description}</p>
    </div>
  );
};

export default ExerciseInfo;
