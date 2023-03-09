import { useState } from 'react'
import styled from 'styled-components'
import { Article } from 'types/Article'
import ArticleFilter from 'components/ArticleFilter/ArticleFilter'
import ArticleCard from 'components/ArticleCard/ArticleCard'
import { motion } from 'framer-motion'

// styled components
const StyledListWrapper = styled.div`
    padding: 6rem 0 2rem 0;
`

const StyledCardWrapper = styled(motion.section)`
    padding: 1rem;
    margin: 0 auto;
    text-align: center;

    @media ${({ theme }) => theme.devices.tabletPortrait} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 0.5rem;
        row-gap: 0.5rem;
        max-width: 1280px;
    }
`

const ArticleList = ({ articles }: { articles: Array<Article> }) => {
    // state hooks
    const [filteredArticles, setFilteredArticles] =
        useState<Array<Article>>(articles)

    return (
        <StyledListWrapper>
            <ArticleFilter
                articles={articles}
                setFilteredArticles={setFilteredArticles}
            />
            <StyledCardWrapper
                layout
                transition={{ ease: 'easeInOut', duration: 0.25 }}
            >
                {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </StyledCardWrapper>
        </StyledListWrapper>
    )
}

export default ArticleList
