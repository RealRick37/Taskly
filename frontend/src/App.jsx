import './App.css'
import Navbar from './components/Navbar'
import api from './api/axios';
import { useEffect, useState } from "react";
import TaskList from './components/TaskList';
import Router from "./routes/Router";

function App() {
    return (
        <Router />
    );
}
export default App;