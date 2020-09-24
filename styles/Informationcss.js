import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 8%;
    background: white;
    width: 100%;
    height: 100vh;
    /* margin-top: 13%; */
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 750px) {
        height: 210vh;
        flex-direction: column;
    }

`
export const Imagens = styled.div`
    padding-left: 40px;
    display: inline;
    width: 50%;

    @media only screen and (max-width: 750px) {
        padding-left: 0px;
        width: 100%;
    }
    

    img {
        padding: 10px;
        width: 50%;
        border-radius: 16px;
    }

    img:nth-child(2n){
        position: relative;
        top: -60px;
    }

    
     /* {
        position: relative;
        margin-top: 100px;
    } */
`
export const TextSide = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 60px;
    width: 50%;
    @media only screen and (max-width: 750px) {
        width: 100%;
    }
    h2 {
        font-size: 20px;
        color: #1B88EF;
    }

    h1 {
        margin-top: 7vh;
        font-size: 40px;
    }

    p{
        font-weight: 400px;
        margin-top: 7vh;
        font-size: 18px;
        color: 242424;
        opacity: 80%;
    }

    h3 {
        opacity: 80%;
        margin-top: 7vh;
        color: 242424;
    }

    ul {
        margin-top: 7vh;
    }

    li {
        padding: 8px;
        opacity: 80%;
        font-size: 18px;
        list-style-type: none;
        align-items: center;
        display: flex;
    }

    img {
        margin-right: 19px;
    }
`
