/**
 * This is the mrCoxallStack program
 *
 * author: Mitchell Hill
 * version: 1.0
 * since: 2024-10-21
 */
class MrCoxallStack {
  private readonly stack: string[] = []

  public push (item: string): void {
    this.stack.push(item)
  }

  public showStack (): string {
    return this.stack.join(', ')
  }
}

export { MrCoxallStack }
