import React from 'react';
import { Link } from 'react-router-dom';

function ElementsArticle(props) {
  return (
    <div className="container" style={{ textAlign: 'left' }}>
      <div className="row">
        <div className="container">
          <table className="table table-striped" style={{ textAlign: 'left' }}>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Title</th>
                <th>Description</th>
                <th>Author</th>
                <th>Category</th>
                <th>Prix Achat</th>
                <th>Prix Vente</th>
                <th>Quantity Available</th>
                <th>Modify</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {props.articles.map((article) => (
                <tr key={article.id}>
                  <td>
                    <img
                      src={article.imageartpetitf}
                      width="150px"
                      height="150px"
                      alt={article.designation}
                    />
                  </td>
                  <td>{article.reference}</td>
                  <td>{article.designation}</td>
                  <td>{article.auteur}</td>
                  <td>{article.marque}</td>
                  <td>{article.prixAchat}</td>
                  <td>{article.prixVente}</td>
                  <td>{article.qtestock}</td>
                  <td>
                    <Link exact to={`/admin/editArticle/${article.id}`} className="btn btn-outline-secondary">
                      Modify
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => {props.deleteProd(article.id)}} className="btn btn-dark">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ElementsArticle;
