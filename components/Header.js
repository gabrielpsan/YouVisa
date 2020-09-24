import styles from '../styles/Header.js'
import imgHeader from '../assets/img/img-footer.png'
import close from '../assets/img/menu.png'
import index from '../pages/index'
import Link from 'next/link'

import { Container, NavHeader } from './../styles/Header';


export default function Header() {
  return (
    <Container>
        <div className="header">
            <div className="subHeader">
            <span href="/" className="logo"><img className="logoHeader" src={imgHeader}></img></span>
              <div className="header-right">
                  <a className="active" href="#information">O que fazemos</a>
                  <a href="#perfil">Teste de perfil</a>
                  <a href="/vistos">Vistos</a>
                  <a href="/servicos">Serviços</a>
                  <a href="#blog">Blog</a>
                  <button><a href="/">Solicite seu visto</a></button>
              </div>
              <img className="imgMenu" src={close}/>
            </div>
        </div>
    </Container>
  )
}
