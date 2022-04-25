import Footer from '../../components/Footer';
import Header from '../../components/Header';
import AlbumDropdown from '../../components/AlbumDropdown';
import Layout, { GradientBackground } from '../../components/Layout';
import Image from 'next/image';

export default function GrossesseAlbum() {
  return (
    <>
      <Header />
      <Layout>
        <main className="w-full pt-20">
          <h1 className="text-3xl lg:text-5xl text-center mb-5">
            Photos de grossesses
          </h1>
          <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
              <div className="relative group">
                <Image
                  src="/grossesse.jpg"
                  alt="grossesse"
                  height={400}
                  width={600}
                  className="lg:block hidden w-full"
                />
              </div>
              <div className="relative group">
                <Image
                  src="/grossesse.jpg"
                  alt="grossesse"
                  height={400}
                  width={600}
                  className="lg:block hidden w-full"
                />
              </div>
              <div className="relative group">
                <Image
                  src="/grossesse.jpg"
                  alt="grossesse"
                  height={400}
                  width={600}
                  className="lg:block hidden w-full"
                />
              </div>
              <div className="relative group">
                <Image
                  src="/grossesse.jpg"
                  alt="grossesse"
                  height={400}
                  width={600}
                  className="lg:block hidden w-full"
                />
              </div>
            </div>
          </div>
        </main>
        <div className="text-center mx-auto">
          <AlbumDropdown />
        </div>

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
    </>
  );
}
