import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Button, Nav, NavItem, NavLink, TabPane, TabContent } from 'reactstrap';

import Cover from '../Cover';
import Resume from '../Resume';
import Project from '../Project';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab : '1'
    };

    this.navOnClick = this.navOnClick.bind(this);
    this.pageOnScroll = this.pageOnScroll.bind(this);
    this.getElementInfo = this.getElementInfo.bind(this);
    this.pageOnResize = this.pageOnResize.bind(this);
    this.calcScrollEffectInfo = this.calcScrollEffectInfo.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.pageOnScroll);
    window.addEventListener('resize', this.pageOnResize);

    this.calcScrollEffectInfo();
  }

  calcScrollEffectInfo() {
    setTimeout(() => {
      var anchorDom = this.getElementInfo('middle');
      var targetDom = this.getElementInfo('content');

      this.targetScrollMaxDistance = targetDom.offsetTop - (anchorDom.offsetTop + anchorDom.height);
      this.pageOnScroll();
    }, 100);
  }

  getElementInfo(id) {
    var target = document.getElementById(id);
    return {
      element: target,
      offsetTop: target.offsetTop,
      height: target.clientHeight
    }
  }

  pageOnResize(event) {
    this.calcScrollEffectInfo();
  }

  pageOnScroll(event) {
    var anchorDom = this.getElementInfo('middle');
    var targetDom = this.getElementInfo('content');
    var percentOfGap = window.pageYOffset / (anchorDom.offsetTop + anchorDom.height);

    var targetMargin = this.targetScrollMaxDistance * percentOfGap;
    if(targetMargin < 5) {
      targetMargin = 5;
    } else if(targetMargin > this.targetScrollMaxDistance) {
      targetMargin = this.targetScrollMaxDistance;
    }

    targetDom.element.style.marginTop = targetMargin * -1 + 5 + "px";
  }

  navOnClick(activeTab) {
    if (this.state.activeTab !== activeTab) {
      this.setState({
        activeTab: activeTab
      });
    }
    console.log(activeTab);
  }


  render() {
    const { t } = this.props;

    return (
      <div className="App">
        <div className="w-100 position-absolute p-1">
          <div className="d-flex justify-content-end">
            <Button outline color="primary" className="mx-1"
              onClick={() => this.props.changeLanguage('en-US')}>English
            </Button>
            <Button outline color="warning" className="mx-1"
              onClick={() => this.props.changeLanguage('zh-TW')}>繁體中文
            </Button>
          </div>
        </div>

        <Cover changeLanguage={this.props.changeLanguage} />

        <div id="content" className="p-3 container-fluid">
          <Nav tabs>
            <NavItem>
              <NavLink
                  href="#"
                  active={this.state.activeTab === '1'}
                  onClick={() => this.navOnClick('1')} >
                { t("resume.title") }
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                  href="#"
                  active={this.state.activeTab === '2'}
                  onClick={() => this.navOnClick('2')} >
                { t("projects.title") }
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Resume />
            </TabPane>
            <TabPane tabId="2">
              <Project />
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default translate()(App);
