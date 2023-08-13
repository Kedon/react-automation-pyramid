/**
 * This file contains test cases for the `Products` component. The tests focus on various functionalities of the component,
 * including fetching and displaying products, adding new products, editing existing products, and deleting products.
 * The tests use the `@testing-library/react` library along with mock data and mock functions to simulate interactions
 * and assertions with the component.
 */

import {
    render,
    fireEvent,
    waitFor,
  } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Products from './Products';

import TestingThemeProvider from '../../utils/TestingThemeProvider'

import { productsService } from '../../services/api'
  

const fakeFormData = {
    id: null,
    title: 'New Product Title',
    description: 'New Product Description'
}

// Mock the productsService to avoid network requests
jest.mock('../../services/api', () => ({
    productsService: {
        get: jest.fn(async () =>
            Promise.resolve({
                products: [
                    { id: 1, title: 'Test product 1', description: 'description 1' },
                    { id: 2, title: 'Test product 2', description: 'description 2' },
                ],
            })
        ),
        post: jest.fn(async () =>
            Promise.resolve({ id: fakeFormData.id, title: fakeFormData.title, description: fakeFormData.description })
        ),
        put: jest.fn(async () =>
            Promise.resolve({ 
                title: `${fakeFormData.title} edited`, 
                description: `${fakeFormData.description} edited` 
            })
        ),
        delete: jest.fn(async () =>
            Promise.resolve(2)
        ),
    },
}));

describe('Products page', () => {
    test('Fetched itens', async () => {
        // Render the component
        const { findByText } = render(<Products />, { wrapper: TestingThemeProvider });

        // // Check if the products are rendered in the document
        const word1 = await findByText('Test product 1');
        expect(word1).toBeInTheDocument();

        const word2 = await findByText('Test product 2');
        expect(word2).toBeInTheDocument();

        // Ensure that the getBlacklist function is called
        await waitFor(() => expect(productsService.get).toHaveBeenCalledTimes(1));
    });

    test('Add a new row', async () => {

        const { findByText, getByTestId, queryByTestId, getByPlaceholderText, queryByText } = render(<Products />, { wrapper: TestingThemeProvider });

        const addButton = getByTestId('add-product-button');
        expect(addButton).toBeInTheDocument()
        fireEvent.click(addButton);

        await waitFor(() => {
            const modal = queryByTestId('product-form-modal'); // Make sure to use the correct data-testid
            expect(modal).toBeInTheDocument();
        });

        const titleInputField = getByPlaceholderText('Title');
        expect(titleInputField).toBeInTheDocument();

        const descriptionInputField = getByPlaceholderText('Description');
        expect(descriptionInputField).toBeInTheDocument();

        fireEvent.change(titleInputField, { target: { value: fakeFormData.title } });
        fireEvent.change(descriptionInputField, { target: { value: fakeFormData.description } });



        const saveButton = getByTestId('edit-or-add-button')

        await waitFor(() => {
            fireEvent.click(saveButton);
        });

        expect(productsService.post).toHaveBeenCalledWith({ id: null, title: 'New Product Title', description: 'New Product Description' });

        const addedProductTitle = await findByText(fakeFormData.title);
        expect(addedProductTitle).toBeInTheDocument();

        const addedProductDescription = await findByText(fakeFormData.description);
        expect(addedProductDescription).toBeInTheDocument();

    });

    test('Edit row #1', async () => {

        const { findByText, getByTestId, queryByTestId, getByPlaceholderText, queryByText } = render(<Products />, { wrapper: TestingThemeProvider });
        const word2 = await findByText('Test product 2');
        expect(word2).toBeInTheDocument();

        const editButton = getByTestId('edit-1')
        expect(editButton).toBeInTheDocument()
        fireEvent.click(editButton);

        await waitFor(() => {
            const modal = queryByTestId('product-form-modal'); // Make sure to use the correct data-testid
            expect(modal).toBeInTheDocument();
        });

        const titleInputField = getByPlaceholderText('Title');
        expect(titleInputField).toBeInTheDocument();
        expect(titleInputField).toHaveValue('Test product 1');

        const descriptionInputField = getByPlaceholderText('Description');
        expect(descriptionInputField).toBeInTheDocument();
        expect(descriptionInputField).toHaveValue('description 1');

        fireEvent.change(titleInputField, { target: { value: `${titleInputField.value} edited` } });
        fireEvent.change(descriptionInputField, { target: { value: `${descriptionInputField.value} edited` } });

        const saveButton = getByTestId('edit-or-add-button')

        await waitFor(() => {
            fireEvent.click(saveButton);
        });

        expect(productsService.put).toHaveBeenCalledWith(1, { title: titleInputField.value, description: descriptionInputField.value });

        const editedTitle = await findByText(`${fakeFormData.title} edited`);
        expect(editedTitle).toBeInTheDocument();

        const editedDescription = await findByText(`${fakeFormData.title} edited`);
        expect(editedDescription).toBeInTheDocument();

        const modal = queryByTestId('product-form-modal');
        expect(modal).not.toBeInTheDocument();
    });

    test('Delete row #2', async () => {
        const { findByText, getByTestId, queryByTestId, getByPlaceholderText, queryByText } = render(<Products />, { wrapper: TestingThemeProvider });

        const word2 = await findByText('Test product 2');
        expect(word2).toBeInTheDocument();

        const selectToDelete = getByTestId('delete-2')
        expect(selectToDelete).toBeInTheDocument()


        fireEvent.click(selectToDelete);

        await waitFor(() => {
            const modal = queryByTestId('product-delete-modal');
            expect(modal).toBeInTheDocument();
        });

        const modalDeleteButton = getByTestId('delete-button')
        expect(modalDeleteButton).toBeInTheDocument()

        await waitFor(() => {
            fireEvent.click(modalDeleteButton);
        });

        expect(productsService.delete).toHaveBeenCalledWith(2);

        const modal = queryByTestId('product-form-modal');
        expect(modal).not.toBeInTheDocument();

        await waitFor(() => {
            expect(queryByText('Test product 2')).not.toBeInTheDocument();
        });
    })
})