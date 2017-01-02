export interface IRecipe {
    _id?: string
    title: string,
    categories: any[],
    imageUrls: any[],
    ingredients: any[],
    preparation: string,
    cookingTimeInMinutes: number,
    created: Date,
    author: any,
    comments: any[],
    deleted: boolean
}