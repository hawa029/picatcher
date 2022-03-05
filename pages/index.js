import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { getGlobalData } from '../utils/global-data';
import { getPosts } from '../utils/mdx-utils';
import Layout, { GradientBackground } from '../components/Layout';

export default function Index({ posts, globalData }) {
  return (
    <>
      <div
        className=" w-full flex justify-center"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: 'cover',
          height: '100%',
          width: '100%',
        }}
      >
        <Layout>
          <Navigation />
          <h1 className="text-3xl sm:text-4xl font-semibold leading-9 text-white pt-8">
            Charles CANTIN - Photographe
          </h1>
        </Layout>
      </div>

      <Layout>
        <main className="w-full pt-6">
          <h2 className="text-3xl lg:text-5xl text-center mb-12">
            Bienvenue !
          </h2>
          <div className="text-center">
            <h3 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
              Charles CANTIN vous accompagne dans tous vos projets
              photographiques.
            </h3>
          </div>
        </main>
        <div className="container pt-10">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
            <div className="flex flex-row-reverse md:contents">
              <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">Left</h3>
                <p className="leading-tight text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
              </div>
              <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">Right</h3>
                <p className="leading-tight text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, facilis.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse md:contents">
              <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">Left</h3>
                <p className="leading-tight text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        classNameName="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        classNameName="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
