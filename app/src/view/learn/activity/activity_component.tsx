import { Button, Card } from 'antd'
import Activity from '../content/Activity'

export default function ActivityComponent(activity: Activity, next: () => void, previous: () => void, isLast: boolean) {
    return (
        <Card hoverable>
            {activity.content.getActivity()}
            <Button onClick={previous}>{"Anterior"}</Button>
            <Button onClick={next}>{isLast ? "Finalitzar" : "Següent"}</Button>
        </Card>
    )
}