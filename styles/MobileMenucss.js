import styled from 'styled-components';

export const Container = styled.div`
    display: none;

    @media only screen and (max-width: 750px) {
        display: block;
        width: 100%;
        height: 15%;
        background: #E5E5E5;    
        position: fixed;
        bottom: 0;
    }
`

export const Menu = styled.div `

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 28px 0;

    @media only screen and (max-width: 750px) {
        
    }
`
