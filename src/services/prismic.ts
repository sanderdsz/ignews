import * as prismic from '@prismicio/client'

export const repositoryName = 'sander-ignews'
const endpoint = prismic.getEndpoint(repositoryName)

export const client = prismic.createClient(endpoint,
  {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  }
)
