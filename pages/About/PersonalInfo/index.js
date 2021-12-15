// import { Row, Col } from 'antd';
import LeftImageInfoAndPersonHeadings from './LeftImageAndInfo';
import quotation from "./../../../public/aboutQuotation.PNG";
import YellowQuotation from "./../../../public/yellowQutation.PNG";
import CoralQuotation from "./../../../public/colranQuotation.PNG";
import limeGreenQuotation from "./../../../public/lineGreenQuotation.PNG";
import RightImageInfoAndPersonHeadings from './RightImageAndInfo';

const AboutInfo = ({ data }) => {
    return (
        <>
            <div style={{ marginBottom: "60px" }}>
                <LeftImageInfoAndPersonHeadings color="#d3d2d2"
                    name={data.Executive_Chairman_Name}
                    Designation={data.Executive_Chairman_Title}
                    primaryColor="#c12f2a"
                    image={quotation.src}
                    quote={data.Executive_Chairman_Quote}
                    biography={data.executive_chairmain_biography}
                    personImage={data["Executive_Chairman_Image"].url} />
            </div>
            <div style={{ marginBottom: "60px" }}>
                <RightImageInfoAndPersonHeadings color="#d3d2d2"
                    name={data.Co_Founder_and_President_Name}
                    Designation={data.Co_Founder_and_President_Title}
                    primaryColor="#ff8c2b"
                    image={CoralQuotation.src}
                    quote={data.Co_Founder_and_President_Quote}
                    biography={data.Co_Founder_and_President_Biography}
                    personImage={data["Co_Founder_and_President_Image"].url} />
            </div>
            <div style={{ marginBottom: "60px" }}>
                <LeftImageInfoAndPersonHeadings color="#d3d2d2"
                    name={data.COO_Name}
                    Designation={data.COO_Title}
                    primaryColor="#ffbd00"
                    image={YellowQuotation.src}
                    quote={data.COO_Quote}
                    biography={data.COO_Biography}
                    personImage={data["COO_Image"].url} />
            </div>
            <div style={{ marginBottom: "60px" }}>
                <RightImageInfoAndPersonHeadings color="#d3d2d2"
                    name={data.EVP_Organic_Cultivation_and_Processing_Name}
                    Designation={data.EVP_Organic_Cultivation_and_Processing_Title}
                    primaryColor="#4fad2f"
                    image={limeGreenQuotation.src}
                    quote={data.EVP_Organic_Cultivation_and_Processing_Quote}
                    biography={data.EVP_Organic_Cultivation_and_Processing_Biography}
                    personImage={data["EVP_Organic_Cultivation_and_Processing_Image"].url} />
            </div>
        </>
    )
}

export default AboutInfo;