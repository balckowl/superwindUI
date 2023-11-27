/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react';

interface menuListType {
    name: string | number;
    link: string;
}

interface brandNameType {
    name: string | number;
    link: string;
}

interface headerProps {
    brandName: brandNameType;
    bgColor?: string;
    color?: string;
    menuList: menuListType[];
    height?: string;
    hamImage?: string;
}

const Header = ({ brandName, bgColor='#fff', menuList, color="#000", height='80', hamImage="/ham.svg"}: headerProps) => {

    const [isActive, setIsActive] = useState<boolean>(false)

    const headerStyle = css`

        background-color: ${bgColor};

        .container{
            height: ${height}px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        },
        h1 a{
            color: ${color}
        },
        ul{
            display :flex;
            align-items: center;
            gap: 10px;

            li a{
                color: ${color}
            }
        }, 

        .menu{
            position: relative;
            z-index: 1000;
            display: flex;
            gap: 15px;
        }

        .ham{
            display: none;
            width: 20px;
            height: 20px;
        }
          
        .menu.isactive{
            display: flex;
        }

        @media(max-width: 576px){
            .menu{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100svh;
                background-color: #eee;
                align-items: center;
                justify-content: center;
                display: none;
            }
            
            .ham{
                position: relative;
                z-index: 2000;
                display: block;
            }
        }
    `

    return (
        <header css={headerStyle}>
            <div className="container">
                <h1><a href={brandName.link}>{brandName.name}</a></h1>
                <nav>
                    {menuList ? (
                        <ul className={`menu ${isActive ? 'isactive' : ''}`}>
                            {menuList.map((menuItem, index) => (
                                <li key={index}><a href={menuItem.link}>{menuItem.name}</a></li>
                            ))}
                        </ul>
                    ) : (<></>)}
                    <div className='ham' onClick={() => setIsActive(!isActive)}>
                        <img src={hamImage} alt="" />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export { Header }