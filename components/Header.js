import styles from '../styles/Header.js'
import imgHeader from '../assets/img/img-footer.png'

import { Container, NavHeader } from './../styles/Header';


export default function Header() {
  return (
    <Container>
        <div className="header">
            <span href="#default" className="logo"><img className="logoHeader" src={imgHeader}></img></span>
            <div className="header-right">
                <a className="active" href="#home">O que fazemos</a>
                <a href="#perfil">Teste de perfil</a>
                <a href="#">Vistos</a>
                <a href="#servicos">Serviços</a>
                <a href="#blog">Blog</a>
                <button>Solicite seu visto</button>
            </div>
        </div>
    </Container>
  )
}
