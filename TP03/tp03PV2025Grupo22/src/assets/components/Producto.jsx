import React, { useEffect } from 'react';
import App from '../../App';

const productos = [
  { id: 1, nombre: 'Camisa', precio: 25 },
  { id: 2, nombre: 'Pantalón', precio: 40 },
  { id: 3, nombre: 'Remera', precio:20  },
  { id: 4, nombre: 'Buzos', precio: 60 },
  { id: 5, nombre: 'Zapatos', precio: 59 },
  { id: 6, nombre: 'Camperas', precio: 65 },
  { id: 7, nombre: 'Gorras', precio: 15 },
  { id: 8, nombre: 'Suelas', precio: 12 },
  { id: 9, nombre: 'Guantes', precio: 18 },
  { id: 10, nombre: 'Bufandas', precio: 22 },
  { id: 11, nombre: 'Cinturones', precio: 30 },
  { id: 12, nombre: 'Chaquetas', precio: 55 },
  { id: 13, nombre: 'Pijamas', precio: 35 },
  { id: 14, nombre: 'Calcetines', precio: 10 },
  { id: 15, nombre: 'Sombreros', precio: 20 },
  { id: 16, nombre: 'Chalecos', precio: 45 }
];

function Productos() {

  useEffect(() => {
    console.log(productos);
  }, []);  
  
  // Productos con precio mayor a 20
  const mayoresA20 = productos.filter(p => p.precio > 20);
  console.log("Productos con precio mayor a $20:");
  console.log(mayoresA20);

  // Productos con IVA (21%)
  const productosConIVA = productos.map(p => ({
    ...p,
    precio: +(p.precio * 1.21).toFixed(2),
  }));
  console.log("Productos con IVA (21%) incluido:");
  console.log(productosConIVA);

  return (
    <div>
      <h2>Productos disponibles</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
      <h3>Productos con precio mayor a $20</h3>
      <ul>
        {mayoresA20.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>

      <h3>Productos con IVA (21%) incluido</h3>
      <ul>
        {productosConIVA.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>

    </div>

  );
}

export default Productos;