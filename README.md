mercury_fulltext
==============
A Tiny Tiny RSS plugin written for [tt-rss](https://tt-rss.org) as a replacement for the grandpa-old plugin [af_readability](https://git.tt-rss.org/fox/tt-rss/src/master/plugins/af_readability), which doesn't work well for many RSS sites I subscribe to.

It utilizes [Mercury Parser](https://mercury.postlight.com/web-parser/) to extract the full content for feeds. An API key is required to use this plugin, which is available for free [here](https://mercury.postlight.com/web-parser/).

Tested on BBC, The New York Times, The Verge, Cult of Mac, iDownloadBlog etc, in which af_readability can't handle the content properly.

**Some feeds may not render properly, if Mercury can't handle it.** Eg. BBC video-only feeds.

Installation
------------------------

Clone the repo into your tt-rss **plugins** folder.

Configuration
------------------------
The configuration is identical to af_readability, except you have to save your API key.

1. Enable the plugin *mercury_fulltext* in **Preferences/Plugins**.
2. Save your *Mercury API key* (apply for free [here](https://mercury.postlight.com/web-parser/)) in the *Mercury_fulltext settings* under **Feeds** tab.
3. Configure for feeds under **Plugins** tab of the **Edit Feed** window (you can right click your feed to get there).

References
------------------------

* The plugin is modified based on [af_readability](https://git.tt-rss.org/fox/tt-rss/src/master/plugins/af_readability).
* [Mercury Parser](https://mercury.postlight.com/web-parser/).

