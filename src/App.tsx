import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Redirect } from 'react-router-dom';
import PoetryContainer from './components/Poetry/PoetryContainer';
import BackgroundContainer from './components/Background/Background';
import About from './components/About/About';
import StoryesContainer from './components/Storyes/StoryesContainer';
import PagePoetryContainer from './components/PagePoetry/PagePoetryContainer';
import FavoritePage from './components/FavoritePage/FavoritePage';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (<>    
    
    <Route exact path='/'>
      <Redirect from='/' to='/about' />
    </Route>

    <Route path='/about' render={() => <>
      <BackgroundContainer />
      <Header />
      <About />
      <Footer />
    </>} />

    <Route path='/poetry' render={() => <>
      <BackgroundContainer />
      <Header />
      <PoetryContainer />
      <Footer />
    </>} />

    <Route path='/storyes' render={() => <>
      <BackgroundContainer />
      <Header />
      <StoryesContainer />
      <Footer />
    </>} />

    <Route path='/poetry-page/:id?' render={() => <>
      <Header />
      <PagePoetryContainer />
      <Footer />
    </>} />

    <Route path='/favorite' render={() => <>
      <BackgroundContainer />
      <Header />
      <FavoritePage />
      <Footer />
    </>} />

    <Route path='/contacts' render={() => <>
      <BackgroundContainer />
      <Header />
      <Contacts />
      <Footer />
    </>} />
    
  </>);
}

export default App;
