import { useState, useEffect } from 'react';
import ItemList from '../../containers/itemList/itemList';
import products from '../../../data/products';
import customFetch from '../../../utils/customFetch';
import { useParams } from 'react-router';

const ItemListContainer = () => { 
    
    const [items, setItems] = useState([]);

    const { idCategory } = useParams()

    //componentDidUpdate
    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.category === idCategory
        }))
            .then(result => setItems(result))
            .catch(err => console.log(err))
    }, [items, idCategory]);

    return (
        <>
            <ItemList items={items}/>
        </>
    )
};

export default ItemListContainer;