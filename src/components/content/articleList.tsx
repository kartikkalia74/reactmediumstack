
import React ,{useEffect, useState}  from 'react';
import Article from './article';
import {RouteComponentProps,withRouter} from 'react-router-dom';
import {connect} from  'react-redux';
import {Dispatch} from 'redux';
import {Add} from '../../actions/article';
import {typeState} from '../../reducers/article';
import {privateApi,publicApi,baseUrl} from '../../services/api'

type  props = {article:typeState[]}&RouteComponentProps;
const ArticleList  = function(props:props) {
const [articleList,changeList] = useState([])
    useEffect(()=>{
       const  getList =async () =>{
           try{
            const result = await privateApi.listArticle()
            console.log(result)
            changeList(result.data)
           }catch(err){
               console.log(err)
               
           }
            
        }

        getList()
        
    },[])

    
    return (
        <div className="article_list">
            <div>
                <h1>Article Panel</h1>
                <button  onClick={()=>{props.history.push('/home/article/add')}}>Add Article</button>
            </div>
        {articleList.map((each,index)=>  <Article key={index} content={each}/>)}

        </div>
    )
};
const mapStateToprops = (state:any)=>{
return state;
};
const mapdispatchToprops = (dispatch:Dispatch) => {
  return {Add: (payload:any)=>dispatch(Add(payload)) }  
};
export default  connect(mapStateToprops,mapdispatchToprops)(withRouter(ArticleList));