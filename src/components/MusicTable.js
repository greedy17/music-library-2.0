import React from 'react';
import Tile from './tile';

const MusicTable = ({music}) => {
    return (
      <div 
      style={{overflowY: 'scroll', height: '550px', width: "700px",
      display: 'flex', justifyContent: 'center', alignItems: 'center', 
      flexWrap: 'wrap'}}>
        {
          music.map((song, i) => {
            return(
              <Tile
                title={music[i].title}
                artist={music[i].artist}
                album={music[i].album}
                genre={music[i].genre}
                releaseDate={music[i].releaseDate}
              />
            );
          })
        }
      </div>
    )
}

export default MusicTable;