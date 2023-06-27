export interface Fixture {
    id: number
    matchId: string
    dlProviderId: number
    competitionId: string
    competitionName: string
    competitionType: string
    matchDayId: string
    matchDay: number
    matchType: string
    season: string
    seasonId: string
    plannedKickoffTime: Date
    stadiumName: string
    stadiumId: string
    homeTeamName: string
    homeTeamId: string
    guestTeamName: string
    guestTeamId: string
    matchDateFixed: boolean
    startDate: Date
    endDate: Date
}
