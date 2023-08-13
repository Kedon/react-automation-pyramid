// This component represents a modal dialog for deleting a product item. It provides a confirmation
// prompt to the user before deleting the selected product. The modal includes a "Delete" button
// which triggers the deletion process, and a "Cancel" button to dismiss the modal without performing
// the deletion. The component handles interactions with the productsService API to delete the product.

import React, { useState, useEffect } from "react";

// Importing necessary components and utilities
import Modal from '../../../components/modal/Modal';
import Button from '../../../components/button/Button';

import { ProductDeleteProps } from '../utils/ProductDeleteModalUtils';

import { productsService } from '../../../services/api';

const DeleteProductModal: React.FC<ProductDeleteProps> = ({
    item,
    toggle,
    onDeleteProduct
}) => {
    const [isRequestingApi, setIsRequestingApi] = useState<boolean>(false);

    // Function to handle the deletion of the product item
    const handleDeleteItem = () => {
        setIsRequestingApi(true)
        productsService
            .delete(item?.id as number)
            .then(() => {
                setIsRequestingApi(false)
                onDeleteProduct(item?.id as number)
            })
            .catch(() => {
                setIsRequestingApi(false)
            })
    }
    
    return (
        <Modal
            testid="product-delete-modal"
            isOpen={item ? true : false} //Open on set item
            onClose={toggle}
            footer={<>
                <Button
                    disabled={isRequestingApi}
                    color="primary" onClick={toggle}>Cancel</Button>
                <Button
                    testId="delete-button"
                    disabled={isRequestingApi}
                    color="danger"
                    onClick={handleDeleteItem}>
                    Delete
                </Button>
            </>}
            title="Delete product"
        >
            This will delete <b>{item?.title}</b>. Are you sure?
        </Modal>
    );
};

export default DeleteProductModal;