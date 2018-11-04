import React from 'react'
import { withState, withHandlers, compose, withStateHandlers } from 'recompose'
import Modal from 'react-modal'
import styled from 'styled-components'

const AddQuestion = ({
  handleClick,
  opened,
  addQuestion,
  onChange,
  title,
  category,
  text,
  name,
}) => {
  return (
    console.log(title, text, name, category) || (
      <div>
        <Button onClick={handleClick}>Ask Question</Button>
        <Modal isOpen={opened} contentLabel="Ask Question" style={customStyles}>
          <button onClick={handleClick}>close</button>
          <Title>Add your Question</Title>
          <ModalContainer>
            <Form onSubmit={addQuestion}>
              <FormLabel>
                Title:
                <FormInput
                  type="text"
                  name="title"
                  placeholder="Add a title for your question"
                  onChange={onChange}
                />
              </FormLabel>
              <FormLabel>
                Category:
              <Select name="category" onChange={onChange}>
                  <option value="General">General</option>
                  <option value="React">React</option>
                  <option value="Javascript">Javascript</option>
              </Select>
              </FormLabel>
              <FormLabel>
                Full question body:
                <FormInputBody
                  type="text"
                  name="text"
                  onChange={onChange}
                />
              </FormLabel>
              <FormLabel>
                Name:
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={onChange}
                />
              </FormLabel>
              <FormButton type="submit" value="Submit" onSubmit={addQuestion} />
            </Form>
          </ModalContainer>
        </Modal>
      </div>
    )
  )
}

export default compose(
  withState('opened', 'setOpened', false),
  withHandlers({
    handleClick: props => event => {
      props.setOpened(!props.opened)
    },
  }),
  withStateHandlers(
    ({ title = '', text = '', name = '', category='' }) => ({
      title: title,
      text: text,
      name: name,
      category: category,
    }),
    {
      onChange: (state, props) => event => ({
        [event.target.name]: event.target.value,
      }),
      addQuestion: (state, props) => event => {
        console.log(state)
        fetch('/questions', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state),
        })
      },
    },
  ),
)(AddQuestion)

const customStyles = {
  content: {
    top: '80px',
    left: '250px',
    right: '250px',
    bottom: '80px',
  },
}

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  width: 70%;
  flex-direction: column;
`
const Title = styled.h2`
  text-align: center;
`
const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`
const FormInput = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  height: 20px;
`
const FormInputBody = styled.textarea`
  height: 80px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-color: lightgray;

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
`
const Button = styled.button`
  width: 100px;
  height: 35px;
  background-color: #84b727;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 12px;
  margin-right: 10px;
`
const Select = styled.select`
  margin: 5px 0px;
  height: 20px;
  background-color: white;
  border-color: lightgray;
`