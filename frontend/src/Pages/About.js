import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import './About.css';
import MainLayout from '../components/layout';


const Text = styled.div`
    display: flex;
    position: absolute;
    top: 300px;
    left: 300px;
    font-size: 3rem;
`;


class About extends React.Component {
    render() {
        return(
            <MainLayout title="About">
                
            </MainLayout>
        );
    }
}

export default About;