import BookingDeleteAlert from '@/components/BookingDeleteAlert';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';


const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session);
    // console.log(session?.user);

    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);

    const user = session?.user;
    console.log("user", user?.id);


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const bookingData = await res.json();
    // console.log("booking data drom database", bookingData);


    return (
        <div className='container mx-auto max-w-7xl space-y-4 px-10 py-16'>
            <div className='mx-auto max-w-300'>
                <h1 className='text-3xl font-bold mb-4'>My Booking Page</h1>
                <p>Manage your account settings and travel preferences</p>
            </div>

            <div className='space-y-4'>
                {bookingData.length === 0 ? (<p className='text-center text-red-400 py-20'>No Booking is Available</p>) :
                    bookingData?.map(bookingItem => <div key={bookingItem._id} className="flex gap-16 p-2 rounded-md bg-base-100 border border-gray-300 shadow mx-auto max-w-250">
                        <div>
                            <Image className='w-80 rounded-md' src={bookingItem?.imageUrl} width={100} height={100} alt='image txt'></Image>
                        </div>

                        <div className=" ">
                            <h2 className="card-title">{bookingItem?.destinationName}</h2>

                            <p>Departure: {bookingItem?.departureDate}</p>

                            <div className="card-actions justify-end">
                                <BookingDeleteAlert bookingId={bookingItem?._id}></BookingDeleteAlert>
                                <button className="btn btn-primary">View</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyBookingPage;


