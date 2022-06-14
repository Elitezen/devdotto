# 0.5.0
Added typings for new listings and organizations (former organization typings are now OrganizationCover). Small fixes to typings.

Added the following functions:
- DEVClient.getMyListingById()
- getListingById()
- getOrganizationByUsername()
- getOrganizationsUsers()
- getOrganizationsListings()
- getOrganizationsArticles()


# 0.4.1
Renamed DEV references from DevTo/DevDotTo to DEV

# 0.4.0
Refactored error handling throughout functions, added typings for comments and listings. Added main documentation to README. Now exports all typings. Fixed dist errors of old imports.

Added the following functions:
- getListings()
- getArticleComments()
- getArticleById()

Created .npmignore:

```
images/
```

# 0.3.0
Added getUserById(), DevDotToError class, refactors of functions and typings.

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