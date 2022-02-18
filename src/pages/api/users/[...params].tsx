import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  console.log(request.query)

  const users = [
    {id: 1, name: 'Sander'}
  ]

  return response.json(users)
}
