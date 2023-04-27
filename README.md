# RNAcentral Genome Browser

This is an embeddable component to load [igv.js](https://github.com/igvteam/igv.js).
It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use

Insert this html tag somewhere in your html and use the component's javascript package available on Github:

```
<rnacentral-genome-browser></rnacentral-genome-browser>
<script type="text/javascript" src="https://rnacentral.github.io/rnacentral-genome-browser/build/genome-browser.js"></script>
```

To load this component for a specific sequence, you need to pass the **U**nique **R**NA **S**equence 
identifier (URS) and the Species-specific Id (NCBI taxid), for example: 

```
<rnacentral-genome-browser data='{"urs": "URS0000650B1E", "taxid": "9606"}'></rnacentral-genome-browser>
```

Click [here](https://rnacentral.org/help#how-to-find-rnacentral-id) to see how you can find an RNAcentral identifier 
for an RNA sequence.

For a minimal example, see [index.html](./index.html).

## Developer details

In the project directory, you can run:

### `craco start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `craco build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.