---
title: "Don't improve debugging, kill it."
date: 'Jul 12, 2021'
tags: ['Programming']
---

A painter manipulates color on a canvas with a brush. So obviously, they expect to see the effect of each brushstroke instantly. Now imagine if painters had to predetermine a set of brush strokes, assume they’ll look nice, press a button, see them applied to the canvas in one go, and then decide what to add next? Absurd, right?

**Well, programming is state manipulation.** A programmer's brush is the instructions we write to manipulate state. A programmer has to write a set of instructions, assume they’ll work, press a button, see the state transformed by all of them, and *then* receive feedback on if the code worked, and *then* decide how to iterate. It really is absurd.

A painter sees the immediate effect of each brushstroke. A programmer does not see the effect of each instruction. We’re shut off from seeing the intermediate manipulations of state. We literally don’t know what’s going on in the middle of our code. 

Let’s visualise the state manipulation literally. Imagine that state was like water, and your program was a set of special pipes that changed the color of the water. In this case, you’d want the water to be red.

![program represented as pipes](/programs-pipes.jpg)

But it seems like there’s a problem. The water coming out is blue. So what do we do? We have no clue what is going on in each pipe. We don’t know where exactly the error is.

It’d make sense to figure out what was happening in each pipe. So we could guess where the issue is, drill a tiny window, and try and see what’s going wrong. But where we choose to drill a window is just a guess. We might have to drill quite a few of them before we find the pipe that actually tells us what’s happening. These holes are the easiest way to provide a window into our state, which is exactly like print debugging.
 
![program represented as pipes with windows in it to represent print debugging](/print-window.jpg)



## The prevalence of print debugging

It’s obvious to expect to see how your instructions manipulate state at each step, the same way a painter would expect to see each brush stroke’s effect on a canvas. Print debugging is so prevalent because it’s the easiest and fastest way to see what our instructions are doing.

Without it, you don’t *really* know how your code manipulated the state, you only know your model of how it *should* manipulate the state. Bugs usually arrive when your model of how the instructions should behave are incorrect compared to how they really behave. 

Most bugs are:
Silly mistakes
A mismatch between the programmers mental model of how their code should work and how it actually does

And when some state manipulation is incorrect, programmers need to *manually* reveal the intermediate state transformations to see which point in the process went wrong. 

Now the workflow for print debugging goes something like this. You realise there’s a bug. You add a print statement in a location you think will reveal the issue with your state. You run the program. And then repeat until you find the issue.

![the workflow for print debugging](/print-cycle.jpg)


When quickly iterating on code, a debugger doesn’t give a 10x improvement over print debugging, because it’s basically the same workflow. They’re still just slits to reveal state at one point. Instead of print statements, you add a breakpoint. You still need to manually add something. You still need to figure out the best place to manually add it. It’s no surprise people reach to print debugging first.

![the workflow for real debugging](/debugger-cycle.jpg)


I should read a bit more about the history of debuggers, but I’m assuming that their roots are from a time where we had room sized computers with a feature set of an iphone calculator, compile times were long, and errors had to be literally printed and slowly read through. 

There had to be a different ‘program’ phase, and another ‘debug’ phase, where you sat and read through the problems with your instructions and where it went wrong. But today is very different from the giant-computer-in-a-room mainframe era. We need a new paradigm.


## Don’t improve debugging, kill it.

Humans are visual creatures. The fewer clicks, scrolls, and mouse moves we have to seeing our state, the faster we’ll be able to *literally see* problems, and the faster we can iterate. So instead of drilling small holes into our opaque pipes, maybe the solution is to make them transparent.

There shouldn’t be a different debugging and programming phase. If we could see our state, silly mistake bugs would be solved immediately, and mental-model-mismatch bugs would become obvious very fast. Fixing many problems should be as simple as identifying an error, glancing to the side at the state, and immediately realising what the issue is. So the solution isn’t necessarily a ‘debugger,’ it’s more like a ‘state inspector.’

![program represented as pipes](/ideal-debug-cycle.jpg)

So what would a state inspector have?

**It could start out as simple as a window next to your code, with corresponding print statements every time the state is initialized or updated.** It might sound crazy, but print debugging is just an incomplete approximation of this. Of course, if it was all in a console, it’d be hard to understand what was going on, but putting them next to their corresponding lines gives each statement context- you’re reading the state transformations right next to the line that transformed them. You’d also be able to see which line ran or not.

**You could extend it with time travel.** You’d be able to scroll forward or backward through the program's runtime, and see line by line execution in either direction. You could see how a variable changed over time in a table. A more advanced version could even graph values over time. 

**It could have rich graphical support.** Tree data structures could be represented as actual trees instead of their textual abstractions. Formulas could be represented like real formulas. Machine learning model definitions could look like graphs. 

**It could be fully indexed and searchable.** You’d be able to find the exact iteration when a variable was a certain value. 


The history of computing bends it’s arc towards fast feedback loops. Computing itself became faster, we went to cloud computing, and now we have tools like repl.it to go from idea to execution quickly. But now, it’s time for programming itself to have faster feedback.

Machine learning libraries are getting great at visualisation. Clojure has some interesting REPL stuff. And the JS ecosystem is quickly catching up with hot-reloading and faster feedback tools. But all of these are band aids to the bullethole that is not being able to see the intermediate state of your program. The future of programming needs to go a step further. Instead of creating abstractions *around* opaque state, we need to free it.

---

Special thanks to [Tyler Angert](https://twitter.com/tylerangert) for interesting discussions that added to this post.