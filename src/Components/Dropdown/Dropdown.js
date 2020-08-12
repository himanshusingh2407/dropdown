import React from 'react';
import Pill from '../Pill/Pill';
import {getSuggestions} from '../../Service';
import './Dropdown.css'; 

class Dropdown extends React.Component {
 state = {
    selectedTitle: [
        {
            "Title": "Inception",
            "Year": "2010",
            "imdbID": "tt1375666",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
        },
        {
            "Title": "Inception: The Cobol Job",
            "Year": "2010",
            "imdbID": "tt5295894",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg"
        },
        {
            "Title": "Inception: Motion Comics",
            "Year": "2010–",
            "imdbID": "tt1790736",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNGRkYzkzZmEtY2YwYi00ZTlmLTgyMTctODE0NTNhNTVkZGIxXkEyXkFqcGdeQXVyNjE4MDMwMjk@._V1_SX300.jpg"
        }]
 }

     deleteSelected = (id) => {
        const selectedTitle = this.state.selectedTitle.filter((obj) => (obj.imdbID !== id));
        this.setState({selectedTitle});
    }
     renderPills = (selected) => {
        if (selected.length > 0) {
            return selected.map((obj) => (
                <Pill key={obj.imdbID} text={obj.Title} onDelete={() => {this.deleteSelected(obj.imdbID)}} />
            ));
        } else {
            return null;
        }
    }

    fetchSuggestions = (event) => {
        if(event.target.value) {
            getSuggestions(event.target.value);
        }
    }
  render() {
    return (
        <div className="dropdown-wrapper">
            {this.renderPills(this.state.selectedTitle)}
            <div className="input-bar">
                <input type="text" className="input-field" onChange={this.fetchSuggestions}/>
            </div>
        </div>
      );
  }
}

export default Dropdown;
