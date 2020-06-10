import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';

import './UsersList.css'

const UserList = props => {
  if(props.item.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    )
  }

  return (
          <ul className='users-list'>
                {props.item.map(user => (
                  <UserItem 
                  key={user.id} 
                  id={user.id} 
                  image={user.image} 
                  name={user.name} 
                  placeCount={user.placeCount} 
                  />
                )) }
          </ul>
        )
}

export default UserList
