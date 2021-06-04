import {React, Fragment} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import goodimg from '../images/good.png';
import badimg from '../images/bad.png';



const Img = styled.img`
    height: 25px;
    width: 25px;
    border-radius: 5px;
`;

const Text = styled.div`
    color: ${oc.black};
    font-size: 0.2rem;
`;


const Btn = ({gob, number}) => {
    return(
            <Fragment>
                {
                    gob ? <Img src={goodimg}/> : <Img src={badimg}/>
                }
                <Text>{number}</Text>
            </Fragment>
    );
}

export default Btn;