'use client'
import { AlertDialog, Button } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';


const DeleteModal = ({ objData }) => {
    const { _id, destinationName } = objData;

    const handleDelete = async() => {
        const res = await fetch(`http://localhost:5000/destination/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type':'application/json',
            },
        });
        const data = await res.json();
        console.log(data);
        redirect('/destinations');
    }


    return (
        <div>
            <AlertDialog>
                <Button className="rounded-none border-2 hover:text-red-500" variant="outline">Delete</Button>

                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong className='text-blue-500'>{destinationName}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} slot="close" variant="danger">
                                    Delete Project
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteModal;
