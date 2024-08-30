import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchProducts } from "../store/productSlice";
import { Container } from "react-bootstrap";

const List = ()=>{
    const products = useAppSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

     useEffect(() => {
       dispatch(fetchProducts());
     }, [dispatch]);


return (
  <div>
    <h1>Products List</h1>
    {products.map((product) => (
      <Container key={product.id}>
        <div>{product.id}</div>
        <div>{product.title}</div>
        <div>{product.price}</div>
      </Container>
    ))}
  </div>
);};

export default List;