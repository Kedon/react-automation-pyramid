/*
  Modal Component Testing
  This test suite is designed to test the behavior of the Modal component, which encapsulates a modal dialog.

  The tests include:
  1. Rendering modal content and ensuring title, modal content, and footer are displayed.
  2. Verifying that the onClose function is called when the modal is closed.
  3. Checking that the modal does not render when the isOpen prop is set to false.

  Testing Library and Jest are used for testing.
*/

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TestingThemeProvider from '../../utils/TestingThemeProvider'

import Modal from './Modal';

// Mock the onClose function
const mockOnClose = jest.fn();

const renderModal = (props) => {
  return render(
    <TestingThemeProvider>
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" footer={<div>Footer Content</div>}>
        Modal Content
        </Modal>
    </TestingThemeProvider>
  );
};

describe('Modal Component', () => {
  it('renders modal content', () => {
    const { getByText, getByTestId } = renderModal();
    expect(getByText('Test Modal')).toBeInTheDocument();
    expect(getByText('Modal Content')).toBeInTheDocument();
    expect(getByText('Footer Content')).toBeInTheDocument();
  });

  it('calls onClose when modal is closed', () => {
    const { getByText, getByTestId } = renderModal();
    const closeButton = getByTestId('close-button'); // Assuming there's a close button in the modal
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('does not render when isOpen is false', () => {
    const { container } = render(
        <TestingThemeProvider>
            <Modal isOpen={false} onClose={mockOnClose} title="Test Modal" footer={<div>Footer Content</div>}>
                Modal Content
            </Modal>
        </TestingThemeProvider>
    );
    expect(container.firstChild).toBeNull();
  });
});
