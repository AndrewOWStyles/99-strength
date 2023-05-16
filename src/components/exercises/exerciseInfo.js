import React from 'react';

const ExerciseInfo = ({ exercise }) => {
  return (
    <div className=''>
      <p>Name: {exercise.name}</p>
      <p>Muscle Group: {exercise.muscleGroup}</p>
      <p>Equipment: {exercise.equipment}</p>
    </div>
  );
};

export default ExerciseInfo;
