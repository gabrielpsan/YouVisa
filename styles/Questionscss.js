import styled from 'styled-components';

export const Container = styled.div`
    width: 800px;
    height: 210vh;
    text-align: center;
`

export const Text = styled.div`
    h1 {
        font-size: 48px;
    }
`
export const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`

export const SubBox1 = styled.div`
    text-align: left;
    margin-top: 7%;
    width: 800px;
    height: 187px;
    border: 0.5px solid #E5E5E5;
    border-radius: 18px;
    -webkit-box-shadow: 10px 21px 28px 5px rgba(0,0,0,0.19);
    -moz-box-shadow: 10px 21px 28px 5px rgba(0,0,0,0.19);
    box-shadow: 10px 21px 28px 5px rgba(0,0,0,0.19);

    h3 {
        margin-top: 4%;
        margin-left: 4.5%;
    }

`
export const Hiden = styled.div`

        margin-left: 4.5%;
        margin-top: 3%;
    p {
        margin-top: 1%;
        opacity: 60%;
    }
    img {
        width: 725px;
    }
`