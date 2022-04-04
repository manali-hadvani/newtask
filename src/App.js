
import './App.css';
import Category from './Components/Category';
import Collection from './Components/Collection';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Outlet from './Components/Outlet';
import Sallers from './Components/Sallers';

function App() {
  return (
    <div className="App">
      
      
    <Header/>
    <Collection/>
    <Category/>
    <Sallers/>
    <Outlet/>
    <Footer/>

    </div>
  );
}

export default App;
