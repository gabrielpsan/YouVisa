import { Container, Text, TextSub, TextNum, TextNum1, FormVisto, Direita } from './../styles/DownHeadercss';
import imgText1 from '../assets/img/icon.png';
import imgText2 from '../assets/img/icon2.png';
import imgText3 from '../assets/img/icon3.png';



export default function FolderBox() {
    return (
        <Container>
            <Direita>
                <Text>
                    <h1>
                        Seu visto de forma fácil,<br/> online e segura. Viaje o<br/> mundo sem se preocupar
                    </h1>
                </Text>
                <TextSub>
                    <h3>
                        Tudo isso em 3 passos
                    </h3>
                </TextSub>
                <TextNum>
                    <TextNum1>
                        <img src={imgText1}></img>
                        <h3>
                            Preencha nosso cadastro em<br/> menos de 1 minuto
                        </h3>
                    </TextNum1>
                    <TextNum1>
                        <img src={imgText2}></img>
                        <h3>
                            Envie alguns documentos<br/> importantes para análise
                        </h3>
                    </TextNum1>
                    <TextNum1>
                        <img src={imgText3}></img>
                        <h3>
                        Analisamos e aplicamos o seu<br/> visto, agora é só aguardar

                        </h3>
                    </TextNum1>
                </TextNum>
            </Direita>
            <FormVisto>
                <form>
                    <input type="text" placeholder="Nome"></input>
                    <input type="text" placeholder="E-mail"></input>
                    <input type="text" placeholder="Telefone"></input>
                    <select name="paises" id="paises">
                        <option value="">País desejado</option>
                        <option value="Austrália">Austrália</option>
                        <option value="Canadá">Canadá</option>
                        <option value="Cingapura">Cingapura</option>
                        <option value="Estados Unidos">Estados Unidos</option>
                        <option value="Nova Zelândia">Nova Zelândia</option>
                    </select>
                    <select name="vistos" id="vistos">
                        <option value="">Tipo de visto</option>
                        <option value="Turismo">Turismo</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="eTA">eTA</option>
                        <option value="ETIAS">ETIAS (Europa)</option>
                    </select>
                    <button>Enviar</button>
                </form>
            </FormVisto>
        </Container>
    )
}