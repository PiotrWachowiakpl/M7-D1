import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import MySearch from './components/MySearch';
import CompanySearchResults from './components/CompanySearchResults';


function App() {
  return (
    <BrowserRouter>
    <Routes>    
      <Route exact path="/" element={<MySearch/>}/>
      <Route exact path="/:companyName" element={<CompanySearchResults/>}/>
</Routes>
    
    </BrowserRouter>

  );
}

export default App;
