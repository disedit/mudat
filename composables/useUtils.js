export const useUtils = () => {
  return {
    richTextEmpty: (richText) => {
      return richText.content[0].hasOwnProperty('content')
    }
  }
}
