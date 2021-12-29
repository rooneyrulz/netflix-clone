import React from "react";
import AppHeader from "./components/AppHeader";
import AppBanner from "./components/AppBanner";
import MovieRow from "./components/MovieRow";
import AppFooter from "./components/AppFooter";
import request from "./request";

const App = () => {
  return (
    <div className='app'>
      <AppHeader />
      <AppBanner />
      <main>
        <div className='app__main'>
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
      <AppFooter />
    </div>
  );
};

export default App;
