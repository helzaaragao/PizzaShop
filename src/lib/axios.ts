import { env } from '@/env'
import axios from 'axios'

export const api = axios.create({
    baseURL: env.VITE_API_URL,
    withCredentials: true, //receber os cookies do site no frontend normalmente
})