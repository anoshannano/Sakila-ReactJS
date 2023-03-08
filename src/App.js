import FilmList from './film/FilmList';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Menu from './Menu';
import ActorList from './actor/ActorList';
import FilmSearch from './film/FilmSearch';
import FilmDetails from './film/FilmDetails';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/film'element={<FilmList />}></Route>
        <Route path='/actor'element={<ActorList />}></Route>
        <Route path='/film-details/:id'element={<FilmDetails />}></Route>
        <Route path='/film-search'element={<FilmSearch />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
