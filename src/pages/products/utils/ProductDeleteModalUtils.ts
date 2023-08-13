/**
 * ProductFormUtils.ts
 *
 * This module contains utility functions and definitions related to the ProductForm component.
 * It separates the prop types, initial field values, and validation logic to promote modularity
 * and organization in the codebase.
 */

import { Product } from '../../../interfaces/product.interface';

export type ProductDeleteProps = {
    toggle: () => void;
    onDeleteProduct: (id: number) => void;
    item: Product | null;
};