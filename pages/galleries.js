import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';

export default function Galleries() {
  return (
    <Layout>
      <Header />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          Galleries de photos
        </h1>
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
