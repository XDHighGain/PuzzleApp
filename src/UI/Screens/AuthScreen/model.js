import React, { useState, useEffect } from "react";
import { urlString } from "../../../Networking/EndPoint";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { createHttpLink } from '@apollo/client/core';
import { NavigateToMainScreen } from "../../../Navigation/Navigation";

export const AuthScreenModel = () => {

    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const getToken = (response) => {
        try {
            let token = response.data.login.accessToken;
            if (token !== '')
                return token;
            return null;
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
            link,
        });
        const query = gql`query  {
            login(login:"${loginValue}", password:"${passwordValue}") {
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
                let token = getToken(res);
                if (token)
                    NavigateToMainScreen();
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
        setPasswordValue
    })
}