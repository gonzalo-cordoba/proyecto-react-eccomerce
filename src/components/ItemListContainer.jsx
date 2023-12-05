import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { getFirestore, collection, getDocs, query, where, } from "firebase/firestore";
import "../App.css";
import { ItemList } from "./ItemList";


export const  ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id
        ? collection(db, "items")
        : query(collection(db, "items"), where("category", "==", id));

        getDocs(refCollection).then((snapshot) => {
          if (snapshot.size === 0) console.log("no results");
          else
            setItems(
              snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            );
        });
      }, [id]);


    return (<Container>
             <h1 className="mt-4">{props.greeting}</h1>
             {items ? <ItemList items={items}  /> : <>Loading...</> }
            </Container>);

}