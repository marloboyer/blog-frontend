import { BrowserRouter } from "react-router-dom";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
