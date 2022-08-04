import React from "react";
import {Routes, Route} from 'react-router-dom'

//Components imports
import Layout from './assets/components/Layout';
import Contents from "./assets/components/Contents";

function App() {
  return (
    <Routes>
      <Route path="/portfolio" element={ <Layout /> } >
        <Route index element={ <Contents /> } />
      </Route>
    </Routes>
  );
}

export default App;
