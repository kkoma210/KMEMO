import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';

const Spacer = styled.div`
    width: 1px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${oc.teal[2]};
`;

const NavBar = () => {
    return(
        <Wrapper>
            <Link to='/'><button>Home</button></Link>
            <Spacer/>
            <Link to='/about'><button>About</button></Link>
        </Wrapper>
    );
}

export default NavBar;