import styles from '../styles/Home.module.css'
import imgfooter from '../assets/img/img-footer.png'
import { Container, FooterBox, Text} from './../styles/Home';
import Line from '../assets/img/Line.png'
import email from '../assets/img/Group.png'
import whatsapp from '../assets/img/Whatsup.png'
import instagram from '../assets/img/Insta.png'
import youtube from '../assets/img/Youtube.png'
import facebook from '../assets/img/Face.png'
import twitter from '../assets/img/Shape.png'

export default function FolderBox() {
  return (
    <Container>
      <FooterBox>
        <a
          href="#"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgfooter} alt="Vercel Logo" className={styles.logo} />
        </a>
        <ul className="ulFooter">
          <li><a>Menu</a></li>
          <li><a>O que fazemos</a></li>
          <li><a>Teste de perfil</a></li>
          <li><a>Embaixadas</a></li>
          <li><a>Vistos</a></li>
          <li><a>Serviços</a></li>
          <li><a>Blog</a></li>
        </ul>
        <ul className="ulFooter">
          <li>Fale com a gente</li>
          <li><img src={email}/>contato@youvisa.com.br</li>
          <li><img src={whatsapp}/>Whatsapp</li>
          <ul className="ulFooter2">
            <li>Seja um parceiro</li>
            <li>Cadastre-se</li>
          </ul>
        </ul>
        <ul className="ulFooter ulFooter3">
          <li>Siga nas redes sociais</li>
          <li>
            <a><img src={instagram}/></a>
            <a><img src={youtube}/></a>
            <a><img src={twitter}/></a>
            <a><img src={facebook}/></a>
            </li>
        </ul> 
        {/* <Text>
          <img src={Line}></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Quasi vero, inquit, perpetua oratio rhetorum<br/> 
            solum, non etiam philosophorum sit. Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas. Illud dico, ea, quae dicat, praeclare inter se cohaerere.<br/>
            Peccata paria. Duo Reges: constructio interrete. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant.<br/></p>
        </Text> */}
      </FooterBox>
    </Container>
  )
}
