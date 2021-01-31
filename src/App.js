import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import FirstPage from './Components/FirstPage/FirstPage';
import SecondPage from './Components/SecondPage/SecondPage';
import ThirdPage from './Components/ThirdPage/ThirdPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <Footer/>
    </div>
  );
}

export default App;
