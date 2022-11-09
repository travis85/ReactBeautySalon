import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Booking from './components/Booking';
import Hair from './components/Hair';
import Nails from './components/Nails';
import LashesAndBrows from './components/LashesAndBrows';
import Landing from './components/Landing'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className=''>
        <Header />
      </header>
      <div className='flex-1 overflow-y-auto backdrop-filter'> 
        <Routes>
          <Route exact path='/' element={< Landing />} />
          <Route exact path='/Hair' element={< Hair />} />
          <Route exact path='/Nails' element={< Nails />}/>
          <Route exact path='/LashesAndBrows' element={< LashesAndBrows />}/>
          <Route exact path='/Booking' element={< Booking />} />
          <Route path='*' element={< Navigate to="/" />} />
        </Routes>
      <footer>
        <Footer />
     </footer>
      </div>
       
    
    </div>
  );
}

export default App;
