// import styles from './index.module.css';
import { useState } from 'react';
import "antd/dist/antd.css";
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { Drawer, Button, Space } from "antd";
import { useRouter } from "next/router";


const Navbar = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setVisible(true);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setVisible(false);
  };
  const menu = (

    <Menu>
      <Menu.Item>
        <a href="/Advisory_Services" style={{ color: router.route === "/Advisory_Services" ? "#939598" : "black", fontSize: "14px", color: "black" }}>
          Advisory
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/AuditControl_Services" style={{ color: router.route === "/AuditControl_Services" ? "#939598" : "black", fontSize: "14px", color: "black" }}>
          Audit and Control
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/BPO_Services" style={{ color: router.route === "/BPO_Services" ? "#939598" : "black", fontSize: "14px", color: "black" }}>
          BPI / BPO (Business Process Outsourcing)
        </a>
      </Menu.Item><Menu.Item>
        <a href="/ClinicalTrials_Services" style={{ color: router.route === "/ClinicalTrials_Services" ? "#939598" : "black", fontSize: "14px", color: "black" }}>
          Clinical Trials
        </a>
      </Menu.Item><Menu.Item>
        <a href="/Commercial_Services" style={{ color: router.route === "/Commercial_Services" ? "#939598" : "black", fontSize: "14px", color: "black" }}>
          Commercial and Industrial Formulations
        </a>
      </Menu.Item><Menu.Item>
        <a href="/FacilityDesignServices" style={{ color: router.route === "/FacilityDesignServices" ? "#939598" : "black", fontSize: "14px", color: "black" }}>
          Facility Design & Optimization
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/ManagedServices" style={{ color: router.route === "/ManagedServices" ? "#939598" : "black", fontSize: "14px", color: "black" }}>
          Managed Services Graphics
        </a>
      </Menu.Item>
    </Menu>
  );




  return (
    <>
      <Space>
        <MenuOutlined style={{ fontSize: '35px', color: 'black', fontWeight: 'bold' }} onClick={showDrawer} />
      </Space>
      <Drawer
        title="Qanvus"
        placement={placement}
        width={300}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel </Button>
            <Button type="primary" onClick={onClose}>
            </Button>
          </Space>
        }>

        <div>
          <Link href="/">
            <a className="links" style={{ color: router.route === "/" ? "#939598" : "black" }} onClick={onClose}>
              Home
            </a>
          </Link>
        </div>
        <div>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link links" onClick={e => e.preventDefault()}>
              {/* <Link href="/Solutions"> */}

              Solutions <DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div>
          <Link href="/Career">
            <a className="links" style={{ color: router.route === "/Career" ? "#939598" : "black" }} onClick={onClose}>
              Career
            </a>
          </Link>
        </div>
        <div>
          <Link href="/About">
            <a className="links" style={{ color: router.route === "/About" ? "#939598" : "black" }} onClick={onClose}>
              About
            </a>
          </Link>
        </div>
        <div>
          <Link href="/Schedule" >
            <a className="links" style={{ color: router.route === "/Schedule" ? "#939598" : "black" }} onClick={onClose}>
              Schedule Call
            </a>
          </Link>
        </div>
      </Drawer>
      <style jsx>{`
      .links{
        // font-family:Gotha;
        font-size:25px;
        color:black;
      }
     `}</style>
    </>

  );
};


export default Navbar;



