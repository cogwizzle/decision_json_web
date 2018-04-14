import React from 'react';
import ReactDom from 'react-dom';
import TreeList from './trees/index';
import Router from './router';
const trees = TreeList.reduce((trees, treeName) => {

  trees[treeName] = require(`./trees/${treeName}.json`);
  return trees;
}, {});

ReactDom.render(
  <Router trees={trees} />,
  document.querySelector('#anchor')
);