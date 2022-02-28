import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import MySearch from './components/MySearch';


function App() {
  return (
    <BrowserRouter>
    <Routes>    
      <Route exact path="/" element={<MySearch/>}/>
      {/* <Route patr="/:companyId"={<SearchResults/>} */}
</Routes>
    
    </BrowserRouter>

  );
}

export default App;
