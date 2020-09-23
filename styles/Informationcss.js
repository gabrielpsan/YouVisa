import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 8%;
    background: white;
    width: 100vw;
    height: 100vh;
    margin-left: 10%;
    /* margin-top: 13%; */
    display: grid;
    grid-template-columns: 1fr 1fr;

`
export const Imagens = styled.div`

    img {
        width: 280px;
        height: 283px;
        border-radius: 16px;
        margin-right: 3vw;   
        margin-bottom: 5vh;
    }

    li {
        list-style-type: none;
        display: inline;

    }
    
     /* {
        position: relative;
        margin-top: 100px;
    } */
`
export const TextSide = styled.div`
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
