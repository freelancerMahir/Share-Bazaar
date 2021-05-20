import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Starter from './Starter'
import { useHistory } from 'react-router-dom'
import { auth, provider } from '../firebase';


function Signup() {
	const history = useHistory();

	const [AuthState,setAuth] = useState("Sign Up")
	const [Email,setEmail] = useState("")
	const [Pass,setPass] = useState("");
	const [Conpass,setConpass] = useState("")

	useEffect(() => {
		setAuth(sessionStorage.getItem("UserAuthState"))
	}, [])

	const handleAuth = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				sessionStorage.setItem("Name",result.user.displayName)
				sessionStorage.setItem("Email",result.user.email)
				sessionStorage.setItem("ProfilePic",result.user.photoURL)
				history.push("/dashboard")
			})
			.catch((error) => {
				alert(error.message);
			});
	}
	return (
		<Section>
			<Starter/>
			<Container>
				<Content>
					<CrossButton onClick={() => {
						history.goBack();
					}}>X</CrossButton>
					<SignupSection>
						<h3>Continue to Share Bazaar</h3>
						<h5>The Complete Analytics tool for Stock Market</h5>
						<DataSection>
							<Username value={Email} placeholder="Email Id" type="email" onChange={(event) => {
								setEmail(event.target.value)
							}} />
							<Password value={Pass} placeholder="Password" type="password" onChange={(event) => {
								setPass(event.target.value)
							}} />
							{
								AuthState === "Sign Up" ? (
									<ConfirmPassword value={Conpass} placeholder="Confirm Password" type="password" onChange={(event) => {
										setConpass(event.target.value)
							}} />
								) : ""
							}
							<SignupButton onClick={() => {console.log(Email,Pass,Conpass)}} >{AuthState}</SignupButton>
						</DataSection>
						<h2>Or</h2>
						<SignupwithGoogle onClick={handleAuth}>Continue with Google</SignupwithGoogle>
						{
							AuthState === "Sign Up" ? (
								<h4>Already have an account? <a onClick={() => {setAuth("Login")}}>Sign In</a></h4>
							) : <h4>Don't have an account? <a onClick={() => {setAuth("Sign Up")}}>Sign Up</a></h4>
						}
					</SignupSection>
				</Content>
			</Container>
		</Section>
	)
}
const Section = styled.div`
	font-family: Roboto, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
	div {
		filter: blur(5px);
		@media (max-width: 768px){
			display: none;
		}
	}
`


const CrossButton = styled.button`
	position: absolute;
	left: 95%;
	color: white;
	background-color: transparent;
	border: 1px solid transparent;
	font-size: 35px;
	top: 5%;
	cursor: pointer;
	@media (max-width: 768px){
		display: none;
	}
`

const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: rgba(38, 46, 58, 0.4);
	z-index: 9999;
`
const Content = styled.section`
	display: flex;
	@media (max-width: 768px){
		width: 100%;
		height: 100%;
	}
	width: 40%;
	height: 80%;
	background-color: #fff;
`

const SignupSection = styled.section`
	width: 100%;
	height: 100%;
	background-color: #26003eff;
	text-align: center;
	h3 {
		font-size: 1.5rem;
		margin-bottom: 10px;
		color: #fff;
	}
	h5 {
		margin-top: 0;
		font-size: 1rem;
		color: #fff;
		font-weight: lighter;
		letter-spacing: 1.6px;
		margin-bottom: 50px;
	}
	h2 {
		margin: 20px;
		color: #fff;
	}
	h4 {
		color: #fff;
		a {
			&:hover {
				color: rgb(13, 110, 241);
				cursor: pointer;
				transition: all 0.3s ease 0s;
			}
		}
	}
`
const ImageSection = styled.section`
	width: 60%;
	height: 100%;
`

const Image = styled.img`
	width: 100%;
	height: 100%;
`

const Cover = styled.section`
	position: absolute;
	width: 48%;
	height: 80%;
	background-color: rgba(0, 0, 0, 0.6);
`

const Username = styled.input`
	padding: 10px;
	margin-bottom: 10px;
	font-size: 16px;
	&:focus {
		outline: none;
		border: 2px solid rgb(13, 110, 241);
		transition: all 0.3s ease 0s;
	}
`
const Password = styled.input`
	padding: 10px;
	margin-top: 10px;
	font-size: 16px;
	margin-bottom: 10px;
	&:focus {
		outline: none;
		border: 2px solid rgb(13, 110, 241);
		transition: all 0.3s ease 0s;
	}
`

const ConfirmPassword = styled.input`
	padding: 10px;
	margin-top: 10px;
	font-size: 16px;
	&:focus {
		outline: none;
		border: 2px solid rgb(13, 110, 241);
		transition: all 0.3s ease 0s;
	}
`

const DataSection = styled.section`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: 0 auto;
`

const SignupwithGoogle = styled.button`
	padding: 15px;
	width: 75%;
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

const SignupButton = styled.button`
	width: 50%;
	margin: 0 auto;
	margin-top: 15px;
	padding: 5px;
	font-weight: bolder;
	border: 1px solid transparent;
	background-color: silver;
	border-radius: 4px;
	&:hover {
		background-color: gray;
		cursor: pointer;
	}
`
export default Signup