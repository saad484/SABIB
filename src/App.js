import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/UI/Header/Header';
import Sections from './components/sections/Sections';
import Footer from './components/UI/Footer/Footer';

//fix 1: rempve header in login & signup done
//fix 2: dashboard needs to be secured
//fix 3: to be reviewed

function App() {
  return (
    <div className="App">
        <Header />
        <main>
          <Sections />
        </main>
        <Footer />
    </div>
  );
}

export default App;





