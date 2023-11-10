import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import "../App.css";
import { products } from "../data/products";
import { ItemList } from "./ItemList";

export const  ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const { id } = useParams();

    

    useEffect(() => {
        const myPromise = new Promise ((resolve, reject ) => {
            setTimeout(() => {resolve(products)}, 2000);
        });

        myPromise.then((response) => {
            if(!id){
                setItems(response)
            } else {
                const filterByCategory = response.filter(item => item.category === id);
                setItems(filterByCategory);
            }

            
        });
    }, [id])

    return (<Container>
             <h1 className="mt-4">{props.greeting}</h1>
             {items ? <ItemList items={items}  /> : <>Loading...</> }
            </Container>);

}