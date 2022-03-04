import Image from 'next/image';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
//import Layout, { GradientBackground } from '../components/Layout';

export default function Index({ posts, globalData }) {
  return (
    <>
      <section className=" container mx-auto items-center">
        <Navigation />
      </section>

      <main className="w-full">
        <Image
          src="/home-background.jpg"
          height={800}
          width={1200}
          className="h-screen w-screen"
        />

        <h1 className="text-3xl lg:text-5xl text-center mb-12">Bienvenue !</h1>
        <div className="text-center">
          <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
            Charles CANTIN vous accompagne dans tous vos projets
            photographiques.
          </h2>
          <p className="font-normal text-base leading-6 dark:text-gray-400 text-gray-600 mt-4 lg:w-10/12 md:w-9/12 mx-auto">
            Les photos sont classées par catégories. Cliquez sur la catégories
            de votre choix pour y accéder
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
