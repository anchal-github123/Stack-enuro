import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
export default function MainLayout() {
  return (
    <section className=''>
    <Navbar/>
    <div className='max-w-7xl m-auto grid place-content-center p-3'>
    <Outlet/>
    </div>
    <Footer/>
    </section>
  )
}
