import { createTodo, toggleTodo, filterTodos} from "./actions";
import {CREATE_TODO, TOGGLE_TODO, FILTER_TODOS} from "./actions";


describe("CREATE_TODO", function () {
    test("creates a new todo - action", function () {
        expect(createTodo("TEST")).toEqual({type:CREATE_TODO, payload:"TEST"})
    })
    test("toggle - action", function () {
        expect(toggleTodo(1)).toEqual({type:TOGGLE_TODO, payload:1})
    })
    test("filter - action", function () {
        expect(filterTodos("completed")).toEqual({type:FILTER_TODOS, payload:"completed"})
    })
  })
