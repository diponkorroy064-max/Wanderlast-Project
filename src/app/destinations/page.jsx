import DestinationCard from "@/components/DestinationCard";
import { getDestination } from "@/lib/data";


const DestinationsPage = async () => {
    const data = await getDestination();
    // console.log(data);

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 py-10">
            {
                data.map(destination=> <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
            }
        </div>
    );
};

export default DestinationsPage;


