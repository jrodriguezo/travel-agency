import Home from "@/pages/home/home";
import GlobalLayout from "@/layouts/global-layout/global-layout";
import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer/footer";

function App() {
  return (
    <GlobalLayout>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </GlobalLayout>
  );
}

export default App;
