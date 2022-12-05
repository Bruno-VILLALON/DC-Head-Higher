import './styles/App.scss';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Staff from './components/Staff';
import Listen from './components/Listen';
import Actu from './components/Actu';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="App">
      < Navbar />
      < Home />
      < Staff />
      < Listen />
      < Actu />
      < Contact />
      < Footer />
    </div>
  )
}

export default App
