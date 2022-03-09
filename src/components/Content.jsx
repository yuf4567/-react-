import React, { Component } from 'react'

export default class content extends Component {
    render() {
        return (
            <div class="content">
                <div class="baidulogo">
                    <a href="#" title="上百度，看2022全国两会">
                        <img src="https://www.baidu.com/img/pc_9c5c85e6b953f1d172e1ed6821618b91.png" alt="百度" />
                    </a>
                </div>
                <div class="search">
                    <span class="searchbar">
                        <input type="text" id="inputbar" />
                        <input type="button" value="百度一下" id="searchbtn" />
                        <a href=""><span id="photosearch" title="按图片搜索"></span></a>
                    </span>
                </div>
                <div class="hotnewstitle">
                    <div class="newswarpheader">
                        <p class="left">百度热榜</p>
                        <p class="right">
                            换一换
                        </p>
                    </div>
                    <div class="newswarp">
                        <a href="#">
                            <li>
                                <p>1</p>
                                <p>江西男子杀害女儿同桌被执死刑</p>
                                <span>热</span>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p>2</p>
                                <p>中纪委评大V诋毁戍边英雄被拘</p>
                                <span>新</span>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p>3</p>
                                <p>山东金矿火灾致6死 起因查明</p>
                                <span></span>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p id="seccol">4</p>
                                <p>教育部:不得规定男女生录取比例</p>
                                <span></span>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p class="seccol">5</p>
                                <p>警惕!南极又出现“西瓜雪”</p>
                                <span></span>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <p class="seccol">6</p>
                                <p>免费接种疫苗不影响就医待遇</p>
                                <span></span>
                            </li>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
