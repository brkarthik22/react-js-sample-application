import React from 'react';

const hello = ({ name }) => <h1>Hello {name}!</h1>;

function simpleHOC(WrappedComponent) {
  return class extends React.Component{
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
}

const HocComponent = simpleHOC(hello);

export default HocComponent;