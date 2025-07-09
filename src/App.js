
import './App.css';
import MainPage from './component/MainPage';
import {Route,Routes} from 'react-router-dom';
import MealInfo from './component/MealInfo';
import About from './component/About';
import Mail from './component/Mail';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/:mealid' element={<MealInfo/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/mail' element={<Mail/>}></Route>
    </Routes>
  );
}

export default App;
