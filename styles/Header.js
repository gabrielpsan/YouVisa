import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background: #00EB84;
    position: fixed;
    top: 0;
    right: 0;
    z-index:999;
    display: inline-block;

    
    @media screen and (max-width: 1050px) {
        background: #00A75E;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .subHeader {
        width: 80%;
        display: flex;
        justify-content: space-between;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .imgMenu {
            display: none;
    }

    .imgMenu:hover {
        cursor: pointer;
    }

    .logoHeader {
        width: 145px;
        height: 40px;
    }

    ul {
        flex-direction: row;
    }

    .header a {
        float: left;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 14px; 
        line-height: 25px;
        border-radius: 4px;
        color: white;
    }

    .header button a {
        padding: 10px 25px;
        color: #111;
    }

    .header-right {
        float: right;
    }

    .header button {
        width: 176px;
        height: 51px;
        border: none;
        border-radius: 7px;
        font-size: 14px;
        font-weight: 700;
        background: #fff;
    }

    .header button:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 1050px) {
        .header-right {
            display: none;
        }
    }



    @media screen and (max-width: 1050px) {
        .subHeader {
            width: 90%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .imgMenu {
                display: block;
                width: 30px;
                height: 35px;

            }
        }
    }


    @media screen and (max-width: 876px) {
        .header Link {
            float: none;
            display: block;
            text-align: left;
        }
        
        .header-right {
            float: none;
        }
    }
`



