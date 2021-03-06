export const processRawText = (rawText) => {

  if (rawText == null) return null

  const charIsBreakLine = (char) => char.indexOf("\n") != -1 || char.indexOf("\r") != -1
  const charIsBlank = (char) => char.indexOf(" ") != -1
  let paragraphCounter = 1 
  let lineBreakCounter = 1
  let characterCounter = 0
  let lineIndexInParagraphCounter = 0

  return [...(rawText.trim())] // Trim text and turns it to an array of all the characters

    // Clean characters 
    .reduce((chars, char, index, original) => {
      
      // Get previous chars (in the accumulator)
      const prevChar = typeof chars === 'undefined' || chars.length == 0 ? '' : chars[chars.length - 1] || ''
      const prevPrevChar = typeof chars === 'undefined' || chars.length <= 1  ? '' : chars[chars.length - 2] || ''
      
      // Get next chars (in the original array) 
      const nextChar = original[index + 1] || ''
      const nextNextChar = original[index + 2] || ''

      if ( charIsBlank(char) ) 
        if ( charIsBreakLine(prevChar) || // Filters blanks preceded by breakline
             charIsBlank(prevChar) || // Filters blanks preceded by blank
             charIsBreakLine(nextChar) // Filters blanks followed by breakline
        ) return chars
      
      if ( charIsBreakLine(char) )
        // Filters 3+ following breakline
        if ( charIsBreakLine(prevChar) && charIsBreakLine(prevPrevChar)) return chars

      chars.push(char)
      return chars

    }, [])

    // Mark paragraph
    .map((char, index, original) => {
      
      const prevChar = original[index - 1] || ''
      
      if ( charIsBreakLine(char) ) {
        if ( charIsBreakLine(prevChar) ) {
          paragraphCounter++
          lineIndexInParagraphCounter = 0
          return {toDelete: true}
        } else {
          lineBreakCounter++
          lineIndexInParagraphCounter++
          return {toDelete: true}
        }
      } else {
        characterCounter++
        return {
          id: paragraphCounter + '-' + lineBreakCounter + '-' + characterCounter, 
          value: char, 
          paragraph: paragraphCounter, 
          line: lineBreakCounter,
          lineIndexInParagraph: lineIndexInParagraphCounter,
          isSelected: false,
          mark: null,
          index: characterCounter - 1,
        }
      }

    })

    // Filters breaklines
    .filter((charObj) => !charObj.hasOwnProperty('toDelete'))
}

export const optimizeProcessedText = (processedText) => {

  const paragraphs = Object.values(groupBy(processedText, 'paragraph'))
    .map(paragraph => Object.values(groupBy(paragraph, 'line'))
      // .map(line => line
      //   .map(character => character)
      // )
    )

  return paragraphs
}

const groupBy = (items, key) => items.reduce(
  (result, item) => ({
    ...result,
    [item[key]]: [
      ...(result[item[key]] || []),
      item,
    ],
  }), 
  {},
);



