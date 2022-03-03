import Link from 'next/link';

export default function Header({ name, galleries, tarifs, contact }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <nav className="pt-5 pb-10 flex ">
        <p className="text-2xl dark:text-white text-center p-3">
          <Link href="/">Accueil</Link>
        </p>
        <p className="text-2xl dark:text-white text-center p-3">
          <Link href="/galleries">Galleries</Link>
        </p>
        <p className="text-2xl dark:text-white text-center p-3">
          <Link href="/tarifs">Tarifs et prestations</Link>
        </p>
        <p className="text-2xl dark:text-white text-center p-3">
          <Link href="/contact">Contact</Link>
        </p>
      </nav>
    </header>
  );
}
