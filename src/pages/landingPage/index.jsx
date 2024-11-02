import React, { Component } from 'react'
import './style.css'
import HeroSection from './sections/heroSection'
import HowItsWork from './sections/howItsWork'
import FeedbackSection from './sections/feedbackSection'
import FAQSection from './sections/FAQSection'
import Footer from './sections/footer'


export default class HomePage extends Component {
    
  render() {
    return (
      <div>
        <HeroSection/>
        <HowItsWork/>
        <FeedbackSection/>
        <Footer/>
      </div>
      
    )
  }
}
