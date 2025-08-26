import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Game from '../models/Games'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], string>({
      query: (endpoint) => endpoint
    })
  })
})

export const { useGetJogosQuery } = api
export default api
