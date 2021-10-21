import React from 'react';
import './App.css';

// To router
import {Switch , Route ,HashRouter} from 'react-router-dom';


//pages
import HomePage from './Pages/HomePage/HomePage'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import EditProfilePage from './Pages/EditProfile/EditProfilePage';
//components
import MainProfileCard from './Components/Cards/MainProfileCard/MainProfileCard';
import Nav from './Components/Nav/Nav' 
import MatchingTeachers from './Pages/MatchingTeachers/MatchingTeachers'
import Schedule from './Components/Utilities/Schedule/Schedule';
import Footer from './Components/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import TeacherSignUp from './Pages/SignUp/TeacherSignUp';
import Survey from './Components/survey/survey';

function App() {
  return (
    <HashRouter>
    <div className="App"> 
      <Nav/>
      <Switch> 
         <Route path="/" exact component={HomePage} />
         <Route path="/SignIn" component={SignIn} />
         <Route path="/SignUp" component={SignUp} />
         <Route path="/forgotPassword" component={ForgotPassword} />
         <Route path="/teachers" component={MatchingTeachers} />
         <Route path="/profile" component={MainProfileCard} />
         <Route path="/calendar" component={Schedule} />
         <Route path="/editprofile" component={EditProfilePage} />
         <Route path="/dashboard" component={Dashboard} />
         <Route path="/teacherSignUp" component={TeacherSignUp} />
         <Route path="/survey" component={Survey} /> 
         <Route path="/footer" component={Footer} /> 
         {/* <Route path="/editProfile" component={EditProfilePage}/> */}
      </Switch> 
    </div>
    </HashRouter>
  );
}

export default App;
