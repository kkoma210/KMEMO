import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

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
    color: ${oc.black[6]};
`;

const Space = styled.div`
    flex-grow: 1;
`;

const Header = ({children}) => {
    return(
        <Wrapper>
            <Logo>
                MyDiary
            </Logo>
            <Space />
            <Contents>
                {children}
            </Contents>
        </Wrapper>
    );
}

export default Header;