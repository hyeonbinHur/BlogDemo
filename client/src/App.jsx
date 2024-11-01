import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feeds from './pages/Feeds';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/feeds' element={<Feeds />} />
        <Route path='/feeds/:id' element={<Feeds />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
