'use client'
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';


const EditModalDestination = ({ objData }) => {
    const router = useRouter();

    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = objData;

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const destinstion = Object.fromEntries(formData.entries());
        console.log(destinstion);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(destinstion)
        })
        const data = await res.json()
        console.log(data);

        if (data.modifiedCount > 0) {
            router.push(`/destinations/${_id}`);
        }
    }


    return (
        <div>
            <Modal>
                <Button className="rounded-none border-2 hover:text-red-500" variant="outline">Edit</Button>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Update Destination</Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="p-6">
                                <Surface variant="default">

                                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                        <TextField className="w-full" name="destinationName" defaultValue={destinationName} type="text">
                                            <Label>Destination Name</Label>
                                            <Input placeholder="Enter Destination Name" />
                                        </TextField>

                                        <TextField className="w-full" name="country" defaultValue={country} type="text">
                                            <Label>Country</Label>
                                            <Input placeholder="Enter Country" />
                                        </TextField>

                                        <TextField className="w-full" name="category" defaultValue={category} type="text">
                                            <Label>Category</Label>
                                            <Input placeholder="Enter category" />
                                        </TextField>

                                        <TextField className="w-full" name="price" defaultValue={price} type='text'>
                                            <Label>Price</Label>
                                            <Input placeholder="Enter price" />
                                        </TextField>

                                        <TextField className="w-full" name="duration" defaultValue={duration} type='text'>
                                            <Label>Duration</Label>
                                            <Input placeholder="Enter duration" />
                                        </TextField>

                                        <TextField className="w-full" name="departureDate" defaultValue={departureDate} type='date'>
                                            <Label>Departure Date</Label>
                                            <Input placeholder="Enter Departure Date" />
                                        </TextField>

                                        <TextField className="w-full" name="imageUrl" defaultValue={imageUrl} type="text">
                                            <Label>Image URL</Label>
                                            <Input placeholder="Enter image URL" />
                                        </TextField>

                                        <TextField className="w-full" name="description" defaultValue={description} type="text">
                                            <Label>Description</Label>
                                            <Input placeholder="Enter description" />
                                        </TextField>

                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type="submit" slot="close">Update</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                           
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditModalDestination;

