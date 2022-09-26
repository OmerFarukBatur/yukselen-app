import Footer from "./layout/footer";
import Header from "./layout/header";
import Home from "./layout/home";

function App() {

  return (
    <div className="wide">
      {/* <form id="form1" runat="server"> */}
      <div className="layout">
        <Header />
        <div className="main">
          <Home />
          <a href="/#" className="scroll-top"><i className="icon-chevron-up"></i></a>
        </div>
        <Footer />
      </div>
      {/* </form>     */}

    </div>
  );
}

export default App;
