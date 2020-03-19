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

Next steps would be making [nebulas](https://www.google.com/search?q=eve+online+nebula&rlz=1C1CHBF_enUS811US811&sxsrf=ALeKk02DECfICmu7JWyXuR5qSdcTHLoX9w:1584495431929&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjx8_i68aLoAhWChHIEHRLVA7oQ_AUoAXoECAsQAw&biw=3440&bih=1329), but I’m not capable of that right now. My guess for an advanced way to do it would be playing around with smoke simulations in e.g. Blender and render a tileable texture to overlay on the stars. That way they may look volumetric and awesome a la Even Online. A simpler approach would be to play around with “cloudy” noise in Substance to achieve good looking but perhaps flatter nebulas.

### Cubemap

So now that I’ve got a tileable starfield texture. How do I actually map it to a sphere? (skysphere). Now that's a good question.

To be continued...

<!--
## Cubemap
So now that I’ve got a tileable starfield texture. How do I actually map it to a sphere? (skysphere). Well, turns out that Substance Designer can not export a texture as a cubemap. With a little googling it seems like Substance Painter might be the solution here. If I can project the starfield properly onto a sphere, I should be able to assign it to a “skysphere” in Unreal Engine. Meaning, projecting it to the inside of a sphere so that when the player is inside of it, it’ll look like a distant starfield in all directions.
-->
