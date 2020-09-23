import { Container, Text, Box, SubBox1, Hiden } from '../styles/Questionscss'
import Line from '../assets/img/Line.png'

export default function Questions() {
    return (
        <Container>
            <Text>
                <h1>Perguntas frequentes</h1>
            </Text>   
            <Box>
                <SubBox1>
                    <h3>O que é a YOUVISA?</h3>
                    <Hiden>
                        <img src={Line}></img>
                        <p>Somos a primeira Startup de vistos. Somos contra burocracia, papelada e atendimento<br/>
                           robotizado. Porque burocratizar se podemos simplificar!?</p>
                    </Hiden>
                </SubBox1>
                <SubBox1>
                    <h3>Como é o processo da YOUVISA?</h3>
                </SubBox1>
                <SubBox1>
                    <h3>Como é o processo de visto?</h3>
                </SubBox1>
                <SubBox1>
                    <h3>Quanto tempo leva para ter o visto aprovado?</h3>
                </SubBox1>
                <SubBox1>
                    <h3>O visto é garantido?</h3>
                </SubBox1>
                
            </Box>
        </Container>
    )
}