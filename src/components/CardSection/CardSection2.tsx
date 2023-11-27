/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface snsListType {
    name: string;
    link: string;
    icon: string;
}

interface cardListType {
    image: string;
    title: string;
    text: string;
    snsList?: snsListType[];
}

interface cardSectionProps {
    cardList: cardListType[];
    sectionTitle: string;
    bgColor?: string;
}

const CardSection2 = ({ cardList, sectionTitle, bgColor="#fff" }: cardSectionProps) => {

    const cardSectionStyle = css`

        padding-top: 150px;
        padding-bottom: 200px;
        background-color: ${bgColor};

        h3,h4{
            margin: 0;
            padding: 0;
        }

        p{
            margin:0;
            padding: 0;
        }

        .section-title{
            font-size: 35px;
            margin-bottom: 15px;
        }

        .card-list{
            display: grid;
            gap: 20px;
            grid-template-columns: 1fr 1fr 1fr;
        }

        .card{
            box-shadow: 4px 6px 22px -5px #e3e3e3;
            background-color: #fff;
            padding: 20px;
        }

        .card-img-box{
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
        }

        .card-img-box img{
            display: block;
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        .card-text-box{

            margin-bottom: 10px;
            text-align: center;

            h4{
                font-size: 19px;
            }

            p{
                font-size: 14px;
                color: #aaa;
            }
        }

        .card-sns-box{

            display: flex;
            justify-content: center;
            gap: 10px;

            li{
                .twitter{
                    background-color: #00acee;
                }

                .instagram{
                    background: linear-gradient(to right, rgba(247, 207, 0, 0.7),rgba(246, 37, 2, 0.7) 45%,rgba(182, 47, 82, 0.7) 75%,rgba(113, 58, 166, 0.7));
                }

                .github, .threads, .x{
                    background: black;
                }
            }

            li a{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                border-radius: 10px;
                color: white;
                background-color: #eee;
            }

            li a img{
                width: 18px;
                height: 18px;
            }
        }

        @media(max-width: 576px){
            
            padding-block: 100px;
          
            .card-list{
                grid-template-columns: 1fr;
            }
        }

        @media(min-width: 577px) and (max-width: 767px){
            .card-list{
                grid-template-columns: 1fr 1fr;
            }
        }
    `

    return (
        <section css={cardSectionStyle}>
            <div className="container">
                <h3 className='section-title'>{sectionTitle}</h3>
                <div className='card-list'>
                    {
                        cardList.map((card, index) => (
                            <div key={index} className='card'>
                                <div className='card-img-box'>
                                    <img src={card.image} alt="" />
                                </div>
                                <div className='card-text-box'>
                                    <h4>{card.title}</h4>
                                    <p>{card.text}</p>
                                </div>
                                <ul className="card-sns-box">
                                    {card.snsList?.map((sns, index) => (
                                        <li key={index}>
                                            <a href={sns.link} className={sns.name}>
                                                <img src={sns.icon} alt={sns.name} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export { CardSection2 }