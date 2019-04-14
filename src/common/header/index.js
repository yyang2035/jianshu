import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {getSerchFocusAction,getSerchBlurAction} from '../../store/actionCreators'
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

 const Header = (props)=>{
    let {focused,handleInputFocus,handleInputBlur} = props
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
                  in={focused}
                  timeout={200}
                >
                <NavSearch
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className={focused?'focused':''}
                />
                </CSSTransition>
                <i 
                  className={focused?'focused iconfont':'iconfont'}
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

const mapStateToProps=(state)=>{
  return {
    focused:state.header.focused
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    handleInputFocus(){
      const action= getSerchFocusAction()
      dispatch(action)
    },
    handleInputBlur(){
      const action= getSerchBlurAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
