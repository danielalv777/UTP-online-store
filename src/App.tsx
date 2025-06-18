// Libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import { Header } from './shared/components/header';
import { Store } from './features/store/pages/store';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Store />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
