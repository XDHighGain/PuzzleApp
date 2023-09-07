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
        console.log('link', link)
        const client = new ApolloClient({
            cache: new InMemoryCache(),
            uri: urlString,
        });
        //console.log('client', client)
        //NavigateToMainScreen();

        const query = gql`query  {
            login(login: "geratest", password: "123123") {
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
                console.log('res', res)
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