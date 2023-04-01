import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favoritos from './pages/Favoritos'
import Notfound from './pages/Notfound'
import { useEffect, useState } from 'react'
import { MyContext } from './context/Mycontext'

function App() {
  const [fotos, setFotos]=useState ([])

useEffect(()=>{
  getFotos()
}, [])


  const url= './src/data/data.json'

  const getFotos= async()=> {
    const res= await fetch (url)
    let {photos}= await res.json()
    photos=photos.map((photo)=>({
      id:photo.id,
      src:photo.src.tiny,
      desc:photo.alt,
      favorito:false,
    }));

    setFotos(photos)
  }
  


  return (
    <div className="App">
      <MyContext.Provider value={{fotos, setFotos}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="favorite" element={<Favoritos/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
      </MyContext.Provider>
    </div>
  )
}

export default App
