# myproject
To be used as an example for Upwork

TASK 1 - BOOTSTRAP TEMPLATES
The base layout for templates is stored in the 'templates' directory at root level.
As of now, there are two blank HTML templates: one for pages using both navbar and sidebars, and one for pages using navbar only.
These templates allows for use of different navbars and sidebars.

The layout for the navbars and sidebars can be found as html files within the 'templates' directory in separate named subdirectories 'navbar' and 'sidebar'.

Each page consists of one these layouts, and is using Django blocks:

+---------------------------------------------+
| Navbar                                      |
+---------------------------------------------+
| S |                                         |
| i |                                         |
| d |                                         |
| e |                Main                     |
| b |      (HTML and content from apps)       |
| a |                                         |
| r |                                         |
+---+-----------------------------------------+

Objective:
    1. Use the bootstrap dashboard example to create a template containing the following blocks:
        Navbar
        Sidebar
        Main

        Bootstrap example can be found at
        https://getbootstrap.com/docs/5.0/examples/dashboard/

        Make sure that the fonts and icons are identical to the ones used in the bootstrap example. 

+---------------------------------------------+
| Navbar                                      |
+---------------------------------------------+
|                                             |
|                                             |
|                                             |
|                    Main                     |
|          (HTML and content from apps)       |
|                                             |
|                                             |
+---------------------------------------------+



TASK 2 - STATIC FILES
Each app have some files that are used only within that particular app, such as dashboards and gantt written in js.

There are also files that are used on multiple apps, such as 'dashboard.css' that comes with the bootstrap dashboard template.
I want these files to be stored once (not making duplicates), as I do not want to make correct to multiple identical css files when it is necessary to make changes to one particular css file. 

Objective:
    1. Find a way to store files related to specific app
    2. Find a way to store files related to multiple apps without have duplicates.