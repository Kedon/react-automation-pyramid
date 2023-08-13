/**
 * ProductForm Component
 * 
 * This component represents a form for adding or editing product information.
 * It is used within a modal and handles the input of product title and description.
 * The form allows users to add new products or edit existing ones. It receives
 * data to populate the fields when editing, and triggers actions to create or update
 * products through API calls.
 * 
 * Props:
 * - isOpen: A boolean indicating whether the modal containing the form is open.
 * - data: An object containing the product data to be edited, or null for new product.
 * - toggle: A function to toggle the visibility of the modal.
 * - onAddProduct: A function to be called when a new product is successfully added.
 * - onUpdateProduct: A function to be called when an existing product is successfully updated.
 */

// Import necessary dependencies and components
import React, { useState, useEffect } from "react";

import Modal from '../../../components/modal/Modal';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';

import { Product } from '../../../interfaces/product.interface';

import { productsService } from '../../../services/api';

import {
    ProductFormProps,
    RequiredFields,
    initialRequiredFields,
    initialFormFields,
    validateForm
} from '../utils/ProductFormUtils';


// Define the main ProductForm component
const ProductForm: React.FC<ProductFormProps> = ({ isOpen, data, toggle, onAddProduct, onUpdateProduct }) => {
    
    // State to hold the form field values
    const [formFields, setFormFields] = useState<Product>(initialFormFields);

    // State to hold the required field errors
    const [requiredFields, setRequiredFields] = useState<RequiredFields>(initialRequiredFields);

    const [ isRequestingApi, setIsRequestingApi ] = useState<boolean>(false);

    // Handle input field changes
    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });

        // Clear the error message when the field is being edited
        setRequiredFields({
            ...requiredFields,
            [name]: '',
        });
    };

    // Handle the save/update action
    const handleSaveOrUpdate = () => {
        if (validateForm(formFields, setRequiredFields)) {
            if(formFields.id !== null && formFields.id !== undefined){
                updateProduct(formFields.id)
            } else {
                createNewProduct()
            }
        }
    }

    const createNewProduct = async () => {
        try {
            setIsRequestingApi(true);
            const response = await productsService.post(formFields);
            onAddProduct({
                ...formFields,
                id: response.id
            });
            setIsRequestingApi(false);
        } catch (error) {
            setIsRequestingApi(false);
            console.error(error);
        }
    }

    const updateProduct = async (id: number) => {
        try {
            setIsRequestingApi(true);
            const response = await productsService.put(id, {
                title: formFields.title,
                description: formFields.description
            });
            onUpdateProduct({
                ...formFields,
                title: response.title,
                description: response.description
            });
            setIsRequestingApi(false);
        } catch (error) {
            setIsRequestingApi(false);
            console.error(error);
        }
    }

    useEffect(() => {
        /** On click on edit in a table item, the data object is not null
            so we can set the form fields */
        if (data) {
            setFormFields({
                id: data.id,
                title: data.title,
                description: data.description,
            });
        } else {
            /** On click cancel or close, the data object is null in the main component
            *   so reset the form fields */
            setFormFields(initialFormFields);
        }
    }, [data]);

    useEffect(() => {
        /** On close modal, reset form fields */
        if (!isOpen) {
            setFormFields(initialFormFields);
        }
    }, [isOpen]);


    // Render the ProductForm component
    return (
        <Modal
            testid="product-form-modal"
            isOpen={isOpen || data !== null} //Open on edit or add
            onClose={toggle}
            footer={<>
                <Button 
                    disabled={isRequestingApi}
                    color="danger" onClick={toggle}>Cancel</Button>
                <Button 
                    testId="edit-or-add-button"
                    disabled={isRequestingApi}
                    color={formFields.id ? "system" : "success"}
                    onClick={handleSaveOrUpdate}>
                        { formFields.id ? "Edit" : "Add" }
                </Button>
            </>}
            title="Add product"
        >
            <Input
                type="text"
                name="title"
                testid="product-title"
                placeholder="Title"
                value={formFields.title}
                onChange={handleFieldChange}
                error={requiredFields?.title?.trim() ? requiredFields.title : null}
            />
            <Input
                type="text"
                testid="product-description"
                name="description"
                placeholder="Description"
                value={formFields.description}
                onChange={handleFieldChange}
                error={requiredFields?.description?.trim() ? requiredFields.description : null}
            />
        </Modal>
    );
};

// Export the ProductForm component
export default ProductForm;
