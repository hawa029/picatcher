import Link from 'next/link';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import Image from 'next/image';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Navigation />

      <main classNameName="w-full">
      <div className="w-screen h-screen bg-white flex flex-row flex-wrap p-3">
  <div className="mx-auto w-2/3">

<div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased" style={{backgroundImage: url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  backgroundRepeat: 'no-repat',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply'}}
  
>
  
  <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
    <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">

    </div>
  </div>
</div>

  </div>
</div>
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
  );
}
