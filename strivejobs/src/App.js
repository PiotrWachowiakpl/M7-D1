import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import MySearch from './components/MySearch';
import CompanySearchResults from './components/CompanySearchResults';
import Favourites from './components/Favourites';
import store from './store';
import {Provider} from "react-redux"


function App() {
  return (

    <Provider store={store}>

    <BrowserRouter>
    <Routes>    
      <Route exact path="/" element={<MySearch/>}/>
      <Route exact path="/:favourites" element={<Favourites/>}/>
      <Route exact path="/:companyName" element={<CompanySearchResults/>}/>
</Routes>
    
    </BrowserRouter>
    </Provider>

  );
}

export default App;
