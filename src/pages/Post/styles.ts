import { Link } from "react-router-dom";
import { styled } from "styled-components";


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

    div{
        display: flex;
        justify-content: space-between;
    }

    h3{
        margin-top: 20px;
    }

    ul{
        display: flex;
        justify-content: start;
        gap: 2rem;
        list-style: none;
        margin-top: .5rem;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    gap: .5rem;
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
    gap: .5rem;
    color: ${props => props.theme["base-span"]};

    label{
        display: flex;
        color: ${props => props.theme["base-labal"]};
    }
`