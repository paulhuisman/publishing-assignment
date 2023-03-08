export type Article = {
    id: number
    titel: string
    urlAlias: string
    sectie: { title: string }
    afbeelding: {
        afbeelding: string
        bijschrift: string | null
        copyright: string | null
        crops: Array<{
            type: string
            height: number
            width: number
            path: string
        }>
    }
    bijgewerktDatum: { timestamp: number; formatted: string }
    lead: string
    showVideoIcon: boolean
    isPremium: boolean
    type: string
}
