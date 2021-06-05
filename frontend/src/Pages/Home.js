import React from 'react';
import axios from 'axios';
import Plus from '../components/Plus';
import plusimg from '../images/plus.png';
import MainLayout from '../components/layout';
import styled from 'styled-components';
import oc from 'open-color';
import './Home.css';
import Btn from '../components/Buttons';
import Star from '../components/Star';
import Trash from '../components/Trash';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 50px;
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

    changeStar = (id) => {
        axios.post('api/diary/star', {
            id: id
        })
        .then(() => this.getAllDiary())
    }

    trashDiary = (id) => {
        axios.delete(`api/diary/${id}`)
        .then(() => this.getAllDiary())
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
                            this.state.diaries.sort(function(a,b){
                                var value;
                                if(a.Star==true){
                                    if(b.Star==true) value = 0;
                                    else value = -1;
                                }
                                else{
                                    if(b.Star==true) value = 1;
                                    else value = 0;
                                }
                                return(value);
                            }).map ( diary =>
                                <td className='unit' key={diary._id}>
                                    <div className='inner'>
                                        <Wrapper>
                                            <BtnWrapper onClick={() => this.changeStar(diary._id)}>
                                                <Star light={diary.Star}/>
                                            </BtnWrapper>
                                            <BtnWrapper onClick={() => this.trashDiary(diary._id)}>
                                                <Trash/>
                                            </BtnWrapper>
                                        </Wrapper>
                                        <h2> {diary.Title.substring(0,10) + (diary.Title.length>10 ? '...' : '')} </h2>
                                        <h5> {diary.Author.substring(0,10) + (diary.Author.length>10 ? '...' : '')} </h5><br/><br/>
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
                                <div className='inner' onClick={() => this.openPlus()}>
                                    <img src={plusimg} className='png' alt='Logo' />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <main className='Diary'>
                    <Plus isOpen={this.state.isPlusOpen} close={() => this.closePlus()} />
                </main>
            </MainLayout>
        );
    }
}

export default Home;