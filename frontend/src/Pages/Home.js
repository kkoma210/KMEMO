import React from 'react';
import axios from 'axios';
import Plus from '../components/Plus';
import plusimg from '../images/plus.png';
import MainLayout from '../components/layout';
import {Container, Row} from 'react-bootstrap';
import styled from 'styled-components';
import oc from 'open-color';
import Header from '../components/Header';
import './Home.css';
import Btn from '../components/Buttons';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 50px;
    background: ${oc.teal[2]};
`;

const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 25px;
    cursor: pointer;
    align-self: right;
    background: ${oc.white};
    border-radius: 5px;
    &:hover{
        background: ${oc.gray[2]};
    }
    &:active{
        background: ${oc.gray[6]};
    }
`;

const SpaceBox = styled.div`
    width: 5px;
`;

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isPlusOpen: false,
            diaries: []
        }
    }

    openPlus = () => {
        this.setState({isPlusOpen: true});
    }

    closePlus = () => {
        this.setState({isPlusOpen: false});
        this.getAllDiary();
    }

    upGood = (id) => {
        console.log(id);
        axios.post('api/diary/good', {
            id: id,
            delta: 1
        })
        .then(() => this.getAllDiary())
    }

    getAllDiary() {
        axios.get('api/diary')
        .then(res => {
            console.log(res.data);
            this.setState({diaries: res.data});
        })
    }

    componentWillMount() {
        axios.get('api/diary')
        .then(res => {
            console.log(res.data);
            this.setState({diaries: res.data});
        })
    }

    render() {
        return(
            <MainLayout title="K-메모장">
                <table>
                    <tbody>
                        <tr className='trL'>
                            {
                            this.state.diaries.map ( diary =>
                                <td className='unit' key={diary._id}>
                                    <div className='inner'>
                                        <h2> {diary.Title.substring(0,6) + (diary.Title.length>6 ? '...' : '')} </h2>
                                        <h5> {diary.Author.substring(0,6) + (diary.Author.length>6 ? '...' : '')} </h5><br/><br/>
                                        <h4> {diary.Body.substring(0,60) + (diary.Body.length>60 ? '...' : '')} </h4><br/><br/>
                                        <h5> {diary.updatedAt.split('T')[0]}</h5>
                                        <Wrapper>
                                            <SpaceBox/>
                                            <BtnWrapper onClick={() => this.upGood(diary._id)}>
                                                <Btn gob={true} number={diary.Good}/>
                                            </BtnWrapper>
                                        </Wrapper>
                                    </div>
                                </td>
                                
                            )}
                            <td className='unit'>
                                <div className='inner' onClick={this.openPlus}>
                                    <img src={plusimg} className='png' alt='Logo' />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <main className='Diary'>
                    <Plus isOpen={this.state.isPlusOpen} close={this.closePlus} />
                </main>
            </MainLayout>
        );
    }
}

export default Home;