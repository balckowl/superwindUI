/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface buttonProps {
    txt?: string;
    link: string;
    bgColor?: string;
    color?: string;
}

const Button = ({ txt = 'ボタン', link, bgColor = '#6495ED', color = 'white' }: buttonProps) => {

    const buttonStyle = css`
        a{
            display: inline-block;
            padding: 10px 20px;
            background-color: ${bgColor};
            border-radius: 20px;
            color: ${color}; 
        }
    `
    return (
        <div css={buttonStyle}>
            <a href={link}>{txt}</a>
        </div>
    )
}

export { Button }