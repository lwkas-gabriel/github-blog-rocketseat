import styled from "styled-components";

export const BlogContainer = styled.main`
    margin-top: -90px;
    display: flex;
    justify-content: center;
`

export const Profile = styled.section`
    width: 70%;
    height: 230px;
    display: flex;
    align-items: center;
    padding: 0 32px;
    gap: 2rem;
    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;
    
    img{
        width: 148px;
        height: 148px;
        border-radius: 8px;
    }
`

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
                }
            }
        }
`