const stack = require('../src/stack');

test('Push should be undefined at start', () => {
    expect(stack.push()).toBeDefined();
});

const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5; // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

describe('Clicking "Poppa stacken!"', () => {
	it('should open a prompt box', async () => {
		let pop = await driver.findElement(By.id('pop'));
		let alert = await driver.switchTo().alert();
	});
});
