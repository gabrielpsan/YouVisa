import { Container, FirstText, Types, Image, Text, Image2, Text2, Image3, Text3, Image4, Text4, Depoimentos, Cards, CompProd, CompProdReverse, Card3, ImagemCard} from '../styles/Productscss'
import Pedro from '../assets/img/ImagePedro.png'
import arrow from '../assets/img/arrow.png'
import fundoPedro from '../assets/img/fundoPedro.png'
import Visto from '../assets/img/imageVisto.png'
import Estudo from '../assets/img/imageEstudo.png'
import Trabalho from '../assets/img/imagemTrabalho.png'
import Asp from '../assets/img/asp.png'
import Dep1 from '../assets/img/Dep1.png'
import Dep2 from '../assets/img/Dep2.png'
import Dep3 from '../assets/img/Dep3.png'


export default function Products() {
    return (
        <Container>
            <FirstText>
                <h3>NOSSOS PRODUTOS</h3>
                <h1>Como facilitamos a sua vida</h1>
                <p>Somos uma traveltech que facilita a sua aplicação de visto de forma simples, rápida<br/>
                   e 100% digital. Somos a primeira startup brasileira focada em visto, aliados com a<br/>
                   tecnologia e expertise de especialistas em vistos.</p>
            </FirstText>
            <Types>
                <CompProd>
                    <Image>
                        <img src={Pedro}></img>
                    </Image>
                    <Text>
                        <h2>Visto de turismo</h2>
                        <p>Vai viajar de férias com a família, com seus amigos ou<br/>
                        desbravar o mundo sozinho? Esse é o seu visto! Viaje<br/>
                        tranquilo por semanas e aproveite sua experiência<br/>
                        visitando o país. Indicado para viagens que durem menos<br/>
                        de 6 meses.</p>
                        
                        <h3><a href="#">Saiba mais<img src={arrow}/></a></h3>
                    </Text>
                </CompProd>

                <CompProdReverse>
                    <Image>
                        <img src={Visto}></img>
                    </Image>
                    <Text>
                        <h2>Visto eletrônico (ETA)</h2>
                        <p>Alguns países já oferecem essa modalidade de visto. Com<br/>
                        ele é permitido que entre no país para trânsito ou para<br/> 
                        turismo. É prático, rápido e pode ser solicitado de<br/>
                        qualquer lugar do mundo.</p>
                        
                        <h3><a href="#">Saiba mais<img src={arrow}/></a></h3>
                    </Text>
                </CompProdReverse>

                <CompProd>
                    <Image>
                        <img src={Estudo}></img>
                    </Image>
                    <Text>
                        <h2>Visto de estudos</h2>
                        <p>Para você que vai estudar, desde um curso rápido para<br/>
                        aprimorar o inglês ou até um mestrado no exterior, esse é<br/>
                        o tipo de visto indicado. Em alguns países e situações ele<br/> 
                        permite trabalhar. Uma das experiências mais imersivas<br/> 
                        na cultura internacional!</p>
                        
                        <h3><a href="#">Saiba mais<img src={arrow}/></a></h3>
                    </Text>
                </CompProd>

                <CompProdReverse>
                    <Image>
                        <img src={Trabalho}></img>
                    </Image>
                    <Text>
                        <h2>Visto de trabalho</h2>
                        <p>Sua empresa precisa de você em outro país ou recebeu<br/> 
                        uma proposta para trabalhar fora? O visto de trabalho é<br/> 
                        indicado para diversas oportunidades de trabalho e<br/> 
                        negócios, e cada país possui seus critérios, por isso se<br/> 
                        programe e aplique este visto</p>
                        
                        <h3><a href="#">Saiba mais<img src={arrow}/></a></h3>
                    </Text>
                </CompProdReverse>
            </Types>

            <Depoimentos>
                <h1>Depoimentos</h1>
                <Cards>
                    <Card3>
                        <ImagemCard>
                            <img src={Asp}></img>
                        </ImagemCard>
                        <p>A YouVisa me ajudou a realizar<br/> 
                           o sonho de viajar para a<br/> 
                           Austrália. Todo o processo foi<br/> 
                           seguro e rápido. Agradeço a<br/>
                            eles por terem me ajudado<br/> 
                            nessa realização de sonho.<br/>
                        </p>
                        <span>
                            <img className="Dep3" src={Dep1}></img>
                            <h3>Kaleb</h3>
                        </span>
                    </Card3>
                    <Card3>
                        <ImagemCard>
                            <img src={Asp}></img>
                        </ImagemCard>
                        <p>Com tantas viagens a trabalho e<br/>
                           sem tempo de me informar<br/> 
                           sobre o visto, busquei a<br/> 
                           @youvisa.br. O processo foi feito<br/> 
                           em poucos dias e já marquei<br/>
                           minha viagem para o Canadá!<br/> 
                        </p>
                        <span>
                            <img className="Dep3" src={Dep2}></img>
                            <h3>Junior</h3>
                        </span>
                    </Card3>
                    <Card3>
                        <ImagemCard>
                            <img  src={Asp} />
                        </ImagemCard>
                        <p>Tirar o visto sempre foi uma<br/>
                           coisa burocrática e chata para<br/>
                           mim. Quando busquei a<br/> 
                           @youvisa.br tudo ficou mais<br/> 
                           claro. Foi tão fácil e rápido que<br/> 
                           recebi meu visto poucos dias!<br/>
                        </p>
                        <span>
                            <img className="Dep3" src={Dep3}></img>
                            <h3>Jéssica</h3>
                        </span>
                    </Card3>
                </Cards>
            </Depoimentos>
        </Container>
    )
}