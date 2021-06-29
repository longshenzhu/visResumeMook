import React from 'react';
import { useHistory } from 'react-router';
import './index.less';

function Resume() {
    const history = useHistory();
    const goBack = ()=>{
        console.log("返回主页");
        // history.push('/');
        history.goBack();
    }
    return (
        <div onClick= { ()=> goBack() } >
            这是简历模块
        </div>
    )
}

export default Resume;