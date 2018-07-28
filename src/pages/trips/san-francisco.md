---
templateKey: trip
title: San Francisco
displayTitle: San Francisco
date: '2018-07-28T12:04:38+12:00'
image: /img/jumbotron.jpg
location: 'California, USA'
published: true
meta:
  - text: Days
    value: '27'
  - text: Beers
    value: '102'
description: >-
  The description goes above the fold, it's useful for trips that contain links
  to other trips! Then this will appear below the header, but before any
  additional content. Then the body will appear below that. In terms of Markdown
  files, this is stored in the front matter, whilst the body below is the body
  of the file. **Note:** currently not processed as markdown.
---

## Welcome to Bodytown!

The body of the document should be siiiick.

This is also optional though, as some trips don't want a body. Semantically, if a trip doesn't have children (or whatever other rich complex thing we decide to link in the middle between the description and the body) then the post should be written here. This will make it a lot easier to edit and update the content in github for example, which can be ideal for quick fixes.

NetlifyCMS is a little annoying in terms of editing and releasing a batch of documents all at once, which is obviously something we want to do. For example we can't link to a draft document, as technically a draft is on a different branch. So in order to work around this I've added the Publish flag above. It's intended workflow is that you make the parent trip, you set it to not published, publish it (yeah I know) and make sure it's in the master branch, then you can create the days of the trip and link them via the parent bit. These should probably be unpublished too, just for sanity but we can figure that out later. I think if the parent is unpublished the children shouldn't appear even if they are.

Then when you're ready to roll, you can change the parent to published and push that out.
