# mercury_fulltext
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FHenryQW%2Fmercury_fulltext.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FHenryQW%2Fmercury_fulltext?ref=badge_shield)


A Tiny Tiny RSS plugin written for [tt-rss](https://tt-rss.org) as a replacement for the grandpa-old plugin [af_readability](https://git.tt-rss.org/fox/tt-rss/src/master/plugins/af_readability), which doesn't work well for many RSS sites I subscribe to.

It utilizes [postlight/mercury-parser-api](https://github.com/postlight/mercury-parser-api) to extract the full content for feeds. An API endpoint is required to use this plugin. 

To host such an API, please visit [postlight/mercury-parser-api](https://github.com/postlight/mercury-parser-api). For a dockerized self-host solution, please visit my repo [HenryQW/mercury-parser-api](https://github.com/HenryQW/mercury-parser-api).

For fallback API support please checkout [legacy branch](https://github.com/HenryQW/mercury_fulltext/tree/legacy), which [**will stop working on April 15, 2019**](https://mailchi.mp/postlight/action-required-mercury-parser-api-will-sunset-in-60-days).

## Warning

Tested on BBC, The New York Times, The Verge, Cult of Mac, iDownloadBlog etc, in which af_readability can't handle the content properly.

**Some feeds may not render properly, if Mercury can't handle it.** Eg. BBC video-only feeds.

## Installation

Clone the repo into your tt-rss **plugins** folder.

## Configuration

The configuration is identical to af_readability, except you have to save your API endpoint.

1. Enable the plugin *mercury_fulltext* in **Preferences/Plugins**.
2. Save your self-hosted *Mercury Parser API Endpoint* in the *Mercury_fulltext settings* under **Feeds** tab.
3. Configure for feeds under **Plugins** tab of the **Edit Feed** window (you can right click your feed to get there).

## References

* The plugin is modified based on [af_readability](https://git.tt-rss.org/fox/tt-rss/src/master/plugins/af_readability).
* [postlight/mercury-parser-api](https://github.com/postlight/mercury-parser-api).


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FHenryQW%2Fmercury_fulltext.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FHenryQW%2Fmercury_fulltext?ref=badge_large)