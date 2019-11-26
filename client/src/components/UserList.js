import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  color: white;
  width: 25%;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const User = styled.div`
  padding: 1rem;

  display: flex;
  align-items: center;
  width: 100%;

  .initial {
    width: 25%;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border: 2px solid #859900;
    border-radius: 50%;
  }

  .name {
    width: 60%;
    padding-right: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
  }
`;

const Header = styled.div`
  bottom: 0;
  border-bottom: 2px solid white;
  padding: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;   
`;

const UserList = ({ users, room }) => (
  <ListContainer>
    {
      users
        ? (
          <div>
            <Header>{room}</Header>
            {
              users.map((u) => (
                <User key={u.name}>
                  {/* <div className="initial">{u.name.slice(0, 1).toUpperCase()}</div> */}
                  <div className="name">{u.name}</div>
                </User>
              ))
            }
          </div>
        )
        : null
    }
  </ListContainer>
);

export default UserList;
