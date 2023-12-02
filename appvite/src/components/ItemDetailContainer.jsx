import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import "../App.css";

import { products } from "../data/products";
import { ItemDetail } from "./ItemDetail";


export const  ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    const { id } = useParams();

    

    useEffect(() => {
        const myPromise = new Promise ((resolve, reject ) => {
            setTimeout(() => {resolve(products)}, 2000);
        });

        myPromise.then((response) => {
           
                const findById = response.find(item => item.id === Number (id));
                setItem(findById);
            

            
        });
    }, [id])

    return (
        <Container className="mt-4">
                {item ? <ItemDetail item={item}/> : <>Loading...</>}        
        </Container>);

}