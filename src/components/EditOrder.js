import { useState,useEffect  } from 'react';

import axios from 'axios';

import { useNavigate , useParams} from 'react-router-dom';

function EditOrder() {

    const navigate=useNavigate();

    const [name, setname] = useState("");
    const [tel, settel] = useState("");
    const [mail, setmail] = useState("");
    const [auteur, setauteur] = useState("");
    const [ref, setref] = useState("");
    const [adress, setadress] = useState("");
    const [city, setcity] = useState("");
    const [zip, setzip] = useState("");
    const [prixAchat, setprixAchat] = useState("");
    const [prixVente, setprixVente] = useState("");
    const [qte, setqte] = useState("");
    const [status, setstatus] = useState("");
    const [img, setimg] = useState("");
    const [totalPrice, settotalPrice] = useState("");
    const handleDeliverClick = () => {
        
        setstatus("Delivered");
      };
      const handleRejectClick = () => {
        
        setstatus("Rejected");
      };
      const handleProcessClick = () => {
        
        setstatus("Processing");
      };
    const {id} = useParams();

    useEffect(()=>{
      axios.get('http://localhost:3001/orders/'+id).then(res => {
          setname(res.data.name);
          settel(res.data.tel);
          setmail(res.data.mail);
          setauteur(res.data.auteur);
          setref(res.data.ref);
          setadress(res.data.adress);
          setcity(res.data.city);
          setzip(res.data.zip);
          setprixAchat(res.data.prixAchat);
          setprixVente(res.data.prixVente);
          setqte(res.data.qte);
          setstatus(res.data.status);
          setimg(res.data.img);
          settotalPrice(res.data.totalPrice);
      })
    },[id]);

    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newProduct = {
        
        name,
        tel,
        mail,
        auteur, 
        ref, 
        adress,
        city, 
        zip,
        prixAchat,
        prixVente,
        qte,
        status,
        img,
        totalPrice,
        id:id
      };
    
   axios.put("http://localhost:3001/orders/"+id,newProduct)
  .then(res => {  
  console.log(res);
  navigate("/admin/orders")
    })   
  .catch(error=>{
      console.log(error)
      alert("Erreur ! Modification non effectuée")
      })
  
  }

    return ( 
        <>
        <div className="container">
        
        <h4>Modify Order Number  <button type="button" className="btn btn-dark"
                  >
                  {id}
                </button>
        </h4>
       
        
        
<form onSubmit={handleSubmit}>
  <table className="table">
    <tbody>
      <tr>
        <td>
          <h6>Name</h6>
          <input
            className="form-control"
            placeholder="Référence"
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </td>
        <td>
          <h6>Tel</h6>
          <input
            className="form-control"
            placeholder="Tel"
            type="text"
            value={tel}
            onChange={(e) => settel(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td>
          <h6>mail</h6>
          <input
            className="form-control"
            placeholder="mail"
            type="text"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
          />
        </td>
        <td>
          <h6>auteur</h6>
          <input
            className="form-control"
            placeholder="Prix Achat"
            type="text"
            value={auteur}
            onChange={(e) => setauteur(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td>
          <h6>Titles</h6>
          <input
            className="form-control"
            placeholder="Prix Vente"
            type="text"
            value={ref}
            onChange={(e) => setref(e.target.value)}
          />
        </td>
        <td>
          <h6>Adress</h6>
          <input
            className="form-control"
            placeholder="Quantité"
            type="text"
            value={adress}
            onChange={(e) => setadress(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td>
          <h6>city</h6>
          <input
            className="form-control"
            placeholder="Prix Vente"
            type="text"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />
        </td>
        <td>
          <h6>zip</h6>
          <input
            className="form-control"
            placeholder="Quantité"
            type="text"
            value={zip}
            onChange={(e) => setzip(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td>
          <h6>prix achat</h6>
          <input
            className="form-control"
            placeholder="Prix Vente"
            type="text"
            value={prixAchat}
            onChange={(e) => setprixAchat(e.target.value)}
            disabled
          />
        </td>
        <td>
          <h6>prixVente</h6>
          <input
            className="form-control"
            placeholder="Quantité"
            type="text"
            value={prixVente}
            onChange={(e) => setprixVente(e.target.value)}
            disabled
          />
        </td>
      </tr>
      <tr>
        <td>
          <h6>qte</h6>
          <input
            className="form-control"
            placeholder="Prix Vente"
            type="text"
            value={qte}
            onChange={(e) => setqte(e.target.value)}
            
          />
        </td>
        <td>
          <h6>Status</h6>
          {status === "Processing" ? (
                <button type="button" className="btn btn-warning" disabled>
                  Processing
                </button>
              ) : status === "Delivered" ? (
                <button type="button" className="btn btn-success">
                  Delivered
                </button>
              ) : status === "Rejected" ? (
                <button type="button" className="btn btn-danger">
                  Rejected
                </button>
              ) : (
                ''
              )}
            
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          <h6>Change Status</h6>
          {status === "Processing" ? (
            <>
                <button type="button" className="btn btn-warning" disabled>
                  Process
                </button>  |  
                <button type="button" className="btn btn-success"
                  onClick={handleDeliverClick}>
                Deliver
                </button>  |  
                <button type="button" className="btn btn-danger"
                  onClick={handleRejectClick} >
                  Reject
                </button>
            </>
              ) : status === "Delivered" ? (
                <>
                <button type="button" className="btn btn-success" disabled>
                  Deliver
                </button>  |  
                <button type="button" className="btn btn-danger"
                onClick={handleRejectClick}
                >
                Reject
                </button>  |  
                <button type="button" className="btn btn-warning" 
                onClick={handleProcessClick}
                >
                  Process
                </button>
              </>
              ) : status === "Rejected" ? (
                <>
                <button type="button" className="btn btn-danger" disabled>
                  Reject
                </button>  |  
                <button type="button" className="btn btn-warning" 
                  onClick={handleProcessClick}
                >
                Process
              </button>  |  
               <button type="button" className="btn btn-success" 
                onClick={handleDeliverClick}
               >
               Deliver
             </button>
             </>
              ) : (
                ''
              )}
        </td>
      </tr>
     
      <tr>
        <td colSpan="2" style={{ textAlign: 'center' }}>
          <button className="btn btn-success" style={{ fontSize: '20px', padding: '10px 20px' }}>
            Valider
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</form>

   
  </div>
  </>
     );
}

export default EditOrder;
