import React from 'react';
import {
  number,
  bool,
  object,
  func,
} from 'prop-types';
import classNames from 'classnames';
import {withStyles} from 'material-ui/styles';
import {default as MuiAppBar} from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';

const styles = (theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShrink: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  iconButton: {
    transform: 'rotate3d(0, 1, 0, 180deg)',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  iconButtonFlip: {
    transform: 'rotate3d(0, 1, 0, 0deg)',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  icon: {
    width: 17,
    height: 17,
    fontSize: 17,
  },
  searchIcon: {
    width: 16,
    height: 16,
    fontSize: 16,
  },
});

/**
 * AppBar provides a clickable icon to toggle expand status.
 * AppBar expands or shrinks according to isExpanded and expandedOffsetWidth.
 * @param {Number} [props.expandedOffsetWidth=0] - Expanded offset width in pixel.
 * @param {Number} [props.shrinkedOffsetWidth=0] - Shrinked offset width in pixel.
 * @param {Boolean} [props.isExpanded=true] - Expand status
 * @param {Function} [props.onExpandToggle] - Expand status change callback
 */
@withStyles(styles, {name: 'IBusUiAppBar'})
class AppBar extends React.Component {
  static propTypes = {
    classes: object,
    expandedOffsetWidth: number,
    shrinkedOffsetWidth: number,
    isExpanded: bool,
    onExpandToggle: func,
  };

  static defaultProps = {
    expandedOffsetWidth: 0,
    shrinkedOffsetWidth: 0,
    isExpanded: true,
  };

  /**
   * Call props.onExpandToggle
   */
  handleExpandToggle() {
    const {
      onExpandToggle,
    } = this.props;

    typeof onExpandToggle === 'function' && onExpandToggle();
  }

  /**
   * @return {Component}
   */
  render() {
    const {
      classes,
      expandedOffsetWidth,
      shrinkedOffsetWidth,
      isExpanded,
    } = this.props;

    return (
      <MuiAppBar
        classes={{
          root: classNames(classes.appBar, {
            [classes.appBarShrink]: isExpanded === false,
          }),
        }}
        style={{
          width: isExpanded === true ?
            `calc(100% - ${shrinkedOffsetWidth}px)` :
            `calc(100% - ${expandedOffsetWidth}px)`,
        }}
        color='inherit'
      >
        <Toolbar>
          <IconButton
            className={classNames(classes.iconButton, {
              [classes.iconButtonFlip]: isExpanded === true,
            })}
            onClick={this.handleExpandToggle.bind(this)}
          >
            <SvgIcon classes={{
              root: classes.icon,
            }}>
              <use href="#icon-icon_menu"></use>
            </SvgIcon>
          </IconButton>
          <IconButton>
            <SvgIcon classes={{
              root: classes.searchIcon,
            }}>
              <use href="#icon-icon_search"></use>
            </SvgIcon>
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    );
  }
}

export default AppBar;
