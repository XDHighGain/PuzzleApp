import React from "react";
import { urlString } from "../../../Networking/EndPoint";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { createHttpLink } from '@apollo/client/core';
import { NavigateToMainScreen } from "../../../Navigation/Navigation";

interface IModelFields {
    textInput: string,
    handler: () => void,
}

interface ILoginData {
    __typename: string,
    accessToken: string | undefined,
    refreshToken: string
}

interface ILogin {
    login: ILoginData
}

interface ITokenModel {
    data: ILogin,
    loading: boolean,
    networkStatus: number
}

export const AuthScreenModel = () => {
    const [loginValue, setLoginValue] = React.useState<IModelFields["textInput"]>('');
    const [passwordValue, setPasswordValue] = React.useState<IModelFields["textInput"]>('');

    const handleLoginChange = (newValue: IModelFields["textInput"]) => setLoginValue(newValue)
    const handlePasswordChange = (newValue: IModelFields["textInput"]) => setPasswordValue(newValue)

    const getToken = (response: ITokenModel) => {
        try {
            let token = response?.data?.login?.accessToken;
            if (token !== undefined && token.length > 0)
                return token;
            return undefined;
        }
        catch (e) {
            console.error('Ошибка получения токена');
            return null;
        }
    }

    const handleSubmit = () => {
        const link = createHttpLink({
            uri: urlString,
            credentials: 'same-origin'
        });

        const client = new ApolloClient({
            cache: new InMemoryCache(),
            uri: urlString,
        });
        const query = gql`query  {
            login(login: "${loginValue}", password: "${passwordValue}") {
              ... on TokenPair {
                __typename
                accessToken
                refreshToken
              }
              ... on ErrorWithFields {
                __typename
                fields
                status
              }
            }
          }`;
        client.query(
            { query: query }
        ).then(
            res => {
                console.log(`login: "${loginValue}", password: "${passwordValue}"`, res)
                let token = getToken(res);
                if (token !== undefined) {
                    console.log('Token recieved - ', token)
                    NavigateToMainScreen();
                }

            }
        ).catch(
            e => console.log('error', e)
        )
    }

    return ({
        loginValue,
        passwordValue,
        handleSubmit,
        setLoginValue,
        setPasswordValue,
        handleLoginChange,
        handlePasswordChange,
    })
}