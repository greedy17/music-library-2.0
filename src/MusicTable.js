import React from 'react';
import axios from 'axios';
import './MusicTable.css';

export default class MusicTable extends React.Component{
  state = {
    music: []
  }

  componentDidMount(){
    axios.get('http://www.devcodecampmusiclibrary.com/api/music')
    .then(res => {
      const music = res.data;
      this.setState({music})
    })
  }

  render(){
    return (
      <div className="library">
        <table>
          <tr className="music-table">
            {this.state.music.map(single => 
            <td>
            <span className="song-title">
            {single.title}
            </span>
            {single.album}
            <span></span>
            {single.artist}
            <span></span>
            {single.genre}
            <span></span>
            {single.releaseDate}
            </td>)} 
          </tr>
        </table>
      </div>
    )
  }
}