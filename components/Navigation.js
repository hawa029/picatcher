import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <>
      <header className=" block bg-gradient-conic pt-10 pb-12">
        <div className=" mx-auto text-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" height={100} width={100} />
          </Link>
        </div>
        <nav className="container mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center sm:block">
            <div className="md:flex  items-center">
              <div className="flex flex-col  mt-2 md:flex-row md:mt-3 md:mx-1 sm:flex-row min-w:flex-row justify-between">
                <p className="my-1  text-xl dark:text-white leading-3 hover:text-blue-600 hover:underline md:mx-4 sm:p-2">
                  <Link href="/">Accueil</Link>
                </p>
                <p className="my-1  text-xl dark:text-white leading-3 hover:text-blue-600 hover:underline md:mx-4 sm:p-2">
                  <Link href="/galleries">Galleries</Link>
                </p>
                <p className="my-1  text-xl dark:text-white leading-3 hover:text-blue-600 hover:underline md:mx-4 sm:p-2">
                  <Link href="/tarifs">Tarifs et prestations</Link>
                </p>
                <p className="my-1  text-xl dark:text-white leading-3 hover:text-blue-600 hover:underline md:mx-4 sm:p-2">
                  <Link href="/contact">Contact</Link>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
