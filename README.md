http://booobi.x5group.s3-website-eu-west-1.amazonaws.com/home

# What is this?

This is a website that tries to present the work of a local construction and investment company. It started as a funny idea and ended up as a practice project for technologies that I wanted to explore, namely some AWS services (Lamda, Dynamodb, s3, SES, CloudWatch & others), [Scully](https://scully.io/) and Angular Material. There's is no particular reason for using this technology stack - just practice.

The project was developed with a Domain Driven structure in mind (alas just a single domain here). Again, no particular reason for it, just experimenting. I've tried to display some clean code culture and to show how easy it'd be to scale up following this pattern.

*Why use bootstrap when you're also using Angular Material?*
I got spoiled at work. I really enjoy having a seperate design system with utility classes. it's easier to `d-flex` an element than to ... write all the necessary css for it :).

# Important notes:
I'm using the company's Facebook page as a source of their projects' images. This made me question my life, but I kept going. Namely:

- You can NOT use Facebook's graph API to query even PUBLIC page images    without your app being approved.
- You can NOT scrape Facebook pages    with crawlers. 
- You can NOT automate the browser to get the images for    you (my test account got banned on the 10th attempt) 
- You can NOT  manually get the images and use them as a source, since they contain    your token, which expires.

For this purpose I've decided to manually get the images and host them on my own webserver. I use my database as a source of truth for both scraping and mapping to the correct image from the API. (see `projects$` in `FeatureProjectsComponent` and `scrape_project_images.py`). They are updated based on client needs.
# AWS API
GET `/projects` - returns a list of projects
GET `/project` - returns single project
GET `/sales` - returns current sales
POST `/sendemail` - sends an email to the owner of the company with your specified `email` and `message`

