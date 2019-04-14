import  React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SerchWrapper
} from './style'

export class Header extends Component {
  constructor(props){
    super(props)
    this.state={
      focused:false
    }
    this.handleInputFocus=this.handleInputFocus.bind(this)
    this.handleInputBlur=this.handleInputBlur.bind(this)
  }
  render() {
    return (
      <HeaderWrapper>
          <Logo />
          <Nav>
              <NavItem className='left active'>首页</NavItem>
              <NavItem className='left'>下载app</NavItem>
              <NavItem className='right'>登陆</NavItem>
              <NavItem className='right'>
                <i className="iconfont">&#xe636;</i>
              </NavItem>
              <SerchWrapper>
                <CSSTransition
                  in={this.state.focused}
                  timeout={200}
                >
                <NavSearch
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputBlur}
                  className={this.state.focused?'focused':''}
                />
                </CSSTransition>
                <i 
                  className={this.state.focused?'focused iconfont':'iconfont'}
                >&#xe637;</i>
              </SerchWrapper>
          </Nav>
          <Addition>
            <Button  className='writting'>
              <i className="iconfont">&#xe61d;</i>&nbsp;
              写文章
            </Button>
            <Button className='reg'>注册</Button>
          </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus(){
    this.setState({
      focused: true
    })
  }

  handleInputBlur(){
    this.setState({
      focused: false
    })
  }
}

export default Header
