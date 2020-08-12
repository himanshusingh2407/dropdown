import React from 'react';
import debounce from 'lodash.debounce';
import Pill from '../Pill/Pill';
import Suggestions from '../Suggestions/Suggestions';
import { getSuggestions } from '../../Service';
import './Dropdown.css';

class Dropdown extends React.Component {
    state = {
        suggestions: [],
        selectedTitle: [
            {
                "Title": "Inception",
                "Year": "2010",
                "imdbID": "tt1375666",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
            }]
    }

    deleteSelected = (id) => {
        const selectedTitle = this.state.selectedTitle.filter((obj) => (obj.imdbID !== id));
        this.setState({ selectedTitle });
    }
    renderPills = (selected) => {
        if (selected.length > 0) {
            return selected.map((obj) => (
                <Pill key={obj.imdbID} text={obj.Title} onDelete={() => { this.deleteSelected(obj.imdbID) }} />
            ));
        } else {
            return null;
        }
    }

    onSelect = (id) => {
        const movie = this.state.suggestions.find((obj) => (obj.imdbID === id));
        console.log('Select:', movie, id);
        const selection = this.state.selectedTitle;
        selection.push(movie);
        this.setState = ({ selectedTitle: selection });
    }

    fetchSuggestions = debounce(() => {
        const queryString = document.getElementById('movie-input').value;
        if (queryString && queryString.length >= 3) { // Minimum 3 letter required to search
            getSuggestions(queryString).then((suggestions) => {
                console.log('suggestions::', suggestions);
                this.setState({ suggestions });
            });
        }
    }, 200);

    render() {
        return (
            <div className="dropdown-wrapper">
                {this.renderPills(this.state.selectedTitle)}
                <div className="input-bar">
                    <input type="text" className="input-field" id="movie-input" onChange={this.fetchSuggestions} autoComplete="off"/>
                    {this.state.suggestions?.length >= 1 && <Suggestions data={this.state.suggestions} onSelect={this.onSelect}/>}
                </div>
            </div>
        );
    }
}

export default Dropdown;
