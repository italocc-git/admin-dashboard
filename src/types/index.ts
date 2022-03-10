export type userData = {
    id: number,
    name: string,
    username?: string,
    email: string,
    city: string,
    address?: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,    
  }
  }