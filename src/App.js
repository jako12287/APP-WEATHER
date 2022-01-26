import { Landing } from "./components/views/Landin_Page";
import { Home } from './components/views/Home'
import { About } from './components/views/About'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  );
}

export default App;
