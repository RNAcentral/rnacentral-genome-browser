import React, { useEffect, useMemo, useState, useRef } from "react";
import igv from "igv/dist/igv.esm.js";
import "./igv.css"

import ftpData from "./files";

const IgvComponent = ({ data, index }) => {
  const igvContainer = useRef();
  const [browser, setBrowser] = useState();
  const [error, setError] = useState(false);
  const [genomeIndex, setGenomeIndex] = useState(index);
  const [locus, setLocus] = useState(data.ucsc_chromosome + ":" + data.start + "-" + data.end);
  const [reloadTrack, setReloadTrack] = useState(false);

  const getFTPdata = useMemo(() =>{
    return ftpData.find((item) => item.name === data.ensembl_assembly.assembly_id);
  }, [data.ensembl_assembly.assembly_id])

  const ensemblTrack = useMemo(() =>{
    return {
      name: "Ensembl annotation",
      type: "annotation",
      format: "gff",
      displayMode: "expanded",
      order: 1,
      url: getFTPdata ? getFTPdata.gffFile : "",
      indexURL: getFTPdata ? getFTPdata.gffIndex : "",
      color: (feature) => {
        switch (feature.getAttributeValue("type")) {
          case "ncRNA":
            return "#000096"
          case "mRNA":
            return "#000096"
          case "lnc_RNA":
            return "#000096"
          case "miRNA":
            return "#000096"
          case "rRNA":
            return "#000096"
          case "transcript":
            return "#d37200"
          default:
            return "#6c757d"
        }
      }
    }
  }, [getFTPdata])

  const rnacentralTrack = useMemo(() =>{
    return {
      name: "RNAcentral genomic coordinates data",
      type: "annotation",
      format: "bed",
      displayMode: "expanded",
      order: 2,
      color: "#3f7d97",
      url: getFTPdata ? getFTPdata.bedFile : "",
      indexURL: getFTPdata ? getFTPdata.bedIndex : "",
    }
  }, [getFTPdata])

  // Reload tracks when user clicks "Go to location" link
  useEffect(() => {
    if (genomeIndex !== index){
      setLocus(data.ucsc_chromosome + ":" + data.start + "-" + data.end);
      setGenomeIndex(index);
      setReloadTrack(true);
    }
  }, [data, index, genomeIndex])

  useEffect(() => {
    const assemblyId = data.ensembl_assembly.assembly_id;

    // We need a FASTA file to load the IGV
    if (getFTPdata && getFTPdata.fastaFile){

      // Set the browser's initial state
      const igvOptions = {
        search: {
          url: `https://rest.ensembl.org/lookup/symbol/${data.ensembl_assembly.species}/$FEATURE$?content-type=application/json`,
          chromosomeField: "seq_region_name",
          displayName: "display_name"
        },
        reference: {
          id: assemblyId,
          fastaURL: getFTPdata.fastaFile,
          indexURL: getFTPdata.fastaIndex,
        },
        locus: locus,
        tracks: [ ensemblTrack, rnacentralTrack ],
        trackDefaults: {
          annotation: {
            minHeight: 100,
            maxHeight: 600,
            autoHeight: true,
          }
        }
      };

      if (browser) {
        // Set genomic location
        browser.search(locus);

        // Update tracks when locus changes
        if (reloadTrack) {
          browser.removeTrackByName("Ensembl annotation");
          browser.removeTrackByName("RNAcentral genomic coordinates data");
          browser.loadTrack(ensemblTrack);
          browser.loadTrack(rnacentralTrack);
          setReloadTrack(false);
        }
      } else {
        // Create IGV
        igv.createBrowser(igvContainer.current, igvOptions).then((browser) => {
          browser.on('trackclick', (track, popoverData) => {
            // Customize the contents of the track pop-over
            let markup = '<table class="styled-table">';

            // Don't show a pop-over when there's no data.
            if (!popoverData || !popoverData.length) {
                return false;
            }

            popoverData.forEach(function (nameValue) {
              if (nameValue.name) {
                // Customize pop-over text to include a link
                let value = nameValue.name.toLowerCase() === 'name' && nameValue.value.startsWith("URS")
                    ? '<a href="https://rnacentral.org/rna/' + nameValue.value + '">' + nameValue.value + '</a>'
                    : nameValue.value;

                markup += "<tr><td>" + nameValue.name + "</td><td>" + value + "</td></tr>";
              }
              else {
                // Not a name/value pair
                markup += "<tr><td>" + nameValue.toString() + "</td></tr>";
              }
            });
            markup += "</table>";

            // By returning a string from the trackclick handler we're asking
            // IGV to use our custom HTML in its pop-over.
            return markup;
          });
          setBrowser(browser)
        });
      }
    } else {
      setError(true)
    }
  }, [browser, data, ensemblTrack, getFTPdata, locus, reloadTrack, rnacentralTrack])

  return (
    error ? <p>
      Failed to load Genome Browser
    </p> : <>
      <div ref={igvContainer}></div>
    </>
  )
};

export default React.memo(IgvComponent);