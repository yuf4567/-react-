import React, { Component } from 'react'


export default class Header extends Component {
  render() {
    return (
      <div class="header">
        <div class="banner">
          <div class="leftbar">
            <a href="#" class="leftitem">新闻</a>
            <a href="#" class="leftitem">hao123</a>
            <a href="#" class="leftitem">地图</a>
            <a href="#" class="leftitem">直播</a>
            <a href="#" class="leftitem">视频</a>
            <a href="#" class="leftitem">贴吧</a>
            <a href="#" class="leftitem">学术</a>
            <div id="more">
              <a href="#" class="leftitem">更多</a>
              <div class="moreitemwarp">
                <div class="moreicon">
                  <a href="#">
                    <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/newfanyi-da0cea8f7e.png' alt="" />
                    <p>翻译</p>
                  </a>
                  <a href="#">
                    <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/newxueshuicon-a5314d5c83.png' alt="" />
                    <p>学术</p>
                  </a>
                  <a href="#">
                    <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/newwenku-d8c9b7b0fb.png' alt="" />
                    <p>文库</p>
                  </a>
                  <a href="#">
                    <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/newbaike-889054f349.png' alt="" />
                    <p>百科</p>
                  </a>
                  <a href="#">
                    <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/newzhidao-da1cf444b0.png' alt="" />
                    <p>知道</p>
                  </a>
                  <a href="#">
                    <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/newjiankang-f03b804b4b.png' alt="" />
                    <p>健康</p>
                  </a>
                  <a href="#">
                    <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/yingxiaoicon-612169cc36.png' alt="" />
                    <p>营销推广</p>
                  </a>
                  <a href="#">
                    <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/newzhibo-a6a0831ecd.png' alt="" />
                    <p>直播</p>
                  </a>
                  <a href="#">
                    <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/newyinyue-03ecd1e9b9.png' alt="" />
                    <p>音乐</p>
                  </a>
                </div>
                <a id="morelink" href="">查看全部百度产品{'>'}</a>
              </div>
            </div>

          </div>
          <div class="userbar">
            <li>
              <a href="#" class="rightitem">设置</a>
              <ul>
                <li><a href="">搜索设置</a></li>
                <li><a href="">高级搜索</a></li>
                <li><a href="">关闭预测</a></li>
                <li><a href="">隐私设置</a></li>
                <li><a href="">关闭热榜</a></li>
              </ul>
            </li>
            <li>
              <a href="#" id="login" class="rightitem"> 登录 </a>
            </li>
          </div>
        </div>
      </div>
    )
  }
}
