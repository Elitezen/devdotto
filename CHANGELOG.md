# 0.2.1
Refactor and renaming of functions and typings, created client class for functions
that require authorization. Switched from node-fetch to the built-in fetch API (Node 18.3.0)

The current functions are now as follows:
- getArticleById()
- getArticleByPath()
- getArticles()
- getLatestArticles()


# 0.2.0
Removed Client, created the following functions:
- fetchArticle()
- fetchPage()
- fetchPageLatest()
- fetchVideoArticles()

Added and fixed typings, including Video Article interfaces.