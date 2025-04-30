import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Store from './pages/Store';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/store' />} />
          <Route path='/store' element={<Store />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
