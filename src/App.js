import React, {Component} from 'react';
import {RootNavigator} from './navigations/root';
import {isSignedIn} from './navigations/auth';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false,
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(response =>
        this.setState({signedIn: response, checkedSignIn: true}),
      )
      .catch(error => alert('Oops! Something is broken'));
  }

  render() {
    const {checkedSignIn, signedIn} = this.state;
    const Layout = RootNavigator(signedIn);
    if (checkedSignIn) {
      return <Layout />;
    } else {
      return null;
    }
  }
}
