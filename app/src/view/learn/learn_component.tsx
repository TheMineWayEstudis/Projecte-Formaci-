import { Col, Row } from 'antd'
import React, { useState } from 'react'
import ActivityComponent from './activity/activity_component'
import Activity from './content/Activity';
import Progress from './progress/progress'

export default function LearnComponent() {
    const activities: Activity[] = Activity.getActivities();
    const [currentActivity, setCurrentActivity]: any = useState(null);
    const [percent, setPercent]: any = useState(0);

    if(currentActivity == null) {
        // Primera vegada
        setCurrentActivity(0);
    }

    return (
        <Row gutter={24}>
            <Col sm={24} xl={6}>
                {Progress(activities, currentActivity, setProgress, percent)}
            </Col>
            <Col sm={24} xl={18}>
                {ActivityComponent(activity(), next, previous)}
            </Col>
        </Row>
    )

    function activity(): Activity {
        return activities[currentActivity || 0];
    }

    function next(): void {
        const c = currentActivity || 0;
        if(c + 1 >= activities.length) return;
        setProgress(c + 1);
    }

    function previous(): void {
        const c = currentActivity || 0;
        if(c - 1 < 0) return;
        setProgress(c - 1);
    }

    function setProgress(n: number): void {
        setPercent(0);
        setCurrentActivity(n);
    }
}