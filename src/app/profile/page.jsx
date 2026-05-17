import React from 'react';


const ProfilePage = () => {
    return (
        <div className='container mx-auto px-10 py-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div>
                    <div className="card bg-amber-50 w-96 shadow-sm">
                        <div className="px-10 pt-10">

                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div className="card w-96 bg-amber-50 card-sm shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Small Card</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="justify-end card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-amber-50 card-sm shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Small Card</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="justify-end card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div className="card w-96 bg-amber-50 card-sm shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Small Card</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="justify-end card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-amber-50 card-sm shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Small Card</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="justify-end card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

