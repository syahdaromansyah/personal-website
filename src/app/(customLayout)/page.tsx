import Footer from './_components/Footer';
import Header from './_components/Header';
import MainContent from './_components/MainContent';
import ThemeToggler from './_components/ThemeToggler';

export default function Home() {
  return (
    <div className="relative h-screen min-h-screen w-full">
      <nav className="absolute right-4 top-4 md:right-6 md:top-6">
        <ThemeToggler />
      </nav>

      <div className="container mx-auto flex h-full w-full items-center justify-center px-6 pb-24 pt-20 md:max-w-2xl md:px-0 lg:max-w-4xl xl:pb-0 xl:pt-0">
        {/* The beginning of the content page */}
        <div>
          <div className="mb-4">
            <Header />
          </div>

          <div className="mb-10">
            <MainContent />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
