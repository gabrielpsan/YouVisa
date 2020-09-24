import styled from 'styled-components';

export const Container = styled.div`
    /* width: 100vw;
    height: 100vh; */
    overflow-x: hidden;
`

export const DownVistos = styled.div`
    height: 454px;
    margin-top: 10vh;
    /* text-align: center; */
    background:  #00A75E;
    img {
        width: 100%;
        height: 100%;
    }
`

export const MenuVistos = styled.div`
    width: 70vw;
    height: 126px;
    text-align: center;
    margin-left: 15%;
    background: #015FA2;
    border-radius: 24px;
    position: relative;
    top: -10vh;

    li {
        list-style-type: none;
        padding: 0 4vw;
        font-size: 24px;
        color: white;
        cursor: pointer;
        top: 7vh;

        @media only screen and (max-width: 750px) {
            /* height: 250vh; */
            grid-template-columns: 1fr;
            font-size: calc(14px + (8/1200) * 100 * 0.5vw);
            top: 8vh;
            padding: 0 1.4vw;

        }
    }



    ul li {
        position: relative;
        /* top: 7.5vh; */
        display: inline;
    }

    li:hover {
        text-decoration: underline;
    }
`

//  ------------------ --------------------

export const Turismo = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 40% 70%;
    margin-top: 150px;
    /* height: 10vh; */
    text-align: center;

    @media only screen and (max-width: 750px) {
        height: 130vh;
        /* margin-top: 40%; */
        grid-template-columns: 95vw;
        position: relative;
        margin-bottom: -100px;
    }
`

export const TextTurismo = styled.div`
    margin-left: 5%;
    text-align: left;
    width: 100%;
    height: 50vh;

    h1 {
        font-size: 36px;
    }

    p {
        /* margin-top: 2.5%; */
    }

    @media only screen and (max-width: 750px) {
        position: relative;
        top: -80px;

    }
    
`

export const ImgTurismo = styled.div`

    margin-left: 50%;
    margin-top: 0;
    width: 206px;
    height: 206px;    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E9EFF5;
    border-radius: 100%;

    @media only screen and (max-width: 750px) {
        position: relative;
        right: 45%;
        /* margin-bottom: 5%; */
    }

`
// ------------------- END TURISMO -------------------

export const Eletronico = styled.div`
    /* display: none; */
    display: grid;
    grid-template-columns: 400px 700px;
    margin-top: 15%;
    height: 1000px;
    text-align: center;

`

export const ImgEletronico = styled.div`
    margin-left: 45%;
    margin-top: 0;
    width: 206px;
    height: 206px;    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E9EFF5;
    border-radius: 100%;
`

export const TextEletronico = styled.div`
    text-align: left;

`