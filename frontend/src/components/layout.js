import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Header from './Header';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 65px;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    background: ${oc.white};
`;

const TitleWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: auto;
    
`;

const Title =styled.div`
    font-size: 3rem;
    letter-spacing: 2px;
    font-weight: 300;
    color: ${oc.black};
`;

const Contents = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    text-align: center;
`;

const MainLayout = ({title, children}) => {
    return(
        <Wrapper>
            <Header/>
            <Main>
                <TitleWrapper>
                    <Title>{title}</Title>
                </TitleWrapper>
                <Contents>
                    {children}
                </Contents>
            </Main>
        </Wrapper>
    );
}

export default MainLayout


