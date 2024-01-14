import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateUser from './components/UpdateUser';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
