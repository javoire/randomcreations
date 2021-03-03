---
title: "Interactable 3D UI with unlockable mouse cursor"
images: ["/img/ue-interactable-ui.png"]
tags: ["Game Dev", "Unreal Engine"]
date: 2020-11-19
---

We'll go over how to set up the following way of interacting with UI widgets in the 3D world:

{{< youtube id="7ie02OzJkbM" alt="Tab switcher in UE4">}}

This article assumes basic knowledge with Unreal Engine 4 (4.25 as of the writing of this article). The project is based on the First Person Template.

For setting up the general interaction of UI widgets in 3D space, I will [defer to this tutorial](https://www.youtube.com/watch?v=_1zWWabWof0) that I myself followed to set it up.

Regarding unlocking the mouse and still being able to interact with the UI widget, keep reading!

There are 3 parts to this setup:

1. Holding down a key emits an event
1. The mouse unlocks and the UI crosshair dot becomes the mouse cursor
1. The **WidgetInteraction** component follows the mouse position, converted from screen space to world space.

The UI crosshair dot is just a normal **Widget Blueprint** with a dot image in it.

## 1. Holding down a key emits an event

This part is just setting up a key binding in your player character blueprint that emits an event. The event will then be subscribed to in the main **HUD blueprint**.

Here's what that graph looks like, in the **First Person Character** blueprint:

{{< image src="/img/ue-ctrl-event.png" alt="Interactive screen in ue4" make-link="true" >}}

We're also storing that state in a local variable **Unlocked Mouse** to be used later.

## 2. Unlocking the mouse and changing cursor

Next we need to listen to the above event in the main **HUD blueprint** and tell it to unlock the mouse and set the crosshair dot as the mouse cursor. This is done with the following nodes, on **Event Begin Play**:

{{< image src="/img/ue-listen-to-ctrl.png" alt="Interactive screen in ue4" make-link="true" >}}

To step through what's happening, for the unlocking of the mouse:

1. We receive the event that the CTRL key was pressed
1. We [center the mouse cursor](/img/ue-centermouse.png) in the middle of the screen, where the crosshair dot is located
1. We set the crosshair widget as the mouse cursor.
1. We remove the crosshair widget from the screen, as the cursor is possessing it instead.
1. We toggle the game's input mode to **Game And UI**
1. We finally make the cursor visible

And for locking the mouse back in place.

1. We set back the input mode to **Game Only**
1. We hide the mouse cursor
1. We add back the crosshair dot widget to the screen

## 3. WidgetInteraction component follows mouse

Now we make the **WidgetInteraction** component follow the mouse when it's unlocked. As opposed to the previous steps; this is not event based, it happens on every **tick**.

The graph looks as follows, on **Event Tick**:

{{< image src="/img/ue-graph-widget-interaction-component.png" alt="Interactive screen in ue4" make-link="true" >}}

You remember the variable we created in **step 1**, *Unlocked Mouse*? Here we use it.

To break it down, this is what happens as the mouse gets unlocked:

1. We branch off on **Unlocked Mouse** is **true**
1. We retrieve the mouse position and convert from **screen space** to **world space**
1. We set that to be the world location and rotation of the **WidgetInteraction** component

And when the mouse gets locked again:

1. We branch off on **Unlocked Mouse** is **false**
1. We reset the position and rotation of the **WidgetInteraction** component to that of the **Camera** component, as it was its original position.

That's it! Let me know if you have any questions: [@dahljonatan](https://twitter.com/dahljonatan)

For more context around this game, you can read more at [Space Game](/b/space-game/)
