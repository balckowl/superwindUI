/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface buttonProps {
    txt: string;
}

const Button = ({ txt }: buttonProps) => {

    const buttonStyle = css`
        display: inline-block;
        padding: 10px 20px;
        background-color: navy;
        color: white; 
        border-radius: 10px;
    `
    return (
        <div css={buttonStyle}>{txt}</div>
    )
}

export { Button }