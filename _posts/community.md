---
title: 'Some thoughts on community'
date: 'Feb 21, 2021'
tags: ['Community']
---

There's been an explosion of people creating communities on the internet. I've thought about them a lot, and wrote this to compile some of those thoughts in a single document.

What is a community? For my purposes, I’ve found a useful definition.

> A group of people, united by a shared passion or purpose, who interact with each other. 

Looking at the definition, there are only two things a community needs. 
- A shared passion or purpose
- People interacting with each other

&nbsp;

Here’s some examples of communities:

Community| Shared passion/purpose | People interacting
--- | ---| ---
Your high school | Learn (apparently) | Talking in classrooms, lunches, groupchats
 React developers | Using the same language, interested in the development of the language | Tweeting at each other, reddit, forums


&nbsp;

The strength of a community, then, comes from the strength of this shared passion/purpose and the depth and frequency of interactions. And so, a useful formula for measuring the strength of a community could be:

$ Strength = P \sum \limits _i ^{count(c)} c_{i}d_{i} $

$$P$$ = strength of the passion/ideal 

$$c_{i}$$ = the ith connection 

$$d_{i}$$ = the depth of the ith connection

&nbsp;

We can come up with a few interesting observations through this formula. 

- Notice that this definition doesn’t talk about technology or the platform used to bring these people together. **Putting people into a group chat doesn’t make it a community.** In fact, a group chat isn’t even necessary to build a community. There’s clearly a React developer community on the internet, but there isn’t any specific platform or group chat they congregate at. In that sense, communities can be thought of as the superset of the platform they exist on. A single community can use many platforms to interact with each other, but the discord server or slack channel they use isn’t the community itself.

- **The strength of the shared passion/purpose acts as a force multiplier on the connections in a community.** If there is no shared P, the community has no strength. Getting people together who don’t have a shared passion is the same thing as putting a bunch of random people in a group chat and calling it a community.

- **It’s much easier to connect with people who have the same values and passions as you do, so the stronger P is, the stronger every single connection is right at the outset.** So (somewhat obviously), the more passionate people are, the easier is it so make a community with them. Conversely, without a strong shared ideal, it’ll be very difficult to get people to interact and form deep connections.

- The shared purpose can even be something as trivial as having to be in the same place at the same time. But if you’ve left high school, you’ll notice how you probably haven’t kept in touch with 90% of the people you knew, even if it felt like you knew them really well during your time there. That leads us to another important point- **there is a hierarchy of shared experiences that bring people together.** You didn’t keep in touch simply because the strength of your connection was based on location, which is very weak compared to shared passions or experiences.

![shared purpose hierarchy](/hierarchy.jpeg)


A community with a few deeply passionate people is much stronger than one with many shallow ones. You’d think that it’s merely the area under the curve (connections x depth of connections), but there’s a third dimension here-  P would likely be much higher in communities with deeper connections, making those communities stronger.

![3d graph of P, depth and connections](/3d.jpeg)

Notice that frequency of interaction is not a factor at all. It’s only useful to the extent that it increases the depth of relationships in a community- beyond that, it doesn’t make a difference. 

Think of your closest group of friends. You could meet them all after months and you’d still feel the same sense of community you did before. The strength of your connection superseded the need to constantly interact. And so, the DAUs of a community is a terrible way to measure its strength. This is not to say it doesn’t matter, just that while frequent interactions may lead to deep connections, deep connections don’t necessarily mean frequent interactions.



## Who’s a community for?

The need for deep connections means that communities specifically built for the internet can only fulfill a certain set of users. 

