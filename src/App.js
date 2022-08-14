// import logo from './logo.svg';
import './App.css';
import Data from './components/data/Data';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Data />
      <Footer />
    </div>
  );
}

export default App;
