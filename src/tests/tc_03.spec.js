import { test, expect } from "@playwright/test"
import { GeneralData } from "../main/constants/generalData.spec"
import { Locators } from "../main/constants/locators.spec"



test('Delete a to-do and Verify if the item is removed from the list ', async ({ page }) => {


    await page.goto(GeneralData.todoUrl)

    await page.click(Locators.todoInputField)

    await page.locator(Locators.todoInputField).fill(GeneralData.tc03TodoValue)

    await page.keyboard.press('Enter');

    await page.waitForTimeout(1000)

    await page.locator(Locators.todoInputField).fill(GeneralData.tc03SecondTodoValue)

    await page.keyboard.press('Enter');

    await page.click(Locators.todoCheckBox)

    await page.click(Locators.closeTodo)

    const todoCountElement = await page.$('span.todo-count');
    const todoCountText = await todoCountElement.innerText();

    expect(todoCountText).toContain('1 item left');















})