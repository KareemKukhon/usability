import React, { Component } from 'react'
import LoggedAppBar from '../../components/loggedAppBar'
import { Box } from '@mui/material'
import QuestionCard from '../../components/question/questionCard'

export default class CheckList extends Component {
  render() {
    return (
      <div>
        <LoggedAppBar></LoggedAppBar>
        <QuestionCard />
        <QuestionCard />
      </div>
    )
  }
}
