import { fetchPages } from "/static/api.js";

class BlogElement extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    async render(){
        const output = await fetchPages();
        const res = output.home.sections[2]
        console.log(res.image_url)
        this.innerHTML = `
            <div class="px-4 py-8 lg:px-28 lg:py-20">
                <div class=" font-semibold text-gray-600">${res.heading}</div>
                <h1 class="font-bold text-3xl lg:text-5xl mt-2">${res.caption}</h1>
                <hr class="mt-8">
                <div class="lg:flex lg:flex-row justify-between">
                ${res.features.map(feature=>`
                        <div class="lg:w-1/3 my-12 lg:px-20 flex justify-around flex-col">
                            <img src="${res.image_url}/${feature.img}" />
                            <div class="py-4 font-bold lg:font-semibold text-xl lg:text-2xl">${feature.heading}</div>
                            <div class="">${feature.description}</div>
                            <button class="p-2 mt-8 border-black border"><a href=${res.cta.url}>${res.cta.label}</a></button>
                        </div>
                `).join('')}
                </div>
            </div>
        `
    }
}

customElements.define('blog-comp', BlogElement);