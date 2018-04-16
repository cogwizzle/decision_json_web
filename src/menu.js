import React from 'react';
import { NavLink } from "react-router-dom";
import Buttons from './buttons';

const styles = {
  ...Buttons,
  menu: {
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default props => (
  <div className='menu' style={styles.menu}>
    {Object.keys(props.trees).map(treeName => {

      const tree = props.trees[treeName];

      return <div key={treeName} style={styles.wrapper}><NavLink style={styles.buttons} to={`/${tree.name}-${tree.state.find(state => null === state.parent).id}`}>{tree.name}</NavLink></div>
    })}
  </div>
);
