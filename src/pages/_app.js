import Footer from "../components/Footer";
import Header from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { MainEl, Wrapper } from "../styles/shared";

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <MainEl>
        <Component {...pageProps} />
      </MainEl>
      <Footer />
    </Wrapper>
  );
}

export default MyApp;
