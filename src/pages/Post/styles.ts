import { Link } from "react-router-dom";
import { styled } from "styled-components";
import ReactMarkdown from "react-markdown";
//import "prismjs/themes/prism.css";

export const PostContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 868px;
`;

export const InfoHeader = styled.section`
    display: flex;
    height: 160px;
    width: 100%;
    flex-direction: column;
    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;
    padding: 20px 20px 0 20px;
    margin-top: -90px;

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
        margin-top: 2rem;
    }

    pre {
        background: ${props => props.theme["base-post"]};
        padding: 1rem;
        margin-top: 1.5rem;
    }

    code {
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: "Fira Code", sans-serif;
    }

    .token.comment,
    .token.block-comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: #6272a4; /* Cor para os comentários */
        font-style: italic;
    }

    .token.punctuation {
        color: ${props => props.theme["base-text"]}; /* Cor para pontuação */
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: #6AD445; /* Cor para números e valores booleanos */
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: #6AD445; /* Cor para strings */
    }

    .token.operator,
    .token.entity,
    .token.url,
    .token.variable {
        color: #f8f8f2; /* Cor para operadores e variáveis */
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
        color: #80ABD6; /* Cor para palavras-chave */
    }

    .token.function {
        color: #66d9ef; /* Cor para funções */
    }

    .token.regex,
    .token.important {
        color: #ffb86c; /* Cor para regex */
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }

    .token.italic {
        font-style: italic;
    }
`;

