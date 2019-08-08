import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  //savelist is set to new movie
  //... means old moves are carried over to old state

  return (
    <div>
      <SavedList list={savedList} />

      <div>
        <Route path="/" exact component={MovieList} />
        
        {/* //conver componet to render!! because props need to be sent to it,  */}
        
        <Route path="/movies/:id"  render = {(props) => <Movie {...props} addToSavedList = {addToSavedList}/>} />
        {/* //...props spreads properties
        // must send addtosave list to move compoennt!!! */}

      </div>

    </div>
  );
};

export default App;
