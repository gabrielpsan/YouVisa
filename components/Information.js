import { Container, Imagens, TextSide } from '../styles/Informationcss'
import InfoImg1 from '../assets/img/InfImg1.png'
import InfoImg2 from '../assets/img/InfImg2.png'
import InfoImg3 from '../assets/img/InfImg3.png'
import InfoImg4 from '../assets/img/InfImg4.png'
import plane from '../assets/img/plane.png'
import book from '../assets/img/Book.png'
import pass from '../assets/img/pass.png'
import stud from '../assets/img/stud.png'


export default function Information() {
    return (
        <Container id="information" >
            <Imagens>
                <img src={InfoImg1}></img>
                <img src={InfoImg2}></img>
                <img src={InfoImg3}></img>
                <img src={InfoImg4}></img>
            </Imagens>
            <TextSide>
                <h2>O QUE FAZEMOS</h2>
                <h1>O que é YouVisa</h1>
                <p>A YOUVISA nasceu para mostrar que é possivel<br/>
                   fazer diferente e tornar a aplicação do seu visto<br/>
                   mais fácil e sem dor de cabeça</p>
                <h3>Oferecemos serviços como:</h3>

                <ul>
                    <li><img src={plane}/>Visto de turismo</li>
                    <li><img src={book}/>Visto de estudos</li>
                    <li><img src={pass}/>Passaporte</li>
                    <li><img src={stud}/>Tradução</li>
                </ul>
                
            </TextSide>
        </Container>
    )
}