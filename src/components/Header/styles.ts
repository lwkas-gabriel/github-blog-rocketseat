import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 18.5rem;
    width: 100%;
    gap: 20px;
    background: ${props => props.theme["base-profile"]};
    padding-top: 48px;


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

export const Profile = styled.section`
    height: 230px;
    display: flex;
    align-items: center;
    padding: 0 32px;
    gap: 2rem;
    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;
    padding: 20px;
    margin-top: 50px;

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
`;