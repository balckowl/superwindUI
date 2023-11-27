/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface heroBtnProps{
    name: string;
    link: string;
    color: string;
    bgColor: string;
}

interface heroProps {
    heroTitle: string;
    heroText: string;
    heroImage?: string;
    heroHeight?: string;
    heroBtn?: heroBtnProps;
}

const Hero = ({ heroTitle, heroText, heroImage = '/wind.png', heroBtn, heroHeight="600" }: heroProps) => {

    const heroStyle = css`
        position: relative;
        width: 100%;
        height: ${heroHeight}px;
        background: url(${heroImage});
        background-position: center center;
        background-attachment: fixed;

        p{
            margin: 0;
            padding: 0;
        }

        h2{
            margin: 0;
            padding: 0;
        }

        .filter{
            postion: absolute;
            top: 0;
            left: 0;
            z-index: 100;
            width: 100%;
            height: 600px;
            background: rgba(255,255,255,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .more{
                color: ${heroBtn?.color};
                background: ${heroBtn?.bgColor};
                padding: 10px 20px;
                border-radius: 10px;
            }

            h2{
                font-size: 60px;
            }

            p{
                margin-bottom: 15px;
            }

            a{
                color: white;
                text-decoration: none;
            }
        }

        @media(max-width: 576px){
            .filter{
                h2{
                    font-size: 40px;
                }

                p{
                    font-size: 13px;
                }
            }
        }
    `

    return (
        <div className="hero" css={heroStyle}>
            <div className="filter">
                <h2>{heroTitle}</h2>
                <p>{heroText}</p>
                {heroBtn && <div className="more"><a href={heroBtn.link}>{heroBtn.name}</a></div>}
            </div>
        </div>
    )
}

export { Hero }