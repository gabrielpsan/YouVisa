import { Container, Menu } from '../styles/MobileMenucss'
import img1 from '../assets/img/Item01.png'
import img2 from '../assets/img/Item02.png'
import img3 from '../assets/img/Item03.png'
import img4 from '../assets/img/Item04.png'
export default function MobileMenu() {
    return (
        <Container>
            <Menu>
                <a href="/"><img src={img1}></img></a>
                <a><img src={img2}></img></a>
                <a><img src={img3}></img></a>
                <a><img src={img4}></img></a>
            </Menu>
        </Container>
    )
}