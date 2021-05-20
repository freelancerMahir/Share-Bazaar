import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import { useHistory } from 'react-router-dom'


function Dashboard() {

	const history = useHistory();

	const starter = {
		Name:'',
		Email:'',
		ProfilePic:''
	}

	const signout = () => {
		sessionStorage.setItem("Name",starter.Name)
		sessionStorage.setItem("Email",starter.Email)
		sessionStorage.setItem("ProfilePic",starter.ProfilePic)
		history.push("/")
	}




	const topgainers = [
		{
			name:"BEXIMCO",
			by:"15%",
			type:"Miscellaneous"
		},
		{
			name:"BATBC",
			by:"15%",
			type:"Food and Allied"
		},
		{
			name:"ROBI",
			by:"15%",
			type:"Telecommunication"
		},
		{
			name:"RECKITTBEN",
			by:"15%",
			type:"Pharmaceuticals and Chemicals"
		},
		{
			name:"UNILEVERCL",
			by:"15%",
			type:"Food and Allied"
		},
		{
			name:"UNILEVERCL",
			by:"15%",
			type:"Food and Allied"
		},
	]
	const toplosers = [
		{
			name:"ABBANK",
			by:"15%",
			type:"Bank"
		},
		{
			name:"IFADAUTOS",
			by:"15%",
			type:"Engineering"
		},
		{
			name:"SUMITPOWER",
			by:"15%",
			type:"Fuel and Power"
		},
		{
			name:"BXPHARMA",
			by:"15%",
			type:"Pharmaceuticals and Chemicals"
		},
		{
			name:"GP",
			by:"15%",
			type:"Telecommunication"
		},
		{
			name:"UNILEVERCL",
			by:"15%",
			type:"Food and Allied"
		},
	]
	const mosttraded = [
		{
			name:"PRIMEBANK",
			poschange: 'lightgreen',
			by:"0.4%",
			type:"Bank"
		},
		{
			name:"IFIC",
			poschange: 'lightgreen',
			by:"0.2%",
			type:"Engineering"
		},
		{
			name:"SOUTHEAST",
			poschange: 'lightgreen',
			by:"1.4%",
			type:"Fuel and Power"
		},
		{
			name:"FIRSTSBANK",
			poschange: 'red',
			by:"0.6%",
			type:"Pharmaceuticals and Chemicals"
		},
		{
			name:"NCCBANK",
			poschange: 'lightgreen',
			by:"1.5%",
			type:"Telecommunication"
		},
		{
			name:"BEXINMCO",
			poschange: 'red',
			by:"3.2%",
			type:"Food and Allied"
		},
	]
	const [gainers,setGainers] = useState(true);
	return (
		<div>
			<Container>
				<Nav>
					<InnerNav>
						<Logo src="./images/spw.svg"/>
						<Anchors>
							<a>Share Bazaar</a>
							<a>Analysis</a>
							<a>Your Porftolio</a>
							<a>About Us</a>
						</Anchors>
						<Search placeholder="Search Stock"/>
						<SignOut style={{marginLeft: '100px'}}>
							<AvatarImg src={sessionStorage.getItem("ProfilePic")}/>
							<DropDown>
					              <span onClick={signout}>Sign out</span>
					        </DropDown>
				        </SignOut>
					</InnerNav>
				</Nav>
				<Portfoliogrowth>
					<Portfoliograph>
						<AddToQueueIcon style={{
							color:"#fff",
							fontSize: '80px',
						}}/>
						<h2>Track your portfolio by adding more stocks</h2>
						<h3>Currently you don't have any Portfolio Stocks</h3>
						<AddPortfolioStock>Add Portfolio Stock</AddPortfolioStock>
					</Portfoliograph>
				</Portfoliogrowth>
				<MarketCover>
					<CurrentMarket>
						<TopGainers>
							<h3>Top Gainers</h3>
							<TableTalk>
								{topgainers.map((ele) => (
									<TableElements>
										<TableElementsSub>
											<CompanyName>{ele.name}</CompanyName>
											<Industry>{ele.type}</Industry>
										</TableElementsSub>
										<Percentage style={{color:"lightgreen"}}>{ele.by}</Percentage>
									</TableElements>
								))}
							</TableTalk>
						</TopGainers>
						<TopGainers>
							<h3>Top Losers</h3>
							<TableTalk>
								{toplosers.map((ele) => (
									<TableElements>
										<TableElementsSub>
											<CompanyName>{ele.name}</CompanyName>
											<Industry>{ele.type}</Industry>
										</TableElementsSub>
										<Percentage style={{color:'red'}}>{ele.by}</Percentage>
									</TableElements>
								))}
							</TableTalk>
						</TopGainers>
						<TopGainers>
							<h3>Most Traded</h3>
							<TableTalk>
								{mosttraded.map((ele) => (
									<TableElements>
										<TableElementsSub>
											<CompanyName>{ele.name}</CompanyName>
											<Industry>{ele.type}</Industry>
										</TableElementsSub>
										<Percentage style={{color:ele.poschange}}>{ele.by}</Percentage>
									</TableElements>
								))}
							</TableTalk>
						</TopGainers>
					</CurrentMarket>
				</MarketCover>
			</Container>
		</div>
	)
}


