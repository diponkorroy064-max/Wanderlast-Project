import DeleteModal from '@/components/DeleteModal';
import EditModalDestination from '@/components/EditModalDestination';
import { getDestinationById } from '@/lib/data';
import { ArrowLeft } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const DestinationDetailsPage = async({params}) => {
    const { destinationId } = await params;
    // console.log(destinationId);
    // console.log(params);
    const objData = await getDestinationById(destinationId);
    // console.log(objData);

    const {destinationName, country, category, price, duration, departureDate, imageUrl, description} = objData;


    return (
        <div className='container mx-auto px-10 py-10'>
            <div className="card bg-amber-100 max-w-260 shadow-sm mx-auto">

                <div className='flex justify-between items-center'>
                    <h2><Link className='flex justify-center items-center hover:text-red-500' href={'/destinations'}><ArrowLeft />Back to Destination</Link></h2>

                    <h2 className='flex gap-3'>
                        <EditModalDestination objData={objData}></EditModalDestination>
                        <DeleteModal objData={objData}></DeleteModal>
                    </h2>
                </div>
               
                <div>
                    <Image className='w-full h-90' src={imageUrl} height={300} width={300} alt='Image'/>
                </div>

                <div className="card-body">
                    <h2 className="card-title">{destinationName}</h2>
                    <p>{description}</p>
                    <p>{duration}</p>
                    <p>{category}</p>
                    <p>{price}</p>
                    <p>{country}</p>

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;


