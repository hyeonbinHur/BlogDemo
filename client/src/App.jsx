import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feeds from './pages/Feeds';
import Home from './pages/Home';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';

import 'bootstrap/dist/css/bootstrap.min.css';
import EditorTest from './pages/EditorTest';
import Auth from './pages/Auth';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/feeds' element={<Feeds />} />
        <Route path='/feeds/:id' element={<Post />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/editor-test' element={<EditorTest />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
