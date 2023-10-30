import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

export default function Home() {
  return (
    <div className="min-h-screen h-screen w-full">
      <div className="h-full w-full bg-light dark:bg-dark">
        <div className="h-full w-full container mx-auto px-6 pt-20 pb-24 md:max-w-2xl md:px-0 lg:max-w-4xl xl:pt-0 xl:pb-0">
          <div className="h-full w-full flex justify-center items-center">
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
      </div>
    </div>
  );
}
