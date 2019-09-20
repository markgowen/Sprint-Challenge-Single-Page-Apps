import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import { Route } from 'react-router-dom'
import CharacterPage from './components/CharacterPage'
import SearchForm from './components/SearchForm'
import Navigation from './components/Navigation'


export default function App() {
  return (
    <main>
      <Header />
        <nav>
          <Navigation />
        </nav>

        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/CharacterPage' component={CharacterPage} />
        <Route exact path='/Search' component={SearchForm} />

      {/* <WelcomePage /> */}
    </main>
  );
}
