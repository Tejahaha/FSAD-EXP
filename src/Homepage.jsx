import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cardex2 from './components/EX2/Cardex2';
import Parent from './components/EX3/Parent';
import Exp5 from './components/EX5/Exp5';
import User from './components/EX6/User';
import IndexPage from './Indexpage';
import Weather from './components/ex6/weather';
import CustomerManagement from './components/EX9/CustomerManagement';

const Homepage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/ex2" element={<Cardex2 />} />
        <Route path="/ex3" element={<Parent />} />
        <Route path="/ex4" element={<Parent />} />
        <Route path="/ex5" element={<Exp5 />} />
        <Route path="/ex6" element={<User />} />
        <Route path="/weather6" element={<Weather/>} />
        <Route path="/exp9" element={<CustomerManagement/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Homepage




