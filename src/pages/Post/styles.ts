import { Link } from "react-router-dom";
import { styled } from "styled-components";
import ReactMarkdown from "react-markdown";
import "prismjs/themes/prism.css";

export const PostContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 868px;
`;

export const InfoHeader = styled.section`
    height: 160px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;
    padding: 20px 20px 0 20px;
    margin-top: -90px;
    max-width: 868px;

    div {
        display: flex;
        justify-content: space-between;
    }

    h3 {
        margin-top: 20px;
    }

    ul {
        display: flex;
        justify-content: start;
        gap: 2rem;
        list-style: none;
        margin-top: 0.5rem;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.blue};
    cursor: pointer;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme["base-span"]};

    label {
        display: flex;
        color: ${props => props.theme["base-label"]};
    }
`;

export const IssueBodyContainer = styled.section`
    padding: 40px 32px;
`;

export const GithubMarkdownBody = styled(ReactMarkdown)`
    color: ${props => props.theme["base-text"]};

    h3 {
        color: ${props => props.theme.blue};
        font-size: 1rem;
        font-weight: bold;
        margin-top: 24px;
    }

    pre {
        background: ${props => props.theme["base-post"]};
        padding: 1rem;
    }

    code {
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
    }

    /* Estilos para os tokens do Prism */
    .token.comment,
    .token.prolog {
        color: #6272a4; /* Cor dos comentários */
    }

    .token.punctuation {
        color: #f8f8f2; /* Cor da pontuação */
    }

    .token.selector,
    .token.tag {
        color: #ff79c6; /* Cor das tags */
    }

    .token.function {
        color: #50fa7b; /* Cor das funções */
    }

    /* Outras regras de estilo para diferentes tokens */
`;
