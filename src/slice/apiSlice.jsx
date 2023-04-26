import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const rnacentralApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/v1/' }),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getGenomes: builder.query({
      query: () => "genomes/?page=1&page_size=1000",
    }),
    getGenomeBrowser: builder.query({
      query: (species) => `genome-browser/${species}`,
    }),
    getGenomeBrowserURS: builder.query({
      query: ({urs, taxid}) => `rna/${urs}/genome-locations/${taxid}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGenomesQuery, useGetGenomeBrowserQuery, useGetGenomeBrowserURSQuery } = rnacentralApi
