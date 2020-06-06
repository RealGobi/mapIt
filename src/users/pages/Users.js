import React from 'react'

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [{id:'001', name:'Jimmy Svensson', image: 'https://en.wikipedia.org/wiki/StyleGAN#/media/File:Woman_1.jpg', places: 3}]
  return <UsersList item={USERS} />
}

export default Users
