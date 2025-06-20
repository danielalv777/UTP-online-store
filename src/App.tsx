// Libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Header } from './shared/components/header';
import { Store } from './features/store/pages/store';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Store />} />
        </Routes>
        <ToastContainer position="bottom-right" autoClose={2000} />
      </>
    </Router>
  );
}

export default App;
