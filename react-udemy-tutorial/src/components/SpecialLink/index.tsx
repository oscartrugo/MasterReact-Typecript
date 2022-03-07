import React from 'react';

interface SpecialLinkProps {
    href: string;
    navigate():void;
}

export const SpecialLink: React.FC<SpecialLinkProps> = props => {
    return (
        <button onClick={props.navigate}>{props.children}</button>
    )
}