import { headers } from "next/headers";
import { auth } from "./auth";

export const getDestination = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
    const destinations = await res.json();
    return destinations;
}


export const getDestinationById = async (ID) => {
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${ID}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const destinations = await res.json();
    return destinations;
}

