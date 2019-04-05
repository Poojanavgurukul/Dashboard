import React from 'react';
import ButtonAppBar from './navBar'
import RecipeReviewCard from './userDetail';
import Userdetail from './userFullDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return (
          <Router>
          <div >
          <Route exact path ="/" component={ButtonAppBar}/>
          <Route exact path="/" component={RecipeReviewCard} />
          <Route path="/userdetail" component={Userdetail} />
          </div>
          </Router>
        );
    }
}
export default Home;