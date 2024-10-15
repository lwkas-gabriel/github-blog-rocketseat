import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlogContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 868px;
    width: 100%;
`;

export const Profile = styled.section`
    height: 230px;
    display: flex;
    align-items: center;
    padding: 0 32px;
    gap: 2rem;
    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;
    padding: 20px;
    margin-top: -90px;

    max-width: 868px;
    
    img{
        width: 148px;
        height: 148px;
        border-radius: 8px;
    }
`;

export const ProfileHeader = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        color: ${props => props.theme["base-title"]};


        h3{
            font-size: 24px;
            font-weight: bold;
            line-height: 130%;
        }

        a{ 
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: bold;
            color: ${props => props.theme.blue};
            gap: 5px;
            text-decoration: none;
            cursor: pointer;
        }

        @media (max-width: 595px){
            flex-direction: column;
            align-items: start;
            gap: 0;
        }
`;

export const ProfileInfo = styled.div`
        display: flex;
        flex-direction: column;

        p{
            color: ${props=> props.theme["base-text"]};
            margin-bottom: 24px;
        }

        ul{
            display: flex;
            gap: 24px;
            list-style: none;

            li{
                display: flex;
                align-items: center;
                gap: .5rem;
                color: ${props => props.theme["base-subtitle"]};

                label{
                    color: ${props => props.theme["base-labal"]};

                    .icon-size{
                        width: 18px;
                        height: 18px;
                    }
                }
            }

            @media (max-width: 595px){
                flex-direction: column;
                gap: 0;
            }
        }

        @media (max-width: 595px){
            font-size: .7rem;

            p{
                margin-bottom: .5rem;
            }
        }
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
    justify-content: center;
    margin-top: 48px;
    gap: 1rem;
    margin-bottom: 120px;
`;

export const Post = styled(Link)`
    max-width: 416px;
    min-width: 200px;
    height: 260px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border-radius: 10px;
    padding: 32px;
    cursor: pointer;
    text-decoration: none;

    background-color: ${props => props.theme["base-post"]};

    p{
        color: ${props => props.theme["base-text"]};
    }

    &:hover{
        transition: border-color .7ms;
        border: 1px solid ${props => props.theme["base-span"]};
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

export const PostText = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4; /* Altere o número de linhas desejadas */
    line-clamp: 4; /* Compatibilidade */
    max-height: 100px; /* Defina uma altura máxima conforme o número de linhas */
`;