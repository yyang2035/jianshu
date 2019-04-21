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

  getListArea(focused){
    let {list,page,totalPage,handleMouseEnter,handleMouseLeave,handleSwitchClick,mouseIn} = this.props
    let jsList = list.toJS()
    let pageList = []
    if(jsList.length){ //ajax请求到数据后再执行
      for(let i=(page-1)*10;i<page*10;i++){
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>   
        )
      }
    }

    if(focused||mouseIn){
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        <SearchInfoTitle>
          热门搜素
          <SearchInfoSwitch
            onClick={()=>handleSwitchClick(page,totalPage,this.spinIcon)}
          >
          <i ref={(spinIcon)=>{this.spinIcon=spinIcon}} className="iconfont spin">&#xe606;</i>
          换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SerachInfoList>
          {pageList}
        </SerachInfoList>
      </SearchInfo>
      )
    }else{
      return null
    }
  }

  render(){
    let {
      focused,
      handleInputFocus,
      handleInputBlur
    } = this.props
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
              className={focused?'focused iconfont zoom':'iconfont zoom'}
            >&#xe637;</i>
            {this.getListArea(focused)}
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
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    mouseIn:state.getIn(['header','mouseIn'])
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
    },
    handleSwitchClick(page,totalPage,spinIcon){
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'')
      if(originAngle){
        originAngle=parseInt(originAngle,10)
      }else{
        originAngle=0
      }
      spinIcon.style.transform=`rotate(${originAngle+360}deg)`
      console.log('originAngle:', originAngle)

      if (page<totalPage){
        dispatch(actionCreators.getSwitchClickAction(page+1))
      }else{
        dispatch(actionCreators.getSwitchClickAction(1))
      }
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
