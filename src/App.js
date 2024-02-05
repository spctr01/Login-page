import  {LoginForm}  from './Components/LoginForm/LoginForm';
import {RegisterForm}  from './Components/RegisterForm/RegisterForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
