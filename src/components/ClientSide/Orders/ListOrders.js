import axios from "axios";
import { useEffect,useState } from "react";
import ElementsOrders from "./ElementsOrders";
function ListOrders() {
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
        
        <ElementsOrders orders={orders} deleteProd={deleteProd}/>
        </>
     );
}


export default ListOrders;