import React, { Component } from 'react';
import styled from 'styled-components';
import config from './config';

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
  width:100%;
  min-width : 0;
  min-height : 0;
  font-family: 'Roboto', sans-serif;
`

const Image = styled.img`
  height: 350px;
  min-width : 0;
  min-height : 0;
`

const Image2 = styled.img`
  margin-top :40px;
  margin-left: 78%;
  width: 20%;
  height: auto;
`

const Header = styled.div`
margin-left: 0%;
  margin-top:60px;
  margin-bottom : 40px;
  font-size : 72px;
  width: 54%;
  // text-align : center;
  font-family: 'Pacifico', cursive;
`
const BoxPanel = styled.div`
  width: 100%;
  background : rgba(83,166,166,0.5);
  overflow: hidden;
  height : 450px;
  padding :15px;
  text-align: center;
  img{
    display:inline-block;
    margin-left : 15px;
  }
`

const Panel = styled.div`
  background : rgba(166,166,83,0.5);
  overflow: hidden;
  height : 175px;
  width : 50%;
  text-align: center;
  div{
    display:inline-block;
    margin : 10px;
  }
  button{
    display:inline-block;
  }
  `
const Panel2 = styled.div`
  background : rgba(166,166,83,0.5);
  overflow: hidden;
  height : 175px;
  width : 50%;
  text-align: center;
  div{
    display:inline-block;
    margin : 10px;
  }
  button{
    display:inline-block;
  }
`
const Panel3 = styled.div`
  background : rgba(166,166,83,0.7);
  overflow: hidden;
  height : 175px;
  width : 100%;
  text-align: center;
  div{
    display:inline-block;
    margin : 10px;
  }
  button{
    display:inline-block;
  }
`

const Selector = styled.select`
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    font-size:14px;
    padding : 8px;
    width : 250px;
    color :#4b4f5d;
`;

const Button = styled.button`
    border-radius: 7px !important;
    text-align: center;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    color: #757575;
    font-size: 30px;
    background: #ffffff;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    &:hover{
        background-color : #f6f6f7;
        cursor: pointer;
        
    }
`;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
      state: 2,
      //1 == safe
      //2 == thief cao barn
      //3 == deactivate
    }
    this.setActivate = this.setActivate.bind(this)
  }

  setActivate(stage) {
    if (stage == false) {
      this.setState({
        isOpen: stage,
        state: 3
      })
    }
    else {
      this.setState({
        isOpen: stage,
        state: 1
      })
    }
  }
  setReset() {
    this.setState({
      isOpen: 1,
      state: 1
    })
  }
  render() {
    console.log(this.state)
    return (
      <Container className={this.state.isOpen ? "greenBlackground" : "redBlackground"}>
        {/* <Container className="greenBlackground"> */}
        <div style={{ width: '45%' }}>
          <Image2 src="img/logo.png" align="middle" />
        </div>
        <Header>Anti Thief</Header>
        <BoxPanel >
          <h1> Status </h1>
          {this.state.state == 1 && (<Image src="img/secure.png" align="middle" />)}
          {this.state.state == 2 && (<Image src="img/warning.gif" align="middle" />)}
          {this.state.state == 3 && (<Image src="img/deactivate.png" align="middle" />)}
        </BoxPanel>
        <Panel>
          <h2>I'm leaving home</h2>
          <Button onClick={() => this.setActivate(true)} > Set State</Button>
        </Panel>
        <Panel2>
          <h2>I'm coming home</h2>
          <Button onClick={() => this.setActivate(false)} > Set State</Button>
        </Panel2>
        <Panel3>
          <h2>Reboot System</h2>
          <Button onClick={() => this.setReset()} > Reset</Button>
        </Panel3>
      </Container >
    );
  }
}

export default App;
