import Header from '../components/Header'
import FolderBox from '../components/FolderBox'
import { Container, DownVistos, MenuVistos, Turismo, TextTurismo, ImgTurismo,
         TextTurismo2, ImgTurismo2, TextTurismo3, ImgTurismo3, Eletronico, ImgEletronico, TextEletronico } from './../styles/vistoscss'
import vistos from '../assets/img/FundoVistos.png'
import eua from '../assets/img/eua.png'
import can from '../assets/img/can.png'
import nze from '../assets/img/nze.png'
import TurismoBox from '../components/TextTurismo'
import { useState } from 'react'

export default function Home() {
  const [menu, setMenu] = useState("Turismos");


  return (
      <Container>
        <Header/>
        <DownVistos>
          {/* <h1>Vistos</h1> */}
          <img src={vistos}/>
          <MenuVistos>
            <ul>
              <li><a  onClick={() => {setMenu("Turismos")}}>Turismo</a></li>
              <li><a  onClick={() => {setMenu("Eletronicos")}} >Eletrônico - ETA</a></li>
              <li><a  onClick={() => {setMenu("Estudos")}}>Estudos</a></li>
              <li><a  onClick={() => {setMenu("Trabalhos")}}>Trabalho</a></li>
            </ul>
          </MenuVistos>
        </DownVistos>
        <TurismoBox menu={menu} />
      <FolderBox />
      </Container>
  )
}