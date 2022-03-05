import Image from 'next/image';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { getGlobalData } from '../utils/global-data';
import { getPosts } from '../utils/mdx-utils';
import Layout, { GradientBackground } from '../components/Layout';

export default function Index({ posts, globalData }) {
  return (
    <>
      <Layout>
        <Navigation />
      </Layout>

      <Image
        src="/home-background.jpg"
        height={800}
        width={1280}
        className="fixed top-0"
      />

      <div className="relative">
        <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
          <p className="text-3xl sm:text-4xl font-semibold leading-9 text-dark">
            Photographe amateur
          </p>
        </div>
      </div>

      <Layout>
        <main className="w-full">
          <h1 className="text-3xl lg:text-5xl text-center mb-12">
            Bienvenue !
          </h1>
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
      </Layout>

      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
