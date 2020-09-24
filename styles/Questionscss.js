import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const Text = styled.div`
    h1 {
        font-size: 48px;
    }
`
export const Box = styled.div`
    padding-top: 40px;
`

export const SubBox1 = styled.div`
    margin: 50px 0;
    text-align: left;
    width: 100%;
    height: 28vh;
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
        text-align: center;
        width: 90%;
    }
`