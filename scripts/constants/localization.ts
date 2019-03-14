import { EN, CN } from "./names"
import { GET_FN_GET_NAV_META_DESCRIPTION_FN } from "./utils"

// export const TEMPLATE = {
//   [EN]: '',
//   [CN]: ''
// }

export const TEXT_LOGO = {
  [ EN ]: "TS",
  [ CN ]: "苏溪云"
}

export const SLOGAN = {
  [ EN ]: "Step by step",
  [ CN ]: "不积跬步，无以至千里"
}

export const TITLE = {
  [ EN ]: "Terry Su Blog",
  [ CN ]: "苏溪云的博客"
}

export const GET_NAV_META_DESCRIPTION = {
  [ EN ]: GET_FN_GET_NAV_META_DESCRIPTION_FN( SLOGAN[ EN ] ),
  [ CN ]: GET_FN_GET_NAV_META_DESCRIPTION_FN( SLOGAN[ CN ] )
}




export const COMMENT_ROOT = {
  [ EN ]: "https://api.github.com/repos/terry-su/tsblogcomments-en/issues/",
  [ CN ]: "https://api.github.com/repos/terry-su/tsblogcomments-cn/issues/"
}

export const COMMMENT_PAGE_ROOT = {
  [ EN ]: "https://github.com/Terry-Su/TSBlogComments-En/issues/",
  [ CN ]: "https://github.com/Terry-Su/TSBlogComments-Cn/issues/"
}


export const HOME = {
  [ EN ]: "/",
  [ CN ]: "/cn"
}

export const SITEMAP_FILE_NAME = {
  [ EN ]: "sitemap-en.txt",
  [ CN ]: "sitemap-cn.txt",
}

export const SITEMAP_ROOT_WEBSITE = {
  [ EN ]: "https://terry-su.github.io",
  [ CN ]: "https://terry-su.github.io/cn",
}

export const DETAIL_BOTTOM_TEXT = {
  [ EN ]: `<br/>OK, that's all. It's my pleasure if this article helped you. And if you have any questions or advice, just make a comment at the bottom. Hope for your incisive insights.`,
  [ CN ]: "<br/> 如果本文帮助到了你，我也十分荣幸。如果有任何疑问或者建议，都欢迎在下方评论区提出。期待你的真知灼见。",
}