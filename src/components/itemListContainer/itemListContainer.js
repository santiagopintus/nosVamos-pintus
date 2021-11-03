import './itemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <>
            <h1 className="saludo">{props.greeting}</h1>
        </>
    )
};

export default ItemListContainer;