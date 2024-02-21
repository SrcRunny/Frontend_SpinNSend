import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { StationItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3004',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getEvent(): Promise<AxiosResponse<StationItem[]>>{
        return apiClient.get<StationItem[]>('/stations')
    }
}