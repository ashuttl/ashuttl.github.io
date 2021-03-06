---
title: Improved Apple typography is a relief, but not a surprise
type: post
layout: post
teaser: "Apple’s new San Franscisco UI font, first developed for the Watch and now apparently making its way to the Mac and iOS, deserves to be praised. But Apple knew what they were doing with Helvetica Neue more than they’ve been given credit for."
---
Much has been made of [Mark Gurman’s claim that Apple will switch to San Francisco as the primary iOS and OS X interface font](http://9to5mac.com/2015/05/20/apple-plans-to-refresh-ios-9-os-x-10-11-using-new-apple-watch-font/) in the next major releases. After a couple of weeks living with San Francisco on the Apple Watch, I’m about as excited about this as it would be possible to be, but Apple’s previous choice doesn’t completely deserve the [bad rap](http://www.fastcodesign.com/3031432/why-apples-new-font-wont-work-on-your-desktop "Tobias Frere-Jones is unimpressed with Helvetica as an interface font.") it has gotten in some quarters.

Granted, they’ve made a decade of atrocious typographic choices like the far, far too delicate version of Palatino[^1] they crammed into iBooks and the casting of the lovely but remarkably unsuitable Helvetica Neue as a primary UI font across both operating systems. The in-house San Francisco design is beautiful and distinct, betraying a delightful awareness of the human aspects of comfort and legibility. It demonstrates a stunning increase in typographic focus for Apple.

[^1]:	Seriously, it looks like it was designed to be set no smaller than a large headline.

But Apple has clearly been aware for a while that Helvetica Neue wasn’t designed for user interfaces. The actual font file they use for the interfaces isn’t the same Helvetica Neue that’s in your font picker or that you can buy from Linotype. It’s a special version, apparently (based on in-font metadata) created for Apple by Linotype itself, that’s obviously meant to smooth over a few of the ways in which Helvetica Neue is most egregiously unsuited for the task of being a UI font.

You can find this font yourself in your /System/Library/Fonts folder as HelveticaNeueDeskInterface.ttc.[^2] The naming of this file makes me wonder if there’s a corresponding HelveticaNeueMobileInterface.ttc tucked away in iOS, but I haven’t dug around to discover it yet. Here’s a simple comparison of the two fonts:

<img src="/images/helvetica-comparison.png">

Compared to the unmodified version, this UI version of Helvetica Neue is a little heavier and spaced a little more widely. It also has a smaller line height.

Here’s an overlay of the two versions on top of each other that helps underscore how much custom work went into the UI version:

<img src="/images/helvetica-comparison-animated.gif">

You can observe these differences directly even without mucking around with a font editor and your System folder. Open Mail.app and create a new message. Set your message font to Helvetica Neue at 13 points and type a bit of text that you can see in the UI of the message editor, like your subject line or From address.

<img src="/images/helvetica-comparison-mail.png">

You’ll immediately see that, although the two bits of text are the same point size, the UI one is spaced more generously, antialiased a bit more smoothly, and generally  more comfortable to read. Apple didn’t simply press an unmodified Helvetica Neue into service in their user interface – they knew some of its weaknesses and tried to make the best of it. (Admittedly, trying to come close to the metrics of Lucida Grande was also probably a consideration.)

Apple’s new San Francisco font deserves to be praised as a masterpiece, and it’s a relief to see the company taking so seriously something as subtle but important as typography. Let’s hope that whatever team inside Apple was responsible for it keeps expanding. Fingers crossed that they’re working on a set of purpose-built fonts for iBooks.

[^1]:	Seriously, it looks like it was designed to be set no smaller than a large headline.

[^2]:	TTC stands for TrueType Collection; it’s a way of putting multiple TrueType fonts in a single file.
