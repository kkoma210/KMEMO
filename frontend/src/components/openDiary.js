import {React, Fragment, Component} from 'react';
import './Open.css';

class Open extends Component {

    render() {
        const {isOpen, close, diary} = this.props;
        return(
            <Fragment>
                {
                    isOpen ?
                    <Fragment>
                        <div className="Plus-overlay" onClick={close} />
                        <div className="Plus">
                            <h1 className="alert">Opened Memo</h1>
                            <div className="body">
                                <h4 className="ph4">
                                    <div className='content'>{diary.Title}</div>
                                    <div className='content'>{diary.Author}</div>
                                </h4>
                                <br/>
                                <div className='dbody'>{diary.Body}</div>
                                <div className='btt-wrap'>
                                    <button className='btn' onClick={close}>
                                        <p>완료</p>
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

export default Open;