import React from 'react'
import styled from 'styled-components'
import AddQuestion from './AddQuestion'

const Header = () => {
  return (
    <HeaderContainer>
      <TopContainer>
        <div style={{ display: 'flex' }}>
           <TopImage src="/bookstack.png" />
            <h3 style={{ fontWeight : 'normal', marginRight: '1px'}}>Stack</h3><h3>overflow</h3>
        </div>
        <AddQuestion/>
      </TopContainer>
    </HeaderContainer>
  )
}

export default Header

export const TopContainer = styled.div`
padding: 5px;
vertical-align: bottom;
background-color: #edeeef; 
height: 50px;
display:flex;
justify-content: space-between
align-items: center;
z-index:1;
`
export const HeaderContainer = styled.div`
  background-color: #edeeef;
`
export const TopImage = styled.img`
  height: 50px;
  width: 60px;
`
// const Button = styled.button`
//   width: 100px;
//   height: 35px;
//   background-color: #84b727;
//   border-radius: 5px;
//   color: white;
//   font-weight: bold;
//   font-size: 12px;
//   margin-right: 10px;
// `
