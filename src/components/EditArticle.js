import { useState,useEffect  } from 'react';

import axios from 'axios';

import { useNavigate , useParams} from 'react-router-dom';

function EditArticle() {

    const navigate=useNavigate();

    const [reference, setReference] = useState("");
    const [designation, setDesignation] = useState("");
    const [marque, setMarque] = useState("");
    const [prixAchat, setPrixAchat] = useState("");
    const [prixVente, setPrixVente] = useState("");
    const [qtestock, setQtestock] = useState("");
    const [auteur, setAuteur] = useState("");
    const [imageartpetitf, setImageartpetitf] = useState("");
    
    const {id} = useParams();

    useEffect(()=>{
      axios.get('http://localhost:3001/produits/'+id).then(res => {
          setReference(res.data.reference);
          setDesignation(res.data.designation);
          setMarque(res.data.marque);
          setPrixAchat(res.data.prixAchat);
          setPrixVente(res.data.prixVente)
          setAuteur(res.data.auteur);;
          setQtestock(res.data.qtestock);
          setImageartpetitf(res.data.imageartpetitf);
      })
    },[id]);

    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newProduct = {
        id:id,
        reference,
        designation,
        marque,
        auteur,
        prixAchat, 
        prixVente, 
        qtestock, 
        imageartpetitf
      };
    
   axios.put("http://localhost:3001/produits/"+id,newProduct)
  .then(res => {  
  console.log(res);
  navigate("/admin/all-products")
    })   
  .catch(error=>{
      console.log(error)
      alert("Erreur ! Modification non effectuée")
      })
  
  }

    return ( 
        <>
        <div className="container">
    <h4>Modify Product <button type="button" className="btn btn-secondary">{id}</button></h4>
    <form onSubmit={handleSubmit}>
        <div className="table-responsive">
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="reference">Title</label>
                            <input
                                id="reference"
                                className="form-control"
                                placeholder="Référence"
                                type="text"
                                value={reference}
                                onChange={(e) => setReference(e.target.value)}
                            />
                        </td>
                        <td>
                            <label htmlFor="designation">Description</label>
                            <input
                                id="designation"
                                className="form-control"
                                placeholder="Désignation"
                                type="text"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        
                        <td>
                            <label htmlFor="marque">Marque</label>
                            <input
                                id="marque"
                                className="form-control"
                                placeholder="Marque"
                                type="text"
                                value={marque}
                                onChange={(e) => setMarque(e.target.value)}
                            />
                        </td>
                        <td>
                            <label htmlFor="auteur">Author : </label>
                            <input
                                id="auteur"
                                className="form-control"
                                placeholder="Prix Achat"
                                type="text"
                                value={auteur}
                                onChange={(e) => setAuteur(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <label htmlFor="prixAchat">Prix Achat</label>
                            <input
                                id="prixAchat"
                                className="form-control"
                                placeholder="Prix Achat"
                                type="number"
                                value={prixAchat}
                                onChange={(e) => setPrixAchat(e.target.value)}
                            />
                        </td>
                        <td>
                            <label htmlFor="prixVente">Prix Vente</label>
                            <input
                                id="prixVente"
                                className="form-control"
                                placeholder="Prix Vente"
                                type="number"
                                value={prixVente}
                                onChange={(e) => setPrixVente(e.target.value)}
                            />
                        </td>
                       
                    </tr>
                    <tr>
                   
                        <td >
                            <label htmlFor="imageartpetitf">Image</label>
                            <center>
                            <input
                                id="imageartpetitf"
                                className="form-control"
                                placeholder="Image"
                                type="text"
                                value={imageartpetitf}
                                onChange={(e) => setImageartpetitf(e.target.value)}
                            />
                            
                            {imageartpetitf ? <img src={"/" + imageartpetitf} alt={imageartpetitf} width="150" /> : null}
                            </center>
                        </td>
                        <td>
                            <label htmlFor="qtestock">Quantity Available</label>
                            <input
                                id="qtestock"
                                className="form-control"
                                placeholder="Quantité"
                                type="number"
                                value={qtestock}
                                onChange={(e) => setQtestock(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{ textAlign: 'center' }}>
                            <button className="btn btn-dark" style={{ fontSize: '20px', padding: '10px 20px' }}>Valider</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </form>
</div>

  </>
     );
}

export default EditArticle;
