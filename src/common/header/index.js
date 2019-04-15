import React,{Component} from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SerchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SerachInfoList,
  SearchInfoItem,
} from './style'

class Header extends Component {

  getListArea(show,list){
    if(show){
      return (
        <SearchInfo>
        <SearchInfoTitle>
          热门搜素
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SerachInfoList>
          {list.map((item)=>{
            return (
              <SearchInfoItem key={item}>{item}</SearchInfoItem>   
            )
          })}
        </SerachInfoList>
      </SearchInfo>
      )
    }else{
      return null
    }
  }

  render(){
    let {focused,handleInputFocus,handleInputBlur,list} = this.props
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
            {this.getListArea(focused,list)}
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
}

const mapStateToProps=(state)=>{
  return {
    focused:state.getIn(['header','focused']),//和下面代码意义相同
    // state.get('header').get('focused')//immutable要调用header这个对象的属性，必须用get方法
    //这时state就是个immutable对象了。
    list:state.getIn(['header','list'])
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    handleInputFocus(){
      dispatch(actionCreators.getList())
      const action = actionCreators.getSerchFocusAction()
      dispatch(action)
    },
    handleInputBlur(){
      const action = actionCreators.getSerchBlurAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
