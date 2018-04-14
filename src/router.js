import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './menu';
import Slide from './slide';

const styles= {
  wrapper: {
    width: '100%',
    padding: '20',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  app: {
    maxWidth: '1300px',
    width: '100%',
  }
};

export default props => (
  <Router>
    <div style={styles.wrapper}>
      <div className='app' style={styles.app}>
        <Route exact path="/" component={() => <Menu trees={props.trees}/>} />
        {Object.keys(props.trees).map((treeName, index) => {

          const { trees } = props;
          const tree = trees[treeName];
          return tree.state.map(state => {

            const path = calculateRoute(treeName, tree, state);

            return <Route key={state.id} path={path} component={() => <Slide slide={state.slide} id={state.id} states={tree.state} path={path} />} />
          });
        })}
      </div>
    </div>
  </Router>
);

const calculateRoute = (treeName, tree, node) => {

  const path = addPathAndFindParent(tree, node, node.id);

  return `/${tree.name}-${path}`;
};

const addPathAndFindParent = (tree, node, currentPath) => {

  if (node.parent){

    const next = tree.state.find(state => state.id === node.parent);

    return addPathAndFindParent(tree, next, `${next.id}-${currentPath}`);
  } else {

    return currentPath;
  }
};