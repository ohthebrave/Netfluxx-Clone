import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import TvShows from "./components/TvShows"
import MoviesList from "./components/MoviesList"
import NewPopular from "./components/NewPopular"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tvshows" element={ <TvShows/> } />
        <Route path="/movies" element={ <MoviesList/> } />
        <Route path="/new&popular" element={ <NewPopular/> } />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
