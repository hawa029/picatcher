//import Navigation from '../components/Navigation';
import { getGlobalData } from '../utils/global-data';
import { getPosts } from '../utils/mdx-utils';
import Layout from '../components/Layout';
import Header from '../components/Header';

export default function Index({ posts, globalData }) {
  return (
    <main>
      <div
        className=" w-full block justify-center"
        style={{
          backgroundImage: "url('/home-background.jpg')",
          backgroundSize: 'cover',
          height: 700,
          width: '100%',
        }}
      >
        {' '}
        <Header />
        <Layout>
          <h1 className="text-2xl lg:text-4xl font-semibold leading-7 text-dark pt-20 pb-20">
            Charles CANTIN - Photographe
          </h1>
        </Layout>
        <p className=" text-sm text-dark  text-center">
          Charles CANTIN © 2022 - Tous droits réservés
        </p>
      </div>
    </main>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
