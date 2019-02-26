import styled, {
	createGlobalStyle,
	css
} from "styled-components";

const section = {
    bg: '#fffae9',
    title: '#401ef8',
    fontColor: '#63595a'
}
const table = {
    thColor: '#fef6e9',
    fontColor: '#645a5b',
    thBg: '#401ef8',
    oddBg: '#eef0ff',
    evenBg: '#FFF'
}


export const GlobalStyle = createGlobalStyle `
	* {
		font-family: 'PingFangSC-Regular', 'Microsoft YaHei', sans-serif;
	}
	body {
		margin: 0; 
		-webkit-font-smoothing: antialiased; 
		-moz-osx-font-smoothing: grayscale; 
		text-align: center;   
		background: #efcc5d;
	}
	a, button {
		outline: none;
		text-decoration: none;
	}
	.break-on-desktop {
		display: block;
		@media(max-width:767px){
			display: none;
		}
	}
	.break-on-mobile {
		display: none;
		@media(max-width:767px){
			display: block;
		}
	}
`

const sizes = {
  desktop: 1024,
  tablet: 991,
  phone: 576
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${sizes[label]}px) {
			${css(...args)}
		}
	`;
  return acc;
}, {});

//const toVw = w => `${((w / 375) * 100).toFixed(2)}vw`;

export const Wrapper = styled.div`
	background: url('assets/clf-bg.png') no-repeat;
	background-position: top center;
	background-size: 100%;
	padding-top: 41%;
	position: relative;
	padding-bottom: 80px;
	${media.tablet`
		background-size: 100%;
	`}
    ${media.phone`
		padding: 92% 0 55px;
		background: url('assets/clf-bg-small@2x.png') no-repeat;
		background-size: 100%;
	`}
`;

export const Main = styled.main`
	padding: 6px;
	border-radius: 10px;
	width: 985px;
	margin: 0 auto;
	font-size: 22px;
	line-height: 1.73;
	${media.tablet`
		width: 90%;
	`}
`;

export const Section = styled.section`
	width: 940px;
	margin: 0 auto;
	text-align: left;
	position: relative;
    font-size: 14px;
    margin-bottom: 75px;
	padding: 30px 45px;
    box-sizing: border-box;
	background: ${section.bg};
    border-radius: 20px;
	line-height: 1.5;
    letter-spacing: normal;
    color: ${section.fontColor};
    z-index: 0;
    ${props => props.index === 2 ? css`
        .row {
            width: calc((100% - 10px) / 5);
        }
    ` : css `
        .row {
            width: calc((100% - 15px) / 8);
        }
    `
    };
	${media.tablet`
        padding: 15px 10px;
		width: 100%;
	`}
    ${media.phone`
        margin: 0 auto 50px;
	`}
    h2 {
        position: absolute;
        left: 0;
        top: -25px;
        margin: 0;
        width: 100%;
        height: 50px;
        background: ${props => props.index === 1 ? 'url("assets/title-red@2x.png")' : 'url("assets/title-red-2@2x.png")'} no-repeat center;
        background-size: contain;
        ${media.phone`
            background: ${props => props.index === 1 ? 'url("assets/title-small-red@2x.png")' : 'url("assets/title-small-red-2@2x.png")'} no-repeat center;
            background-size: 65%;
            top: -28px;
        `}
    }
	h3 {
        position: relative;
        display: block;
        margin: 20px 0 10px;
        text-align: center;
		font-weight: bold;
        color: ${section.title};
        z-index:1;
        ${media.phone`
            margin: 10px 0 0;
        `}
        span {
            display: inline-block;
            position: relative;
            width: 440px;
            background-color: ${section.bg};
            font-size: 25px;
            line-height: 32px;
            &::before, &::after {
                content: "";
                position: absolute;
                top: 44%;
                left: 0;
                width: 6px;
                height: 6px;
                border-radius: 6px;
                background-color: ${section.title};
            }
            &::after {
                left: inherit;
                right: 0;
            }
            ${media.phone`
                padding: 0 15px;
                width: auto;
                font-size: 14px;
            `}
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 100%;
            height: 2px;
            background-color: ${section.title};
            z-index: -1;
            ${media.phone`
                height: 1px;
            `}
        }
	}
	p {
		margin: 15px 0;
        z-index:1;
        ${media.phone`
            margin-bottom: 20px;
            font-size: 13px;
        `}
    }
    .date {
        margin-bottom: 10px 15px;
        font-size: 15px;
        color: ${section.title};
        text-align: center;
        ${media.phone`
            margin: 0;
            font-size: 13px;
        `}
    }
`;

export const Table = styled.div` 
    display: inline-block;
    width: 100%;
    border-radius: 15px;
    color: ${table.fontColor};
    overflow: hidden;
    .row div {
        height: 50px;
        font-size: 15px;
        text-align: center;
        line-height: 50px;
        &:nth-child(odd) {
            background-color: ${table.oddBg};
        }
        &:nth-child(even) {
            background-color: ${table.evenBg};
        }
        &:first-child {  
            background-color: ${table.thBg};
            color: ${table.thColor};
        }
        & + div {
            border-top: ${section.bg};
        }
        ${media.phone`
            display: inline-block;
            width: calc((100% - 2px) / 2);
            & + div {
                border-top: 0;
                border-left: 2px solid #fef6e9;
            }
            &:nth-child(odd) {
                background-color: inherit;
                color: ${table.fontColor};
            }
        `}
    }
    .row{
        display: inline-block;
        background-color: ${table.evenBg};
        & + div {
            border-left: 2px solid #fef6e9;
        }
        ${media.phone`
            display: block;
            width: 100%;
            & + .row div {
                border-top: 2px solid #fef6e9;
            }
            &:nth-child(odd) div {
                background-color: ${table.oddBg};
            }
            &:first-child div {
                background-color: ${table.thBg};
                color: ${table.thColor};
            }
        `}
    }
`;

export const ListWrapper = styled.div`
    width: 940px;
	margin: 0 auto 30px;
	text-align: left;
	position: relative;
    font-size: 12px;
	padding: 40px 45px;
    box-sizing: border-box;
	background: #efcc5d;
    border: 1px solid #401ef8;
	line-height: 1.5;
    letter-spacing: normal;
    color: ${section.title};
    ${media.tablet`
        width: 100%;
    `}
    ${media.phone`
        padding: 10px 20px;
    `}
    h2 {
        position: relative;
        top: -56px;
        margin: 0 auto;
        width: 430px;
        height: 30px;
        background: #efcc5d url('assets/title-text@2x.png') no-repeat center;
        background-size: contain;
        text-align: center;
        &::before, &::after {
            content: "";
            position: absolute;
            top: 44%;
            left: 0;
            width: 6px;
            height: 6px;
            border-radius: 6px;
            background-color: ${section.title};
            }
        &::after {
            left: inherit;
            right: 0;
        }
        ${media.phone`
            padding: 0 30px;
            width: 100%;
            max-width: 90px;
            height: auto;
            background-size: 70%;
            top: -26px;
        `}
    }
    ul {
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.63;
        letter-spacing: normal;
        padding: 0;
        margin: -30px 0 0;
        ${media.tablet`
            margin: 10px;
        `}
        ${media.phone`
            margin: -15px 0 0;
            font-size: 13px;
        `}
        li {
            margin: 10px 0;
            list-style: none;
        }
    }
`;

export const Button = styled.a`
    display: block;
    margin: 0 auto;
    background: url('assets/clf-btn-normal.png') no-repeat;
    width: 140px;
    height: 40px;
    border: 0;
    cursor: pointer;
`;