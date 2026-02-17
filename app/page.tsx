import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo className="h-8 w-auto md:h-16" />
      </div>

      <div className="mt-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Acme Dashboard
        </h1>
        <p className="mt-2 text-gray-700">
          This is your starter Next.js dashboard app.
        </p>

        <Link
          href="/login"
          className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Log in
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* Hero Images (Chapter 3) */}
      <div className="mt-10 flex justify-center">
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />

        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshots of the dashboard project showing mobile version"
        />
      </div>
    </main>
  );
}
