'use client'
import { authClient } from '@/lib/auth-client';
import { ArrowRight, Check } from '@gravity-ui/icons';
import { Button, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


const BookingCard = ({ objData }) => {
    const { _id, destinationName, country, category, price, duration, imageUrl, description } = objData;

    const [departureDate, setDepartureDated] = useState(null);
    // console.log(new Date(departureDate));

    const { data } = authClient.useSession();
    // console.log("data", data);
    const user = data?.user;
    // console.log("user in bookingCard", user);

    const handleBooking = async() => {
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate)
        };
        // console.log(bookingData);

        const { data:tokenData } = await authClient.token();
        console.log(tokenData);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        })

        const data = await res.json();
        console.log(data);

        toast.success("Booking successful!");
    }


    return (
        <div className='rounded-none border border-gray-300 bg-white py-4 px-5 shadow space-y-4 w-80'>
            <p>Starting from</p>
            <h2 className='text-3xl text-cyan-500 font-bold'>${price}</h2>
            <p>per person</p>

            <div>
                <DateField onChange={setDepartureDated} className="w-full shadow" name="date">
                    <DateField.Group className="rounded-none">
                        <Label className='pl-2'>Date</Label>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        {/* <input className='p-2 w-full rounded-none cursor-pointer' type="date" name="date" placeholder='12/05/26'/> */}
                    </DateField.Group>
                </DateField>
            </div>

            <Button onClick={handleBooking} className="rounded-none w-full">Book Now <ArrowRight /></Button>

            <p className='flex items-center text-[10px]'><Check /> Cancellation up to 7 days</p>
            <p className='flex items-center text-[10px]'><Check /> Travel Insurance included</p>
            <p className='flex items-center text-[10px]'><Check /> 25/7 customer support</p>
        </div>
    );
};

export default BookingCard;


