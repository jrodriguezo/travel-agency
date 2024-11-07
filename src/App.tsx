import Home from "@/pages/home/home";
import GlobalLayout from "@/layouts/global-layout/global-layout";
import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <GlobalLayout>
      <ToastContainer />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </GlobalLayout>
  );
}

export default App;
