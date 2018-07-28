import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import PagePreview from './preview-templates/PagePreview'
import TripPreview from './preview-templates/TripPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewStyle('/admin/cms.css')
CMS.registerPreviewTemplate('about', PagePreview)
CMS.registerPreviewTemplate('gear', PagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('trip', TripPreview)
