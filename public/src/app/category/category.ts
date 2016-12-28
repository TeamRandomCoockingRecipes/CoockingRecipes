export interface ICategory {
    _id?: string,
    updatedAt: Date,
    createdAt: Date,
    name: string,
    imgUrl: string,
    recipes: {imageUrl:string, title: string, id: string}[]
}