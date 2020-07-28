This is the Hamburg version of the pizza python site.

It has been edited by a frontend amateur surfer not a pro so .. I am adding some info not to forget.

# Things to change
The template is pretty self explanatory, so main things for the future:

 - speakers, sponsors and schedule data have to be added to [dataset](src/dataset.ts)
 - COC template definition to be edited in: [Coc](src/Components/Home/Sections/Coc.tsx )
 - CFP information can be added in: [home](src/Components/Home/Sections/Speakers.tsx)
 - link to ticket information to be added to: [header](src/Components/Header/index.tsx)

When having only *x* sponsors in the array please edit the CSS template for the [SponsorsShowcase](src/Components/SponsorsShowcase/index.css), by changing the elements last-child and first-child to have

```grid-template-columns: repeat(x, 1fr);```

The rest is all the media which goes in [assets](assets)

# How to run/compile the wesite

Besides installing ```npm``` and ```node``` also install ```yarn``` (using ```npm install -g yarn```).

For the first time you set up the project, run ```yarn``` to build all the files.

For running the site locally execute:

```$ yarn dev```
