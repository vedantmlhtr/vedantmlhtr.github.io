# MD to HTML

The following line of code makes all the magic happen on this blog:

`pandoc blog/../index.md -s --template=template.html --toc -o blog/../index.html --metadata title="<title>"`
