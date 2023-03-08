import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Article } from 'types/Article'

// constants
const SORT_CATEGORIES = {
    '': 'Alles',
    tv: 'Tv',
    showbizz: 'Showbizz',
    music: 'Muziek',
}

// styled components
const StyledFilterContainer = styled.section`
    width: 100%;
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 999;
    margin: 0;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 1px 1px rgb(0 0 0 / 8%);
`
const StyledButton = styled.button<{ isActive: boolean }>`
    cursor: pointer;
    border: 0;
    font-weight: 700;
    padding: 1rem 1rem;
    color: ${({ theme, isActive }) =>
        isActive ? theme.colors.pink : theme.colors.gray[400]};
    border-bottom: 2px solid;
    background: transparent;
    border-color: ${({ theme, isActive }) =>
        isActive ? theme.colors.pink : 'transparent'};
    transition: all 0.25s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.pink};
    }
`

const ArticleFilter = ({
    articles,
    setFilteredArticles,
}: {
    articles: Array<Article>
    setFilteredArticles: (val: Array<Article>) => void
}) => {
    // state hooks
    const [activeGenre, setActiveGenre] = useState<string>('')

    // effect hooks
    useEffect(() => {
        if (activeGenre === '') {
            setFilteredArticles(articles)
            return
        }

        const filtered: Array<any> = articles.filter(
            (article) => article.sectie.title.toLowerCase() === activeGenre
        )
        setFilteredArticles(filtered)
    }, [articles, activeGenre, setFilteredArticles])

    return (
        <StyledFilterContainer>
            {Object.entries(SORT_CATEGORIES).map(([key, label]) => (
                <StyledButton
                    key={key}
                    isActive={activeGenre === key}
                    onClick={() => setActiveGenre(key)}
                >
                    {label.toUpperCase()}
                </StyledButton>
            ))}
        </StyledFilterContainer>
    )
}

export default ArticleFilter
