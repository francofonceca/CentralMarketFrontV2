import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AdditionalData from './pages/additionalData/AdditionalData';
import AdditionalDataBussiness from './pages/AdditionalDataBussiness/AdditionalDataBussiness'
import CompanyDataReg from './pages/companyData/CompanyDataReg';
import BranchOffices from './pages/branchOffices/BranchOffices';
import DeliveryPoints  from './pages/DeliveryPoints/DeliveryPoints';
import Users  from './pages/Users/Users';
import Security  from './pages/Security/Security';

function App() {
  return (
    <Router>
      <div className="bg-home">
          <Navbar />
          <Switch>
            <Route path='/' exact component={ Home }></Route>
            {/* <Route path='/AdditionalData' exact component={ AdditionalData }></Route>
            <Route path='/AdditionalDataBussiness' exact component={ AdditionalDataBussiness }></Route>
            <Route path='/CompanyDataReg' exact component={ CompanyDataReg }></Route>
            <Route path='/BranchOffices' exact component={ BranchOffices }></Route>
            <Route path='/DeliveryPoints' exact component={ DeliveryPoints }></Route>
            <Route path='/Users' exact component={ Users }></Route>
            <Route path='/Security' exact component={ Security }></Route> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
