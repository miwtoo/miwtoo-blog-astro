import markdownit from 'markdown-it'
import Shiki from '@shikijs/markdown-it'


const md = markdownit()
md.use(await Shiki({
  theme: "dracula-soft",
}))

export default md