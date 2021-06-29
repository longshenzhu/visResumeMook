import React from 'react';
import { useHistory } from 'react-router';
import './index.less';
import Logo from '@assets/logo.png';
import { shell } from 'electron';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';

function Root(){
    // 通过 history.push 进行跳转
    const history = useHistory();

    const onRouterToLink = (router: TSRouter.Item) => {
        if( isHttpOrHttpsUrl(router.url)) {
            console.log("通过 shell 模块，打开默认浏览器，进入 github");
            shell.openExternal("https://github.com/PDKSophia/visResumeMook");
        }else {
            history.push(router.url);
        }
    }
    return (
        <div styleName="root">
            <div styleName="container">
                <img src={Logo} alt="" />
                <div styleName="title">VisResumeMook</div>
                <div styleName="tips">一个模板简历制作平台，让你得简历更加出众</div>
                <div styleName="action">
                    {ROUTER_ENTRY.map((router: TSRouter.Item) => {
                        return (
                            <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>{router.text}</div>
                        )
                    })}
                </div>
                <div styleName="copyright">
                    <div styleName="footer">
                        <div styleName="copyright">
                            Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Root;