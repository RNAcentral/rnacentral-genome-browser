import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/store'
import GenomeBrowserURS from './genomeBrowserURS';
import GenomeBrowser from "./genomeBrowser";

const getMountPoint = () => {
  return document.createElement('div');
};

class RNAcentralGenomeBrowser extends HTMLElement {
  // ref: https://dev-tips.com/react/rendering-react-applications-as-native-web-components
  connectedCallback() {
    const shadowRoot = this.attachShadow({
      mode: 'open',
    });

    const mountPoint = getMountPoint();
    shadowRoot.appendChild(mountPoint);

    // get html attribute
    const data = JSON.parse(this.attributes.data ? this.attributes.data.nodeValue : null);
    const urs = data && data["urs"] ? data["urs"] : null;
    const taxid = data && data["taxid"] ? data["taxid"] : null;

    // get query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const species = urlParams.get('species') ? urlParams.get('species') : false;
    const chr = urlParams.get('chr') ? urlParams.get('chr') : false;
    const chromosome = urlParams.get('chromosome') ? urlParams.get('chromosome') : chr ? chr : false;
    const start = urlParams.get('start') ? urlParams.get('start') : false;
    const end = urlParams.get('end') ? urlParams.get('end') : false;

    let component;
    if (urs && taxid) {
      component = <GenomeBrowserURS urs={urs} taxid={taxid}/>
    } else {
      component = <GenomeBrowser
          species={species}
          chromosome={chromosome}
          start={start}
          end={end}
      />
    }

    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          { component }
        </Provider>
      </React.StrictMode>,
      mountPoint,
    );
  }
}

customElements.define('rnacentral-genome-browser', RNAcentralGenomeBrowser);
