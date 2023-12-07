import { useContext, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { cartContext } from "../contexts/CartContext";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);

  const { clear, items, onRemove } = useContext(cartContext);

  const navigate = useNavigate();

  const total = items.reduce((acumulador, valorActual) => acumulador + (valorActual.quantity * valorActual.price), 0)

  const handleChange = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value,
    });
  };

  const sendOrder = (ev) => {
    ev.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }

    const order = {
      buyer,
      items,
      total: 13600,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + " ha sido completada!");
          setBuyer(initialValues);
          clear();
        }
      })
      .catch((error) => {
        console.error("Error al agregar documento a Firestore:", error);
        alert(
          "Hubo un error al procesar la orden. Por favor, inténtelo nuevamente."
        );
      });
  };

  if (!items.length) {
    return (
      <Container className="mt-4">
        <h2>¡Hace tu compra!</h2>{" "}
        <button onClick={() => navigate("/")}>Volver al home</button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1>Carrito</h1>

      <Table striped>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              
              <td>
                <img src={item.pictureUrl} alt={item.title} />
              </td>
              <td>{item.price}</td>
              <td onClick={() => onRemove(item.id)}>X</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
            <tr>
                <td>Total: {total}</td>
            </tr>
        </tfoot>
      </Table>
      <button onClick={clear}>Vaciar carrito</button>
      <hr />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            value={buyer.email}
            onChange={handleChange}
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={buyer.name}
            onChange={handleChange}
            name="name" 
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={buyer.phone}
            onChange={handleChange}
            name="phone"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={sendOrder}>
          Enviar
        </Button>
      </Form>
    </Container>
  );
};
