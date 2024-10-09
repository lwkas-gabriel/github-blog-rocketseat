import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface Profile{
    name: string,
    avatarUrl: string,
    profileUrl: string,
    bio: string,
    company: string,
    login: string,
    location: string,
    followers: number,
}

interface GithubProviderProps{
    children: ReactNode;
}

interface GithubContextType{
    profile: Profile;
    //setProfileId: (id: string) => void;
    //fetchProfile: (id: string) => Promise<void>;
    //createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubProvider({children}: GithubProviderProps){
     
    const [profile, setProfile] = useState<Profile>({} as Profile);
     
    //const [profileId, setProfileId] = useState('');

    const profileId = "lwkas-gabriel";

    async function fetchProfile(profileId: string){
        const { data } = await api.get(`users/${profileId}`);

        const {
            name,
            avatar_url,
            html_url,
            bio,
            company,
            login,
            location,
            followers
          } = data;

        setProfile({name, avatarUrl: avatar_url, profileUrl: html_url, bio, company, login, location, followers});
        //console.log(profile);
    }

    useEffect(() => {
        fetchProfile(profileId);
    }, [profileId]);

    return (
        <GithubContext.Provider value={{
            profile,
            //setProfileId,
        }}>
            {children}
        </GithubContext.Provider>
    );
}