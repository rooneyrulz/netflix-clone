import React from "react";
import MovieRow from "./components/MovieRow";
import AppBanner from "./components/AppBanner";
import request from "./request";

const App = () => {
  return (
    <div className='app'>
      <AppBanner />
      <main>
        <div className='app__main container'>
          {request?.map((src) => (
            <MovieRow
              key={src.id}
              id={src.id}
              title={src.title}
              uri={src.uri}
            />
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
