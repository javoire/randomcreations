---
title: "Space Game"
images: ["/img/space-game.png"]
tags: ["archviz"]
date: 2020-03-18
---

I love Star Trek and I want to make a space game. So I decided to learn how to do that. I know there are already approximately a million space games out there but of course I want to make my own. Where everything is exactly the way I want it.

So what’s the first thing a space game needs?

## Stars

My first thought led me to my old trusty tool Photoshop for this, but then I remembered that I’ve been learning Substance Designer recently. And how that is *the way* of creating textures. Including a starfield for a space game.

Some googling led me to [this tutorial](http://www.astrobasecommand.com/oh-my-god-its-full-of-stars-a-brief-tutorial-on-creating-procedural-star-fields-using-substances/). The short version of it is: Create white noise and then a buncha’ more white noise to achieve a good balance of stars vs empty black space, then add a little color. This is my result:

{{< image src="/img/space-game.png" alt="Starfield">}}

And [this is my Substance Designer graph](/img/substance-nodes.png).

Next steps would be making [nebulas](https://www.google.com/search?q=eve+online+nebula&rlz=1C1CHBF_enUS811US811&sxsrf=ALeKk02DECfICmu7JWyXuR5qSdcTHLoX9w:1584495431929&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjx8_i68aLoAhWChHIEHRLVA7oQ_AUoAXoECAsQAw&biw=3440&bih=1329), but I’m not capable of that right now. My guess for an advanced way to do it would be playing around with smoke simulations in e.g. Blender and render a tileable texture, or a Cubemap, to overlay on the stars. That way they may look volumetric and awesome à la Eve Online. A simpler approach would be to play around with “cloudy” noise in Substance to achieve good looking but perhaps flatter nebulas.

So now that I’ve got a tileable starfield texture. How do I actually map it to a sphere ("skysphere") in Unreal Engine? Now that's a good question.

### ~~Cubemap~~

At first I thought a [Cubemap](https://en.wikipedia.org/wiki/Cube_mapping) was the answer since I've used that technique before. But it turns out I could not find a way to export such a thing from Substance Designer. I can only export 1 tileable texture, but I need 6 (sides of a cube) different tiles that neatly stitches together in the seams of a cube, to map onto the "skysphere" in Unreal Engine.

### Equirectangular projection

Instead I found [this article](https://www.artstation.com/steppenwolf/blog/NB7K/seamless-tiling-planet-textures-in-substance-designer) that shows a method in Substance Designer to convert a texture to [Equirectangular projection](https://en.wikipedia.org/wiki/Equirectangular_projection), a.k.a "stretch the poles so you can wrap it around a sphere".

I added that to my above Substance graph, feeding the output into the input of the graph from the article.

Here's what it looks like in Unreal Engine:

{{< image src="/img/unreal-stars.png" alt="Stars in Unreal Engine">}}

As you might be able to tell, the stars are not very high-res. The reason being I can only wrap one single 4k image around the whole skysphere, whereas with a cubemap I'd have one 4k image for _each_ 6 sides of the "cube".

## Nebulas

I changed my mind, let's make some basic background nebulas.

With inspiration from [this video](https://www.youtube.com/watch?v=sOOdbcdUopQ) and _a lot of_ experimentation I created what I would rather like to call "space clouds". Calling it a nebula would be a bit ambitious:

{{< image src="/img/space-clouds.png" alt="Space clouds">}}

And [this is my Substance Designer graph](/img/space-clouds-nodes.png). It's too big to be readable in one image so I might cover it in a separate post. The short version is that it's made out of many multiplied layers of cloud noise, then some details are extracted that are both added and subtracted to give depth and create a space-y (?) feel.

In Unreal Engine it looks like this, with some tweaks to density and intensity parameters:

{{< image src="/img/space-clouds-ue-2.png" alt="Space clouds in Unreal Engine">}}

Here's [an earlier attempt](/img/space-clouds-ue.png) that looks cool but is way too intense.

The setup in Unreal is that I've mapped 3 different variations of the space clouds texture onto 3 different curved planes in the distance. Since Substance Designer is all about procedural generation of textures I can change the "seed" number that generates the clouds in Unreal and get different variations of the space clouds.

Below are 2 zoomed out views of the level, one normal and one in wireframe mode, where you can see the 3 curved planes better.

{{< image src="/img/space-clouds-mesh-wireframe.jpg" alt="Space cloud mesh in Unreal Engine">}}

## Sun

A space environment would not be complete without a sun, as I'm imagining one would be zooming between solar systems for the most part. So a local sun with an aesthetically pleasing color is a must.

Looking at Eve Online, Star Citizen and Elite Dangerous as inspiration I created something that is not even remotely close to their suns, but yet simple and functional.

I ended up layering [flat sun sprites](/img/sun-nodes.png) of varying size and intensity combined with a [glowing sphere](/img/sun-sphere.png) in the middle as my final sun creation. One layer being _very_ large and subtle to create a nice ambient background color around the greater area of the sun.

Here's what it looks like in Unreal:

{{< image src="/img/sun-ue.png" alt="Sun in Unreal Engine">}}

While experimenting I noticed that the blurrier it is, the further away it appears. I believe it is because you can't really discern its size. It can be demonstrated in [this example](/img/sun-ue-closer.png) where it appears much closer due to its edges being distinguishable.

To be continued...
