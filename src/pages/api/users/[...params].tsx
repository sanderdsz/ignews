import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(request: NextApiRequest, response: NextApiResponse) {

  const users = [
    {id: 1, name: 'Sander'}
  ]

  return response.json(users)
}
