import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import User, {Customer, Order, Track} from "./User.js";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabActive: 'nav-user'
    }
    this.activeTab = this.activeTab.bind(this)
  }
  activeTab = (e) => {
    this.setState({tabActive: e.target.id})
  }
  render() {
    return (
      <Router>
      <div className="">
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <Link to="/user" id="nav-user" className={`nav-link ${this.state.tabActive === "nav-user"? 'active': ''}`} onClick={this.activeTab}>User</Link>
          </li>
          <li className="nav-item">
            <Link to="/customer" id="nav-customer" className={`nav-link ${this.state.tabActive === "nav-customer" ? 'active': ''}`} onClick={this.activeTab}>Customer</Link>
          </li>
          <li className="nav-item">
            <Link to="/order" id="nav-order" className={`nav-link ${this.state.tabActive === "nav-order"? 'active': ''}`} onClick={this.activeTab}>Order</Link>
          </li>
          <li className="nav-item">
            <Link to="/track" id="nav-track" className={`nav-link ${this.state.tabActive === "nav-track"? 'active': ''}`} onClick={this.activeTab}>Track</Link>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <Switch>
          <Route path="/user"><User /></Route>
          <Route path="/customer"><Customer /></Route>
          <Route path="/order"><Order /></Route>
          <Route path="/track"><Track /></Route>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default Home;