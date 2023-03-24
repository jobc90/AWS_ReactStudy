import { Route, Routes } from 'react-router-dom';
import InputSample from './pages/InputSample/InputSample';

function Test1() {
  return (<h1>Test1</h1>);
}

function Test2() {
  return (<h1>Test2</h1>);
}


function App() {
  return (
    <>
      <Routes>
        <Route path="/t1" Component={Test1}/>
        <Route path="/t2" Component={Test2}/>
        <Route path="/sample/InputSample" Component={InputSample}/>
      </Routes>
    </>
  );
}

export default App;
