export const getDestination = async() => {
    const res = await fetch('http://localhost:5000/destination');
    const destinations = await res.json();
    return destinations;
}


export const getDestinationById = async (ID) => {
    const res = await fetch(`http://localhost:5000/destination/${ID}`);
    const destinations = await res.json();
    return destinations;
}
