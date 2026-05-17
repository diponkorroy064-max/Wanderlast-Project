import Link from 'next/link';
import { House, Compass, CircleExclamation } from '@gravity-ui/icons';


const NotFoundPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center dark:bg-slate-950">
            <div className="mx-auto max-w-md">

                {/* Decorative Gravity UI Icon */}
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                    <CircleExclamation width={48} height={48} />
                </div>

                {/* Header Text */}
                <h1 className="text-8xl font-black tracking-tight text-slate-900 dark:text-slate-50">
                    404
                </h1>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-3xl">
                    Page Not Found
                </h2>
                <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
                    Sorry, we couldn`t find the page you`re looking for. It might have been moved, deleted, or never existed.
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

                    {/* Go Home Button */}
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                    >
                        <House width={16} height={16} />
                        Go Home
                    </Link>

                    {/* Explore Button */}
                    <Link
                        href="/explore"
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                        <Compass width={16} height={16} />
                        Explore
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default NotFoundPage


