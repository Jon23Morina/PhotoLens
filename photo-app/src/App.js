import { Routes, Route } from 'react-router-dom';

//Import components
import Header from './components/Header';
import Footer from './components/Footer';

//Import CSS files
import './App.css';

//Import Pages
import Home from './pages/Home'
import Album from './pages/Album'
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/post' element={<Post/>} ></Route>
          <Route path='/album' element={<Album/>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
