---
layout: post
status: publish
published: true
title: Make Wikipedia easier to read
author: ashuttl
author_login: ashuttl
author_email: ashuttleworth@gmail.com
wordpress_id: 43
wordpress_url: http://ashuttleworth.com/?p=43
date: '2012-09-27 09:06:32 -0400'
date_gmt: '2012-09-27 13:06:32 -0400'
type: article
---
The [conventional wisdom](http://www.webtypography.net/Rhythm_and_Proportion/Horizontal_Motion/2.1.2/) among designers is that blocks of text are easiest to read when each line is about 45&ndash;75 characters long. Shorter than that, and your eye has to move back and forth too often (before long, you’ll start skipping lines); much longer, and you’ll have a hard time focusing on the text or knowing how far along you are.

Because Wikipedia by default has a fluid layout, meaning the page takes up as much width as your browser window gives it, it can quickly exceed the ideal length on larger monitors. Fortunately, you can fix this yourself with one small setting.

Here’s what to do:

1. Go to [My](http://en.wikipedia.org/wiki/Special:Preferences) preferences on Wikipedia. You’ll be asked to log in if you aren’t already. Create an account if you have to.
2. Choose the Appearance tab. Click “Custom CSS.”
3. Edit the Custom CSS page using the Edit tab at the top right.
4. Paste this code: <code>#bodyContent { max-width: 800px; }</code>
5. Click “Save page.”

That’s it. [Go read an article](http://en.wikipedia.org/wiki/Robert_Bringhurst) and make your browser window really wide to test it out.

