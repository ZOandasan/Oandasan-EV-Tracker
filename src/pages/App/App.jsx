import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import HomePage from '../HomePage/HomePage';
import NationalDex from '../NationalDexPage/NationalDexPage'
import PokemonBankPage from '../PokemonBankPage/PokemonBankPage';
import AboutEVTracker from '../AboutEVTrackerPage/AboutEVTrackerPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import AccountPage from '../AccountPage/AccountPage';
import PokemonDetailsPage from '../PokemonDetailsPage/PokemonDetailsPage';

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
            <Route path="/settings">
              <SettingsPage />
            </Route>
            <Route path="/account">
              <AccountPage user={user}/>
            </Route>
            <Route path="/details/:id">
              <PokemonDetailsPage />
            </Route>
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </>
        :
        <>
          <AuthPage setUser={setUser} />
        </>
      }
    </main>
  );
}