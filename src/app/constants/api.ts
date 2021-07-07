import { HttpHeaders } from "@angular/common/http";

export const baseURL: string = 'https://hungryherceg.api.veljko.dev';

export const storageTokenKey: string = 'authoken'

export const getAuthHeaders = () => {
    const token = localStorage.getItem(storageTokenKey)
    return new HttpHeaders({'Authorization':`Bearer ${token}`});
}
