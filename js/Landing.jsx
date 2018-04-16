// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {object} from 'prop-types';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {
  static contextTypes = {
    history: object
  };
  props: { 
    searchTerm: string, 
    handleSearchTermChange: Function 
  };
  render () {
    return (
      <div className="landing">
        <h1>My Video Library</h1>
        <input onChange={this.props.handleSearchTermChange} type="text" value={this.props.searchTerm} placeholder="Search" />
        <Link to="/search">or just Browse All</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Landing);
