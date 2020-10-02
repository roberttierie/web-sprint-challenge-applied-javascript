
const articlesObject = {
    "articles": {
        "javascript": [
            {
                "id": "0802b90e-4057-45c8-b088-600e6aaec339",
                "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
                "authorPhoto": "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
                "authorName": "SIR RUFF'N'STUFF"
            },
            {
                "id": "fcb67309-3e6a-413e-b63d-e2016bce3371",
                "headline": "Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences",
                "authorPhoto": "https://tk-assets.lambdaschool.com/a9471235-ed71-4b11-ae15-5a4fa1151d30_bones.jpg",
                "authorName": "BONES R. LIFE"
            },
            {
                "id": "ce4499a3-da4b-413a-b78e-7dbc5b23f1f3",
                "headline": "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",
                "authorPhoto": "https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg",
                "authorName": "PUPPER S. DOGGO"
            },
            {
                "id": "ff30e2f4-4738-4551-ab4f-ff95e5471668",
                "headline": "Typescript: Ten Things you Should Know Before Building Your Next Angular Application",
                "authorPhoto": "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
                "authorName": "SIR RUFF'N'STUFF"
            }
        ],
        "bootstrap": [
            {
                "id": "e1b5393e-e508-40e9-b4b2-f8460e45bee5",
                "headline": "Bootstrap 5: Get a Sneak Peak at all the New Features",
                "authorPhoto": "https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg",
                "authorName": "FIDO WALKSALOT"
            },
            {
                "id": "cd2a7412-4330-4caf-83c5-e093d8da8e85",
                "headline": "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)",
                "authorPhoto": "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
                "authorName": "MAX GOODBOYE"
            },
            {
                "id": "2d6d4c2f-6b9e-46c5-a50d-ac9c8e064340",
                "headline": "The Hottest New Bootstrap 4 Components Every Developer Needs to Know About",
                "authorPhoto": "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
                "authorName": "MAX GOODBOYE"
            }
        ],
        "technology": [
            {
                "id": "79231bae-38e2-4e22-b73c-31ac4f1f9d8a",
                "headline": "AI: What Are the Ethical Ramifications of the Future?",
                "authorPhoto": "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
                "authorName": "MAX GOODBOYE"
            },
            {
                "id": "99c4a414-7b62-4914-9fa5-a09197cccb91",
                "headline": "AR or VR: How We Will See the World Through a Digital Lense",
                "authorPhoto": "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
                "authorName": "MAX GOODBOYE"
            },
            {
                "id": "7020ac0e-5210-4570-a979-6050ba16de09",
                "headline": "Quantum Computing: Where we Are Now, and Where We Will Be Very Soon",
                "authorPhoto": "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
                "authorName": "MAX GOODBOYE"
            }
        ],
        "jquery": [
            {
                "id": "2ca8879b-e321-4287-8a2f-37e5851251ae",
                "headline": "History of Javascript Libraries: from jQuery to React",
                "authorPhoto": "https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg",
                "authorName": "PUPPER S. DOGGO"
            },
            {
                "id": "6cc7a427-c3ea-49d9-bee0-8fd2ca52d759",
                "headline": "jQuery Animations: When and Where to Use Them, and Not CSS",
                "authorPhoto": "https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg",
                "authorName": "FIDO WALKSALOT"
            },
            {
                "id": "dba0098f-00a0-4c07-bd3e-36df850044ed",
                "headline": "Why I Use jQuery in Every Application I Create and Why You Should Too",
                "authorPhoto": "https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg",
                "authorName": "FIDO WALKSALOT"
            }
        ],
        "node": [
            {
                "id": "1d188d82-40b3-4ed0-a553-361aff4ad04c",
                "headline": "Node.js in 2018: Which Framework? Express, Sails, Hapi?",
                "authorPhoto": "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
                "authorName": "SIR RUFF'N'STUF"
            },
            {
                "id": "71d60553-4d97-4a77-a2d5-720977dc1e51",
                "headline": "MongoDB: NoSQL vs. SQL, the Debate Continues..",
                "authorPhoto": "https://tk-assets.lambdaschool.com/a9471235-ed71-4b11-ae15-5a4fa1151d30_bones.jpg",
                "authorName": "BONES R. LIFE"
            }
        ]
    }
}


// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from 'axios';
axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then( res => {
        const topicData = res.data
        cardPlacement.append(cardCreator(object))
    })
    .catch(errors=> {
        console.log(errors)
      })


      function eventListener (event) {
        console.log(`
        Article: ${event.headline}`)
    
    }
function cardCreator(object) {
    const newCard = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const cardImg = document.createElement('img')
    const authorName = document.createElement('span')

    newCard.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')


    cardImg.src = object.authorPhoto
    authorName.textContent = object.authorName
    headline.textContent = object.headline

    newCard.appendChild(headline, author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(cardImg, authorName)

    newCard.addEventListener('click', eventListener )

    return newCard


}
console.log(cardCreator())

const cardPlacement = document.querySelector('.cards-container')
cardPlacement.appendChild(cardCreator())




