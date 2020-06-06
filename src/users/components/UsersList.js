import React from 'react';

import './UsersList.css'
import UserItem from './UserItem';

const UserList = props => {
  if(props.item.length === 0) {
    return (
      <div className="center">
        <h2>No users found</h2>
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
                  placeCont={user.places} 
                  />
                )) }
          </ul>
        )
}

export default UserList
