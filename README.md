# Assignment-2
CSC-372 Assignment 2

Project Description

The Franklin University Event Guide is a website designed to help students, faculty, alumni, and visitors discover the upcoming events at Franklin University.  The site provides information about campus events such as football games, festivals, lectures, and university traditions. Users can view event dates, times, locations, categories, descriptions, and additional event information. The intended audience is Franklin University students, faculty, alumni, visitors, and anyone interested in university events.

Layout Decisions
CSS Grid

CSS Grid was used for the main page layout, hero sections, event cards, and event details. The main page uses Grid to create a sidebar navigation area and a larger content area. This allows the navigation and main content to remain organized in separate columns. I also used grid for the event details section to place the main event information beside the event information sidebar. Each event card uses grid to place the event image above the event information. This was to help keep the cards organized and gives each event a consistent structure.

Flexbox

Flexbox was used for the navigation links and the related events section. The navigation tab uses Flexbox to arrange the navigation links vertically.
The related events section uses Flexbox with wrapping enabled so that the event cards can appear next to each other on larger screens and move onto additional rows when the available screen width becomes smaller as required by the assignment.

Responsive Design

At screens smaller than 900px: The main page layout changes from multiple columns to a single column. The event page's hero section changes to a single-column layout. The event details section changes from two columns to one column. The event information moves below the main event content. The hero image becomes shorter.

At screens smaller than 600px: Event cards use a single-column layout. The footer changes to a single-column layout. The event hero image becomes shorter. Padding is reduced on event information sections to provide more usable space.

Testing

I tested the pages by resizing the browser window to different widths and checking that the navigation, event information, event cards, and footer remained readable and organized.

Semantic HTML

Several semantic HTML elements were used throughout the website.


The Header element is used for the main site header and for section headings. It identifies introductory content and headings for the page.

The Nav element contains the site's navigation links. It provides a clear section for users to move between the home page, event information, and contact information.

The Main element contains the primary content of each page. This separates the main page content from the header and footer.

The Section element is used to group related content, such as the hero section, event details, related events, and the About section.

The Article element is used for individual event cards. Each event card contains information that represents a separate event.

The Aside element is used for supporting content such as the sidebar navigation, About section, and event details.

The Footer element contains contact information, navigation links, and copyright information for the website.

Sources

Images

All Images used on the website were obtained from image sources and are stored locally in the project's Images folder.

These Images were AI-generated to suit the purpose of this website:
Founders Day image
Fall Festival image
Lecture Series image
Rivalry Game image
Franklin University favicon
