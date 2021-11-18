import { Card, Steps } from 'antd'
import React from 'react'
import Activity from '../dialog_classes/Activity';

export default function Progress(activities: Activity[], current: number, setProgress: (n: number) => void) {
    const { Step } = Steps;

    return (
        <Card hoverable>
            <Steps direction="vertical" current={current}>
                {
                    activities.map((a: Activity) => {
                        return <Step title={a.name}/>;
                    })
                }
            </Steps>
        </Card>
    )
}