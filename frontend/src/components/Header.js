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

const Contents = styled.div`
    width: 1200px;
    height: 55px;
    padding-left: 2rem;
    padding-right: 2rem;
    align-items: center;
    display:flex;
    flex-direction: row;
`;

const Logo = styled.div`
    padding-left: 2rem;
    font-size: 1.5 rem;
    letter-spacing: 2px;
    color: ${oc.black};
    background: ${oc.teal[2]};
`;

const Spacer = styled.div`
    flex-grow: 1;
`;

const Header = () => {
    return(
        <Wrapper>
            <Logo>
                MyDiary
            </Logo>
            <Spacer/>
            <NavBar/>
        </Wrapper>
    );
}

export default Header;