import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    overflow-x: hidden;
`

export const FooterBox = styled.footer`
  min-width: 100vw;
  min-height: 100vh;
  border-top: 1px solid #eaeaea;
  display: flex;
  background-color: #212026;


  a {
    display: flex;
    align-items: center;
    
  }

  .ulFooter { 
    margin-top: 63px;
    margin-left: 9%;
    height: 55%;
    width: 12vw;
  }

  .ulFooter2 { 
    margin-left: 0% !important;
    margin-top: 10vh !important;
  }

  .ulFooter3 { 
    width: 200px !important;
    a {
      margin-right: 7%;
    }
  }


  li {
    margin-bottom: 23px;
    color: white;
    list-style-type: none;
    /* width: 150px; */
    padding: 8px;
    opacity: 80%;
    font-size: 18px;
    align-items: center;
    display: flex;
  }

  img {
    margin-right: 7%;
  }

  li:first-child {
    color: #03B6A6;
  }

  li:hover {
    cursor: pointer;
    text-decoration: underline;
  }

`

// export const Text = styled.footer`
//   margin-top: 32%;
//   margin-right: 300px;
// `

