import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './screens/Login/Login';
import Header from './common/Header/Header';
import ApplicantDashboard from './screens/ApplicantDashboard/ApplicantDashboard';
import JobListings from './screens/JobListings/JobListings'

function App() {
  return (
    <div className="App">
      <Header />
      
      <Router>
        <Routes>
          <Route exact path="/" element={ <Login /> } />
          <Route exact path="/applicant/dashboard" element={ <ApplicantDashboard /> } />
          <Route exact path="/applicant/listings" element= { <JobListings /> } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
