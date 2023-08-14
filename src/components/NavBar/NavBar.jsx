import { Component } from 'react';
import './NavBar.css';
import { MenuItems } from '../MenuItems/MenuItems';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className='NavBarItems'>
        <h1 className='navbar-logo'>TagAlong</h1>

        <div className='menu-icons' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={this.state.clicked ? 'navbar-menu active' : 'navbar-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>{item.title}</Link>
              </li>
            );
          })}

          <button>find ride</button>
        </ul>
      </nav>
    )
  }
}

export default NavBar;