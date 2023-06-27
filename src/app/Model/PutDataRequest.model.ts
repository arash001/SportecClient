import { Fixtures } from "./Fixtures.model"

export interface PutDataRequest {
    id: number
    fixtures: Fixtures

    requestId: string

    messageTime: Date

    transmissionComplete: boolean

    transmissionSuspended: boolean
}