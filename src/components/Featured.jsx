import React from 'react';
import DestinationCard from './DestinationCard';

const Featured = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const featuredData = await res.json();
    console.log(featuredData)

    return (
        <div className='container mx-auto'>
            <div className='flex justify-center items-center  gap-4 py-10'>
                {
                    featuredData?.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default Featured;

