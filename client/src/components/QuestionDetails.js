import React from 'react'
import styled from 'styled-components';

const Details = ({text, author, submittedOn}) => {
  return(
    <Container>
      <div>{text}</div>
      <UserDetails>{author} {submittedOn} </UserDetails>
      </Container>
  )
}

export default Details

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95%;
  margin: 10px;
  text-align: start;
  padding: 16px 24px;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 #d9d9d9;
`
const UserDetails = styled.div`
  align-self: flex-end;
  color: #84B727;
  margin-top: 5px;
  font-size: 14px;
`