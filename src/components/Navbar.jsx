'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Navbar = () => {
    const { data, isPending } = authClient.useSession();
    // console.log("data", data);
    const user = data?.user;
    console.log("user in navbar", user);

    return (
        <div className='container mx-auto px-10 py-5 flex justify-between items-center border-b bg-amber-300 border-gray-300 shadow'>

            <div>
                <ul className='flex justify-start items-center gap-3'>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/destinations"}>Destinations</Link></li>
                    <li><Link href={"/myBooking"}>My Bookings</Link></li>
                    <li><Link href={"/add-destinations"}>Admin</Link></li>
                </ul>
            </div>

            <div className='flex justify-center items-center'>
                <Image src="/assets/Wanderlast.png" width={100} height={100} alt='navImage'></Image>
            </div>

            <div>
                {
                    isPending ? <h2>Loading...</h2> : user ? (
                        <ul className='flex justify-end items-center gap-3'>
                            <li className='flex justify-center items-center gap-2'>
                                <Link className='hover:text-red-500 font-bold' href={"/profile"}>{user?.name}</Link>
                                <Link href={"/profile"}>
                                    <Avatar>
                                        <Avatar.Image className='hover:border-2 border-red-500 rounded-full' alt="USER" src={user?.image} />
                                        <Avatar.Fallback>JD</Avatar.Fallback>
                                    </Avatar>
                                </Link>
                            </li>
                            <li><Button className="rounded-none" variant='danger' onClick={async () => await authClient.signOut()}>Sign Out</Button></li>
                        </ul>
                    ) : (
                        <div className='flex gap-4'>
                            <Link href={"/signIn"}>Login</Link>
                            <Link href={"/signUp"}>SignUp</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;

