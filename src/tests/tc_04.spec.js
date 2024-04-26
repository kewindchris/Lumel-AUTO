import { test, expect } from "@playwright/test"
import { GeneralData } from "../main/constants/generalData.spec"
import { Locators } from "../main/constants/locators.spec"



test('Filtering a to-do is working (Click on the Active button and verify if it shows the Active items. Click on Completed and verify if it shows the completed items) ', async ({ page }) => {


    await page.goto(GeneralData.todoUrl)

    await page.click(Locators.todoInputField)

    await page.locator(Locators.todoInputField).fill(GeneralData.tc04TodoValue)

    await page.keyboard.press('Enter');

    await page.waitForTimeout(1000)

    await page.locator(Locators.todoInputField).fill(GeneralData.tc04SecondTodoValue)

    await page.keyboard.press('Enter');

    await page.click(Locators.todoCheckBox)

    await page.click(Locators.activeButton)

    const element = await page.$('div.view label');
    const text = await element.innerText();

    expect(text).toBe('Do it again');

    await page.click(Locators.completedTodoLocator)

    const labelText = await page.$eval("xpath=//div[@class='view']/label[text()='Book tickets for a cinema']", element => element.innerText);
    expect(labelText).toBe('Book tickets for a cinema');


















})