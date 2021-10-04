class SiteNav extends HTMLElement {

  constructor() {
    super()
    this.outerHTML = `

    <nav class="col-start-1 flex flex-col">
      <a class="p-2" href="/index.html">Simen Wiik</a>
      <div class="p-2"></div>
      <p class="text-gray-100 bg-gray-800 rounded-md p-2">Computer Grapics</p>
      <a class="text-gray-800 p-2" href="/graphics/assignment1.html">Assignment 1</a>
      <a class="text-gray-800 p-2" href="/graphics/assignment2.html">Assignment 2</a>
      <div class="p-2"></div>
      <p class="text-gray-100 bg-gray-800 rounded-md p-2">Game Development</p>
      <a class="text-gray-800 p-2" href="/game/assignment2.html">Assignment 2</a>
      <a class="text-gray-800 p-2" href="/game/assignment3.html">Assignment 3</a>
      <div class="p-2"></div>
      <p class="text-gray-100 bg-gray-800 rounded-md p-2">Cloud Services</p>
      <a class="text-gray-800 p-2" href="/cloud/assignment3.html">Assignment 3</a>
    </nav>
    `
  }
}
customElements.define('site-nav', SiteNav);