import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nutshell from './components/Nutshell';
import { BrowserRouter as Router } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
<Router>
  <Nutshell />
</Router>,
document.getElementById('root'))


