import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import './About.css';
import MainLayout from '../components/layout';
import kmemo from '../images/kmemo.png';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    height: 500px;
    border-radius: 20px;
    box-shadow:  inset -7px -7px 8px #eeeff3, inset 7px 7px 8px #f8f9fd;
`;

const Spacer = styled.div`
    width: 100%;
    height: 15px;
    background: ${oc.teal[2]};
`;

const Text1 = styled.div`
    font-size: 3rem;
    font-family: sans-serif;
    color: ${oc.black};
`;

const Text2 = styled.div`
    font-size: 1.5rem;
    font-family: sans-serif;
    color: ${oc.black};
    background: ${oc.gray[1]};
`;

const Content = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 400px;
    width: 1000px;
    align-items: center;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 600px;
`;

const Img = styled.img`
    margin-left: 30px;
    height: 300px;
    width: 300px;
    border-radius: 5px;
`;

class About extends React.Component {
    render() {
        return(
            <MainLayout title="About">
                <Wrapper>
                    <Spacer/>
                    <Text1>KMEMO로 간단하게 생각이나 할일을 정리하세요!</Text1>
                    <Spacer/>
                    <Content>
                        <Img src={kmemo}/>
                        <TextBox>
                            <Spacer/>
                            <Text2>+ 버튼을 눌러 메모를 생성하세요</Text2>
                            <Spacer/>
                            <Text2>star 버튼을 눌러 중요 메모를 설정하세요</Text2>
                            <Spacer/>
                            <Text2>삭제 버튼을 눌러 메모를 삭제하세요</Text2>
                            <Spacer/>
                        </TextBox>
                    </Content>
                </Wrapper>
            </MainLayout>
        );
    }
}

export default About;