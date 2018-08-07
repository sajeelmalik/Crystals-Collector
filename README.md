# Crystals-Collector

Click the Dragon Balls and try to achieve the given score!

* Powered by Bootstrap, Javascript, and jQuery

Further design and updates to come!

## Getting Started

Follow the deployed project link below to play the game!

### Deployed Project Link
<!-- make a link to the deployed site -->
 
[Crystals Collector](https://sajeelmalik.github.io/Crystals-Collector/)


### Image Preview of Word Guess Game
<!-- take a picture of the image and add it into the readme  -->
![Crystals Collector]( "Dragon Ball Challenge")

## Prerequisites

The page can be run from any browser, preferably on Google Chrome!


## Technology Used

* **HTML5**
* **CSS3** 
* **Javascript** - the primary scripting logic powering the game
* **jQuery** - the robust scripting library for Javascript
* [**Bootstrap CDN v4.1.0**](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - the open-source web styling framework used
* [**Google Fonts**](https://fonts.google.com/) - an interactive library of licensed fonts 

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

On-click functions are vital for applications that rely heavily on user manipulation of window assets, such as buttons or specific divs. jQuery substantially simplifies these functions, as demonstrated below. The basic conditional statement is wrapped in an on-click function pointing to all elements that have a "button" class:

```
 $(".button").on("click", function(){
        if(totalScore === goal){
            $("#status").text("YOU WIN!");
            wins++;
            restart();
        }

        else if(totalScore > goal){
            $("#status").text("YOU LOSE! Try again!");
            losses++;
            restart();
        }
    });

```

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
* 


## Authors

* **Sajeel Malik** - *Initial work* - [GitHub](https://github.com/sajeelmalik)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details