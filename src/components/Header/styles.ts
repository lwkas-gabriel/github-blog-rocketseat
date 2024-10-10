import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 18.5rem;
    width: 100%;
    gap: 20px;
    background: ${props => props.theme["base-profile"]};
    padding: 48px 0 120px 0;


    img{
        width: 40px;
        width: 45px;
    }

    h1{
        font-weight: 400;
        font-size: 24px;
        font-family: Coda, sans-serif;
        color: ${props => props.theme.blue};
    }
`