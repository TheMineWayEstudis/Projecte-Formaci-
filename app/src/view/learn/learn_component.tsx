import { LeftOutlined } from '@ant-design/icons';
import { Button, Col, Row, Modal, Popconfirm } from 'antd'
import React, { useState } from 'react'
import CookiesService from '../../services/cookies_service';
import ActivityComponent from './activity/activity_component'
import Activity from './content/Activity';
import LearningPaths from './content/LearningPaths';
import ProgressComponent from './progress/progress';

export default function LearnComponent(props: {back: () => void, learningPath: string}) {
    const {
        back,
        learningPath
    } = props;

    const [currentActivity, setCurrentActivity]: any = useState(null);

    let activities: Activity[] = Activity.getActivities(learningPath);

    if (currentActivity == null) {
        // Primera vegada
        const num: number = CookiesService.get(`LearningPathProgress_${learningPath}`, 0) as number || 0;
        setCurrentActivity(num < 0 ? 0 : num);
    }

    return (
        <>
            <Row gutter={[24, 24]}>
                <Col sm={24} style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={() => { back(); }}>
                        <LeftOutlined />
                        {" Enrere"}
                    </Button>
                    <Popconfirm
                        placement='bottom'
                        title="Segur que vols restablir el progrés?"
                        okText="Sí, esborrar"
                        cancelText="No"
                        onConfirm={() => {
                            LearningPaths.updateProgress(learningPath, 0, true);
                            CookiesService.setOrUpdate(`LearningPathProgress_${learningPath}`, 0);
                            back();
                        }}
                    >
                        <Button danger>
                            {"Restableix el progrés"}
                        </Button>
                    </Popconfirm>
                </Col>
                <Col sm={24} xl={6} style={{ width: '100%' }}>
                    {ProgressComponent(activities, currentActivity!, setProgress, 0)}
                </Col>
                <Col sm={24} xl={18} style={{ width: '100%' }}>
                    {ActivityComponent(activity(), next, previous, activity().id === activities[activities.length - 1].id)}
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
                centered: true,
                closable: true,
                content: '',
                title: 'Has completat la ruta d\'aprenentatge amb èxit',
                okText: 'Tornar a les rutes d\'aprenentatge',
                onOk: () => { back(); }
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
        CookiesService.setOrUpdate(`LearningPathProgress_${learningPath}`, n || 0);
        LearningPaths.updateProgress(learningPath, n);
        setCurrentActivity(n);
    }
}