The issue is [Dunbar’s number](https://en.wikipedia.org/wiki/Dunbar%27s_number). Humans can only maintain ~150 deep connections, and the vast majority of these are taken up by in person relationships. But to make online communities, you need people to make strong relationships. So, in a sense, you need people with enough ‘mental social capacity’ to form those deep relationships with people online. 

This required ‘mental social space’ means that online communities need to cater to people who are missing some sort of social interaction offline. And so, they need to find a way to offer connections that people cannot find in person. 


From a social lens, the internet is an aggregation of extremes. It allows everyone in the long tail to suddenly have an abundance of people like them. This means that people with unconventional interests who couldn't find their people in person, can do so online. So the the gamer, the programmer, the digital artist in school- they don’t need to feel so different anymore.

For example, I’ve been interested in startups for years now, and after bingeing [YC’s podcasts](https://blog.ycombinator.com/category/podcast/), I realised that I needed a way to find people with the SV mindset. Twitter allowed me to find many people my age with similar interests, [Enlite](https://twitter.com/sarvasvkulpati/status/1247181074611851267?lang=en) allowed me to meet a bunch of really interesting people, and interning at [Pioneer](https://pioneer.app/) gave me a glimpse of what it’s like to work at startups. All of these happened without meeting a single one of of these people in person.

[HackClub](https://hackclub.com/) is a perfect example of a community that’s built to cater to a group of people who miss some sort of social interaction offline. It’s still strangely difficult to find kids who are interested in coding and building things, and Hack Club fills that gap by giving young hackers an online community of people just like them. It works so well because it manages to both 
- Cater to highly passionate people
- Cater to people who don’t usually find their communities in person






## Building strong community

While finding many people with a high P is a prerequisite, you need to then get them to interact with each other, to weave the web of connections that form the thing you’ll call your community. When you first bring people together, each individuals connections will look like this:

![a graph of connections against depth](/connections.jpeg)

Each member will have fairly weak connections with all the other members.The mistake I made when I first started Enlite was thinking that putting a bunch of people in a slack channel would mean that all of them interact with every other member all the time. That wasn’t the case. Instead, a small, core group of people emerged. 

When you’re in school, you’ll notice that cliques naturally form. No amount of social engineering would get the jocks to suddenly integrate with the nerds. Similarly, the formation of cliques in a community is pretty normal, and in fact, is a great thing. It means people are falling into subsets of others they are comfortable with.

However, you don’t want insulated cliques. While there should be strong connections within them, they should also be connected to each other. Should this succeed, your community will look like this:

![network of members in a community](/graph.jpeg)

Any individual in your community will end up with a T shaped profile- many fairly shallow connections, a few very deep ones. The width of the stem would depend on the number of online friends they mentally have space to make as well as their success with connecting to people within the community.

![depth](/depth.jpeg)

Much like any social product, Enlite has a retention curve, and about a third are still active. An interesting observation is that the members who initially attended the most video calls are the ones who are now the most active in chat. My theory is that they acquired the best relationships and so, felt incentivised to talk and share opinions and progress on projects. 


## Creating strong connections

But how do you facilitate creating these strong connections? Something I’ve noticed is that every relationship: teacher-student, parent-child, friend-friend, follows a timeline 

![friendship timeline](/friendGraph.jpeg)

In a sense, the depth of a relationship could be measured by how much a pair knows and understands about what makes the other tick. You could have a wild drinking buddy and always have fun but unless you have some deep conversations, you don’t have a deep relationship. To increase the depth of the relationship quickly, you need to increase the bandwidth of communication- doing so allows both people to understand each other faster, and so, speeds up the timeline of the relationship.

For example, [Aadil](https://twitter.com/aadillpickle) and I followed each other on twitter for a while. I saw his tweets, he saw mine, sometimes we interacted with each other. But then, when making Enlite, I got on a zoom call with him. Within 30 minutes, we were much, much better friends. It felt like the amount our friendship progressed in a few months of interacting with each other on Twitter was repeated several times over in 1 zoom call.

Of course, different mediums have different bandwidth, but there’s a tradeoff- the higher the bandwidth, the higher the barrier of entry. Scheduling a zoom call, for example, is much harder than sending a Twitter DM.

![bar charts of communication mediums compared](/bars.jpeg)


In this sense, audio is probably best placed at the intersection of bandwidth and friction. On audio calls, you don’t need to care about how you look, you don’t need to constantly stay in a ‘switched on’ state and stare at the camera throughout, and it’s much easier to hop on and off. This is probably why platforms like Discord and Clubhouse are growing so fast as a tool to grow communities. 

## A summary

In conclusion:
- Communities = passion x interaction x strength of interactions
- You don't need a group chat for a community, and putting people into a group chat doesn't make it one
- Communities need to cater for connections people don't find in person
- Creating connections requires a high bandwidth of communication. When in doubt, choose video
- Frequent activity doesn't necessarily mean a strong community









