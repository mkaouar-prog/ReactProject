import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddProduct() {
        
        const navigate = useNavigate();
        const [reference, setReference] = useState("");
        const [designation, setDesignation] = useState("");
        const [auteur, setAuteur] = useState("");
        const [marque, setMarque] = useState("");
        const [prixAchat, setPrixAchat] = useState("");
        const [prixVente, setPrixVente] = useState("");
        const [qtestock, setQtestock] = useState("");
        const [imageartpetitf, setImageartpetitf] = useState("");
        
        const handleSubmit = (e) => {
            e.preventDefault();

            const newProduct = {
            reference,
            designation,
            auteur,
            marque,
            prixAchat, 
            prixVente, 
            qtestock, 
            imageartpetitf
            };
        

        axios.post("http://localhost:3001/produits",newProduct)
        .then(res => {  
        console.log(res);
        navigate('/')
        })   
        .catch(error=>{
            console.log(error)
            alert("Erreur ! Insertion non effectuée")
            })

        }
            return ( 
           
                <div className="container">
                     <p></p>
                <h2>Add Book </h2>
                <form onSubmit={handleSubmit}>
            <div className="grid gap-3">
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Title"
                type="text"
                value={reference}
                onChange={e => setReference(e.target.value)}
                />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Description"
                name="designation"
                type="text"
                value={designation}
                onChange={e => setDesignation(e.target.value)}
                />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Author"
                name="auteur"
                type="text"
                value={auteur}
                onChange={e => setAuteur(e.target.value)}
                />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Category"
                type="text"
                value={marque}
                onChange={e => setMarque(e.target.value)}
                />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Prix Achat"
                type="number"
                value={prixAchat}
                onChange={e => setPrixAchat(e.target.value)}
                />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Prix Vente"
                name="prixVente"
                type="number"
                value={prixVente}
                onChange={e => setPrixVente(e.target.value)}
                />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Quantity Available"
                type="number"
                value={qtestock}
                onChange={e => setQtestock(e.target.value)}
                />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
            <input className="form-control"
                placeholder="Image"
                type="text"
                value={imageartpetitf}
                onChange={e => setImageartpetitf(e.target.value)}
                />
            </div>    
            <div>{imageartpetitf ?<img src={imageartpetitf} alt="" width="70"/>:null}</div> 
            <div>
            <button className="btn btn-dark">Valider</button>
            <p></p>
            </div>  
            </div>
            </form>
        
        </div>

            



                );
        }

        export default AddProduct;