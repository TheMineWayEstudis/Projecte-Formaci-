import { LeftOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Progress } from 'antd'
import React, { useState } from 'react'
import ActivityComponent from './activity/activity_component'
import Activity from './content/Activity';
import LearningPaths from './content/LearningPaths';
import ProgressComponent from './progress/progress';

export default function LearnComponent() {
    const [currentActivity, setCurrentActivity]: any = useState(null);
    const [percent, setPercent]: any = useState(0);

    const [learningPath, setLearningPath]: any = useState(null);

    let activities: Activity[] = [];

    if (!learningPath) {
        // L'usuari no ha escollit una ruta d'aprenentatge per tant hem de mostrar la llista de rutes d'aprenentatge
        return (
            <Row gutter={24}>
                {
                    Object.keys(LearningPaths.values).map((id: string) => {
                        return (
                            <Col sm={24} xl={6}>
                                <Card hoverable onClick={() => {
                                    setLearningPath(id);
                                }}>
                                    <h2 style={{ textAlign: 'center' }}>{LearningPaths.values[id].name}</h2>
                                    <Progress percent={LearningPaths.values[id].progress}/>
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
        );
    }

    activities = Activity.getActivities(learningPath);

    if (currentActivity == null) {
        // Primera vegada
        setCurrentActivity(0);
    }

    return (
        <Row gutter={[24, 24]}>
            <Col sm={24}>
                <Button onClick={() => { setLearningPath(null) }}>
                    <LeftOutlined />
                    {" Enrere"}
                </Button>
            </Col>
            <Col sm={24} xl={6}>
                {ProgressComponent(activities, currentActivity, setProgress, percent)}
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
        if (c + 1 >= activities.length) return;
        setProgress(c + 1);
    }

    function previous(): void {
        const c = currentActivity || 0;
        if (c - 1 < 0) return;
        setProgress(c - 1);
    }

    function setProgress(n: number): void {
        setPercent(0);
        setCurrentActivity(n);
    }
}