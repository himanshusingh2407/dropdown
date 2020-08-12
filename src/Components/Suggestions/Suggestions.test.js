import React from 'react';
import Suggestions from './Suggestions';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const mockData = [{"Title":"Len and Company","Year":"2015","imdbID":"tt3675204","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYxMzQ3ZDgtNzM3OC00YzU1LTkxNTctZWI5NDFhNWJhMTAwXkEyXkFqcGdeQXVyMjUwNDgyMDA@._V1_SX300.jpg"},{"Title":"Titanic with Len Goodman","Year":"2012–","imdbID":"tt2336103","Type":"series","Poster":"N/A"},{"Title":"Len Goodman's Partners in Rhyme","Year":"2017–","imdbID":"tt7268752","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BZjAyYTE4ZGUtNWMwNC00YjZlLThjNjYtMzZjNTAyNjM2ZjFmXkEyXkFqcGdeQXVyNjM3NzQyODU@._V1_SX300.jpg"},{"Title":"Skazka pro len","Year":"1976","imdbID":"tt6071064","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDZlYmM4NmQtYzhkZi00YjIyLWFmZjctYTk3Y2Q0NTljZjgwXkEyXkFqcGdeQXVyNjMxODMyODU@._V1_SX300.jpg"},{"Title":"Den hen lai len","Year":"1974","imdbID":"tt0393960","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTVkZWUzODAtNTY0OC00ZWZlLThkODItMjk5YmZhNDI4NGI5XkEyXkFqcGdeQXVyOTIxNDQ1MTQ@._V1_SX300.jpg"},{"Title":"Len and Hugo","Year":"2006","imdbID":"tt0857387","Type":"movie","Poster":"N/A"},{"Title":"The Roots of Wolverine: A Conversation with Stan Lee and Len Wein","Year":"2009","imdbID":"tt1834891","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZDVmYjg2MDEtZmQ5NC00MTVjLWE2NjEtYWYxNWRlMWRmMzhmXkEyXkFqcGdeQXVyMjQ5NjgwMjA@._V1_SX300.jpg"},{"Title":"Osa len' oi andres metaxy tous","Year":"2006–","imdbID":"tt1042460","Type":"series","Poster":"N/A"},{"Title":"Doodlin': Impressions of Len Lye","Year":"1987","imdbID":"tt0340674","Type":"movie","Poster":"N/A"},{"Title":"Len(n)y","Year":"2018","imdbID":"tt8389912","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmE3NTg5ODQtOTI0NS00YTRkLTkxMGUtOWNiZTkwODMwNjQyXkEyXkFqcGdeQXVyNTg3NDcyODk@._V1_SX300.jpg"}];
  const tree = renderer
    .create(<Suggestions data={mockData} onSelect={()=>{}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
