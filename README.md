mercury_fulltext
==============
A Tiny Tiny RSS plugin written for [tt-rss](https://tt-rss.org/fox/tt-rss) as a replacement for the grandpa-old plugin [af_readability](https://tt-rss.org/fox/tt-rss), which doesn't work well for many RSS sites I subscribe to.

It utilizes [Mercury Parser](https://mercury.postlight.com/web-parser/) to extract the full content for feeds. An API key is required to use this plugin, which is available for free [here](https://mercury.postlight.com/web-parser/).

Tested on BBC, The New York Times, The Verge, Cult of Mac, iDownloadBlog etc, in which af_readability can't handle the content properly.

Installation
------------------------

Clone the repo into your tt-rss **plugins** folder.

Configuration
------------------------
The configuration is identical to af_readability, except you have to save your API key.

1. Enable the plugin *mercury_fulltext* in **Preferences**.
2. Save your *Mercury API key* in the settings under **Feeds** tab.
3. Configure for feeds under **Plugins** tab of the **Edit Feed** window.

References
------------------------

* The plugin is modified based on [af_readability](https://tt-rss.org/fox/tt-rss).
* [Mercury Parser](https://mercury.postlight.com/web-parser/).

