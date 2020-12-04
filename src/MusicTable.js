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
        <table>
          <tr className="music-table">
            {this.state.music.map(single => 
            <td>
            {single.title}
            {single.album}
            {single.artist}
            {single.genre}
            {single.releaseDate}
            </td>)} 
          </tr>
        </table>
    )
  }
}