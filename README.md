# decision_json_web
A web viewer for decision trees.

## Install
To install this project use the following steps:

1. Checkout the project. https://github.com/jfehrman/decision_json_web.git
2. Run the command `npm run build` to build the project.
3. Move the contents of the dist directory to host.
    * For testing you can use the command `npm run start:dev`

## Basic Usage
This project is a viewer for JSON decision trees.  

### Editing
The decision trees can be generated two ways.

#### Web Editor (Recomneded)
The decision tree web editor is a tool that allows the user to edit a decision tree using a browser.  It is currently being hosted at https://jfehrman.github.io/decision_json_editor/#/.

#### Command line
In addition to the web editor there is a command line application that you can generate a decision tree with.  This application runs best on Linux/Unix operating systems and has a few bugs on Windows.  This project can be checked out at the following link.  https://github.com/jfehrman/decision_json.

### Add Tree to Production
In order to add a generated decision tree to the website you must also add the name of the tree file to index.js.  All tree files are expected to have a .json extension.  

_In the future this process will be automated via an npm script._

## Support
Please [open an issue](https://github.com/jfehrman/decision_json_web/issues/new) for support.

## Contributing
Please contribute using [Github Flow](https://guides.github.com/introduction/flow/).  Create a branch, add comments  and [open a pull request](https://github.com/jfehrman/decision_json_web/compare).