import styled from 'styled-components';

// export const Container = styled.div`
//     height: 400px;
//     width: 100vw;
//     overflow-x: hidden;

// `

export const Servico = styled.div`
    display: grid;
    grid-template-columns: 40% 70%;
    margin-top: 15%;
    height: 150vh;
    

    @media only screen and (max-width: 750px) {
        height: 250vh;
        /* margin-top: 20%; */
        grid-template-columns: 1fr;
}
`

export const DownServicos = styled.div`
    height: 454px;
    margin-top: 10vh;
    /* text-align: center; */
    background:  #00A75E;

    img {
        width: 100%;
        height: 100%;
    }

/* 
    h1 {
        background: rgba(f, f, f, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    } */
`

export const TextServico = styled.div`
    margin-left: 5%;
    text-align: left;
    /* margin-top: 5%; */

    h1 {
        font-size: 36px;
    }

    p {
        margin-top: 2.5%;
    }
`

export const ImgServico = styled.div`

    margin-left: 65%;
    /* margin-top: 5%; */
    width: 180px;
    height: 190px;    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E9EFF5;
    border-radius: 100%;

    @media only screen and (max-width: 750px) {
        position: relative;
        right: 60%;
        margin-bottom: 10%;
    }

`