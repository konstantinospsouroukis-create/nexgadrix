#!/usr/bin/env python3
"""Erzeugt feed.xml (Ratgeber) und produkte.xml (Produkte) aus den HTML-Seiten.
Neue Einträge bekommen beim ersten Lauf das heutige Datum (gespeichert in scripts/feed-dates.json).
Aufruf im Repo-Root: python3 scripts/build_feeds.py"""
import re,glob,os,json,html,datetime,email.utils
B='https://nexgadrix.win'
root=os.path.dirname(os.path.dirname(os.path.abspath(__file__)));os.chdir(root)
DF='scripts/feed-dates.json'
dates=json.load(open(DF)) if os.path.exists(DF) else {}
def pub(key,default=None):
    if key not in dates: dates[key]=default or datetime.date.today().isoformat()
    d=datetime.date.fromisoformat(dates[key])
    return email.utils.format_datetime(datetime.datetime(d.year,d.month,d.day,8,0,tzinfo=datetime.timezone(datetime.timedelta(hours=2))))
def esc(t):return html.escape(html.unescape(t),quote=False)
def feed(title,link,desc,self_url,items):
    return ('<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>%s</title><link>%s</link><description>%s</description><language>de-DE</language><atom:link href="%s" rel="self" type="application/rss+xml"/>\n%s</channel></rss>\n'%(esc(title),link,esc(desc),self_url,''.join(items)))
def item(t,u,d,key,default):
    return '<item><title>%s</title><link>%s</link><guid isPermaLink="true">%s</guid><pubDate>%s</pubDate><description>%s</description></item>\n'%(esc(t),u,u,pub(key,default),esc(d))
# Ratgeber
its=[]
for f in sorted(glob.glob('ratgeber/*.html')):
    if f.endswith('index.html'):continue
    s=open(f,encoding='utf-8').read()
    h=re.sub('<[^>]+>','',re.search(r'<h1[^>]*>(.*?)</h1>',s,re.S).group(1)).strip()
    d=re.search(r'<meta name="description" content="(.*?)"',s).group(1)
    its.append((pub('ratgeber/'+os.path.basename(f),'2026-10-13'),item(h,B+'/'+f,d,'ratgeber/'+os.path.basename(f),'2026-10-13')))
its=[i for _,i in its]
open('feed.xml','w',encoding='utf-8').write(feed('NEXGADRIX Ratgeber',B+'/ratgeber/','Technik-Ratgeber zu Smart Home, Laden & Energie und KI-Gadgets.',B+'/feed.xml',its))
# Produkte
s=open('produkte/index.html',encoding='utf-8').read()
its=[]
for a in re.finditer(r'<article class="product" id="([^"]+)".*?</article>',s,re.S):
    pid,blk=a.group(1),a.group(0)
    name=re.sub('<[^>]+>','',re.search(r'<h2>(.*?)</h2>',blk,re.S).group(1)).strip()
    typ=re.sub('<[^>]+>','',re.search(r'<div class="type">(.*?)</div>',blk,re.S).group(1)).strip()
    lis=[re.sub('<[^>]+>','',x).strip() for x in re.findall(r'<li>(.*?)</li>',blk,re.S)]
    d=typ+': '+'; '.join(lis)+'. Herstellerangaben, keine eigenen Tests.'
    its.append(item(name,B+'/produkte/#'+pid,d,'produkte/'+pid,'2026-10-13'))
open('produkte.xml','w',encoding='utf-8').write(feed('NEXGADRIX Neue Produkte',B+'/produkte/','Neue Produkte im NEXGADRIX Produktfinder. Angaben nach Herstellerinformation.',B+'/produkte.xml',its))
json.dump(dates,open(DF,'w'),indent=1,sort_keys=True)
print('ok',len(its),'Produkte')
