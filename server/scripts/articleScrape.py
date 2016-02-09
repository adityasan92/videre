import urllib
from bs4 import BeautifulSoup
from readability.readability import Document
import mechanize


def getArticle(url):
    br = mechanize.Browser()
    br.set_handle_robots(False)
    br.addheaders = [('User-agent', 'Firefox')]

    html = br.open(url).read()
    readable_article = Document(html).summary()
    readable_title = Document(html).short_title()

    soup = BeautifulSoup(readable_article,"lxml")

    final_article = soup.text
    print final_article.encode("cp437", "ignore")
    links = soup.findAll('img', src=True)
    print links

url="http://www.bloomberg.com/news/articles/2016-02-08/here-s-what-executives-say-about-possibility-of-u-s-recession"
getArticle(url);
