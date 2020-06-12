import { v4 as uuid } from 'uuid'

export interface ITodo {
  id: string;
  text: string;
  complete: boolean;
}

export function generateId () {
  return uuid()
}

export function wait (time = 0) {
  return new Promise((res) => setTimeout(() => res(), time))
}

export function buildTodo (text: string): ITodo {
  return {
    text,
    complete: false,
    id: generateId(),
  }
}

export const initialTodoList = [
  buildTodo('a'),
  buildTodo('b'),
  buildTodo('c'),
  buildTodo('d'),
  buildTodo('e'),
  buildTodo('f'),
  buildTodo('g'),
  buildTodo('h'),
  buildTodo('i'),
  buildTodo('j'),
  buildTodo('k'),
  buildTodo('l'),
  buildTodo('m'),
  buildTodo('n'),
  buildTodo('o'),
  buildTodo('p'),
]