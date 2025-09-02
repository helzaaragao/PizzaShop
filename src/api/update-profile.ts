import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
  await new Promise((_resolve, reject) => {
    setTimeout(reject, 3000)
  })

  await api.put('/profile', { name, description })
}

// interface otimista: dá erro depois de um tempo pois geralmente nunca daria erro
