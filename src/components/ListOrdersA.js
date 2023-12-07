import axios from "axios";
import { useEffect,useState } from "react";

import ElOrdersA from "./ElOrdersA";
function ListOrdersA() {
    const[orders,setOrders]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3001/orders")
        .then((response)=>setOrders(response.data));
       }, []);
       const deleteProd = async (id) => {
        if (!window.confirm("Are you sure you want to delete")) {
          return;
        }
    
        axios.delete('http://localhost:3001/orders/' + id)
          .then(() => {
            console.log('successfully deleted!')
            setOrders(prevOrders => prevOrders.filter((order) => order.id !== id));
          }).catch((error) => {
            console.log(error)
          })
    
      }

    return ( 
        <>
        
        <ElOrdersA orders={orders} deleteProd={deleteProd}/>
        </>
     );
}


export default ListOrdersA;