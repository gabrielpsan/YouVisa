import styled from 'styled-components';

export const Container = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    width: 100vw;
    height: 600px;
    background: #00EB84;

    div {
        color: white;
    }
`

export const Direita = styled.div`
    /* background: red; */

`

export const Text = styled.div`
    color: white;
    /* width: 843.75px;
    height: 486.75px; */
    margin-top: 12%;
    margin-left: 8.5%;
    
`

export const TextSub = styled.div`
    color: white;
    margin-top: 4.5%;
    margin-left: 8.5%;
    @media only screen and (max-width: 750px) {
        display: none;
    }
`


export const TextNum = styled.div`
    display: grid;
    grid-template-columns:250px 270px 270px;
    margin-left: 7%;
    width: 800px;
    margin-right: 0;
    @media only screen and (max-width: 750px) {
        display: none;
    }

`

export const TextNum1 = styled.div`
    color: white;
    margin-top: 4.5%;
    margin-left: 8.5%;

    img {
        width: 35px;
        height: 35px;
    }

    h3{
        font-size: 16px;
    }
`

export const FormVisto = styled.div`

    * {
        padding: 0;
        margin: 0px;
        margin-right: 0px;
    }

    position: relative;
    top: -45vh;
    left: 140vh;
    background: white;
    /* width: 28%; */
    width: 384px;
    height: 545px;
    /* height: 91%; */
    border-radius: 5px;
    text-align: center;
    -webkit-box-shadow: 10px 21px 28px 5px rgba(0,0,0,0.19);
    -moz-box-shadow: 10px 21px 28px 5px rgba(0,0,0,0.19);
    box-shadow: 10px 21px 28px 5px rgba(0,0,0,0.19);
    padding: 0 auto;
    margin: 0px;
    margin-right: 0px;

    @media only screen and (max-width: 750px) {
        
        /* margin-bottom: 10%; */
    }

    input {
        margin-top: 9%;
        width: 320px;
        height: 54px;
        border: 2px solid #BEC3C6;
        border-radius: 5px;
        padding: 10px;
    }

    select {
        margin-top: 7%;
        width: 320px;
        height: 54px;
        border: 2px solid #BEC3C6;
        border-radius: 5px;
        padding: 8px;
    }

    button {
        margin-top: 7%;
        width: 320px;
        height: 54px;
        border: none;
        border-radius: 5px;
        color: white;
        background: #00EB84;
    }

`