import { articlesArray, olderArticlesArray } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

document.addEventListener('click', function(e){
    if(e.target.id === 'load-more-btn'){
        if(document.getElementById('load-more-btn').textContent === 'Show Older Articles'){
            document.getElementById('older-articles-container').classList.toggle('articles-container')
            document.getElementById('older-articles-container').classList.toggle('display')
            document.getElementById('load-more-btn').textContent = 'Hide Older Articles'
        }
        else if(document.getElementById('load-more-btn').textContent === 'Hide Older Articles'){
            document.getElementById('older-articles-container').classList.toggle('articles-container')
            document.getElementById('older-articles-container').classList.toggle('display')
            document.getElementById('load-more-btn').textContent = 'Show Older Articles'
        } 
    }
    else if(e.target.id === 'icon'){
        document.getElementById('menu').classList.toggle('display')
    }
    else if(e.target.id === 'flag'){
        document.getElementById('language-bar-bottom').classList.toggle('display')
        document.getElementById('language-bar-bottom').classList.toggle('shadow')
        document.getElementById('language-bar-bottom').classList.toggle('background')
        document.getElementById('language-bar-top').classList.toggle('shadow')
        document.getElementById('language-bar-top').classList.toggle('background')
    }
    else{
        document.getElementById('menu').classList.add('display')
    }
})

document.addEventListener('scroll', function(e){
    document.getElementById('menu').classList.add('display')
})

function getArticleHtml(){
    
    let articleHtml = ``

    articlesArray.forEach(article => {
        articleHtml += `
        <div class="article">
                        <div class="article-img">
                            <a href="${article.link.en}" target="_blank">
                                <img src="${article.img}" alt="${article.alt.en}">
                            </a>
                        </div>
                        <div class="article-text">
                            <p class="date">${article.date.en}</p>
                            <h2>${article.brand}</h2>
                            <p>${article.info.en}</p>
                            <div class="btn-container">
                                <a class="article-link" href="${article.link.en}" target="_blank" data-read="${article.uuid}">
                                    Read More...
                                </a>
                            </div>
                        </div>
                    </div>
        `
    });
    return articleHtml
}

function getOlderArticleHtml(){
    
    let articleHtml = ``

    olderArticlesArray.forEach(article => {
        articleHtml += `
        <div class="article">
                        <div class="article-img">
                            <a href="${article.link.en}" target="_blank">
                                <img src="${article.img}" alt="${article.alt.en}">
                            </a>
                        </div>
                        <div class="article-text">
                            <p class="date">${article.date.en}</p>
                            <h2>${article.brand}</h2>
                            <p>${article.info.en}</p>
                            <div class="btn-container">
                                <a class="article-link" href="${article.link.en}" target="_blank" data-read="${article.uuid}">
                                    Read More...
                                </a>
                            </div>
                        </div>
                    </div>
        `
    });
    return articleHtml
}

function render() {
    document.getElementById('articles-container').innerHTML = getArticleHtml()
    document.getElementById('older-articles-container').innerHTML = getOlderArticleHtml()
}

render()