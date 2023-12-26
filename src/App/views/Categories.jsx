import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categoriesList, setCategories] = useState([]); // Cambiado el nombre del estado

  useEffect(() => {
    fetch('https://tu-api.com/Categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div>
      {categoriesList.map((categoria) => (
        <Link to={`/productos/${categoria.id}`} key={categoria.id}>
          {categoria.nombre}
        </Link>
      ))}
    </div>
  );
};

const Products = ({ match }) => {
  // Cambiado el nombre del componente
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`https://tu-api.com/productos?categoria=${match.params.id}`)
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, [match.params.id]);

  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id}>{producto.nombre}</div>
      ))}
    </div>
  );
};

export default Categories;
