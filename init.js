Plugins.mercury_fulltext = {
  orig_content: "data-mercury-orig-content",
  self: this,
  extract: function (id) {
    const content = $$(
      App.isCombinedMode()
        ? ".cdm[data-article-id=" + id + "] .content-inner"
        : ".post[data-article-id=" + id + "] .content"
    )[0];

    if (content.hasAttribute(self.orig_content)) {
      content.innerHTML = content.getAttribute(self.orig_content);
      content.removeAttribute(self.orig_content);

      if (App.isCombinedMode()) Article.cdmScrollToId(id);

      return;
    }

    Notify.progress("Loading, please wait...");

    xhrJson(
      "backend.php",
      {
        op: "pluginhandler",
        plugin: "mercury_fulltext",
        method: "extract",
        param: id,
      },
      (reply) => {
        if (content && reply.content) {
          content.setAttribute(self.orig_content, content.innerHTML);
          content.innerHTML = reply.content;

          Notify.close();
          if (App.isCombinedMode()) Article.cdmScrollToId(id);
        } else {
          Notify.error("Unable to extract fulltext for this article");
        }
      }
    );
  },
};
