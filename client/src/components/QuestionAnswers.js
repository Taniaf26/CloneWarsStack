import React from 'react'
import styled from 'styled-components'
import Details from './QuestionDetails'

const QuestionAnswers = ({ answers }) => {
  return (
    <Container>
      {answers.map(a => (
        <Details key={a.id} text={a.text} author={a.author} submittedOn={a.submittedOn} />
      ))}
    </Container>
  )
}

export default QuestionAnswers

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 90%; */
  /* margin: 10px; */
  text-align: start;
  /* padding: 16px 24px; */
  background-color: #fff;
  /* box-shadow: 0 2px 8px 0 #d9d9d9; */
`
// const Question = styled.div`
//   margin-bottom: 5px;
// `
// const Metadata = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   /* margin: 5px; */
//   font-size: 14px;
//   color: #94BD2C
//   margin-bottom: 10px;
// `
