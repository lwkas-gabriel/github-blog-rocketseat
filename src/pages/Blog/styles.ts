import styled from "styled-components";

export const BlogContainer = styled.main`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 868px;
    width: 100%;
`;

export const SearchForm = styled.form`
    width: inherit;
    margin-top: 72px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    div{
        display: flex;
        justify-content: space-between;

        h4{
            color: ${props => props.theme["base-subtitle"]};
            font-size: 18px;
        }

        label{
            color: ${props => props.theme["base-span"]};
            font-size: 14px;
        }
    }

    input{
        width: 100%;
        padding: 12px 16px;
        border-radius: 6px;
        background-color: ${props => props.theme["base-input"]};
        border: 1px solid ${props => props.theme["base-border"]};
        color: ${props => props.theme["base-text"]};

        &::placeholder{
            color: ${props => props.theme["base-labal"]};
        }
    }
`;

export const PostList = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-top: 48px;
    gap: 1rem;
    margin-bottom: 246px;
`;

export const Post = styled.div`
    width: 416px;
    height: 260px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border-radius: 10px;
    padding: 32px;

    background-color: ${props => props.theme["base-post"]};

    p{
        color: ${props => props.theme["base-text"]};
    }
`;

export const PostHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h3{
        font-size: 20px;
        color: ${props => props.theme["base-title"]}
    }

    span{
        font-size: 14px;
        color: ${props => props.theme["base-span"]}
    }
`;