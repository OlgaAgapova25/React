import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ArticleDetail from './components/ArticleDetail';
import ArticleList from './components/ArticleList';
import PagesList from './components/PagesList';
import PageDetail from './components/PageDetail';

const articles = [
  {id: 1, title:'Article 1', content:'Article 1 content'},
  {id: 2, title:'Article 2', content:'Article 2 content'},
];

const pages = [
  {id:1, title: 'Main', linkId: 2, linkTitle: 'About us'},
  {id:2, title: 'About us', linkId: 1, linkTitle:'Main'},
];

const App = () => (
  <Router>
    <div> 
      <Routes>
        <Route path="/pages/:id" element={<PageDetail pages = {pages} />} />
        <Route path="*" element={<PagesList pages = {pages} />} />
      </Routes>
    </div>
  </Router>
);

export default App;