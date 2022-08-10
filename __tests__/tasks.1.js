const puppeteer = require("puppeteer");
const path = require('path');
const browserOptions = {
    headless: true,
    ignoreHTTPSErrors: true,
}

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe('UIB - Content-Toc', () => {
    it("Each heading should contain a unique ID", async () => {
        const ids = await page.evaluate(() => {
            const ids = [];
            const headings = document.querySelectorAll('h1,h2, h3, h4, h5, h6 a');
            headings.forEach(heading => {
                ids.push(heading.id);
            });
            return ids;
        });
        expect(ids.length).toBe(ids.filter((id, index, self) => self.indexOf(id) === index).length);
    });
    it("Heading should be wrapped with an outer OL tag", async () => {
        const children = await page.evaluate(() => {
            const children = [];
            const list = document.querySelector('ol');
            list.childNodes.forEach(child => {
                children.push(child.tagName);

            });
            return children;
        });
        expect(children).toEqual([null, 'LI', null, 'LI', null]);
    });
    it("Each Heading should be wrapped in an LI tag containing A tags and OL tag", async () => {
        const children = await page.evaluate(() => {
            const children = [];
            const list = document.querySelector('li');
            list.childNodes.forEach(child => {
                children.push(child.tagName);

            });
            return children;
        });
        expect(children).toEqual([null, 'A', null, 'OL', null]);
    });
    it("Header links should scroll to the corresponding heading", async () => {
        await page.click('#heading-2-3');
        const scrollPosition = await page.evaluate(() => {
            return window.scrollY;
        });
        /*  const headingPosition = await page.evaluate(() => {
             return document.querySelector('#heading-2-3').offsetTop;
         }); */
        expect(scrollPosition).not.toBe(0);
    });
    it("'Back to top' Link should redirect user to the top of the page", async () => {
        await page.click('#main-title');
        const scrollPosition = await page.evaluate(() => {
            return window.scrollY;
        });
        expect(scrollPosition).toBe(0);
    });
});
