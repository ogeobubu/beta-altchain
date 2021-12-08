import styled from "styled-components";

import qrload from "../assets/adminbar.fw.png";

const ImageContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Image = styled.img`
  width: 50%;
`;

const QR = () => {
  return (
    <ImageContainer>
      <Image src={qrload} alt="qr" />
    </ImageContainer>
  );
};

export default QR;
