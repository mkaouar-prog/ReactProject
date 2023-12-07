import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementsArticlesCarts from '../components/ClientSide/ElementsArticlesCarts';

function Home() {
    const[articles,setArticles]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3001/produits")
        .then((response)=>setArticles(response.data));
       }, []);
    return ( 
        <>
        
         
    
    
        <h2>Liste des articles </h2>
        <ElementsArticlesCarts articles={articles} />
        </>
     );
}

export default Home;
