export class Locators {


    static todoInputField = "xpath=//input[@autofocus and @placeholder='What needs to be done?' and contains(@class, 'new-todo')]"

    //TC_01

    static todoAddedCheck = "xpath=//div[@class='view']"

    //TC_02

    static todoCheckBox = "xpath=//input[@type='checkbox' and @class='toggle']"
    static todoListDone = "xpath=//li[@class='completed'][div/label[text()='Say no to junk foods']]"
    static expectedItemNumber = "0"
    static itemLocator = "xpath=//span[@class='todo-count'][strong[text()='0' and parent::span[@class='todo-count']] and text()=' items left ']"

    //TC_03

    static closeTodo = "xpath=(//button[@class='destroy'])[1]"
    static itemLocator03 = "xpath=//span[@class='todo-count' and strong[text()='1'] and contains(text(), 'item left')]"

    //TC_04

    static activeButton = "xpath=//a[@routerlink='/active' and @href='#/active'][text()='Active']"
    static activeTodoLocator = "xpath=//div[@class='view'][input[@type='checkbox' and @class='toggle'] and label[text()='Do it again']]"
    static completedTodoLocator = "xpath=//a[@routerlink='/completed' and @href='#/completed']"


}