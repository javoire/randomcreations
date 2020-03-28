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

And these are my Substance Designer nodes:

{{< image src="/img/substance-nodes.png" alt="Substance Nodes">}}

Next steps would be making [nebulas](https://www.google.com/search?q=eve+online+nebula&rlz=1C1CHBF_enUS811US811&sxsrf=ALeKk02DECfICmu7JWyXuR5qSdcTHLoX9w:1584495431929&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjx8_i68aLoAhWChHIEHRLVA7oQ_AUoAXoECAsQAw&biw=3440&bih=1329), but I’m not capable of that right now. My guess for an advanced way to do it would be playing around with smoke simulations in e.g. Blender and render a tileable texture, or a Cubemap, to overlay on the stars. That way they may look volumetric and awesome à la Eve Online. A simpler approach would be to play around with “cloudy” noise in Substance to achieve good looking but perhaps flatter nebulas.

So now that I’ve got a tileable starfield texture. How do I actually map it to a sphere? (skysphere). Now that's a good question.

### ~~Cubemap~~

At first I thought a [Cubemap](https://en.wikipedia.org/wiki/Cube_mapping) was the answer since I've used that technique before. But it turns out I could not find a way to export such a thing from Substance Designer. I can only export 1 tileable texture, but I need 6 (sides of a cube) different tiles that neatly stitches together in the seams of a cube, to map onto the "skysphere" in Unreal Engine.

### Equirectangular projection

Instead I found [this article](https://www.artstation.com/steppenwolf/blog/NB7K/seamless-tiling-planet-textures-in-substance-designer) that shows a method in Substance Designer to convert a texture to [Equirectangular projection](https://en.wikipedia.org/wiki/Equirectangular_projection), a.k.a "stretch the poles so you can wrap it around a sphere".

I added that to my above Substance graph, feeding the output into the input of the graph from the article.

Here's what it looks like in Unreal Engine:

{{< image src="/img/unreal-stars.png" alt="Stars in Unreal Engine">}}

As you might be able to tell, the stars are not very high-res. The reason being I can only wrap one single 4k image around the whole skysphere, whereas with a cubemap I'd have one 4k image for _each_ 6 sides of the "cube".

## Nebulas

I changed my mind, let's make some basic background nebulas. Something subtle that hides its imperfections but adds a little color space.

To be continued...
