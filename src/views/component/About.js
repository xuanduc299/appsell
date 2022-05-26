import React from 'react';
import { Row } from 'reactstrap';
import './about.scss';
import styled from 'styled-components';

// import { NavLink } from 'react-router-dom'
// import { DataContext } from './Context';

const About = () => {

    const Button = styled.button`
    background-color: white;
    color: black;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;

    return (
        <Row>
            <div className="bd-tt-img-01">
                <div className="bd-container">
                    <div className="bd-left-img-01">
                        <div className="bd-tt-text-img">
                            <h2 className="bd-tt-text heading-1">RUN FOR THE OCEANS</h2>
                            <p className="text-1">Đã đến lúc xỏ giày chạy bộ và Chạy bộ vì đại dương. Mỗi giây phút đều quan trọng.</p>
                        </div>
                        <Button>Tim hieu them</Button>
                    </div>
                </div>
            </div>
        </Row>

    );
};




export default About;