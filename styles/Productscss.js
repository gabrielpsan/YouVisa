import styled from 'styled-components';

export const Container = styled.div`
    background: white;
    width: 90%;
    height: 100%;

    @media only screen and (max-width: 750px) {
        height: 680vh;
    }
`

export const FirstText = styled.div`

    text-align: center;

    h3 {
        line-height: 26px;
        color: #1B88EF;
        font-size: 20px;
        
    }

    h1 {
        margin-top: 5vh;
        font-size: 40px;
    }

    p {
        margin-top: 5vh;
        opacity: 60%;
        font-size: 18px;
    }
`
export const Types = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const CompProd = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15%;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
        justify-content:center;

    }
` 
export const CompProdReverse = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 15%;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
        justify-content:center;

    }
`     

export const Image = styled.div`
    text-align: center;

    /* img {
        width: 64%;
        height: 73%;
    } */

    img {
        width: 100%;
    }
    
    /* @media only screen and (max-width: 750px) {
        position: relative;
        right: 560px;
        margin-top: 10%;
    } */

`

export const Text = styled.div`
    text-align: left;
    width: 100%;
    /* margin-left: 5%; */

    h2 {
        font-size: 36px;
    }

    p {
        margin-top: 3%;
        opacity: 60%;
        font-size: 21px;
    }

    h3 {
        margin-top: 5%;
    }

    a {
        text-decoration: none;
        color: #0B62E5;
    }

    @media only screen and (max-width: 750px) {
        margin-top: 7%;
    }

`

export const Image2 = styled.div`
    margin-top: 20%;
    margin-left: 10%;
    text-align: center;
/* 
    @media only screen and (max-width: 750px) {
        position: relative;
        right: 560px;
        top: -800px;
    } */

`

export const Text2 = styled.div`
    text-align: left;

    margin-top: 35%;
    margin-left: 15%;
    width: 85vh;

    h2 {
        font-size: 36px;
    }

    p {
        margin-top: 3%;
        opacity: 60%;
        font-size: 21px;
    }


    h3 {
        margin-top: 5%;
    }

    a {
        text-decoration: none;
        color: #0B62E5;
        
    }

    @media only screen and (max-width: 750px) {
        position: relative;
        top: 180px;
        right: 200px
    }
`


export const Image3 = styled.div`
    margin-top: 20%;
    margin-left: 10%;
    text-align: center;

    @media only screen and (max-width: 750px) {
        position: relative;
        right: 560px;
        top: -590px;
    }

`

export const Text3 = styled.div`
    margin-top: 30%;
    margin-right: 60%;
    text-align: left;
    width: 85vh;

    h2 {
        font-size: 36px;
    }

    p {
        margin-top: 3%;
        opacity: 60%;
        font-size: 21px;
    }


    h3 {
        margin-top: 5%;
    }

    a {
        text-decoration: none;
        color: #0B62E5;   
    }
    @media only screen and (max-width: 750px) {
        position: relative;
        top: -140%;
    }

`
export const Image4 = styled.div`
    margin-top: 20%;
    margin-left: 10%;
    text-align: center;

    @media only screen and (max-width: 750px) {
        position: relative;
        right: 560px;
        top: -1750px;
    }
`

export const Text4 = styled.div`
    text-align: left;

    margin-top: 35%;
    margin-left: 15%;
    width: 85vh;

    h2 {
        font-size: 36px;
    }

    p {
        margin-top: 3%;
        opacity: 60%;
        font-size: 21px;
    }


    h3 {
        margin-top: 5%;
    }

    a {
        text-decoration: none;
        color: #0B62E5;
    }

    @media only screen and (max-width: 750px) {
        /* position: relative; */
        /* top: -750px; */
        /* right: 200px */
    }
`

export const Depoimentos = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10%;
    text-align: center;
    flex-direction: column;
    h1 {
        width: 100%;
    }
    /* display: none; */
    /* @media only screen and (max-width: 750px) {
        height: 100px;
    } */

`



export const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 7%;

    @media only screen and (max-width: 1000px) {
        position: relative;
        flex-direction: column;
    }
`

export const Card3 = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:382px;
    height:382px;
    background: linear-gradient(201.03deg, #00EB84 7.49%, #00A75E 94.1%);
    border-radius: 16px;

    span {
        display:flex;
        align-items: center;
        justify-content: center;
        margin: 7%;
        position: relative;
        right: 80px;
        img {
            margin-right: 15%; 
        }
    }

    p {
        text-align: left;
        font-weight: 400;
        color: #ffffff;
        font-size: 21px;
    }

    h3 {
        color: #ffffff;
    }

    .Dep3 {
        border-radius: 20px;
    }

    @media only screen and (max-width: 1300px) { 
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:330px;
        height:330px;
        background: linear-gradient(201.03deg, #00EB84 7.49%, #00A75E 94.1%);
        border-radius: 16px;

        span {
            display:flex;
            align-items: center;
            justify-content: center;
            margin: 7%;
            position: relative;
            right: 80px;
            img {
                margin-right: 15%; 
            }
        }

        p {
            text-align: left;
            font-weight: 400;
            color: #ffffff;
            font-size: 18px;
        }

        h3 {
            color: #ffffff;
        }

        .Dep3 {
            border-radius: 20px;
        }
    }

    @media only screen and (max-width: 1100px) { 
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:300px;
        height:300px;
        background: linear-gradient(201.03deg, #00EB84 7.49%, #00A75E 94.1%);
        border-radius: 16px;

        span {
            display:flex;
            align-items: center;
            justify-content: center;
            margin: 7%;
            position: relative;
            right: 80px;
            img {
                margin-right: 15%; 
            }
        }

        p {
            text-align: left;
            font-weight: 400;
            color: #ffffff;
            font-size: 18px;
        }

        h3 {
            color: #ffffff;
        }

        .Dep3 {
            border-radius: 20px;
        }
    }

     @media only screen and (max-width: 1000px) { 
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:382px;
        height:382px;
        background: linear-gradient(201.03deg, #00EB84 7.49%, #00A75E 94.1%);
        border-radius: 16px;
        margin-bottom: 40px;


        span {
            display:flex;
            align-items: center;
            justify-content: center;
            margin: 7%;
            position: relative;
            right: 80px;
            img {
                margin-right: 15%; 
            }
        }

        p {
            text-align: left;
            font-weight: 400;
            color: #ffffff;
            font-size: 18px;
        }

        h3 {
            color: #ffffff;
        }

        .Dep3 {
            border-radius: 20px;
        }
    }

`

export const ImagemCard = styled.div`
    position: relative;
    bottom: 30px;
    right: 120px;
    img {
        padding: 0% 1% 1% 1%;
    }

    @media only screen and (max-width: 1100px) {
        padding: 9% 1% 1% 1%;
    }
    @media only screen and (max-width: 1000px) {
        padding: 0% 1% 1% 1%;
    }
`;
