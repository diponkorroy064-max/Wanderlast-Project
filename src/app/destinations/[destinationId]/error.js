'use client'

import Link from 'next/link';
import { House, Compass, CircleExclamation } from '@gravity-ui/icons';

const ErrorPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center dark:bg-slate-950">
            <div className="max-w-md">

                {/* Gravity UI Warning Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500 dark:bg-red-900/20">
                    <CircleExclamation width={40} height={40} />
                </div>

                <h1 className="text-9xl font-extrabold tracking-widest text-slate-900 dark:text-white">
                    404
                </h1>

                <div className="bg-indigo-600 px-2 text-sm rounded rotate-12 absolute transform -translate-y-12 translate-x-24 text-white">
                    Page Not Found
                </div>

                <p className="mt-4 text-slate-600 dark:text-slate-400">
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    {/* Go Home Action */}
                    <Link
                        href="/"
                        className="group flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white transition-all hover:bg-indigo-700 active:scale-95"
                    >
                        <House width={18} height={18} className="transition-transform group-hover:-translate-y-0.5" />
                        <span className="font-medium">Go Home</span>
                    </Link>

                    {/* Explore Action */}
                    <Link
                        href="/explore"
                        className="group flex items-center gap-2 rounded-lg border border-slate-200 bg-transparent px-6 py-3 text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
                    >
                        <Compass width={18} height={18} className="transition-transform group-hover:rotate-45" />
                        <span className="font-medium">Explore</span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ErrorPage;

