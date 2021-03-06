import {React, Fragment, Component} from 'react';
import axios from 'axios';
import './Plus.css';

class Plus extends Component {
    state = {
        title: "",
        body: "",
        author: ""
    }

    handleClick = () => {
        axios.post('api/diary/write', {
            Title: this.state.title,
            Author: this.state.author,
            Body: this.state.body
        })
        .then((res) => {
            this.props.close();
            this.setState({title: ""});
            this.setState({body: ""});
            this.setState({author: ""});
            return res.json();
        })
        .catch((err) => {console.log(err)})
    }

    handleChange = (event) => {
        const {target: {name, value} } = event;
        this.setState({[name] : value});
    }

    render() {
        const { isOpen, close } = this.props;
        return(
            <Fragment>
                {
                    isOpen ?
                    <Fragment>
                        <div className="Plus-overlay" onClick={close} />
                        <div className="Plus">
                            <h1 className="alert">메모를 적어봅시다</h1>
                            <div className="body">
                                <h4 className='ph4'>
                                    <input type='text' placeholder='제목' name='title' value={this.state.title} onChange={this.handleChange} />
                                    <input type='text' placeholder='작성자명' name='author' value={this.state.author} onChange={this.handleChange}/>
                                </h4>
                                <br/>
                                <textarea name='body' value={this.state.body} onChange={this.handleChange} />
                                <div className='btt-wrap'>
                                    <button className='btn' onClick={() => this.handleClick()}>
                                        <p>작성 완료</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Fragment> : null
                }
            </Fragment>
        );
    }
}

export default Plus;