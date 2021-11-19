import { LeftOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Progress, Modal } from 'antd'
import React, { useState } from 'react'
import ActivityComponent from './activity/activity_component'
import Activity from './content/Activity';
import LearningPaths from './content/LearningPaths';
import ProgressComponent from './progress/progress';

export default function LearnComponent() {
    const [currentActivity, setCurrentActivity]: any = useState(null);
    const [percent, setPercent]: any = useState(0);
    const [isPathCompleted, setPathComplete]: any = useState(false);

    const [learningPath, setLearningPath]: any = useState(null);

    let activities: Activity[] = [];

    //LearningPaths.updateProgress('F1', 0, true);
    if (!learningPath) {
        // L'usuari no ha escollit una ruta d'aprenentatge per tant hem de mostrar la llista de rutes d'aprenentatge
        return (
            <Row gutter={24}>
                {
                    Object.keys(LearningPaths.values).map((id: string) => {
                        return (
                            <Col sm={24} xl={6} style={{ width: '100%' }}>
                                <Card hoverable onClick={() => {
                                    setLearningPath(id);
                                }}>
                                    <h2 style={{ textAlign: 'center' }}>{LearningPaths.values[id].name}</h2>
                                    <Progress percent={LearningPaths.values[id].progress} />
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
        <>
            <Row gutter={[24, 24]}>
                <Col sm={24} style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={() => { setLearningPath(null) }}>
                        <LeftOutlined />
                        {" Enrere"}
                    </Button>
                    <Button danger onClick={() => {
                        LearningPaths.updateProgress(learningPath, 0, true);
                    }}>
                        {"Restableix el progrés"}
                    </Button>
                </Col>
                <Col sm={24} xl={6} style={{ width: '100%' }}>
                    {ProgressComponent(activities, currentActivity, setProgress, percent)}
                </Col>
                <Col sm={24} xl={18} style={{ width: '100%' }}>
                    {ActivityComponent(activity(), next, previous, activity().id == activities[activities.length - 1].id)}
                </Col>
            </Row>
        </>
    )

    function activity(): Activity {
        return activities[currentActivity || 0];
    }

    function next(): void {
        const c = currentActivity || 0;
        if (c + 1 >= activities.length) {
            LearningPaths.updateProgress(learningPath, c + 1);
            Modal.success({
                content: '',
                title: 'Has completat la ruta d\'aprenentatge amb èxit',
                okText: 'Tornar a les rutes d\'aprenentatge',
                onOk: () => {setLearningPath(null)}
            });
            return;
        }
        setProgress(c + 1);
    }

    function previous(): void {
        const c = currentActivity || 0;
        if (c - 1 < 0) return;
        setProgress(c - 1);
    }

    function setProgress(n: number): void {
        LearningPaths.updateProgress(learningPath, n);
        setPercent(0);
        setCurrentActivity(n);
    }
}