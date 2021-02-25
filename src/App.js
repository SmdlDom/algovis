import { GlobalStyle } from "./styles/global.styles";
import Header from "./components/common/header/header.component";
import Footer from "./components/common/footer/footer.component";
import VisualiserEnv from "./components/common/visualiserEnv/visualiserEnv.component";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <VisualiserEnv />
      <Footer />
    </div>
  );
}

export default App;
