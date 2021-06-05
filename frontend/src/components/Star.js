import {React, Fragment} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import bstar from '../images/bright_star.png';
import dstar from '../images/dark_star.png';



const Img = styled.img`
    height: 25px;
    width: 25px;
    border-radius: 5px;
`;

const Star = ({light}) => {
    return(
            <Fragment>
                {
                    light ? <Img src={bstar}/> : <Img src={dstar}/>
                }
            </Fragment>
    );
}

export default Star;