const Percentage = styled.p`
	margin-right: 10px;
`


const Industry = styled.p`
	margin-top: 1px;
	font-size: 13px;
	margin-left: 10px;
	color: silver;
	@media (max-width: 1000px){
		font-size: 10px;
	}
`

const CompanyName = styled.p`
	margin: 10px;
	margin-bottom: 0;
	font-size: 16px;
`



const TableTalk = styled.div`
	margin-left: 12px;
	margin-right: 12px;
`

const TableElements = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 50px;
	background-color: black;
	padding-top: 4px;
	padding-bottom: 4px;
	border: 1px solid gray;
`

const TableElementsSub = styled.div`
	position: relative;
`

const DropDown = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  width: 100px;
  opacity: 0;
  color: white;
  cursor: pointer;
  &:hover {
  	background-color: gray;
  }
`;





const SignOut = styled.div`
	height: 60%;
	&:hover {
		${DropDown} {
	      opacity: 1;
	      transition-duration: 1s;
	    }
	}
`



const MarketCover = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 0px;
`

const TopGainers = styled.div`
	width: 30%;
	height: 100%;
	background-color: #26003eff;
	margin: 20px;
	border-radius: 15px;
	color: white;

	h3 {
		text-align: center;
	}
`


const CurrentMarket = styled.div`
	display: flex;
	width: 90%;
	height: 24rem;
	background-color: ;
	justify-content: center;
	align-items: center;
`


const AvatarImg = styled.img`
	height: 100%;
	border-radius: 50%;
`


const AddPortfolioStock = styled.button`
	padding: 15px;
	width: 45%;
	color: #f9f9f9;
	background-color: #0036e5;
	font-size: 18px;
	border: 1px solid transparent;
	border-radius: 4px;
	&:hover {
		background-color: #0483ee;
		cursor: pointer;
	}
`

const Portfoliograph = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 70%;
	height: 80%;
	background-color: #26003eff;
	border-radius: 15px;
	h3, h2 {
		color: white;
		text-align: center;
	}

	h2 {
		margin-bottom: 5px;
	}
`

const Portfoliogrowth = styled.div`
	display: flex;
	justify-content: center;
	padding: 50px;
	width: 100%;
	height: 90vh;
	padding-bottom: 0;
	margin-bottom: 0;
`

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;
	font-family: Roboto, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
	a {
		text-decoration: none;
		font-size: 1.1rem;
		color: rgb(38, 46, 58);
		font-weight: 500;
		&:hover {
			color: rgb(13, 110, 241);
			cursor: pointer;
		}
	}
	a,button {
		transition: all 0.3s ease 0s;
	}
`

const Nav = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 10vh;
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
		color: #fff;
		@media (max-width: 1000px){
			font-size: 10px;
		}
	}
	height: 100%;
	@media (max-width: 830px) {
		a {
			display: none;
		}
	}
`

const Search = styled.input`
	width: 20%;
	font-size: 16px;
	padding: 5px;
	&:focus {
		border: 2px solid silver;
		outline: none;
		background-color: transparent;
	}
	transition: all 0.3s ease 0s;
`

export default Dashboard