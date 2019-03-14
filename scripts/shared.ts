import {
  NAV_BUNDLE,
  DETAIL_BUNDLE,
  KATEX_CSS_URL,
  KATEX_JS_URL,
  MERMAID_URL
} from "./constants/urls"
import {
  SLOGAN,
  TEXT_LOGO,
  TITLE,
  GET_NAV_META_DESCRIPTION,
  COMMENT_ROOT,
  COMMMENT_PAGE_ROOT,
  HOME,
  SITEMAP_FILE_NAME,
  SITEMAP_ROOT_WEBSITE,
  DETAIL_BOTTOM_TEXT,
} from "./constants/localization"
import { NAME_GET_NAV_META_DESCRIPTION } from "./constants/names"

export const STATISTIC_SCRIPT =  `
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cc6d133d9a7057a832c9b0dd0242546b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
`



export const NAV_SCRIPTS = [ `<script src="${NAV_BUNDLE}"></script>`, STATISTIC_SCRIPT ]

export const DETAIL_SCRIPTS = [ `<script src="${DETAIL_BUNDLE}"></script>`, STATISTIC_SCRIPT ]

export const GET_SHARED_NAV = lang => ( {
  slogan                           : SLOGAN[ lang ],
  textLogo                         : TEXT_LOGO[ lang ],
  title                            : TITLE[ lang ],
  scripts                          : NAV_SCRIPTS,
  [ NAME_GET_NAV_META_DESCRIPTION ]: GET_NAV_META_DESCRIPTION[ lang ],
  symbolUpdatingLocalstorage       : new Date()
} )

export const GET_SHARED_DETAIL = lang => ( {
  slogan         : SLOGAN[ lang ],
  textLogo       : TEXT_LOGO[ lang ],
  scripts        : DETAIL_SCRIPTS,
  commentRoot    : COMMENT_ROOT[ lang ],
  commentPageRoot: COMMMENT_PAGE_ROOT[ lang ],
  home           : HOME[ lang ],
  bottomText     : DETAIL_BOTTOM_TEXT[ lang ],
  mathCssUrl     : KATEX_CSS_URL,
  mathJsUrl      : KATEX_JS_URL,
  mermaidJsUrl   : MERMAID_URL,
} )

export const GET_SHARED_COMMON = lang => ( {
  sitemapFileName   : SITEMAP_FILE_NAME[ lang ],
  sitemapRootWebsite: SITEMAP_ROOT_WEBSITE[ lang ]
} )