import React from 'react';
import { NewsFeedProps } from './interface';

export const NewsFeed: React.FC<NewsFeedProps> = ({ click }) => {
    return (
        <>
            <h1> NewsFeed Component </h1>
            <h2> Click: {click} </h2>
        </>
    )
}