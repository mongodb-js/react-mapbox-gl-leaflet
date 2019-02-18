import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './app.scss';

class App extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { className } = this.props;

    const _className = classnames(
      styles.root,
      className
    );

    return (
      <div className={_className}>
        <p>Map goes here</p>
      </div>
    );
  }
}

export default App;
export { App };
