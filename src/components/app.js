import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Loader from './loader';

class App extends Component {
  render() {
    if(this.props.isLoading) {
      return (
          <main className="wrapper wrapper--red">
            <Loader />
          </main>
        );
    }
    return (
      <div>
      	<Header />
          {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        isLoading: state.forecast.isLoading
    };
}
export default connect(mapStateToProps)(App);