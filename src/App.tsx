import Home from "@/pages/home/home";
import GlobalLayout from "@/layouts/global-layout/global-layout";
import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TravelProvider } from "@/contexts/travel-context/travel-provider";

function App() {
  return (
    <GlobalLayout>
      <ToastContainer />
      <TravelProvider>
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </TravelProvider>
    </GlobalLayout>
  );
}

export default App;
