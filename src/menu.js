import React from 'react';
import { NavLink } from "react-router-dom";

export default props => (
  <div className='menu'>
    {Object.keys(props.trees).map(treeName => {

      const tree = props.trees[treeName];
      console.log(`${tree.name}-${tree.state.find(state => null === state.parent).id}`);

      return <NavLink key={treeName} to={`/${tree.name}-${tree.state.find(state => null === state.parent).id}`}>{tree.name}</NavLink>
    })}
  </div>
);