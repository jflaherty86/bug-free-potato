import React, { Component } from "react"; 
import Hero from "../components/Hero/Hero";
import TextContainer from "../components/TextContainer/TextContainer";
import Footer from "../components/Footer/Footer";
import SkillGraph from "../components/SkillGraph/SkillGraph";
import Timeline from "../components/Timeline/Timeline";
import "./Home.css";

export default class Home extends Component {

    render() {
        return (
            <>
            <Hero
            title="Developer. Artist"
            subtext= "Mountain Woman. Moon child." />
            <div className="main container">
                <TextContainer 
                    className="s10 offset-s1"> 
                    <h1 className="center mint-text">Howdy!</h1>
                    <div className="heading purple-text">
                    <h4 className="center">My name is Jacquelyne, but you can call me Jacq.</h4>
                    </div>
                    <p className="center"> 
                    
                        I am a:
                        <br />
                    Full-stack MERN developer working in the Denver Area. 
                    <br />
                    Open-minded creative with great problem solving skills. 
                    <br /> 
                    Dogged debugger, obsessive tester-of-things. 
                    <br />
                    A patient, empathetic, team-oriented person.

                    </p>
                    <div className="row">
                        <div className="col s12 m6">
                        <div className="heading purple-text">
                            <h4><i className="material-icons heading-icons">grade</i>
                            <br /> Skills</h4>
                        </div>
                        <SkillGraph />

                        </div>
                        <div className="col s12 m6">
                        <div className="heading purple-text">
                            <h4><i className="material-icons heading-icons">timeline</i> 
                            <br />History</h4>
                        </div>
                            <Timeline />
                        </div>
                    </div>
                    </TextContainer>
            </div>
            <Footer />
            </>
        )
    }
}