import { Card, Steps } from 'antd'
import React from 'react'
import Activity from '../content/Activity';

export default function Progress(activities: Activity[], current: number, setProgress: (n: number) => void, percent: number) {
    const { Step } = Steps;

    let c: number = 0;
    return (
        <Card hoverable>
            <Steps direction="vertical" current={current} percent={percent}>
                {
                    activities.map((a: Activity) => {
                        let e: number = c++;
                        return <Step title={a.name} onClick={() => {
                            setProgress(e);
                        }}/>;
                    })
                }
            </Steps>
        </Card>
    )
}