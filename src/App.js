import { Routes, Route } from 'react-router-dom';
import Navigation from './Routes/Navigation/Navigation.component';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index/>
        <Route path='/shop' />
        <Route path='/checkout' />
        <Route path='/auth' />
        <Route path='/contactus' />
      </Route>
    </Routes>
  );
}

export default App;
