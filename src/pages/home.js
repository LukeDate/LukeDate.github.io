import React from 'react';
import '../App.scss';
import styled from 'styled-components';



const Home = () => {

    const Button = styled('a')`
        color: #e8e8e8;
        width: 200px;
        height: 50px;
        border: 1px solid #e8e8e8;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin-top: 20px;
    `;

    const Header = styled('div')`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        color: #e8e8e8;
        padding: 40px 60px; 
    `;

    const Col = styled('div')`
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: ${props => props.center ? 'center' : 'left'};
        text-align: ${props => props.center ? 'center' : 'left'};
        align-content: space-between;
    `;

    const List = styled('ul')`
        list-style: none;
        margin-top: 0;
        padding: 0;
        > li {
            display: flex;
            justify-content: space-between;
        }
    `;

    return (
        <Header className="App-header">
            <Col>
            <h1 style={{marginTop: '20px'}}>Luke Date</h1>
            <p style={{marginBottom: '0'}}>Experienced Developer with a demonstrated history of working in the computer software industry. Skilled in ReactJS, Fullstack Web Development, Customer Service and Cloud Applications. Strong physical sciences professional graduated from University of Southampton. Currently based in Vancouver, British Columbia.</p>
            </Col>
            <Col center>
                <Button href="/resume/Luke-Date-resume.pdf" target="_blank">CV/Resume</Button>
                <h3>Contact Details: </h3>
                <List>
                    <li>
                        <span>Mob: </span> <span>+1-778-238-2059</span>
                    </li>
                    <li>
                        <span>Email: </span><span>luke.date@hotmail.com</span>
                    </li>
                    <li>
                        <a style={{textDecoration: 'none', color: '#e8e8e8'}} href="https://linkedin.com/in/luke-date-6b7226b6/">LinkedIn</a>
                    </li>
                    <li>
                        <a style={{textDecoration: 'none', color: '#e8e8e8'}} href="https://www.instagram.com/lukusbrutus/">Instagram</a>
                    </li>
                </List>
            </Col>
      </Header>
    )
}

export default Home;