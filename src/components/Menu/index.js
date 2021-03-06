import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BurgerIcon from '../../assets/burger.svg';
import { ToggleButton, MenuWrapper, Routing } from './styles';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      collapse: false,
    };
  }

  activateMenu = () => {
    const { collapse } = this.state;
    this.setState({
      collapse: !collapse,
    });
  };

  render() {
    const { collapse } = this.state;
    return (
      <MenuWrapper>
        <ToggleButton>
          <img src={BurgerIcon} alt="Toggle Menu" onClick={this.activateMenu} />
        </ToggleButton>
        {collapse &&
          <Routing>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/options">Options</Link>
          </Routing>
        }
      </MenuWrapper>
    );
  }
}

export default Menu;
