import React, {Component} from 'react';
import axios from 'axios';
import MusicTable from '../components/MusicTable';
import SearchBar from '../components/SearchBar';
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      music: [],
      searchField: ''
    }
  }

  componentDidMount() {
    axios.get('http://www.devcodecampmusiclibrary.com/api/music')
    .then(res => {
      const music = res.data;
      this.setState({music})
    })
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
   const filteredMusic = this.state.music.filter(song => {
     return song.title.toLowerCase().includes(this.state.searchField.toLowerCase()) ||
      song.artist.toLowerCase().includes(this.state.searchField.toLowerCase()) ||
      song.genre.toLowerCase().includes(this.state.searchField.toLowerCase()) ||
      song.album.toLowerCase().includes(this.state.searchField.toLowerCase()) ||
      song.releaseDate.toLowerCase().includes(this.state.searchField.toLowerCase())});
     if (this.state.music.length === 0) {
       return <h1>Loading...</h1>
     }else {
       return (
        <div className="App">
        <h1 className='title'>PlayList</h1>
        <SearchBar searchChange={this.onSearchChange} />
        <MusicTable music={filteredMusic}/>
        </div>
       )
     }
  }
}

export default App;