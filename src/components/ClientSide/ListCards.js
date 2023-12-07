import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementsArticlesCarts from './ElementsArticlesCarts';

function ListArticles() {
    const[articles,setArticles]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3001/produits")
        .then((response)=>setArticles(response.data));
       }, []);
    return ( 
        <>
        
         
    
    
       
        <ElementsArticlesCarts articles={articles} />
        </>
     );
}

export default ListArticles;
