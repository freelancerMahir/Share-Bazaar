import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

function Starter() {
	const history = useHistory()
	const [Search,setSearch] = useState("")
	return (
		<LoginSection>
			<Nav>
				<InnerNav>
					<Logo src="./images/spw.svg"/>
					<Anchors>
						<a>Market</a>
						<a>News</a>
						<a>About Us</a>
					</Anchors>
					<Signup>
						<SignupButton onClick={() => {
							history.push("/auth");
							sessionStorage.setItem("UserAuthState","Sign Up")
						}}>Sign Up To Connect >></SignupButton>
						<LoginAnchor onClick={() => {
							history.push("/auth");
							sessionStorage.setItem("UserAuthState","Login")
						}}>Login</LoginAnchor>
					</Signup>
				</InnerNav>
			</Nav>
			<FirstSection>
				<OtherBg></OtherBg>
				<FirstSectionContent>
					<FirstSectionHeader>
						Make <span>Intelligent</span> Decisions using Share Bazaar
					</FirstSectionHeader>
					<FirstSectionSearchBar>
						<FirstSectionSearchBarTitle>
							Search any stock
						</FirstSectionSearchBarTitle>
						<FirstSectionSearchInput value={Search} onChange={event => {
							setSearch(event.target.value)
						}} placeholder="Analyze any stocks for free" />
					</FirstSectionSearchBar>
					<FirstSectionUnderSearchBar>
						<p>Popular Stocks: </p>
						<FirstSectionPopularStocks>
							<a>Beximco</a>
							<a>BAT</a>
							<a>Bxpharma</a>
							<a>Robi</a>
							<a>Grammenphone</a>
						</FirstSectionPopularStocks>
					</FirstSectionUnderSearchBar>
				</FirstSectionContent>
				<Background>
					<BgImageOne id="BackgroundImage" src="./images/BGImageTwo.png"/>
				</Background>
			</FirstSection>
		</LoginSection>
	)
}

const LoginSection = styled.div`
	overflow-y: hidden;
	overflow-x: hidden;
	font-family: Roboto, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
	a {
		text-decoration: none;
		font-size: 1.1rem;
		color: #fff;
		font-weight: 500;
		&:hover {
			color: rgb(13, 110, 241);
			cursor: pointer;
		}
	}
	a,button {
		transition: all 0.3s ease 0s;
	}
	background-color: #26003eff;
	scrollbar-width: none;
`

const FirstSection = styled.div`
	display: flex;
	width: 100%;
	height: 556px;
	margin-left: auto;
	@media (max-width: 1120px) {
		height: 80vh;
	}
`
const Background = styled.div`
	flex:0.7;
	@media (max-width: 1120px) {
    	display: none;
	}
`

const BgImageOne = styled.img`
	width: 100%;
	height: 100%;
	margin-left: auto;
`

const OtherBg = styled.div`
	display: block;
	flex: 0.3;
	height: 100%;
	background-color: #26003eff;
`

const Nav = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20vh;
	background-color: #26003eff;
`

const InnerNav = styled.div`
	display: flex;
	width: 95%;
	height: 95%;
	align-items: center;
`

const Logo = styled.img`
	flex: 0.25;
	width: 150px;
	height: 35px;
`

const Anchors = styled.div`
	margin-left: 20px;
	display: flex;
	flex: 0.8;
	align-items: center;
	a {
		margin-right: 25px;
		margin-left: 25px;
	}
	height: 100%;
	@media (max-width: 830px) {
		a {
			display: none;
		}
	}
`

const Signup = styled.div`
`
const SignupButton = styled.button`
	color: black;
	padding: 15px;
	background-color: #fff;
	border: 1px solid silver;
	&:hover {
		border-color: rgb(13, 110, 241);;
		cursor: pointer;
	}
	@media (max-width: 375px) {
		font-size: 9px;
	}
`
const LoginAnchor = styled.a`
	margin-left: 10px;
	@media (max-width: 830px) {
		display: none;
	}
`

const FirstSectionContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: transparent;
	width: 485px;
	height: 445px;
	position: absolute;
	left: 78px;
	margin-top: 45px;
	// top: 180px;
	@media (max-width: 1120px) {
    	position: relative;
    	background-color: #26003eff;
    	width: 700px;
    	height: 600px;
    	left: 8%;
    	top: 20%;
	}
`

const FirstSectionHeader = styled.p`
	position: relative;
	font-size: 3.1rem;
	font-weight: 700;
	color: #fff;
	span {
		color: rgb(13, 110, 241);
	}
	padding: 0;
	margin: 0;
	@media (max-width: 768px) {
		font-size: 2.5rem;
	}
	@media (max-width: 425px) {
		font-size: 2.2rem;
	}
	@media (max-width: 375px) {
		font-size: 1.6rem;
	}
`

const FirstSectionSearchBar = styled.div`
`

const FirstSectionSearchBarTitle = styled.p`
	font-size: 22px;
	color: #fff;
`

const FirstSectionSearchInput = styled.input`
	padding: 10px;
	margin-top: 0px;
	width: 80%;
	&:focus {
		outline: none;
		border: 2px solid silver;
		transition: all 0.3s ease 0s;
		background: rgba(13, 110, 241, 0.05);
	}
	@media (max-width: 830px) {
		text-align: center;
	}
	color: #fff;
`

const FirstSectionUnderSearchBar = styled.div`
	display: flex;
	align-items: center;
	p {
		// color: rgba(38, 46, 58, 0.3);
		color: #fff;
		font-size: 15px;
		@media (max-width: 830px) {
			display: none;
		}
	}
	margin-top: 5px;
`

const FirstSectionPopularStocks = styled.div`
	display: flex;
	align-items: center;
	a {
		margin-left: 10px;
		font-size: 15px;
		@media (max-width: 830px) {
			font-size: 13px;
			margin-left: 9px;
		}
	}
	@media (max-width: 830px) {
		position: relative;
		left: -2.5%;
	}
	@media (max-width: 768px) {
		position: relative;
		left: 0%;
		margin-top: 10px;
	}
	@media (max-width: 375px) {
		position: relative;
		left: -1%;
		margin-top: 10px;
	}
	@media (max-width: 375px) {
		a {
			font-size: 10px;
		}
		left: 1.5%;
	}
`


export default Starter