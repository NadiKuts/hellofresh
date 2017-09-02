import React, { Component } from 'react';
import './Tabs.css';
import logo from '../../images/hellofresh-logo.png';
import DropdownMenu from '../DropdownMenu/DropdownMenu.js';

class Tabs extends Component {
  constructor() {
    super()
    this.tabsNames = ['Our Plans', 'How It Works', 'Recipes', 'Wine', 'Kitchenware', 'Blog', 'Gift Cards'];
  }
  render() {
    const aTabs = [];
    for (let i = 0; i < this.tabsNames.length; i+=1) {
      if (this.tabsNames[i] === 'How It Works' || this.tabsNames[i] === 'Recipes') {
        const dropdownMenu = (<DropdownMenu key={i} name={this.tabsNames[i]}></DropdownMenu>);
        aTabs.push(dropdownMenu);
      } else {
        aTabs.push(
          <button className='Tab' key={i}>{this.tabsNames[i]}</button>
        );
      }
    }
    return (
      <div className="Tabs">
        <img className="HelloFreshLogo" src={logo} alt="logo" />
        {aTabs}
      </div>
    );
  }
}

export default Tabs;
