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
categories:
- Notes
tags: []
comments: []
---
<p>The <a href="http:&#47;&#47;www.webtypography.net&#47;Rhythm_and_Proportion&#47;Horizontal_Motion&#47;2.1.2&#47;">conventional wisdom<&#47;a> among designers is that blocks of text are easiest to read when each line is about 45&ndash;75 characters long. Shorter than that, and your eye has to move back and forth too often (before long, you&rsquo;ll start skipping lines); much longer, and you&rsquo;ll have a hard time focusing on the text or knowing how far along you are.<&#47;p></p>
<p>Because Wikipedia by default has a fluid layout, meaning the page takes up as much width as your browser window gives it, it can quickly exceed the ideal length on larger monitors. Fortunately, you can fix this yourself with one small setting.<&#47;p></p>
<p>Here&rsquo;s what to do:<&#47;p></p>
<ol>
<li>Go to <a href="http:&#47;&#47;en.wikipedia.org&#47;wiki&#47;Special:Preferences">My preferences<&#47;a> on Wikipedia. You&rsquo;ll be asked to log in if you aren&rsquo;t already. Create an account if you have to.<&#47;li>
<li>Choose the Appearance tab. Click &ldquo;Custom CSS.&rdquo;<&#47;li>
<li>Edit the Custom CSS page using the Edit tab at the top right.<&#47;li>
<li>Paste this code: <code>#bodyContent { max-width: 800px; }<&#47;code><&#47;li>
<li>Click &ldquo;Save page.&rdquo;<&#47;li><br />
<&#47;ol></p>
<p>That&rsquo;s it. <a href="http:&#47;&#47;en.wikipedia.org&#47;wiki&#47;Robert_Bringhurst">Go read an article<&#47;a> and make your browser window really wide to test it out.<&#47;p></p>
