import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import NavBar from './NavBar';

const Wrapper = styled.div`
    position: fixed;
    height: 60px;
    width: 100%;
    top:0%;
    display:flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background: ${oc.teal[2]};
`;

const Logo = styled.div`
    padding-left: 2rem;
    font-size: 1.5 rem;
    letter-spacing: 2px;
    color: ${oc.black};
    background: ${oc.teal[2]};
`;

const Header = () => {
    return(
        <Wrapper>
            <Logo>
                KMEMO
            </Logo>
            <NavBar/>
        </Wrapper>
    );
}

export default Header;