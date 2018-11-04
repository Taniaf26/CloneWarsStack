import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import { lifecycle, compose } from 'recompose'
import styled from 'styled-components'

const App = ({ questions = [] }) => {
  return (
      <TopContainer>
        <Header />
        <h2 style = {{ 'marginLeft' :'10%'}}>All Questions</h2>
        {questions.reverse().map(q => (
          <Card key={q.id} title={q.title} text={q.text} answers={q.answers} />
        ))}
      </TopContainer>
  )
}

export default compose(
  lifecycle({
    componentDidMount() {
      fetch('/questions')
        .then(res => res.json())
        .then(questions => this.setState({ questions }))
    },
  }),
)(App)

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`
