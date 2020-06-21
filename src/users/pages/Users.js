import React from 'react'

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {id:'u1', name:'Jimmy Svensson', image: 'https://picsum.photos/200/300', placeCount: 3},
    {id:'u2', name:'Gabriella Mann', image: 'https://picsum.photos/200/300', placeCount: 2}
  ]
  return <UsersList item={USERS} />
}

export default Users
