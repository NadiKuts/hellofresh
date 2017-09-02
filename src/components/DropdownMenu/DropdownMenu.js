import React, { Component } from 'react';
import './DropdownMenu.css';

class DropdownMenu extends Component {
  render() {
    return (
      <div className="DropdownMenu">
        <button className='Tab'>{this.props.name}<i className='down'></i></button>
        <div className=''>
        </div>
      </div>
    );
  }
}

export default DropdownMenu;