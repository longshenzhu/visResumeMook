import React from 'react';
import { useHistory } from 'react-router';
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';
import './index.less';

function Resume() {
    const history = useHistory();
    const goBack = ()=>{
        console.log("返回主页");
        // history.push('/');
        history.goBack();
    }
    getAppPath().then((rootPath:string) =>{
        
        fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
            console.log(data);
        })
    })
    
    return (
        <div>
            这是简历模块
            <button onClick= { ()=> goBack() }>返回</button>
        </div>
    )
}

export default Resume;