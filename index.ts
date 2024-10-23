/**
 * This program uses mrCoxallStack
 *
 * author: Mitchell Hill
 * version: 1.0
 * since: 2024-10-21
 */
import { MrCoxallStack } from './mrCoxallStack'

function main (): void {
  // Push items to fruit stack
  const fruitStack = new MrCoxallStack()
  fruitStack.push('apple')
  fruitStack.push('banana')
  fruitStack.push('cherry')

  // Push items to color stack
  const colorStack = new MrCoxallStack()
  colorStack.push('red')
  colorStack.push('green')
  colorStack.push('blue')

  // Push items to dog stack
  const dogStack = new MrCoxallStack()
  dogStack.push('poodle')
  dogStack.push('retriever')
  dogStack.push('beagle')

  // display the contents of each stack
  console.log(`Fruit items: ${fruitStack.showStack()}`)
  console.log(`Color items: ${colorStack.showStack()}`)
  console.log(`Dog items: ${dogStack.showStack()}`)

  console.log('\nDone.')
}

main()
