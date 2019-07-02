import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './index.less';

/**
 * NoPinterEvents decorator.
 * It does not modify the component passed to it.
 * It only add `pointer-events: none` css property to the element.
 * It returns a new component, with `className` property.
 * You can use it like this: noPointerEvents(Component),
 */
const noPointerEvents = Component => {
  class NoPointerEvents extends React.PureComponent {
    render() {
      const {
        className: classNameProp,
        ...other
      } = this.props;

      return (
        <Component
          className={classNames(classes.root, classNameProp)}
          {...other}
        />
      );
    }
  }

  NoPointerEvents.propTypes = {
    /**
     * The CSS class name of the wrapper element.
     */
    className: PropTypes.string,
  };

  return NoPointerEvents;
};

export default noPointerEvents;
