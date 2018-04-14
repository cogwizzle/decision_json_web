import React from 'react';
import { NavLink } from "react-router-dom";

export default props => {
  console.log(props.id, props.states)
  const children = props.states.filter(state => props.id === state.parent)
  console.log('children: ', children);
  const childLinks = children.map(state => (
    <NavLink key={`link_${state.id}`} to={`${props.path}-${state.id}`}>{state.link}</NavLink>
  ))

  return (<div className='slide'>
    <div className='content'>
      {props.slide}
    </div>
    <div className='controls'>
      {(childLinks.length > 0) ? childLinks : <NavLink to='/'>Back to Home</NavLink>}
    </div>
  </div>);
};