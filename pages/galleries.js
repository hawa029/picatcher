import Footer from '../components/Footer';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Layout, { GradientBackground } from '../components/Layout';
import Image from 'next/image';

export default function Galleries() {
  return (
    <Layout>
      <Navigation />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          Galleries de photos
        </h1>
        <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
          <div className="text-center">
            <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
              Quelques photos de séances
            </h2>
            <p className="font-normal text-base leading-6 dark:text-gray-400 text-gray-600 mt-4 lg:w-10/12 md:w-9/12 mx-auto">
              Les photos sont classées par catégories. Cliquez sur la catégorie
              de votre choix pour découvrir.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
            <div className="relative group">
              <Image
                src="https://images.unsplash.com/photo-1537673156864-5d2c72de7824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                alt="Bébé"
                height={300}
                width={500}
                className="lg:block hidden w-full"
              />
              <Image
                src="/bébé.jpg"
                alt="Bébé"
                height={300}
                width={500}
                className="lg:block hidden w-full"
              />

              <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                <h2 className="font-semibold dark:text-white text-center lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
                  <Link href="/Albums/BabyAlbum">
                    <a>Bébe</a>
                  </Link>
                </h2>
              </div>
            </div>
            <div className="relative group">
              <Image
                src="https://images.unsplash.com/photo-1519123648360-eeb65861dc66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                alt="couple"
                height={300}
                width={500}
                className="lg:block hidden w-full"
              />
              <Image
                src="/couple.jpg"
                alt="couple"
                height={300}
                width={500}
                className="lg:block hidden w-full"
              />
              <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                <h2 className="font-semibold dark:text-white text-center lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
                  <Link href="/Albums/CoupleAlbum">
                    <a>Couple</a>
                  </Link>
                </h2>
              </div>
            </div>
            <div className="relative group">
              <Image
                src="https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                alt="famille"
                height={300}
                width={500}
                className="lg:block hidden w-full"
              />
              <Image
                src="/famille.jpg"
                alt="famille"
                height={300}
                width={500}
                className="lg:block hidden w-full"
              />
              <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                <h2 className="font-semibold dark:text-white text-center lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
                  <Link href="/Albums/FamilleAlbum">
                    <a>Famille</a>
                  </Link>
                </h2>
              </div>
            </div>
            <div className="relative group">
              <Image
                src="https://images.unsplash.com/photo-1532706302136-347336b002ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                alt="grossesse"
                height={300}
                width={500}
                className="lg:block hidden w-full"
              />
              <Image
                src="/grossesse.jpg"
                alt="grossesse"
                height={300}
                width={500}
                className="lg:block hidden w-full"
              />
              <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                <h2 className="font-semibold dark:text-white text-center lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
                  <Link href="/Albums/GrossesseAlbum">
                    <a>Grossesse</a>
                  </Link>
                </h2>
              </div>
            </div>
            <div className="relative group">
              <Image
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="mariage"
                height={300}
                width={500}
                className="lg:block hidden w-full"
              />
              <Image
                src="/mariage.jpg"
                alt="mariage"
                height={300}
                width={500}
                className="lg:block hidden w-full"
              />
              <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                <h2 className="font-semibold dark:text-white text-center lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
                  <Link href="/Albums/MariageAlbum">
                    <a>Mariage</a>
                  </Link>
                </h2>
              </div>
            </div>
            <div className="relative group">
              <Image
                src="https://images.unsplash.com/photo-1566516171511-1c411a59c8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="baptême"
                height={300}
                width={500}
                className="lg:block hidden w-full"
              />
              <Image
                src="/baptême.jpg"
                alt="baptême"
                height={300}
                width={500}
                className="lg:block hidden w-full"
              />
              <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                <h2 className="font-semibold dark:text-white text-center lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
                  <Link href="/Albums/BaptemeAlbum">
                    <a>Baptême</a>
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}
