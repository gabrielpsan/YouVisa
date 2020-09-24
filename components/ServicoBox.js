import Header from '../components/Header'
import FolderBox from '../components/FolderBox'
import { Servico, ImgServico, TextServico } from './../styles/servicoscss'
import vistos from '../assets/img/FundoVistos.png'
import translate from '../assets/img/translate.png'
import passaporte from '../assets/img/passport.png'
import cambio from '../assets/img/cambio.png'
import {TurismoJson, EletronicoJson, Estudos, Trabalhos} from '../utils/TextTurismoJson'
import { useEffect, useState } from 'react';

export default function ServicoBox() {

  return (

    <Servico>
        <ImgServico>
            <img src={translate}></img>
        </ImgServico>
        <TextServico>
            <h1>Tradução</h1>
            <p>
                Durante o processo de aplicação do visto, algumas embaixadas podem solicitar a tradução<br/> 
                de alguns documentos, pois o processo pode ser analisado fora do Brasil por agentes<br/> 
                consulares estrangeiros. Para o visto de estudos, por exemplo, documentos como<br/>
                certificados, diplomas e certidões de nascimento e/ou casamento, são necessários a<br/> 
                tradução. Existem ainda as traduções juramentadas, que refletem oficialmente em língua <br/>
                estrangeira o conteúdo do documento original em português. Independente do motivo, a<br/> 
                YOUVISA possui tradutores de diversas línguas habilitados para tradução simples e<br/> 
                juramentada.
            </p>
        </TextServico>
        <ImgServico>
            <img src={passaporte}></img>
        </ImgServico>
        <TextServico>
            <h1>Passaporte</h1>
            <p>
                O primeiro passo para conhecer o mundo e o item mais importante da sua viagem<br/>  
                internacional. Antes de viajar, esteja atendo a data de expiração do passaporte. Alguns<br/>  
                países não permitem a entrada no seu território com o passaporte com validade inferior a 6<br/>  
                meses. Seja a renovação ou a primeira emissão, nós auxiliamos em todo o processo.<br/> 
            </p>
        </TextServico>
        <ImgServico>
            <img src={cambio}></img>
        </ImgServico>
        <TextServico>
            <h1>Câmbio</h1>
            <p>
                Mais um benefício que a YOUVISA oferece para você é uma cotação atraente comparada ao<br/>  
                mercado. Você pode levar o dinheiro para sua viagem em espécie ou utilizar um cartão<br/>  
                pré-pago com saldo na moeda do país de destino. Consulte nosso câmbio do dia e<br/>  
                aproveite mais essa vantagem!<br/> 
            </p>
        </TextServico>
    </Servico>    
  )
}