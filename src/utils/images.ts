import { Article } from 'types/Article'

export const getImageCropSrc = (article: Article, cropType: string) => {
    return article.afbeelding.crops.find((crop) => crop.type === cropType)?.path
}
