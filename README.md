Hi again, here are all the instruction to get you project (again)

If you are changing laptop/computer, get the project from github
    - Go to project
    - Code
    - ssh (copy)
    - Go top terminal 
    - type: git clone (paste)
    - npm install
    - npm run dev
    - listo!


About my page architecture.
Im using Astro/ React. Why? Becqause I wanted to use react and Astro allow me to do it in a simple way. Astro improve performances by rending component on the server and sending lightweight HTML to browser. Why react? Because I like it, I like to have components, its more compartimentalized for my brain and I think I have everything more organize.

Organization:
 -Public: images
 -src: all the rest
    - compenent: astro-simples, react: with js, icons
    - i18n: internalization, what ima using for changin language
    - layout: basic design (I have a cat that you can see when yoi inspect the website)
    - pages: diferent pages for every language
    - style: CSS

How I put different languages?
Im using i18n, I can set a laguage and create a dictionary with the words that I want to change
    - To add or change translations go assets>translations>file of the language
    - For the main text (the big ones) it is set on the page of the website. Another option fot that is to add the big text in the ´dictionary´. I did it, but it is easier for me with the pages when I want to change or edit some text. Easier to read for me


Change font:
    - add font to public>assets>font
    - change the font on styles>css
