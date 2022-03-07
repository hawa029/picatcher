import { getGlobalData } from '../utils/global-data';
import { getPosts } from '../utils/mdx-utils';
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
        <div className=" text-center mx-auto pt-20 pb-12">
          <h1 className="text-3xl lg:text-6xl font-semibold  text-center leading-9 text-dark pt-20 pb-20">
            Charles CANTIN - Photographe
          </h1>
        </div>
        <div className=" text-center mx-auto pt-20 pb-12">
          <p className=" text-sm text-dark  text-center pt-20">
            © 2022 - Tous droits réservés
          </p>
        </div>
      </div>
    </main>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
