import axios from 'axios';

interface RequestOptions {
    headers?: Record<string, string>;
}

interface Client {
    get(url: string, options?: RequestOptions): Promise<any>;
    post(url: string, data: any, options?: RequestOptions): Promise<any>;
    put(url: string, data: any, options?: RequestOptions): Promise<any>;
    patch(url: string, data: any, options?: RequestOptions): Promise<any>;
    delete(url: string, data?: any, options?: RequestOptions): Promise<any>;
}

const client = (): Client => {

    const defaultOptions: RequestOptions = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    return {
        get: (url: string, options: RequestOptions = {}): Promise<any> =>
            axios.get(url, { ...defaultOptions, ...options }),
        post: (url: string, data: any, options: RequestOptions = {}): Promise<any> =>
            axios.post(url, data, { ...defaultOptions, ...options }),
        put: (url: string, data: any, options: RequestOptions = {}): Promise<any> =>
            axios.put(url, data, { ...defaultOptions, ...options }),
        patch: (url: string, data: any, options: RequestOptions = {}): Promise<any> =>
            axios.patch(url, data, { ...defaultOptions, ...options }),
        delete: (url: string, data: any, options: RequestOptions = {}): Promise<any> =>
            axios.delete(url, { data, ...defaultOptions })
    };
};

const axiosInterceptor = () => {
    return axios.interceptors.response.use(
        async (response: any) => response,
        async (error: any) => {
            if (error.response && error.response.status === 401) {
                window.location.href = '/login/enter';
            } else if (error.response && error.response.status === 403) {
                window.location.href = '/';
            } else {
                return await Promise.reject(error || {});
            }
        }
    );
};

const getFormData = (obj: any, form?: FormData, namespace?: string): FormData => {
    const fd = form || new FormData();
    let formKey: string;

    for (const property in obj) {
        if (obj.hasOwnProperty(property)) {
            const val = obj[property];
            formKey = namespace ? `${namespace}[${property}]` : property;

            if (Array.isArray(val) || (typeof val === 'object' && !(val instanceof File))) {
                getFormData(val, fd, formKey);
            } else {
                fd.append(formKey, val);
            }
        }
    }
    return fd;
};

export {
    client,
    axiosInterceptor,
    getFormData
};
