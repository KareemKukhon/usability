import React, { Component } from 'react'
import LoggedAppBar from '../../components/loggedAppBar'
import { Box } from '@mui/material'
import QuestionCard from '../../components/question/questionCard'
import TestDetails from '../../components/addTest/testDetails'
import Screener from '../../components/addTest/screener'
import AddSection from '../../components/addTest/addSection'
import WelcomeScreen from '../../components/addTest/welcomeScreen'
import ThankScreen from '../../components/addTest/thankScreen'

export default class AvailableTest extends Component {
  render() {
    return (
      <div>
        <LoggedAppBar/>
        <QuestionCard />
        <QuestionCard />


        <br />
      </div>
    )
  }
}
