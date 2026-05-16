'use client'
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';


const SignInPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user);

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            rememberMe: true,
            callbackURL: "/",
        });
        console.log("sign in response", data, error);
    }

    const handleSigninGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };


    return (
        <div className='container mx-auto py-20 space-y-5'>
            <div className='text-center'>
                <h2 className='text-3xl font-extrabold'> Welcome Back</h2>
                <p> Resume your adventure with Wanderlust</p>
            </div>

            <div className='mx-auto border border-gray-400 shadow w-100 p-10 space-y-3'>
                <Form className="flex flex-col gap-4 space-y-3" onSubmit={onSubmit}>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}>
                        <Label>Email</Label>
                        <Input placeholder="Enter Your Email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}>
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <FieldError />
                        <div className='flex justify-between items-center text-[12px] mt-3'>
                            <h2>Remember Me</h2>
                            <h2>Forget Password ?</h2>
                        </div>
                    </TextField>

                    <div className="flex gap-2">
                        <Button className="w-full rounded-none" type="submit">
                            <Check />
                            Sign In
                        </Button>
                    </div>

                    <div className='text-center'>
                        Or continue with
                    </div>
                </Form>

                <div className='flex justify-center flex-col space-y-3'>
                    <Button onClick={handleSigninGoogle} className="w-full rounded-none">Continue with Google</Button>

                    <h2 className='text-center'>Don`t have an account? <span><Link className='text-red-500' href={'/signUp'}>Sign Up</Link></span></h2>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;

