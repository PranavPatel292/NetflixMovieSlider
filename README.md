# the Netflix movie slider clone

Ever since I have seen Netflix's movie slider, I was fascinated and forthwith decided to make one for my-self. Netflix's version of the movie slider is kind of different from other competitors. Whereas the Prime Video's movie slider sends you to the first listing item when you reach the end of the movie listing, Netflix's implementation is quite distinctive. It almost feels like an infinite loop which does roll back to the fist movie item but in a much counterintuitive way. Just play with the slider on Netflix and you'll get an idea.


# how the Netflix's slider works

I had to reverse engineer Netflix's website to see how the slider logic works and this is what I have found. So basically they show fix amount of div tags which are always there on the page but only handful of them are actually rendered on the screen while others are kept as hidden (I called them as supporting divs from now on, and the one which shows on the screen, I'll call them active ones) by some css tricks. Then when you click the Next or Previous button, the animation occurs based on the button you clicked, and this will give you the current movie list (the active divs, as per my analogy). Subsequently, the content of the supporting divs are updated with the new next and previous movie list. See the video attached below to have an idea of how the logic works!


https://user-images.githubusercontent.com/42827820/184468387-586d0a4a-9af8-4db8-baa1-9b0ef03bbc86.mp4


# how this project's logic works

So when I started working on the project and was doing some brainstorming I had an idea that is pretty the base of this entire project. I have used the [Doubly Link List](https://www.geeksforgeeks.org/doubly-linked-list/) to implement the Netflix movie sider as it has the next and prev pointers which you can manipulate to display the items on the relevant items on the screen.

So the file called [D_Link_List.js](https://github.com/PranavPatel292/NetflixMovieSlider/blob/main/src/D_LinkList.js) is what creates this doubly link list which then sends an head node to the app.js file. From then this head node can be used to fabricate the different divs which then show the different contents on the screen. 

# note

I am not an expert of the CSS and this is just an inspiration project so if you end up deciding to make one please make sure to use your own creativity and make this project as efficient as possible. I would love to see your work so please just share your work with me here or into my email address: - pranav.patel292@gmail.com. 

# future plan

Make a package for this slider/carousel. 

# demo of the project!

https://user-images.githubusercontent.com/42827820/184468406-c6ecab84-3732-4d46-8e34-55c9dbff61f8.mov
