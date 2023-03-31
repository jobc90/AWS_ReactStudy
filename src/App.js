import { Global } from '@emotion/react';
import Container from './components/Container';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Route, Routes } from 'react-router-dom';
import MainAside from './components/Aside/MainAside/MainAside';
import InputSample from './pages/InputSample/InputSample';
import Note from './pages/Note/Note';
import Numbercounter from './pages/NumberCounter/Numbercounter';
import Todo from './pages/Todo/Todo';
import Todo2 from './pages/ToDo2/Todo2';
import UserList from './pages/UserList/UserList';
import { reset } from './styles/Global/reset';

function Test1() {
  return (<h1>Test1</h1>);
}

function Test2() {
  return (<h1>Test2</h1>);
}


function App() {
  return (
    <>
      <Global styles={reset}/>
      <Container>
        <MainAside />
        <Routes>
          <Route path="/note" Component={Note}/>
          <Route path="/t1" Component={Test1}/>
          <Route path="/t2" Component={Test2}/>
          <Route path="/sample/input/1" Component={InputSample}/>
          <Route path='/users' Component={UserList}/>
          <Route path='/todo' Component={Todo}/>
          <Route path='/todo2' Component={Todo2}/>
          <Route path='/number/count' Component={Numbercounter}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;