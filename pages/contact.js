import Footer from '../components/Footer';
import Header from '../components/Header';
import { getGlobalData } from '../utils/global-data';
import { getPosts } from '../utils/mdx-utils';
import Layout, { GradientBackground } from '../components/Layout';

export default function Galleries({ posts, globalData }) {
  return (
    <>
      <Header />
      <Layout>
        <main className="w-full pt-10">
          <h1 className="text-3xl lg:text-5xl text-center mb-12">Contact</h1>
          <div className="text-center">
            <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
              Formulaire de contact
            </h2>
            <p className="font-normal text-base leading-6 dark:text-gray-400 text-gray-600 mt-4 lg:w-10/12 md:w-9/12 mx-auto">
              Pour mieux échnager au sujet de vos projets photos, veuillez
              utiliser ce formulaire pour me contacter.
            </p>
          </div>
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
            <form>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="message"
                >
                  Votre message
                </label>
                <textarea
                  id="textarea"
                  type="textarea"
                  rows={6}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
              </div>

              <div className="flex justify-end mt-6">
                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Envoyer
                </button>
              </div>
            </form>
          </section>
        </main>

        <Footer copyrightText={globalData.footerText} />
        <GradientBackground
          variant="large"
          className="fixed top-20 opacity-40 dark:opacity-60"
        />
        <GradientBackground
          variant="small"
          className="absolute bottom-0 opacity-20 dark:opacity-10"
        />
      </Layout>
    </>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
