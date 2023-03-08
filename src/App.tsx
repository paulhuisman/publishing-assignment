import { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavBar from 'components/NavBar/NavBar'
import ArticleList from 'components/ArticleList/ArticleList'
import { Article } from 'types/Article'

const BUNDLE_API_ENDPOINT = 'data/bundle-api.json'

// styled components
const AppWrapper = styled.div`
    margin: 0 auto;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.gray[100]};
`

const App = () => {
    // state hooks
    const [articles, setArticles] = useState<Article[]>([])

    // effect hooks
    useEffect(() => {
        fetch(BUNDLE_API_ENDPOINT)
            .then((response) => response.json())
            .then((data) => {
                // sort by date
                setArticles(
                    data.bundelItems.sort(
                        (a: Article, b: Article) =>
                            +new Date(b.bijgewerktDatum.timestamp) -
                            +new Date(a.bijgewerktDatum.timestamp)
                    )
                )
            })
    }, [])

    return (
        <>
            <NavBar></NavBar>
            <AppWrapper>
                <ArticleList articles={articles} />
            </AppWrapper>
        </>
    )
}

export default App
