import WeatherApp from './WeatherApp/WeatherApp';
import { Routes, Route } from 'react-router-dom';
import Header from './WeatherApp/Header/Header';
import Favorite from './WeatherApp/Favorite/Favorite';



function App() {


  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<WeatherApp />} />
      <Route path="/favorite" element={<Favorite />} />
    </Routes>
    </>
  );
}

export default App;


