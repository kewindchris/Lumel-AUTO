import { test, expect } from "@playwright/test"
import { GeneralData } from "../main/constants/generalData.spec"
import { Locators } from "../main/constants/locators.spec"



test('To verify an item as complete works', async ({ page }) => {


    await page.goto(GeneralData.todoUrl)

    await page.click(Locators.todoInputField)

    await page.locator(Locators.todoInputField).fill(GeneralData.tc02TodoValue)

    await page.keyboard.press('Enter');

    await page.click(Locators.todoCheckBox)

    await expect(page.locator(Locators.todoListDone)).toHaveClass("completed")

    expect(page.locator(Locators.itemLocator)).toHaveText("0 items left ")











})