
const CardComponent = ({ heading, info, imageInfo }) => {
  return (
    <>
      <div >
        <div className="businessTransformcardsImage" style={{ width: '110px', height: '110px', objectFit: "contain", objectPosition: "center" }}>
          <img
            alt="example"
            src={imageInfo}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <h2 style={{ marginTop: "20px" }}>{heading}</h2>
        <p style={{ textAlign: "center", padding: "10px" }}>
          {info}
        </p>
      </div>
    </>
  )
}

export default CardComponent;