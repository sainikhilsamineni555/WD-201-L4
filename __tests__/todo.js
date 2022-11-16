const todoList = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

/* eslint-disable-next-line no-undef */
describe("Todolist Testing", () => {
  // eslint-disable-next-line no-undef
  beforeAll(() => {
    add({
      title: "Bring Milk",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  // eslint-disable-next-line no-undef
  test("Add a new todo in list", () => {
    // expect(all.length).toBe(0);

    let length = all.length;

    add({
      title: "News Paper",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    // eslint-disable-next-line no-undef
    expect(all.length).toBe(length + 1);
  });

  // eslint-disable-next-line no-undef
  test("Mark todo as a completed", () => {
    // eslint-disable-next-line no-undef
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    // eslint-disable-next-line no-undef
    expect(all[0].completed).toBe(true);
  });

  // eslint-disable-next-line no-undef
  test("retrive all todos that are overdue", () => {
    let listOfTodos = overdue();

    // eslint-disable-next-line no-undef
    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  // eslint-disable-next-line no-undef
  test("retrive all todos that are dueToday", () => {
    let listOfTodos = dueToday();

    // eslint-disable-next-line no-undef
    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  // eslint-disable-next-line no-undef
  test("retrive all todos that are dueLater", () => {
    let listOfTodos = dueLater();

    // eslint-disable-next-line no-undef
    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
