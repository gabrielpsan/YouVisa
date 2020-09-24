import Header from '../components/Header'
import FolderBox from '../components/FolderBox'
import { Container, DownVistos, MenuVistos, Turismo, TextTurismo, ImgTurismo,
         TextTurismo2, ImgTurismo2, TextTurismo3, ImgTurismo3, Eletronico, ImgEletronico, TextEletronico } from './../styles/vistoscss'
import vistos from '../assets/img/FundoVistos.png'
import eua from '../assets/img/eua.png'
import can from '../assets/img/can.png'
import nze from '../assets/img/nze.png'
import eur from '../assets/img/eur.png'
import aus from '../assets/img/aus.png'
import {TurismoJson, EletronicoJson, Estudos, Trabalhos} from '../utils/TextTurismoJson'
import { useEffect, useState } from 'react';
import Router from 'next/router'

export default function TurismoBox({menu}) {
    const [turismo, setTurismo] = useState([]);

    function turismoText() {
        setTurismo(TurismoJson);

        if(menu == "Turismos") {
          setTurismo(TurismoJson); 
        }
        else if(menu == "Eletronicos") {
          setTurismo(EletronicoJson); 
        }
        else if(menu == "Estudos") {
          setTurismo(Estudos); 
        }
        else if(menu == "Trabalhos") {
          setTurismo(Trabalhos); 
        }
    }


    useEffect(() => {
        turismoText()
    }, [turismo]) 


  return (
        <>
        {turismo.map( (e) => {
            return (
            <Turismo>
                <ImgTurismo>
                  <img src = {e.where}/>
                  {console.log(menu)}
                </ImgTurismo>
                <TextTurismo>
                  <h1>{e.title}</h1>
                  <p dangerouslySetInnerHTML={{__html: e.text}} />
                </TextTurismo>
            </Turismo>
            )
        }) }
        </>
  )
}