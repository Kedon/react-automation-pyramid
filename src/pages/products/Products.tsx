// This component manages the display, creation, editing, and deletion of products.
// It fetches data from the productsService, displays it in a table, allows adding/editing products
// through a form modal, and confirms deletions through a separate modal.

import React, { useState, useEffect } from 'react';
import Table from '../../components/table/Table';
import Button from '../../components/button/Button';
import { ProductHeaderContainer, ProductActionsButtons, ProductActionsButton } from './styles';
import { productsService } from '../../services/api';
import ProductForm from './components/ProductForm';
import DeleteProductModal from './components/DeleteProductModal';
import { Product } from '../../interfaces/product.interface';
import { TableData } from './utils/ProductsUtils';

const Products: React.FC = () => {

  // State variables to manage modals, table data, and selected product for editing/deleting
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tableData, setTableData] = useState<TableData>({
    headers: ["title", "description", "actions"],
    rows: [],
    loading: false
  });
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  // Open the "Add Product" modal
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  // Close the modals and reset the "productToEdit" state
  const handleCloseModal = () => {
    setModalIsOpen(false);
    setProductToEdit(null);
  }

  // Set the selected product for deletion
  const handleDeleteProduct = (product: Product) => {
    setProductToDelete(product)
  };

  // Set the selected product for editing
  const handleEditProduct = (product: Product) => {
    setProductToEdit(product);
  };

  // Create a table row object for rendering
  const tableRow = (item: Product)  => {
            
      const productProperties = {
        id: item.id,
        title: item.title,
        description: item.description,
      }
      
      return {
        ...productProperties,
        actions:  <ProductActionsButtons>
                    <ProductActionsButton 
                      data-testid={`delete-${item.id}`}
                      onClick={() => handleDeleteProduct(productProperties)}
                      color="danger">Del
                    </ProductActionsButton>
                    <ProductActionsButton 
                      data-testid={`edit-${item.id}`}
                      onClick={() => handleEditProduct(productProperties)}
                      color="system">Edit
                    </ProductActionsButton>
                  </ProductActionsButtons>,
      };
  };

  // Add a new product to the table data
  const handleAddProduct = (product: Product) => {
    setTableData({
      ...tableData,
      rows: [tableRow(product), ...tableData.rows]
    });
    setModalIsOpen(false);
  };

  // Update an existing product in the table data
  const handleUpdateProduct = (product: Product) => {
    setTableData({
      ...tableData,
      rows: tableData.rows.map((item) => {
        if (item.id === product.id) {
          return tableRow(product);
        }
        return item;
      }),
    });
    setProductToEdit(null);
  }

  // Remove a deleted product from the table data
  const handleDeleteFromTable = (id: number) => {
    setTableData({
      ...tableData,
      rows: tableData.rows.filter((item) => item.id !== id),
    });
    setProductToDelete(null);
  }

  // Fetch initial data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productsService.get();
        if(response){
          setTableData({
            ...tableData,
            rows: response.products.map((item: any) => tableRow(item)) ,
            loading: false
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      {/* Header section */}
      <ProductHeaderContainer>
        <h3>Products</h3>
        <Button 
          testId="add-product-button"
          onClick={handleOpenModal} 
          color="success">Add new</Button>
      </ProductHeaderContainer>

      {/* Table displaying product data */}
      <Table 
        testid="products-table"
        headers={tableData.headers} 
        data={tableData.rows} />


      {/* Modal for adding/editing products */}
      <ProductForm 
        onAddProduct={handleAddProduct}
        onUpdateProduct={handleUpdateProduct}
        data={productToEdit}
        isOpen={modalIsOpen} 
        toggle={handleCloseModal} />

      {/* Modal for confirming product deletion */} 
      <DeleteProductModal
        item={productToDelete}
        toggle={() => setProductToDelete(null)}
        onDeleteProduct={handleDeleteFromTable} />
    </div>
  );
};

export default Products;