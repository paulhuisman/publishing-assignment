import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme'

// component
import ArticleFilter from 'components/ArticleFilter/ArticleFilter'

describe('ArticleFilter component', () => {
    it('should render the filter with the TV category', async () => {
        render(
            <ThemeProvider theme={theme}>
                <ArticleFilter articles={[]} setFilteredArticles={jest.fn()} />
            </ThemeProvider>
        )

        expect(screen.getByText(/TV/)).toBeInTheDocument()
    })
})
