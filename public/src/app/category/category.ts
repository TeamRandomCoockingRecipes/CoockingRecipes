export interface ICategory {
    _id?: string,  
    name: string,
    imgUrl: string,
    description: string,
    recipes: {imageUrl:string, title: string, id: string}[]
}