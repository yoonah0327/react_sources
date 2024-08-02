import './css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Member from './pages/Member';
import MemberForm from './pages/MemberForm';
import MemberUpdateForm from './pages/MemberUpdateForm';

function App() {
  return (
    <div className="container">
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/members" element={<Member/>}></Route>
       <Route path="/members/new" element={<MemberForm/>}></Route>
       <Route path="/members/:num/edit" element={<MemberUpdateForm/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
