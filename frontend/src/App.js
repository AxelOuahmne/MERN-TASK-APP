import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Layouts/Header'
import Home from './components/Home'
import  Create from '../src/components/Task/Create'
import Edit from './components/Task/Edit'



function App() {
  return (
  <BrowserRouter>
    <Header />
  <Routes>
    <Route path='/' element={<Home />} /> 
    <Route path='/create' element={<Create />} /> 
    <Route path='/edit/:id' element={<Edit />} /> 
  </Routes>
  </BrowserRouter>
  );
}

export default App;
