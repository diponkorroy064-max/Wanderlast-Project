import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from '@gravity-ui/icons';

const DestinationCard = ({ destination }) => {
    const { imageUrl, price, destinationName, duration, country } = destination;
    
    
    return (
        <div>
            <div className="bg-base-100 border border-gray-300 shadow-sm p-2.5 space-y-4">
                <div>
                    <Image className="w-full h-50" src={imageUrl} width={100} height={100} alt="Image"></Image>
                </div>

                <div className="">
                    <p>{country}</p>
                    <h2 className="card-title">{destinationName}</h2>
                    <p>{duration}</p>
                    <p>{price}</p>
                    <div className="card-actions justify-start">
                        <Link className="text-blue-600 flex" href={`/destinations/${destination._id}`}>BOOK NOW <ArrowDownRight/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;



