import {api} from '@/lib/axios'

export interface SignInBody {
    email: string
}

export async function signIn({email}: SignInBody){
    await api.post('/authenticate', {email})
}

// 02:58 aula 2 | 3