import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import PagePreview from './preview-templates/PagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewStyle('/admin/cms.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', PagePreview)
CMS.registerPreviewTemplate('blog', PostPreview)
