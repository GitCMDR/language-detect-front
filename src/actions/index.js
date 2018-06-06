import axios from 'axios';

const API_URL = "https://language-detect-heroku.herokuapp.com/api/v1/text";

export const IDENTIFY_TEXT = "IDENTIFY_TEXT";

export function identifyText(text) {
    const request = axios.post(API_URL, {
        text: text
    });

    console.log('Request:', request);

    return{
        type: IDENTIFY_TEXT,
        payload: request
    };
}