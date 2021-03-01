/* global xhr, App, Plugins, Article, Notify */

Plugins.mercury_fulltext = {
  orig_content: "data-mercury-orig-content",
  self: this,
  extract: function (id) {
    const content = App.find(
      App.isCombinedMode()
        ? `.cdm[data-article-id="${id}"] .content-inner`
        : `.post[data-article-id="${id}"] .content`
    );

    if (content.hasAttribute(self.orig_content)) {
      content.innerHTML = content.getAttribute(self.orig_content);
      content.removeAttribute(self.orig_content);

      if (App.isCombinedMode()) Article.cdmMoveToId(id);

      return;
    }

    Notify.progress("Loading, please wait...");

    xhr.json(
      "backend.php",
      App.getPhArgs("mercury_fulltext", "extract", { id: id }),
      (reply) => {
        if (content && reply.content) {
          content.setAttribute(self.orig_content, content.innerHTML);
          content.innerHTML = reply.content;
          Notify.close();

          if (App.isCombinedMode()) Article.cdmMoveToId(id);
        } else {
          Notify.error("Unable to fetch full text for this article");
        }
      }
    );
  },
};
