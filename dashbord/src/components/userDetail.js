import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import axios from 'axios'

const styles = theme => ({
    card: {
        maxWidth: 250,
        marginTop: theme.spacing.unit * 2,
        backgroundColor:"#d5d5d5",
        marginLeft:theme.spacing.unit*8
    },
    cardDisplay: {
        display: "grid",
        gridTemplateColumns: "25% 25% 25%",
        margin: theme.spacing.unit * 3,
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: "30% 30% 30% ",
            gridGap: "5%",
            marginLeft:theme.spacing.unit*1,
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "90%",
            marginLeft:theme.spacing.unit*0.5
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "90%",
            marginLeft:theme.spacing.unit*1
        },
    },
    button: {
        margin: theme.spacing.unit*1,
        fontFamily:"ubuntu"
    },
    input: {
        display: 'none',
    },
    text: {
        marginLeft: theme.spacing.unit * 1
    }
});

class RecipeReviewCard extends React.Component {
    state = {
        users: [],
        isLoading: false,
        errors: null
    };
    componentDidMount() {
        axios
            .get("https://reqres.in/api/users?page=2")
            .then(resp => resp.data.data)
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => {
                this.setState({ errors: error, isLoading: false })
            });
    }
    render() {
        const { classes } = this.props;
        const { isLoading, users } = this.state;

        return (
            <div className={classes.cardDisplay}>
                {!isLoading ? (
                    users.map(user => {
                        return (
                            <div  key={user.id}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h5" className={classes.text}>
                                            {user.first_name}
                                        </Typography>
                                        <Link to={{pathname:"/userdetail",
                                        state:{
                                          user:user
                                        }    
                                    }}>
                                        <Button variant="contained" color="primary" className={classes.button}>
                                            More Detail
                                        </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })
                ) : (
                        <p>Loading...</p>
                    )}
            </div>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);