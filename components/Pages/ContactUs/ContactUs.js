import { fetchPages } from "/static/api.js";

class ContactUs extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    async render(){
        const output = await fetchPages();
        const res = output.home.sections[3]

        this.innerHTML = `
            <div class="px-4 py-8 lg:px-28 lg:py-20 bg-blue-700 text-white flex flex-col items-center lg:items-start justify-center">
                <p class="font-bold mt-8">${res.caption}</p>
                <p class="font-bold text-3xl lg:text-5xl mt-8">${res.description}</p>
                <button class="bg-yellow-600 px-8 py-4 my-8"><a href=${res.cta.url}>${res.cta.label}</a></button>
            </div>
        `
    }
}

customElements.define('contact-us', ContactUs);