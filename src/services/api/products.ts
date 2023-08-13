import { client } from '../../utils/axios-utils';
import {  Product } from '../../interfaces/product.interface'

const API_URL = `${process.env.REACT_APP_API_URL}/products`;

interface ProductsService {
    get(): Promise<any>;
    put(id: number , product: Product): Promise<any>;
    delete(productId: number): Promise<any>;
    post(product: Product): Promise<any>;
}

const productsService: ProductsService = {
    get: (): Promise<any> => {
        return new Promise((resolve, reject) => {
            return client()
                .get(API_URL, {})
                .then(res => resolve(res.data))
                .catch(error => reject(error));
        });
    },
    post: (product: Product): Promise<any> => {
        return new Promise((resolve, reject) => {
            return client()
                .post(`${API_URL}/add`, {product})
                .then(res => resolve(res.data))
                .catch(error => reject(error));
        });
    },
    put: (id: number, product: Product): Promise<any> => {
        return new Promise((resolve, reject) => {
            return client()
                .put(`${API_URL}/${id}`, {...product})
                .then(res => resolve(res.data))
                .catch(error => reject(error));
        });
    },
    delete: (productId: number): Promise<any> => {
        return new Promise((resolve, reject) => {
            return client()
                .delete(`${API_URL}/${productId}`, )
                .then(res => resolve(res.data))
                .catch(error => reject(error));
        });
    },
};

export default productsService;
