export interface StationItem {
    id: number
    title: string
    description: string
    location: string
    small_washing: Price
    medium_washing: Price
    large_washing:Price
    dry_machine: number
}   

export interface Price{
    cold_water: number
    warm_water: number
    hot_water: number
}