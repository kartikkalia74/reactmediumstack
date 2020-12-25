/********************  modules************** */
import React from 'react';
import {Route} from 'react-router-dom';

/********************  components************** */

import Recomended_developer from '../components/content/recommended_developer';
import Article_list from '../components/content/articleList';
import AddArticle from '../components/content/articleForm';

const home_page = function(){
    return (
        <div className="home">
            <Route  exact path = '/home/'  component={Recomended_developer} />
           <Route exact path='/home/'  component={Article_list}/>
            <Route path="/home/article/add"  component={AddArticle}/>
        </div>
            

        
    )
}

export default home_page;