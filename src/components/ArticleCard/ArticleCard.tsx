import styled from 'styled-components'
import { Article } from 'types/Article'
import { motion } from 'framer-motion'

import { getImageCropSrc } from 'utils/images'
import { truncate } from 'utils/truncate'

// styled components
const StyledCard = styled(motion.a)`
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border-radius: 0.5rem;
    margin-bottom: 1rem;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        cursor: pointer;
        background: inherit;
        background-size: cover;
        transform-origin: center;
        transition: transform 0.3s ease-in-out;
    }

    &:hover {
        * {
            color: ${({ theme }) => theme.colors.white};
        }
        &:after {
            transform: scale(1.07);
        }
    }

    @media ${({ theme }) => theme.devices.tabletPortrait} {
        margin-bottom: 0;
    }
`

const StyledBottomGradient = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.8) 100%
    );
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    transition: background-image 0.25s ease-in-out;

    ${StyledCard}:hover & {
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.65) 100%
        );
    }
`

const StyledCardContent = styled.div`
    padding: 1rem;
    position: relative;
    z-index: 1;
    text-align: left;
    color: ${({ theme }) => theme.colors.white});
`

const StyledH2 = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
`

const StyledDate = styled.span`
    font-size: 0.8rem;
`

const StyledLead = styled.p`
    color: ${({ theme }) => theme.colors.white});
    font-size: 0.9rem;
    line-height: 1.2rem;

`

const StyledButton = styled.div`
    display: inline-block;
    color: ${({ theme }) => theme.colors.white});
    background: ${({ theme }) => theme.colors.pink};
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    border-radius: 0.5rem;
`

const StyledHoverContent = styled.div`
    position: relative;
    z-index: 1;
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    ${StyledCard}:hover & {
        opacity: 1;
        visibility: visible;
        max-height: 300px;
    }
`

const ArticleCard = ({ article }: { article: Article }) => {
    return (
        <StyledCard
            href={article.urlAlias}
            target="_blank"
            title={`Bekijk de detailpagina op RTL.nl`}
            style={{
                backgroundImage: `url(${getImageCropSrc(article, 'liggend')}`,
            }}
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
            data-testid="article-card"
        >
            <StyledBottomGradient />
            <StyledCardContent>
                <StyledH2>{article.titel}</StyledH2>

                {article.bijgewerktDatum.formatted && (
                    <StyledDate>{article.bijgewerktDatum.formatted}</StyledDate>
                )}

                {article.lead && (
                    <StyledHoverContent>
                        <StyledLead>{truncate(article.lead, 138)}</StyledLead>
                        <StyledButton>Lees meer &rarr;</StyledButton>
                    </StyledHoverContent>
                )}
            </StyledCardContent>
        </StyledCard>
    )
}

export default ArticleCard
