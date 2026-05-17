import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='container mx-auto py-40 flex justify-center items-center'>
            <HashLoader/>
        </div>
    );
};

export default loading;