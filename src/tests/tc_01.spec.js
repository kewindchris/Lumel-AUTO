import { test, expect } from "@playwright/test"
import { GeneralData } from "../main/constants/generalData.spec"
import { Locators } from "../main/constants/locators.spec"



test('To check the TODO functionality', async ({ page }) => {


    await page.goto(GeneralData.todoUrl)

    await page.click(Locators.todoInputField)

    await page.locator(Locators.todoInputField).fill(GeneralData.tc01TodoValue)

    await page.keyboard.press('Enter');

    await expect(page.locator(Locators.todoAddedCheck)).toHaveText(GeneralData.tc01TodoValue)






})