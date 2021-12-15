import { Row, Col } from 'antd';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TurkeyServicesAndListItems = () => {
    return (
        <>
            <div className="mainPaddingSet" style={{ background: '#00afab', paddingTop: "60px", paddingBottom: "60px" }}>
                <Row justify="center">
                    <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 11, offset: 1 }} lg={{ span: 10 }}>
                        <ul>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Managed Services</li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>BPI / BPO (Business Process<br />
                                <span style={{ marginLeft: "30px" }}>Insourcing and Outsourcing)</span></li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Audit and Control
                            </li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Facility Design & Optimization
                            </li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Construction Oversight
                            </li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Advisory</li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Clinical Trials
                            </li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Commercial and Industrial
                                Formulations</li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Genetics</li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Brand Licensing & Management
                            </li>
                        </ul>

                    </Col>
                    <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 11, offset: 1 }} lg={{ span: 10 }}>
                        <ul>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Product Development
                            </li>
                            <li><span className="TurnKeyListIcons"
                            ><FontAwesomeIcon icon={faCircle} color="white" ></FontAwesomeIcon></span>Packaging</li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>R&D</li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>M&A</li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Data and Analytics
                            </li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Risk & Regulatory
                            </li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Strategic Consulting
                            </li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Operation</li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>ERP</li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Alliances and Ecosystem
                            </li>
                            <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>SaaMS (Software  as a
                                <span className="lastSecondLineWord">  Managed Services)</span></li>
                        </ul>
                    </Col>

                </Row >

            </div>
            <style jsx>{`
      ul{
             list-style: none;
             padding-left:6%;
    }
    li{
        padding-top:10px;
        font-size:25px;
        color:white;
        text-align: left;
    }
    .TurnKeyListIcons{
        font-size:10px;
        padding-right:3%;
    }
      
    .lastSecondLineWord{
        display:block;
        margin-left:30px;
    }
    @media only screen and (max-width: 767px) {
        ul{
            padding-top:0px;
            padding-left:3%;
            padding-right:10px;
         }
        li{
            font-size:20px;
        }
        .mainPaddingSet{
            padding-top:30px !important;
            padding-bottom:30px !important;
        }
    }
      `}</style>
        </>
    )

}

export default TurkeyServicesAndListItems;