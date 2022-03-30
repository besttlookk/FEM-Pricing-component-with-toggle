import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
  --col-grad-start:hsl(236, 72%, 79%);
  --col-grad-stop:hsl(237, 63%, 64%);
  --col-dark-gray-blue:hsl(232, 13%, 33%);
  --col-light-gray-blue:hsl(234, 14%, 74%);
  --col-gray-blue:hsl(233, 13%, 49%);
  --col-very-light-gray-blue:hsl(240, 78%, 98%);
  --col-primary:hsl(237, 63%, 64%);
  --col-secondary: hsl(233, 13%, 49%)


  --shadow:  0 3px 10px 5px hsla(237, 63%, 64%, .1);

  --font-primary: 'Montserrat', sans-serif;

  --text-2xl:font-size: 1.5rem; 

  --border-dark: 1px solid var(--col-light-gray-blue);
  --border-light: 1px solid var(--col-very-light-gray-blue)
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 100%;
}

body {
  min-height: 100vh;
  font-family: var(--font-primary);
  background-color: var(--col-very-light-gray-blue);
  font-weight:700;
  display: flex;
  flex-direction:column;
  overflow: hidden;
  background-image: url('/bg-top.svg'), url('/bg-bottom.svg') ;
  background-repeat: no-repeat;
  background-position: top 0 right 0, left 0 bottom 0;

}

a{
  text-decoration: none;
}


.btn-grad{
  background: linear-gradient(135deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%))

}


.btn{
  background: white;
}


`;
