import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Layout, { GradientBackground } from '../../components/Layout';
import Image from 'next/image';

export default function famille() {
  return (
    <Layout>
      <Navigation />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-5">
          Photos de familles
        </h1>
        <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
            <div className="relative group">
              <Image
                src="/famille.jpg"
                alt="famille"
                height={400}
                width={600}
                className="lg:block hidden w-full"
              />
            </div>
            <div className="relative group">
              <Image
                src="/famille.jpg"
                alt="famille"
                height={400}
                width={600}
                className="lg:block hidden w-full"
              />
            </div>
            <div className="relative group">
              <Image
                src="/famille.jpg"
                alt="famille"
                height={400}
                width={600}
                className="lg:block hidden w-full"
              />
            </div>
            <div className="relative group">
              <Image
                src="/famille.jpg"
                alt="famille"
                height={400}
                width={600}
                className="lg:block hidden w-full"
              />
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
