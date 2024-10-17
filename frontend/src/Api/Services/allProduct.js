import { http } from "../../Common/http";

export const getProduct = async () => {
	const res = await http.get("/api/products");
	return res.data;
};

export const addProduct = (product) => http.post("/api/products", product);

export const updateProduct = (productId, product) =>
	http.put(`/api/products/${productId}`, product);
