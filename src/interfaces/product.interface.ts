export interface Product {
    id?: number | null;
    title: string;
    description: string;
    actions?: string | JSX.Element;
}