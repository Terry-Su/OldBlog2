import { CN_BLOGS_ENTRY, CN_BLOGS_OUTPUT } from "./constants/paths"
import {
  NAME_GET_NAV_META_DESCRIPTION,
  CN,
  CN_TOP_DIRECTION
} from "./constants/names"
import { KATEX_JS_URL, KATEX_CSS_URL, CN_ROBOTS_FILE_URL, CN_GOOGLE_FILE_URL } from "./constants/urls"
import {
  NAV_SCRIPTS,
  DETAIL_SCRIPTS,
  GET_SHARED_NAV,
  GET_SHARED_DETAIL,
  GET_SHARED_COMMON
} from "./shared"
import {
  SLOGAN,
  TEXT_LOGO,
  TITLE,
  COMMENT_ROOT,
  COMMMENT_PAGE_ROOT,
  HOME,
  GET_NAV_META_DESCRIPTION
} from "./constants/localization"

const {
  default: buildBlogContents
} = require( "../../TSBlogContentsBuilder/build/index" )
const gulp = require( "gulp" )
const rimraf = require( "rimraf" )

build()
if ( process.env.WATCH === "1" ) {
  gulp.watch( `${CN_BLOGS_ENTRY}/**`, () => build() )
}

function build() {
  rimraf.sync( CN_BLOGS_OUTPUT )

  buildBlogContents( CN_BLOGS_ENTRY, CN_BLOGS_OUTPUT, {
    ...GET_SHARED_COMMON( CN ),
    lang             : CN,
    topDirectoryName : CN_TOP_DIRECTION,
    filesCopyToOuptut: [ CN_ROBOTS_FILE_URL, CN_GOOGLE_FILE_URL ],
    nav              : GET_SHARED_NAV( CN ),
    detail           : GET_SHARED_DETAIL( CN ),
  } )

  console.log( "Built" )
}
