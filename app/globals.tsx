
"use client";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
  :root {
    --dark-purple: #221C3D;
    --primary-purple: #8162FF;
    --background-black: #141518;
    --secondary-black: #1A1B1F;
    --gray-01: #26272B;
    --gray-02: #4E525B;
    --gray-03: #838896;
    --white: #FFFFFF;
    --red: #EF4444;
    --dark-red: #2F1F1F;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: var(--background-black);
    color: var(--white);

    .container{
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 1.5rem 1.875rem;
    }
  }

  .mantine-Input-input{
    color: var(--white)
  }
`

export const GlobalStyles = () => {
  return <Globals />;
};