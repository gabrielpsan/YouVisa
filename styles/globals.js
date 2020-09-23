
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  *, button, input {
      font-family: Roboto, sans-serif;
  }
  

  :root {
    --color-background: #EEEEEE;
    --color-text: #161B3D;
    --color-text-white: #FFFFFF;
    --color-text-subtitle: #999999;
    --color-post-none-img: #617CBE;
  }

`