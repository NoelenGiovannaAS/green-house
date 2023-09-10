import { createGlobalStyle } from 'styled-components'
import { Reset } from './reset'

export const GlobalStyle = createGlobalStyle`

    ${Reset}

    :root{
        --text-color: #202020;
    }

    body {
        background-image: url('lines-bg.svg'), url('yellow-shape.svg');
        background-repeat: no-repeat;
        background-position: right top;
        background-size: 100%, 120vh;
        margin: 0 62vh;
        @media (max-width: 720px) {
            margin: 0;

        }
    }

    p, span, input, h3, h4, h5, button{
        font-family: 'Montserrat', sans-serif;
        color: var(--text-color);
    }

    h1, h2, strong{
        font-family: 'Elsie Swash Caps', sans-serif;
    }
`
