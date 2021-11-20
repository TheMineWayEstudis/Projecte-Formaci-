import { Card, Col, Progress, Row } from 'antd';
import React, { useState } from 'react';
import LearningPaths from './view/learn/content/LearningPaths';
import LearnComponent from './view/learn/learn_component';

function App() {
  const [learningPath, setLearningPath]: any = useState(null);

  if (learningPath == null) {
    // L'usuari no ha escollit una ruta d'aprenentatge per tant hem de mostrar la llista de rutes d'aprenentatge
    return (
      <Row gutter={[24,24]}>
        {
          Object.keys(LearningPaths.values).map((id: string) => {
            return (
              <Col sm={24} xl={8} style={{ width: '100%' }}>
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

  return (
    <LearnComponent
      back={() => {
        setLearningPath(null);
      }}
      learningPath={learningPath}
    />);
}

export default App;