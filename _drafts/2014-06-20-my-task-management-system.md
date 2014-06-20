---
layout: post
title: Getting it together with TaskPaper and AppleScript
type: post
teaser: "After all these years, I think I’ve finally found the right system for tracking my tasks. Here’s what I’m doing."
---
I've been searching for years for the best system for tracking everything I need to do. At one time or another, I've tried living with paper notes (with or without ["the circle"][circle]), index cards, [Things][], [The&nbsp;Hit&nbsp;List][hit], [TaskPaper][], [OmniFocus][], [Flow][], [GitHub Issues][], [Wunderlist][], [TeuxDeux][], [Todo&nbsp;Cloud][tdc], [Clear][], [Basecamp][], [Evernote][], Apple’s Reminders, and more I'm sure I've forgotten. I've downloaded more iOS apps that have a checkmark for an icon than I can possibly remember.

I never stuck with any of these systems for more than a few months at a time before I found something to hate about it and went looking for a new one. And there are things to love and hate about every one of them: The Hit List is beautiful on the Mac, but hasn't been updated in ages, especially on iOS.[^1] OmniFocus is powerful, but overengineered for my way of thinking, and inconsistent across platforms. Paper notes are good for the brain, but easily lost, not searchable, and impossible to always have with you. TaskPaper is brilliant on the desktop, but doesn't have a great mobile component. (Gabe Weatherhead is a kindred spirit in this – check out his "[task management vision quest](http://www.macdrifter.com/2012/12/a-task-management-vision-quest.html)" for more of this kind of thing.)

[^1]: Although [Mike Abdullah is working](http://mikeabdullah.net/thl-ios7-diary-1-storyboard-merging.html) on changing that.

Well, I've finally hit on a system that works for me, and it's been more or less stable for the past year now, which is a personal record. For anyone out there who's like me – a Mac and iOS user who's comfortable with tinkering and wants things _just so_ – I thought I'd share.

Here's the short version:

1. TaskPaper on the Mac, enhanced by TextExpander
2. Apple iCloud Reminders on iOS
3. Everything synced just the way I want it with AppleScript

### Part 1: TaskPaper + TextExpander on my Mac

TaskPaper is such a great idea. Because it's essentially plain text, it has a lot of the same benefits of paper: the immediacy with which it allows you to get thoughts out of your brain, the way you can outline your tasks in whatever hierarchy you like, the way you can jot down notes that aren't tasks. And its query system is a million times more useful than anything paper can do. (Plus it was made in Bangor, Maine, just like me.) I love it.

There's no real mobile interface for it anymore, which held me back from using it, until I realized I was primarily managing my tasks and getting things done at my Mac – and that I could make my own mobile interface for it (more on that in part 2).

I don't think I'm doing anything particularly novel inside my TaskPaper file itself. I use some pretty typical tags (@done, @today, @start(), @due(), @overdue, @next) to filter my tasks, and I use a slightly customized version of the excellent [Transparent Blue][tb] theme. The most novel thing I'm doing is probably using [TextExpander][] to help with some common queries, which are basically ways 

### Part 2: Apple Reminders on my iPhone and iPad

<div class="highlighttablewrap">
{% highlight applescript linenos=table %}
# Helper Functions
tell (current date) as «class isot» as string to set current_date to text 1 thru 10
to joinList(aList, delimiter)
  set retVal to ""
  set prevDelimiter to AppleScript's text item delimiters
  set AppleScript's text item delimiters to delimiter
  set retVal to aList as string
  set AppleScript's text item delimiters to prevDelimiter
  return retVal
end joinList
to splitString(aString, delimiter)
  set retVal to {}
  set prevDelimiter to AppleScript's text item delimiters
  log delimiter
  set AppleScript's text item delimiters to {delimiter}
  set retVal to every text item of aString
  set AppleScript's text item delimiters to prevDelimiter
  return retVal
end splitString
{% endhighlight %}
</div>



[circle]: http://font.is/the-circle-a-simple-todo-system-to-get-more-things-done/
[Things]: https://culturedcode.com/things/
[hit]: http://www.karelia.com/products/the-hit-list/mac.html
[TaskPaper]: http://www.hogbaysoftware.com/products/taskpaper
[OmniFocus]: https://www.omnigroup.com/omnifocus
[Flow]: http://www.getflow.com/
[GitHub Issues]: http://github.com/features
[Wunderlist]: http://wunderlist.com
[TeuxDeux]: https://teuxdeux.com/
[tdc]: http://www.appigo.com/todo-cloud-collaborative-to-do-app-service.html
[Clear]: http://realmacsoftware.com/clear
[Basecamp]: http://basecamp.com/
[Evernote]: http://evernote.com
[TextExpander]: http://textexpander.com
[tpqueries]: http://www.macdrifter.com/2014/02/the-taskpaper-rd-notebook.html
[tb]: https://github.com/dataduke/mac-taskpaper/blob/master/Themes/Transparent%20Blue.taskpapertheme