import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Productos from './Pages/Productos'
import Ofertas from './Pages/Ofertas'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;