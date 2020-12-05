import React from 'react';

const Tile = ({title, album, artist, genre, releaseDate}) => {
  return(
    <div 
      className="helvetica tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
       <h1>{title}</h1>
       <h2>{album}</h2>
       <h3>{artist}</h3>
       <h4>{genre}</h4>
       <h5>{releaseDate}</h5>
    </div>
  )
}

export default Tile;