import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Caurosel from '../components/Home/Caurosel'
import PrinicpalMessage from '../components/Home/PrinicpalMessage'
import ValueAddedEducations from '../components/Home/ValueAddedEducations'
import FooterData from '../components/Home/FooterData'
import NewsAndEvents from '../components/Home/NewsAndEvents'

function Home() {

  return (
    <>
<Header/>
<div className='mt-24'>

<Caurosel/>
</div>
<NewsAndEvents/>
<PrinicpalMessage/>
<ValueAddedEducations/>
<FooterData/>

   <Footer/> 
   </>
  )
}

export default Home