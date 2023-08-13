import styled from 'styled-components';

export const ModalWrapper = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalContent = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
  width: 70%;
  max-width: 500px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalBody = styled.div`
  padding: 16px;
`;


export const ModalHeader = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: 18px;
  font-weight: bold;
  position: relative;
`;

export const ModalCloseButton = styled.div`
  font-size: 12px;
  width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.danger};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`;

export const ModalFooter = styled.div`
  padding: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;