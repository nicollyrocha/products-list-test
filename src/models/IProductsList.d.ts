interface IProductsList {
    nodes: IProductObject[]
}

interface ICategory {
    name: string,
    _id: string
}
interface IImages {
    alt: string,
    asset: IAsset
}

interface IAsset {
    url: string,
}

interface IProductObject {
    category: ICategory,
    id: string,
    images: IImages[]
    name: string,
    shortDescription: string
}