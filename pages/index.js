import Head from 'next/head'
import imgfooter from '../assets/img/img-footer.png'
import FolderBox from '../components/FolderBox'
import Header from '../components/Header'
import DownHeader from '../components/DownHeader'

import { Container, FooterBox} from './../styles/Home';
import Social from '../components/Social'
import Information from '../components/Information'
import Products from '../components/Products'
import Questions from '../components/Questions'
import MobileMenu from '../components/MobileMenu'
import { ServerStyleSheet } from "styled-components";

export default function Home() {

  return (
    <Container>
      <Head>
        <title>YouVisa</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" 
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" 
          integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" 
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script> */}
      </Head>

      <Header/>
        <DownHeader />
          <Social />
          <Information />
          <Products />
        <Questions />
        <MobileMenu />
      <FolderBox />
      
    </Container>
  )
}
