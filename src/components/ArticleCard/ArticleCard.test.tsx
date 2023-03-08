import { render, screen, waitFor, fireEvent } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme'

// component
import ArticleCard from 'components/ArticleCard/ArticleCard'

// mocked data
const mockedArticle = {
    id: 4245471,
    aangemaaktDatum: {
        timestamp: 1529398235,
        formatted: '19 juni 2018',
    },
    bijgewerktDatum: {
        timestamp: 1529400239,
        formatted: '19 juni 2018',
    },
    titel: 'Trijntje Oosterhuis onherkenbaar veel afgevallen',
    urlAlias:
        'https://www.rtlboulevard.nl/entertainment/showbizz/artikel/4245471/trijntje-oosterhuis-onherkenbaar-veel-afgevallen',
    afbeelding: {
        bijschrift: null,
        copyright: 'ANP',
        afbeelding:
            'https://www.rtlboulevard.nl/sites/default/files/content/images/2018/06/19/ANP-56919532.jpg',
        crops: [
            {
                type: 'inline_small',
                height: 150,
                width: 200,
                ratio: '1.33:1',
                path: 'https://www.rtlboulevard.nl/sites/default/files/styles/inline_small/public/content/images/2018/06/19/ANP-56919532.jpg?itok=uYTfDZPr',
            },
            {
                type: 'artikel_top',
                height: 395,
                width: 694,
                ratio: '1.76:1',
                path: 'https://www.rtlboulevard.nl/sites/default/files/styles/artikel_top/public/content/images/2018/06/19/ANP-56919532.jpg?itok=SikI_AJI',
            },
            {
                type: 'staand',
                height: 1024,
                width: 682,
                ratio: '0.67:1',
                path: 'https://www.rtlboulevard.nl/sites/default/files/styles/staand/public/content/images/2018/06/19/ANP-56919532.jpg?itok=b_PF6gT5',
            },
            {
                type: 'liggend_breed',
                height: 400,
                width: 1200,
                ratio: '3:1',
                path: 'https://www.rtlboulevard.nl/sites/default/files/styles/liggend_breed/public/content/images/2018/06/19/ANP-56919532.jpg?itok=MLl64WFL',
            },
            {
                type: 'liggend',
                height: 576,
                width: 1024,
                ratio: '1.78:1',
                path: 'https://www.rtlboulevard.nl/sites/default/files/styles/liggend/public/content/images/2018/06/19/ANP-56919532.jpg?itok=TBK54eRq',
            },
            {
                type: 'liggend_breed_nieuwsopening',
                height: 430,
                width: 1024,
                ratio: '2.38:1',
                path: 'https://www.rtlboulevard.nl/sites/default/files/styles/liggend_breed_nieuwsopening/public/content/images/2018/06/19/ANP-56919532.jpg?itok=HUPFexR0',
            },
            {
                type: 'square_medium',
                height: 400,
                width: 400,
                ratio: '1:1',
                path: 'https://www.rtlboulevard.nl/sites/default/files/styles/square_medium/public/content/images/2018/06/19/ANP-56919532.jpg?itok=TE8J4FE3',
            },
            {
                type: 'square_small',
                height: 300,
                width: 300,
                ratio: '1:1',
                path: 'https://www.rtlboulevard.nl/sites/default/files/styles/square_small/public/content/images/2018/06/19/ANP-56919532.jpg?itok=lTlIv6qo',
            },
        ],
        type: 'MediaAfbeelding',
    },
    branded: {
        status: false,
        label: null,
        partnerLogo: null,
        partnerUrl: null,
        clickTracker: null,
        impressieTracker: null,
    },
    sectie: {
        id: 221161,
        title: 'Showbizz',
        beschrijving: '',
        woordenboek: 'secties',
        url: 'https://www.rtlboulevard.nl/entertainment/showbizz',
        analytics: null,
        advertising: null,
        items: null,
        pager: null,
        regions: [],
        metadata: {
            entityType: 'taxonomy_term',
            entityBundle: 'secties',
            template: 'default',
            theme: 'boulevard',
        },
        type: 'PageItem',
    },
    chapeau: "Kilo's vliegen eraf",
    lead: "Onze geliefde souldiva Trijntje Oosterhuis is aanzienlijk veel kilo's verloren! De zangeres plaatst foto's op haar Instagram waar te zien is dat ze een wespentaille heeft waar de meeste vrouwen stront jaloers op zullen zijn. ",
    showVideoIcon: false,
    isPremium: false,
    type: 'ArtikelReferentie',
}

describe('ArticleCard component', () => {
    it('should render the card with the correct heading', async () => {
        render(
            <ThemeProvider theme={theme}>
                <ArticleCard article={mockedArticle} />
            </ThemeProvider>
        )

        expect(
            screen.getByRole('heading', {
                level: 2,
                name: 'Trijntje Oosterhuis onherkenbaar veel afgevallen',
            })
        ).toBeInTheDocument()
    })

    it('should render the lead on card hover', async () => {
        render(
            <ThemeProvider theme={theme}>
                <ArticleCard article={mockedArticle} />
            </ThemeProvider>
        )

        // hover card
        fireEvent.mouseEnter(
            screen.getByRole('heading', {
                level: 2,
                name: 'Trijntje Oosterhuis onherkenbaar veel afgevallen',
            })
        )

        await waitFor(() => {
            expect(
                screen.getByText(
                    /Onze geliefde souldiva Trijntje Oosterhuis is aanzienlijk veel kilo's verloren!/
                )
            ).toBeInTheDocument()
        })
    })
})
