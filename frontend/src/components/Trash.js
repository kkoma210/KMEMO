import {React, Fragment} from 'react';
import styled from 'styled-components';
import trash from '../images/trash.png';



const Img = styled.img`
    height: 25px;
    width: 25px;
    border-radius: 5px;
`;

const Trash = () => {
    return(
            <Fragment>
                {
                    <Img src={trash}/>
                }
            </Fragment>
    );
}

export default Trash;