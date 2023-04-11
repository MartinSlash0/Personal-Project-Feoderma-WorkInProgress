import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const articlesArray = [
    {
        brand: `Wooden Spoon`,
        date: {
            bg: `април 9, 2023`,
            en: `april 9, 2023`,
            },
        info: {
            bg: `Wooden Spoon съчетава сурови и необработени био сертифицирани 
            масла с безценни билкови екстракти, които не само променят цялостното 
            усещане на тялото...`,
            en: `Wooden Spoon combines raw and unprocessed organic oils with 
            precious herbal extracts, which not only change the overall feeling 
            of body and face but...`,
            },
        img: `images/wooden-spoon-logo.png`,
        alt: {
            bg: `логото на уудън спуун върху бял фон`,
            en: `wooden spoon logo with white color background`,
            },
        link: {
            bg: `https://woodenspoon.eu/за-нас/`,
            en: `https://woodenspoon.eu/en/about-us/`,
            },
        uuid: uuidv4(),
    },
    {
        brand: `Histomer`,
        date: {
            bg: `април 8, 2023`,
            en: `april 8, 2023`,
        },
        info: {
            bg: `HISTOMER предлага богато портфолио на основата на екстракти от растителни
             стволови клетки, натурални инградиенти и минерали, за пълна...`,
            en: `Histomer was the first cosmetic brand all over the world in studying any 
            possible application of botanical stem cells in the dermo-aesthetic field...`,
            },
            img: `images/histomer-logo.png`,
        alt: {
            bg: `логото на хистомер върху тъмно-зелен фон`,
            en: `histomer logo with dark green background`,
        },
        link: {
            bg: ``,
            en: `https://www.histomer.it/en/about/`,
        },
        uuid: uuidv4(),
    },
    {
        brand: `KIBELA naturals`,
        date: {
            bg: `април 7, 2023`,
            en: `april 7, 2023`,
        },
        info: {
            bg: `KIBELA naturals има дългогодишен опит в растениевъдството с установени 
            традиции в биологичното и устойчиво земеделие. Високо ценим живителната сила...`,
            en: `KIBELA naturals have a long history of plant cultivation experience, 
            keeping the traditions sustainable and organic agricultural practices for...`,
        },
        img: `images/kibela-naturals-logo-rose.png`,
        alt: {
            bg: `логото на кибела нейчарълс върху фон от розово злато`,
            en: `kibela naturals logo with rose color background`,
        },
        link: {
            bg: `https://www.kibelanaturals.com/bg/phylosophy`,
            en: `https://www.kibelanaturals.com/phylosophy`,
        },
        uuid: uuidv4(),
    },
]

export const olderArticlesArray = [
    {
        brand: `Dermacode`,
        date: `april 6, 2023`,
        info: `Modern society attaches great importance to the way each of us looks.
        Beauty and health are inseparably linked criteria for Derma Code specialists...`,
        img: `images/dermacode-logo.png`,
        alt: `dermacode logo with white color background`,
        link: ``,
        uuid: uuidv4(),
    },
    {
        brand: `Collagena`,
        date: `april 5, 2023`,
        info: `COLLAGENA x Alexandrina - the first collaboration of COLLAGENA with beauty 
        blogger and influencer - Alexandrina Staneva, administrator of a Facebook group...`,
        img: `images/collagena-logo.png`,
        alt: `collagena logo with brown color background`,
        link: ``,
        uuid: uuidv4(),
    },
    {
        brand: `ProfiDerm Professional`,
        date: `april 4, 2023`,
        info: `Profi Derm combines state-of-the-art technologies with precisely selected 
        active ingredients which act at a cellular level to achieve guaranteed, fast and...`,
        img: `images/profiderm-logo.png`,
        alt: `profiderm logo with black color background`,
        link: ``,
        uuid: uuidv4(),
    },
]