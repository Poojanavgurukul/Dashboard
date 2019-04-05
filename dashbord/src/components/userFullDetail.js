import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonAppBar from './navBar'

const styles = theme => ({
    card: {
        width:300,
        height:300,
        marginTop: theme.spacing.unit * 5,
        backgroundColor:"#d5d5d5"
    },
    cardDisplay: {
        display:"flex",
        justifyContent:"center",
    },
    text:{
        textAlign:"center",
    },
    image:{
        width:200,
        height:200,
        margin:theme.spacing.unit*1,
        marginLeft:theme.spacing.unit*4,
        borderRadius:"50%"
    }
});
class Userdetail extends React.Component {
    render() {
        const { classes,location} = this.props;
        const {user}=location.state
        return (
            <div>
            <ButtonAppBar />
            <div className={classes.cardDisplay}>
                <Card className={classes.card}>
                    <CardContent>
                        <img src={user.avatar} alt="user profile" className={classes.image}/>
                        <Typography gutterBottom variant="h5" component="h5" className={classes.text}>
                       {user.first_name} {user.last_name}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            </div>
        );
    }
}

Userdetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Userdetail);