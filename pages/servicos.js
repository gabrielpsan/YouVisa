import Header from '../components/Header'
import FolderBox from '../components/FolderBox'
import { DownServicos } from './../styles/servicoscss'
import vistos from '../assets/img/FundoVistos.png'
import eua from '../assets/img/eua.png'
import can from '../assets/img/can.png'
import nze from '../assets/img/nze.png'
import TurismoBox from '../components/TextTurismo'
import ServicoBox from '../components/ServicoBox'
import { useState } from 'react'

export default function Home() {
  const [menu, setMenu] = useState("Turismos");


  return (
    <>
        <Header/>
        <DownServicos>
          <img src={vistos}/>
        </DownServicos>
        <ServicoBox menu={menu}/>
      <FolderBox />
      </>
  )
}