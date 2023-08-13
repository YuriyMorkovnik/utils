// event type should be React.MouseEvent<HTMLButtonElement>
export const copyToClipboard = (event: any, text: string) => {
  event.stopPropagation()
  if (navigator.clipboard !== undefined) {
    navigator.clipboard.writeText(text)
  } else if (window.clipboardData) {
    window.clipboardData.setData('Text', text)
  }
}