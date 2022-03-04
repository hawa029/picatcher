import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Layout, { GradientBackground } from '../components/Layout';

export default function Galleries() {
  return (
    <Layout>
      <Navigation />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          Tarifs et prestations
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
