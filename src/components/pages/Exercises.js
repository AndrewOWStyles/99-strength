import React from 'react';
import ExerciseList from '../exercises/exercisesList';

const Exercises = () => {

    const alphabeticalSort = ExerciseList.slice().sort((a, b) => a.name.localeCompare(b.name))
    

    return (
        <div className="w-screen h-full mx-auto grid justify-items-center" style={{ gridTemplateRows: '10% 90%' }}>
            <div className='p-4'>search bar and filter buttons</div>
            <div className='overflow-auto w-3/4'>
                {alphabeticalSort.map((exercise, index) => (
                <div className='p-1 m-1' key={index}>
                <button className='w-full h-14 border-b-2 border-b-slate-300 pl-2 pr-2 rounded-lg shadow-lg bg-gradient-to-b from-slate-800 to-slate-900'>{exercise.name}</button>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Exercises;