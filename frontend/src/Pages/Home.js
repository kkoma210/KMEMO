import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import './Home.css'
import axios from 'axios';
import Plus from '../components/Plus';
import plusimg from '../images/plus.png';

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
        return (
          <div className='container'>
          <div className='App'>
            <h1> 메모장 </h1><br/><br/>
            <table>
                <tbody>
                     <tr className='trList'>
                        {
                        this.state.diaries.map ( diary =>
                            <td className='cell' key={diary._id}>
                                <div className='inner'>
                                    <h2> {diary.Title} </h2>
                                    <h5> {diary.Author} </h5><br/><br/>
                                    <h4> {diary.Body} </h4><br/>
                                </div>
                            </td>
                        )}
                        <td className='cell'>
                            <div className='inner' onClick={this.openPlus}>
                                <img src={plusimg} className='picture' alt='Logo' />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <main className='App'>
                <Plus isOpen={this.state.isPlusOpen} close={this.closePlus} />
            </main>
          </div>
          </div>
        );
      }
}

export default Home;