/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface cardListType {
    image: string;
    title: string;
    text: string;
}

interface cardSectionProps {
    cardList: cardListType[];
    sectionTitle: string;
    bgColor?: string;
}

const CardSection = ({ cardList, sectionTitle, bgColor="#fff" }: cardSectionProps) => {

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
        }

        .card-text-box{
            padding: 10px;
            background-color: #fff;
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
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export { CardSection }