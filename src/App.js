import logo from './logo.svg';
//import './App.css';
import Student from './Components/Student';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
import { withRouter } from "react-router";
import { Sidebar } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom';
import Studentprofile from './Components/Studentprofile';
import Profile from './Components/Profile';
import SmartTransaction from './Components/SmartTransaction';
import Newprofile from './Components/Newprofile';
import BlogSpot from './Components/BlogSpot'
import Directorsoffice from './Components/Directorsoffice';
import FacultyProfile from './Components/FacultyProfile';
import AcadProfile from './Components/AcadProfile';
import Administrativeoffice from './Components/Administrativeoffice';
import Cashdisburs from './Components/Cashdisburs';
import Acadoffice from './Components/Acadoffice';
import Studaffair from './Components/Studaffair';
import Recordsoffice from './Components/Recordsoffice';
import Qualityass from './Components/Qualityass';
import Admin from './Components/Admin'
import Dashboard from './Components/Dashboard';
import Usertable from './Components/Usertable';
import Transactions from './Components/Transactions'
import NewprofileVisitor from './Components/NewprofileVisitor'
import VisitorProfile from './Components/VisitorProfile'
import VisitorsProfile from './Components/VisitorsProfile'
import VDirectorOffice from './Components/VDirectorOffice'
import VAdministrativeoffice from './Components/VAdministrativeoffice'
import VAcadoffice from './Components/VAcadoffice'
import VStudaffair from './Components/VStudaffair'
import VRecordsoffice from './Components/VRecordsoffice'
import VQualityass from './Components/VQualityass'
import VCashdisburs from './Components/VCashdisburs'
import UserLog from './Components/UserLogs'
import Appointment from './Components/Appointment'
import RequestAppointment from './Components/RequestAppointment'


import { Route, Routes, useNavigate, HashRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Dashboard />
    </div>
  );
}

export default App;
