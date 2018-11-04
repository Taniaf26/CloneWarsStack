import React from 'react'
import styled from 'styled-components'
import { compose, withStateHandlers } from 'recompose'

const AddAnswer = ({ onChange, submitAnswer }) => {
  return (
    <Container>
      <Question>Add your answer</Question>
      <Form onSubmit={submitAnswer}>
        <QuestionInput
          placeholder="Add your answer here.."
          name="answer"
          type="text"
          onChange={onChange}
        />
        <Label>Name:</Label>
        <FormInput type="text" name="name" onChange={onChange} placeholder="Enter your name"/>
        <FormButton type="submit" value="submit" onSubmit={submitAnswer} />
      </Form>
    </Container>
  )
}

export default compose(
  withStateHandlers(
    ({ answer = '', name = ''}) => ({
      answer: answer,
      name: name
    }),
    {
      onChange: (state, props) => event => ({
        [event.target.name]: event.target.value,
    }),
      submitAnswer: (state, props) => event =>{
        fetch('/questions/5', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state),
        })
      }
    }
  )
)(AddAnswer)

const Container = styled.div`
  width: 100%;
`

const Question = styled.div`
  margin: 5px 10px;
  font-weight: bold;
  font-size: 14px;
  text-align: start;
`
const QuestionInput = styled.textarea`
  margin: 5px 10px;
  width: 98%;
  height: 8em;
  border-color: lightgrey;
  padding: 5px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const FormInput = styled.input`
  margin: 5px 10px;
  width: 98%;
  height: 20px;
  padding: 5px;
`
const Label = styled.p`
  margin: 0px 10px;
  font-size: 0.9em;
`

const FormButton = styled.input`
  width: 100px;
  height: 35px;
  background-color: #84b727;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 12px;
  margin-top: 5px;
  margin-left: auto;
`
