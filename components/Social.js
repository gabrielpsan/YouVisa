import { Container, Text, SocialImgs } from '../styles/Socialcss'
import imgSpotfy from '../assets/img/spotfy.png'
import imgGoogle from '../assets/img/google.png'
import imgFacebook from '../assets/img/facebook.png'
import imgInstagram from '../assets/img/instagram.png'


export default function Social() {
    return (
        <Container>
            <Text>
                <h2>Empresas parceiras</h2>
            </Text>
            <SocialImgs>
                <ul>
                    <li><a href="https://spotfy.com" target="_blank"><img src={imgSpotfy}></img></a></li>
                    <li><a href="https://google.com" target="_blank"><img src={imgGoogle}></img></a></li>
                    <li><a href="https://facebook.com" target="_blank"><img src={imgFacebook}></img></a></li>
                    <li><a href="https://instagram.com" target="_blank"><img src={imgInstagram}></img></a></li>
                </ul>
            </SocialImgs>
        </Container>
    )
}