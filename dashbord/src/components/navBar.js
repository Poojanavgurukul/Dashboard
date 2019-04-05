import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

const styles =theme => ( {
  
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    navBar:{
      fontFamily:"ubuntu",
      [theme.breakpoints.down('md')]: {
      fontSize:theme.spacing.unit*3
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:theme.spacing.unit*3
    },
    [theme.breakpoints.down('xs')]: {
       fontSize:theme.spacing.unit*3
    },
    }
  });
  class ButtonAppBar extends React.Component{
    render(){
        const { classes } = this.props;
        return (
          <div >
            <AppBar position="static" >
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <Link to="/">
                  <MenuIcon className={classes.navBar}/>
                  </Link>
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.navBar}>
                  Dashbaord
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        );
    }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);