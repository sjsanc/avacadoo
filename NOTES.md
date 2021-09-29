# AAT Structure
> (Currently only Level 3 is concerned but the structure can be silo'd for more levels in time)
> Consists of 6 units 
> Each unit will consist of a range of datatypes. 
    > Definitons (WORD => definition)
    > Concepts (IDEA => paragraph explanation)
    > Formulas (LATEX)
> Each unit will also have practice questions associated with it, that draw from the datatypes

> Each unit will consist of a single Page, split into headers, that covers all the unit material in an informal, note-like manner.
> Definitions and formulas will be introduced then made readily available as tooltips, but also in a searchable/visual format
> Each Page will end with a selection of Applets that can be individually accessed, with relevant formulas/definitions/guides readily available

# TODO
> Homepage
    > Topic Select (Level 3, Level 4 etc) on Home Page
    > Login feature for saving test results 
    > Motivational random quote
    > Quicksearch for formula/definition/pages
> Pageview (Unit view)
    > Sidebar
    > Overview Page
    > Page (main)
    > Topbar (utils, profile)
> Applet
    > Custom made per question type

> Structure 
> Currently, everything will be kept in a single data file for now but will extract out to mongodb Atlas afterwards 
> Load everything into Zustand so data is readily available for tooltips etc
> Data will be stored as JSON, and rendered as Markdown 
> Data will be stuffed into a redis/cache layer to facilitate search
> React Native for mobile
