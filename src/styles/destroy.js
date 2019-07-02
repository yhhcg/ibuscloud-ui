import React from 'react';
import PropTypes from 'prop-types';

/**
 * Destroy decorator.
 * It only inject `visible` prop to decide whether to render the component.
 * You can use it like this: destroy(Component).
 */
const destroy = (Component) => {
  class Destroy extends React.PureComponent {
    render() {
      const { visible } = this.props;

      if (!visible) return null;

      return <Component {...this.props} />;
    }
  }

  Destroy.propTypes = {
    /**
     * If false, the component will be unmounted and destroyed.
     */
    visible: PropTypes.bool,
  };

  return Destroy;
};

export default destroy;
