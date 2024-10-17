import { useEffect, useState } from "react";
import { addProduct, getProduct, updateProduct } from "../Services";

export function useProduct() {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState([]);
  
	const loadProducts = () =>
	  getProduct()
		.then((data) => setProducts(data))
		.catch((err) => setError(err.message))
		.finally(() => setIsLoading(false));
  
	useEffect(() => {
	  setIsLoading(true);
	  loadProducts();
	}, []);
  
	const refreshProducts = () => loadProducts();
  
	const addOrUpdateProduct = async (product) => {
	  try {
		if (product.id) {
		  await updateProduct(product.id, product);
		  alert('Product updated successfully!');
		} else {
		  await addProduct(product);
		  alert('Product added successfully!');
		}
	  } catch (error) {
		alert('Failed to add product');
	  }
	};
  
	return {
	  error,
	  isLoading,
	  products,
	  addOrUpdateProduct,
	  refreshProducts,
	};
}
