import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ExerciseList from '../exercises/exercisesList';
import ExerciseInfo from '../exercises/exerciseInfo';

const Exercises = () => {
  const alphabeticalSort = ExerciseList.slice().sort((a, b) => a.name.localeCompare(b.name));
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseOpen = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleExerciseClose = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="w-screen h-full mx-auto grid justify-items-center" style={{ gridTemplateRows: '10% 90%' }}>
      <div className='p-4'>search bar and filter buttons</div>
      <div className='overflow-auto w-3/4'>
        {alphabeticalSort.map((exercise, index) => (
          <div className='p-1 m-1' key={index}>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 1.1 }}
              className='w-full h-14 border-b-2 border-b-slate-300 pl-2 pr-2 rounded-lg shadow-lg bg-gradient-to-b from-slate-800 to-slate-900'
              onClick={() => handleExerciseOpen(exercise)}
            >
              {exercise.name}
            </motion.button>
          </div>
        ))}
      </div>
      {selectedExercise && (
        <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1"
        onClick={handleExerciseClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
          <div className="flex justify-center p-4 shadow-lg w-5/6 rounded-xl bg-slate-800 border-solid border-2">
            <ExerciseInfo exercise={selectedExercise} />
            <button className='absolute top-0 right-3 text-3xl' onClick={handleExerciseClose}></button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Exercises;
