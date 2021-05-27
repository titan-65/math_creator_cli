import { Provider } from 'react-redux'
import { store } from './redux'
import React from 'react';
import './App.css';
import SearchTheme from "./components/SearchTheme";
import Input from "./components/Input";
import SubmitButton from "./components/SubmitButton"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
      <Provider store={store}>
          <Header/>
          <Hero titleOne="Npm Favs" titleTwo="Repos" subtitle="Making every repo feel worth it!"/>
          <section className="py-md-7 mt-md-5">
              <h1>Search For Packages</h1>
          </section>
        <div className="App">
            <SearchTheme>
                <Input/>
                <SubmitButton/>
            </SearchTheme>
        </div>
      </Provider>
  );
}

export default App;

