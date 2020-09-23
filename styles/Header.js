import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 80px;
    background: #00EB84;
    position: fixed;
    top: 0;
    right: 0;
    z-index:999;
    display: inline-block;

    .header {
        margin-left: 115px;
        margin-right: 112px;
        padding: 13px 10px;
    }

    .logoHeader {
        margin-top: 7px;
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

    .header-right {
        float: right;
    }

    @media screen and (max-width: 876px) {
        .header a {
            float: none;
            display: block;
            text-align: left;
        }
        
        .header-right {
            float: none;
        }
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
`
