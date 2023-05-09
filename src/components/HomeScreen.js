import React from 'react';

const HomeScreen = () => {



    return (
        <div className="w-3/4 h-full mx-auto grid justify-items-center items-center" style={{ gridTemplateRows: '10% 60% 30%' }}>
            <div className="text-slate-500 text-xl">99 Strength logo soon</div>
            <div className="w-11/12 h-5/6 p-4 border-solid border-2 border-slate-300 rounded-md flex flex-col items-center text-slate-500">
                <div className='h-1/2'>
                    workout count
                </div>
                <div className='h-1/2'>
                    monthly graph
                </div>
            </div>
            <div className="w-11/12 h-full text-slate-500 border-solid border-2 border-slate-300 flex justify-center">Scrollable workout history maybe</div>
        </div>
    );
};

export default HomeScreen;