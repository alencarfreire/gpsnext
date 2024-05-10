import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Reviews from "./_components/Reviews";
import FAQ from "./_components/FAQ";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col max-w-[920px] justify-center items-center content-center m-auto">
        <Hero />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
