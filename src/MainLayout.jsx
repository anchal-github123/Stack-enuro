import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function MainLayout() {
  return (
    <div className='max-w-7xl m-auto px-3'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
