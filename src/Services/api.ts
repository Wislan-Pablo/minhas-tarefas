import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Game from '../models/Games'

export interface Cupom {
  id: number
  codigo: string
  desconto: number
  ativo: boolean
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], string>({
      query: (endpoint) => endpoint
    }),
    getCupons: builder.query<Cupom[], void>({
      query: () => 'cupons'
    })
  })
})

export const { useGetJogosQuery, useGetCuponsQuery } = api
export default api
