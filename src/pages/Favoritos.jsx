import React from 'react'

const Favoritos = () => {
  return (
    <div>
      <h1 className='fav text-center'>Favoritos <span>💖</span></h1>
      <div className='mt-5'>
        <div className="card">
          <h5 className="card-header">Agrega aquí tus fotos favoritas!</h5>
          <div className="card-body">
            <h5 className="card-title">Elige la que más te guste...</h5>
            <p className="card-text">Mira la galeria de imagenes y añade todas tus fotos favoritas</p>
            <a to="#" className="btn btn-secondary justify-center">Ir a elegir mis imágenes</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favoritos
