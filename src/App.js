import './App.css';
import szymon from './images/szymon.svg'
import Header from './components/Header';
import Buttons from './components/Buttons';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <img className="szymon" src={szymon} alt="profilePhoto"/>
      <Header/>  
      <Buttons/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
