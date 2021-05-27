import React from 'react'
import styled from 'styled-components'

function Suggestions() {

	return (
		<div>
			<Suggestion>
				<SuggestedStock>
					<div style={{display:"flex",justifyContent:"space-between",}}>
						<CompanyName>BEXIMCO</CompanyName>
					</div>
					<FullCompanyName>Bangladesh Export and Import Company</FullCompanyName>
					<Statistics>
						<CurrentValue>Latest Price: 78.4 ৳</CurrentValue>
						<Change>Change: 0.5%</Change>
						<Volume>Volume: 1500000</Volume>
					</Statistics>
					<AddToPtCover>
						<AddToPortfolio>Add</AddToPortfolio>
					</AddToPtCover>
				</SuggestedStock>
				<SuggestedStock>
					<div style={{display:"flex",justifyContent:"space-between",}}>
						<CompanyName>BEXIMCO</CompanyName>
					</div>
					<FullCompanyName>Bangladesh Export and Import Company</FullCompanyName>
					<Statistics>
						<CurrentValue>Latest Price: 78.4 ৳</CurrentValue>
						<Change>Change: 0.5%</Change>
						<Volume>Volume: 1500000</Volume>
					</Statistics>
					<AddToPtCover>
						<AddToPortfolio>Add</AddToPortfolio>
					</AddToPtCover>
				</SuggestedStock>
				<SuggestedStock>
					<div style={{display:"flex",justifyContent:"space-between",}}>
						<CompanyName>BEXIMCO</CompanyName>
					</div>
					<FullCompanyName>Bangladesh Export and Import Company</FullCompanyName>
					<Statistics>
						<CurrentValue>Latest Price: 78.4 ৳</CurrentValue>
						<Change>Change: 0.5%</Change>
						<Volume>Volume: 1500000</Volume>
					</Statistics>
					<AddToPtCover>
						<AddToPortfolio>Add</AddToPortfolio>
					</AddToPtCover>
				</SuggestedStock>
				<SuggestedStock>
					<div style={{display:"flex",justifyContent:"space-between",}}>
						<CompanyName>BEXIMCO</CompanyName>
					</div>
					<FullCompanyName>Bangladesh Export and Import Company</FullCompanyName>
					<Statistics>
						<CurrentValue>Latest Price: 78.4 ৳</CurrentValue>
						<Change>Change: 0.5%</Change>
						<Volume>Volume: 1500000</Volume>
					</Statistics>
					<AddToPtCover>
						<AddToPortfolio>Add</AddToPortfolio>
					</AddToPtCover>
				</SuggestedStock>
			</Suggestion>
			<MobileSuggestion>
				<MSuggestionsCover>
					<MobileSuggestionStocks style={{marginTop: '0.8vh'}}>
						<CompanyName>BATBC</CompanyName>
						<AddToPortfolio>ADD</AddToPortfolio>
					</MobileSuggestionStocks>
					<MobileSuggestionStocks style={{borderTop: '1px solid gray'}}>
						<CompanyName>GP</CompanyName>
						<AddToPortfolio>ADD</AddToPortfolio>
					</MobileSuggestionStocks>
					<MobileSuggestionStocks style={{borderTop: '1px solid gray'}}>
						<CompanyName>ROBI</CompanyName>
						<AddToPortfolio>ADD</AddToPortfolio>
					</MobileSuggestionStocks>
					<MobileSuggestionStocks style={{borderTop: '1px solid gray'}}>
						<CompanyName>RECKITTBEN</CompanyName>
						<AddToPortfolio>ADD</AddToPortfolio>
					</MobileSuggestionStocks>
				</MSuggestionsCover>
			</MobileSuggestion>
		</div>
	)
}


const MSuggestionsCover = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`


const MobileSuggestionStocks = styled.div`
	width: 100%;
	height: 6vh;
	background-color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;

	h3 {
		margin: auto 0;
		margin-left: 10px;
	}

`



const MobileSuggestion = styled.div`
	display: none;
	background-color: #26003eff;
	width: 85%;
	height: 30vh;
	@media (max-width: 768px){
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	margin: 0 auto;
	margin-bottom: 65px;
	border-radius: 15px;
`



const AddToPtCover = styled.div`
	display: flex;
	justify-content: flex-end;
`

const AddToPortfolio = styled.button`
	padding: 10px;
	width: 28%;
	color: #f9f9f9;
	background-color: #0036e5;
	font-size: 13px;
	border: 1px solid transparent;
	border-radius: 4px;
	margin-right: 10px;
	&:hover {
		background-color: #0483ee;
		cursor: pointer;
	}

	@media (max-width: 1110px){
		padding: 5px;
		font-size: 10px;
		width: 24%;
	}
`

const Industry = styled.span`
	color: rgb(151,151,151);
	font-size: 15px;
	padding-top: 22px;
	padding-right: 15px;

	@media (max-width: 1110px){
		font-size: 12px;
	}
`


const CurrentValue = styled.p`
`

const Change = styled.p`
`

const Volume = styled.p`
`


const Statistics = styled.div`
	color: gray;
	margin-left: 15px;

	@media (max-width: 1110px){
		font-size: 9px;
	}
`

const CompanyName = styled.h3`
	color: rgb(13, 110, 241);
	margin-left: 15px;
	font-weight: 500;
	margin-bottom: 0;
	@media (max-width: 1110px) {
		font-size: 13px;
	}
`

const FullCompanyName = styled.p`
	color: silver;
	margin-left: 15px;
	margin-top: 10px;
	margin-right: 15px;
	@media (max-width: 1110px){
		font-size: 10px;
	}
`

const SuggestedStock = styled.div`
	width: 30%;
	height: 90%;
	background-color: rgb(27, 34, 45);
	background-color: black;
	border: 1px solid gray;
	border-radius: 15px;
	margin-left: 10px;
	margin-right: 10px;
`

const Suggestion = styled.div`
	display: flex;
	align-items: center;
	width: 90%;
	height: 45vh;
	margin: 0 auto;
	background: #26003eff;
	margin-bottom: 75px;
	border-radius: 15px;
	@media (max-width: 1110px){
		height: 30vh;
	}

	@media (max-width: 768px){
		display: none;
	}
`

export default Suggestions