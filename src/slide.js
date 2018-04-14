import React from 'react';
import { NavLink } from "react-router-dom";
import Buttons from './buttons';

const styles = {
  ...Buttons,
  slide: {
    display: 'flex',
    flexDirection: 'column',
    flexFlow: 'column',
    height: '100%'
  },
  controls: {
    display: 'flex',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    minHeight: '300px',
    display: 'flex',
    flex: 8,
    flexDirection: 'row'
  }
};

export default props => {
  const children = props.states.filter(state => props.id === state.parent)
  const childLinks = children.map(state => (
    <NavLink style={styles.buttons} key={`link_${state.id}`} to={`${props.path}-${state.id}`}>{state.link}</NavLink>
  ))

  return (<div className='slide' style={styles.slide}>
    <div className='content' style={styles.content}>
      {props.slide}
    </div>
    <div className='controls' style={styles.controls}>
      {(childLinks.length > 0) ? childLinks : <NavLink style={styles.buttons} to='/'>Back to Home</NavLink>}
    </div>
  </div>);
};