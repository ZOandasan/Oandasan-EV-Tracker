import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import NationalDex from '../NationalDexPage/NationalDexPage'
import PokemonBankPage from '../PokemonBankPage/PokemonBankPage';
import AboutEVTracker from '../AboutEVTrackerPage/AboutEVTrackerPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/national_index">
              <NationalDex />
            </Route>
            <Route path="/home">
              <HomePage user={user}/>
            </Route>
            <Route path="/pokemon_bank">
              <PokemonBankPage />
            </Route>
            <Route path="/about">
              <AboutEVTracker />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </>
        :
        <>
          <LandingPage />
          <AuthPage setUser={setUser} />
        </>
      }
    </main>
  );
}