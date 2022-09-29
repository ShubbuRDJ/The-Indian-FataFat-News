console.log("this is index js file");
// api key ------>     8cd620b8a22b4b3da57396cdbee1452c

let country='in';
let apiKey='8cd620b8a22b4b3da57396cdbee1452c';

// grab the news container 
let newsAccordion=document.getElementById('newsAccordion');
// create a ajax get request 
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`,true);

xhr.onload=function(){
    if(this.status===200){
        let json = JSON.parse(this.responseText);
        let articles=json.articles;
        let newsHTML="";

        articles.forEach(function(element,index) {
            let news=`<div class="card">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            ${element['title']}
                            </button>
                        </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                        <div class="card-body">${element['description']}. <a href="${element['url']}" target="_blank">Read more here</a> </div>
                        </div>
                    </div>`
                newsHTML+=news;

            });
        newsAccordion.innerHTML=newsHTML;
    }
    else console.log("Some error occured");
}
xhr.send();