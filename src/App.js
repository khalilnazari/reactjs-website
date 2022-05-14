
import './App.css';
import Header from'./components/header/header'
import Footer from './components/footer/footer'
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />


      <Home />
      {/* footer */}
      <Footer />

      {/* https://wptf.themepul.com/restly/ */}
    </div>
  );
}

export default App;
