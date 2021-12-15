import { Menu, Dropdown } from 'antd';
import Link from 'next/link';
import logo from "./../../../public/logo.png";
import Navbar from "./../HomePage/Navbar/Navbar";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Image from "next/image";
import { useRouter } from "next/router";

const HeaderMain = () => {
  const router = useRouter();
  return (
    <>
      <div className="mainComponent">
        <div className="drawer">
          <Navbar />
        </div>
        <div className="logo">
          <a href="/"> <Image className="imageName" src={logo} alt="logo" /></a>
        </div>
        <div className="links">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              {/* <Link href="/Solutions"> */}

              Solutions <DownOutlined />
            </a>
          </Dropdown>
          {/* </Link> */}

          {/* <Link href="/Industries">
            <a>
              Industries
            </a>
          </Link>
          <Link href="Insights">
            <a>
              Insights
            </a>
          </Link> */}
          <Link href="/Career">
            <a style={{ color: router.route === "/Career" ? "#939598" : "black" }}>
              Career
            </a>
          </Link>
          <Link href="/About">
            <a style={{ color: router.route === "/About" ? "#939598" : "black" }}>
              About
            </a>
          </Link>
          <Link href="/Schedule">
            <a style={{ color: router.route === "/Schedule" ? "#939598" : "black" }}>
              Schedule Call
            </a>
          </Link>
        </div>
        <div className="searchIcon">
          <SearchOutlined
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "10px",
            }} />
        </div>
      </div>
      <style jsx>{`

  .mainComponent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    box-shadow: 0 1px 4px rgb(1 1 7 / 15%);
    width: 100%;
    padding: 25px 10px;
  }
  .drawer {
    padding-top: 40px;
    display: none;
  }
  .logo {
    width: 240px;
    height: 0px;
    padding-top: 30px;
  }
  .logo Image {
    height: 10px;
  }
  .links{
    display:flex;
    flex-basis:60%;
    justify-content:space-around;
    padding:40px;
  }
  .links a{
    font-size:25px;
    color:black;
  }
  .searchIcon{
    padding-top :20px;
  }
 @media only screen and (max-width: 767px) {
   .mainComponent{
     display:flex;
   //flex-wrap:wrap;
     justify-content:space-around;
     box-shadow: 0 1px 4px rgb(1 1 7 / 15%);
     width:100%;
   //padding-top:50px;
     padding-bottom:10px;
   //gap:4%;
   }
    .drawer{
      padding-top:30px;
      display:unset;
    }
    .searchIcon{
      //  padding-top: 30px;
    }
    .links{
      display:none;
    }
    .logo {
      // order :2;
      padding-top:70px;
      padding-bottom:70px;
      width:180px;
      height:5px;
    }
  }
  @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
    .drawer{
      padding-top:40px;
      display:none;
    }
    .mainComponent{
        flex-direction:column;
        padding: 40px 10px;

    }
    .links{
      display:flex;
      margin-left:20%;
      padding:2px;
      border:0px solid blue;
      order:2;
      margin-top:-19px !important;
    }
    .searchIcon{
       display:unset;
       margin-left:95%;
       margin-top:-35px;
    }
    .links p{
      font-size:15px;
      color:black;
    } 
    .logo{
      margin-left:10px;
       padding-top:40px !important;
      margin-bottom:10px;
      order:2;
      width:160px;
      padding-bottom:-10px;
    }  
  
  }

`}</style>
    </>
  );
}


const menu = (
  <Menu>
    <Menu.Item>
      <a href="/Advisory_Services" style={{ fontSize: "17px", color: "black" }}>
        Advisory
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="AuditControl_Services" style={{ fontSize: "17px", color: "black" }}>
        Audit and Control
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/BPO_Services" style={{ fontSize: "17px", color: "black" }}>
        BPI / BPO (Business Process Outsourcing)
      </a>
    </Menu.Item><Menu.Item>
      <a href="/ClinicalTrials_Services" style={{ fontSize: "17px", color: "black" }}>
        Clinical Trials
      </a>
    </Menu.Item><Menu.Item>
      <a href="/Commercial_Services" style={{ fontSize: "17px", color: "black" }}>
        Commercial and Industrial Formulations
      </a>
    </Menu.Item><Menu.Item>
      <a href="/FacilityDesignServices" style={{ fontSize: "17px", color: "black" }}>
        Facility Design & Optimization
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/ManagedServices" style={{ fontSize: "17px", color: "black" }}>
        Managed Services
      </a>
    </Menu.Item>

  </Menu>
);



export default HeaderMain;