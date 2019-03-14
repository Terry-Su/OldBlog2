import {
  EN_BLOGS_ENTRY,
  EN_DIRECTORY_PLACING_DATA_EXCEPT_NAV_HTML,
  EN_BLOGS_OUTPUT
} from "./constants/paths"
import {
  EN_NAME_OF_DIRECTORY_PLACING_DATA_EXCEPT_NAV_HTML,
  NAME_GET_NAV_META_DESCRIPTION,
  EN
} from "./constants/names"
import { KATEX_JS_URL, KATEX_CSS_URL } from "./constants/urls"
import {
  SLOGAN,
  TEXT_LOGO,
  TITLE,
  GET_NAV_META_DESCRIPTION,
  COMMENT_ROOT,
  COMMMENT_PAGE_ROOT,
  HOME,
} from "./constants/localization"
import { NAV_SCRIPTS, DETAIL_SCRIPTS, GET_SHARED_NAV, GET_SHARED_DETAIL, GET_SHARED_COMMON } from "./shared"

const {
  default: buildBlogContents
} = require( "../../TSBlogContentsBuilder/build/index" )
const gulp = require( "gulp" )
const rimraf = require( "rimraf" )

build()

if ( process.env.WATCH === "1" ) {
  gulp.watch( `${EN_BLOGS_ENTRY}/**`, () => build() )
}

function build() {
  rimraf.sync( EN_DIRECTORY_PLACING_DATA_EXCEPT_NAV_HTML )

  buildBlogContents( EN_BLOGS_ENTRY, EN_BLOGS_OUTPUT, {
    ...GET_SHARED_COMMON( EN ),
    lang                                   : EN,
    nameOfDirectoryPlacingDataExceptNavHtml: EN_NAME_OF_DIRECTORY_PLACING_DATA_EXCEPT_NAV_HTML,
    nav                                    : {
      ...GET_SHARED_NAV( EN ),
    },
    detail: GET_SHARED_DETAIL( EN )
  } )

  console.log( "Built" )
}
