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
    print readable_title
    links = soup.findAll('img', src=True)
    print links

def savePic(url):
    uri = "C:/Users/Aditya/Desktop/projects/videre/server/images/download.jpg"
    if url != "":
        urllib.urlretrieve(url,uri)

url="https://en.wikipedia.org/wiki/Great_Wall_of_China"
#getArticle(url);
savePic("http://celebmafia.com/wp-content/uploads/2014/08/jessica-alba-hot-wallpapers-22-july-2014_1.jpg")
