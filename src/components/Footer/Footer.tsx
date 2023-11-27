/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface footerProps {
    brandName: string;
    bgColor?: string;
    color?: string;
}

const Footer = ({ brandName, bgColor="white", color="black" }: footerProps) => {

    const footerStyle = css`
        p{
            margin: 0;
            padding: 0;
        }

        .copyright{
            font-size: 13px;
            padding-block: 20px;
            background: ${bgColor};
            text-align: center;

            p{
                color: ${color};
            }
        }
    `

    return (
        <footer css={footerStyle}>
            <div className="copyright">
                <p>Copyright &copy; 2023 {brandName} All Right Reserved.</p>
            </div>
        </footer>
    )
}

export { Footer }