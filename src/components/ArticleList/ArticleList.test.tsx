import { render, screen, waitFor, fireEvent } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme'

// component
import ArticleList from 'components/ArticleList/ArticleList'

// json data
import * as json from '../../../public/data/bundle-api.json'

describe('ArticleFilter component', () => {
    it('should render the same amount of cards as the json', async () => {
        const { debug } = render(
            <ThemeProvider theme={theme}>
                <ArticleList articles={json.bundelItems} />
            </ThemeProvider>
        )

        expect(screen.queryAllByTestId('article-card')).toHaveLength(
            json.bundelItems.length
        )
    })

    it('should filter the list accordingly when filtering on the TV category', async () => {
        const { debug } = render(
            <ThemeProvider theme={theme}>
                <ArticleList articles={json.bundelItems} />
            </ThemeProvider>
        )

        // click on a category
        fireEvent.click(await screen.findByText(/TV/))

        // find articles with tv category (to compare amount)
        const tvArticles = json.bundelItems.filter(
            (article) => article.sectie.title.toLowerCase() === 'tv'
        )

        await waitFor(() =>
            expect(screen.queryAllByTestId('article-card')).toHaveLength(
                tvArticles.length
            )
        )
    })
})
