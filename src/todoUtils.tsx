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

const alphabet = range('a'.charCodeAt(0), 'z'.charCodeAt(0)).map((code) => String.fromCharCode(code))
const numbers = range(0, 1e6)
export const initialTodoList = alphabet.map((text) => buildTodo(text))

function range (start: number, end: number) {
  const range = []
  for (let i = start; i <= end; i++) {
    range.push(i)
  }
  return range
}