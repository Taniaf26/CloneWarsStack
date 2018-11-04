import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import styled from 'styled-components'
import Details from './QuestionDetails'
import QuestionAnswers from './QuestionAnswers'
import AddAnswer from './AddAnswer'

const numberOfAnswers = (answers) => {
  if (answers.length === 1) return `${answers.length} Answer`
  return `${answers.length} Answers`
}

const Card = ({ title, text, handleClick, opened, answers }) => {
  return opened ? (
    <CardContainer>
      <HeaderOpened onClick={handleClick}>
        <Wrap>
          <div>{title}</div>
          <AnswerNumber>{numberOfAnswers(answers)}</AnswerNumber>
        </Wrap>
      </HeaderOpened>
      <Question>Full Question</Question>
      <Details text={text} />

      {answers.length > 0 ? (
        <QuestionContainer>
          <Title>{numberOfAnswers(answers)}</Title>
          <QuestionAnswers answers={answers} />
        </QuestionContainer>
      ) : (
        <Title>There are no answers yet</Title>
      )}
      <AddAnswer/>
    </CardContainer>
  ) : (
    <CardContainer>
      <HeaderClosed onClick={handleClick}>
        <Wrap>
          <div>{title}</div>
          <AnswerNumber>{numberOfAnswers(answers)}</AnswerNumber>
        </Wrap>
      </HeaderClosed>
    </CardContainer>
  )
}

export default compose(
  withState('opened', 'setOpened', false),
  withHandlers({
    handleClick: props => event => {
      props.setOpened(!props.opened)
    },
  }),
)(Card)

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: 10px 40px;
  padding: 16px 24px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px 0 #d9d9d9;
`
const HeaderClosed = styled.div`
  &:before {
    content: '► ';
  }
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 100%;
`
const Question = styled.div`
  margin: 10px 10px;
  font-weight: bold;
  font-size: 14px;
  text-align: start;
`

const HeaderOpened = styled(HeaderClosed)`
  &:before {
    content: '▼ ';
  }
  border-bottom: 1px solid lightgrey;
  padding-bottom: 5px;
  text-align: start;
  font-weight: bold;
  width: 100%;
`
const Title = styled.p`
  margin: 0px 10px;
  font-weight: bold;
  font-size: 14px;
  text-align: start;
`
const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const AnswerNumber = styled.div`
  font-size: 0.9em;
  color: #84b727;
`
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`


