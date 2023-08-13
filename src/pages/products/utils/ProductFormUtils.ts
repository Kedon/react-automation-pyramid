/**
 * ProductFormUtils.ts
 *
 * This module contains utility functions and definitions related to the ProductForm component.
 * It separates the prop types, initial field values, and validation logic to promote modularity
 * and organization in the codebase.
 */

import { Product } from '../../../interfaces/product.interface';

export type ProductFormProps = {
    isOpen: boolean;
    toggle: () => void;
    data: Product | null;
    onAddProduct: (product: Product) => void;
    onUpdateProduct: (product: Product) => void;
};

export type RequiredFields = {
    title: string;
    description: string;
};

export const initialRequiredFields: RequiredFields = {
    title: '',
    description: ''
};

export const initialFormFields = {
    id: null,
    title: '',
    description: ''
};

export const validateTitle = (title: string) => !title.trim() ? 'Title is required' : '';
export const validateDescription = (description: string) => !description.trim() ? 'Description is required' : '';

export const validateForm = (formFields: Product, setRequiredFields: React.Dispatch<React.SetStateAction<RequiredFields>>) => {
    const titleError = validateTitle(formFields.title);
    const descriptionError = validateDescription(formFields.description);

    setRequiredFields({
        title: titleError,
        description: descriptionError,
    });

    return !(titleError || descriptionError);
};
