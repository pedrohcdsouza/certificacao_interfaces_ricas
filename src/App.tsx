import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import MovieDetails from './pages/MovieDetails'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/movies" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App