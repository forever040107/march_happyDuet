import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyle, Wrapper, Main, Section, ListWrapper, Table, Button } from './styled.js'

const App = () => (
    <Wrapper>
        <GlobalStyle/>
        <Main>
            <Section index={1}>
                <h2>&nbsp;</h2>
                <h3><span>打码豪礼拿不停　天天最高1,500元</span></h3>
                <p className="date">2019/3/1 00:00:00 - 2019/3/8 23:59:59</p>
                <p><b>活动说明：</b>活动期间内，联系客服报名，每位用户每日完成底下指定投注金额，次日14:00前即发放对应礼金；</p>
                <Table index={1}>
                    <div className="row">
                        <div>投注金额</div>
                        <div>礼金</div>
                    </div>
                    <div className="row">
                        <div>800</div>
                        <div>5</div>
                    </div>
                    <div className="row">
                        <div>2,000</div>
                        <div>8</div>
                    </div>
                    <div className="row">
                        <div>5,000</div>
                        <div>25</div>
                    </div>
                    <div className="row">
                        <div>15,000</div>
                        <div>75</div>
                    </div>
                    <div className="row">
                        <div>50,000</div>
                        <div>250</div>
                    </div>
                    <div className="row">
                        <div>100,000</div>
                        <div>500</div>
                    </div>
                    <div className="row">
                        <div>300,000</div>
                        <div>1,500</div>
                    </div>
                </Table>
                <p>提示：活动期间只需报名一次</p>
            </Section>
            <Section index={2}>
                <h2>&nbsp;</h2>
                <h3><span>签到加息 限时发送</span></h3>
                <p className="date">2019/3/9 00:00:00 - 2019/3/17 23:59:59</p>
                <p><b>活动说明：</b>活动期间内，联系客服报名，打码4,000即算签到，若符合底下签到天数，将在活动结束后次日14:00前发放对应奖金；</p>
                <Table index={2}>
                    <div className="row">
                        <div>连续签到天数</div>
                        <div>派发奖金</div>
                    </div>
                    <div className="row">
                        <div>3</div>
                        <div>43</div>
                    </div>
                    <div className="row">
                        <div>5</div>
                        <div>75</div>
                    </div>
                    <div className="row">
                        <div>7</div>
                        <div>137</div>
                    </div>
                    <div className="row">
                        <div>9</div>
                        <div>169</div>
                    </div>
                </Table>
                <p>举例：会员于3/9、3/10、3/11连续到平台打码4,000，则可以于3/18 14:00前获得奖金43元；</p>
                <p>提示：活动期间只需报名一次</p>
            </Section>
            <ListWrapper>   
                <h2>&nbsp;</h2>
                <ul>
                    <li>❶ 流水计算：报名后，根据每天00:00:00 – 23:59:59总码量为准；</li>
                    <li>❷ 六合彩和AG旗下所有游戏（含真人百家乐和电子游戏）和乐游棋牌不列入活动流水；活动礼金仅可在彩票游戏投注(不含六合彩)；</li>
                    <li>❸ 活动期间内，每位会员（包括同一姓名，同一邮件地址，同一注册电话，同一IP地址，同一借记卡/信用卡）累计奖励只能领取一次；</li>
                    <li>❹ 活动期间内，会员需遵守平台玩法规定：投注不得超过该玩法投注总码的70%，即定位胆必须≦7注，二星必须≦70注，三星必须≦700注，四星必须≦7000注，五星必须≦70000注。如违反此规定，均视为放弃本次活动；</li>
                    <li>❺ 活动期间禁止一切作弊行为，一经发现取消活动参与资格，并扣除违规所得存款奖励和游戏盈利，情节严重者将冻结账号；</li>
                    <li>❻ 彩立方平台保留对活动所有解释权</li>
                </ul>
            </ListWrapper>
            <Button href="/service?type=onlineChat" target="_blank"></Button>
        </Main>
    </Wrapper>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
