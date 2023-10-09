import React, { useEffect, useMemo, useState, useRef } from "react";
import igv from "igv/dist/igv.esm.js";
import "./igv.css"

import ftpData from "./files";

const IgvComponent = ({ data, index, files }) => {
  const igvContainer = useRef();
  const [browser, setBrowser] = useState();
  const [error, setError] = useState(false);
  const [genomeIndex, setGenomeIndex] = useState(index);
  const [locus, setLocus] = useState(data.ucsc_chromosome + ":" + data.start + "-" + data.end);
  const [reloadTrack, setReloadTrack] = useState(false);

  const getFTPdata = useMemo(() =>{
    return ftpData.find((item) => item.name === data.ensembl_assembly.assembly_id);
  }, [data.ensembl_assembly.assembly_id])

  const userTrack = useMemo(() =>{
    return {
      name: "User annotation",
      type: "annotation",
      displayMode: "expanded",
      order: 1,
      url: files && files.length > 0 ? files[0] : "",
      indexURL: files && files.length > 1 ? files[1] : "",
      color: "#8d00d3",
    }
  }, [files])

  const ensemblTrack = useMemo(() =>{
    return getFTPdata && getFTPdata.ensemblTrack ? {
      name: "Ensembl annotation",
      type: "annotation",
      format: "gff",
      displayMode: "expanded",
      order: 2,
      url: getFTPdata.ensemblTrack,
      indexURL: getFTPdata.ensemblIndex,
      color: "#000096",
      filterTypes: ["biological_region"]
    } : ""
  }, [getFTPdata])

  const rnacentralTrack = useMemo(() =>{
    return getFTPdata && getFTPdata.rnacentralTrack ? {
      name: "RNAcentral genomic coordinates data",
      type: "annotation",
      format: "gff",
      displayMode: "expanded",
      order: 3,
      color: "#3f7d97",
      url: getFTPdata.rnacentralTrack,
      indexURL: getFTPdata.rnacentralIndex,
    } : ""
  }, [getFTPdata])

  // Reload tracks when:
  // 1 - user clicks "Go to location" link
  // 2 - user uploads a file
  // 3 - user selects a different species
  useEffect(() => {
    if (genomeIndex !== index || locus !== data.ucsc_chromosome + ":" + data.start + "-" + data.end){
      setLocus(data.ucsc_chromosome + ":" + data.start + "-" + data.end);
      setGenomeIndex(index);
      setReloadTrack(true);
    }
    if (files) {
      setReloadTrack(true);
    }
  }, [data, files, genomeIndex, index, locus])

  useEffect(() => {
    const assemblyId = data.ensembl_assembly.assembly_id;

    // We need a FASTA file to load the IGV
    if (getFTPdata && getFTPdata.fastaFile){

      // Get species
      const species = data.ensembl_assembly.ensembl_url ? data.ensembl_assembly.ensembl_url : data.ensembl_assembly.species

      // Set the browser's initial state
      const igvOptions = {
        search: {
          url: `https://rest.ensembl.org/lookup/symbol/${species}/$FEATURE$?content-type=application/json`,
          chromosomeField: "seq_region_name",
          displayName: "display_name"
        },
        reference: {
          id: assemblyId,
          fastaURL: getFTPdata.fastaFile,
          indexURL: getFTPdata.fastaIndex,
        },
        locus: locus,
        tracks: ensemblTrack && rnacentralTrack ? [ ensemblTrack, rnacentralTrack ] : ensemblTrack ? [ ensemblTrack ] : [ rnacentralTrack ],
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
          if (files) {
            browser.removeTrackByName("User annotation");
            browser.loadTrack(userTrack);
          }
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
                let domain = window.location.host.includes("test")
                    ? "https://test.rnacentral.org/rna/"
                    : window.location.host.includes("localhost:8000") || window.location.host.includes("127.0.0.1:8000")
                    ? "http://localhost:8000/rna/"
                    : "https://rnacentral.org/rna/"
                // Customize pop-over text to include a link
                let value = nameValue.name.toLowerCase() === 'name' && nameValue.value.startsWith("URS")
                    ? '<a href="' + domain + nameValue.value + '">' + nameValue.value + '</a>'
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

          // Update the page URL whenever the IGV viewer locus changes
          // Only change on the genome browser page, do not change sequence pages
          if (data.ensembl_assembly.species){
            browser.on('locuschange', function (referenceFrameList) {
              let newLocus = referenceFrameList.map(rf => rf.getLocusString()).join('%20');
              let newChr = newLocus.split(':')[0]
              let newStart = newLocus.split(':')[1].split('-')[0]
              let newEnd = newLocus.split(':')[1].split('-')[1]
              let newParam = "?species=" + species
                  + "&chromosome=" + newChr
                  + "&start=" + newStart
                  + "&end=" + newEnd;
              window.history.replaceState("", "", window.location.href.split("?")[0] + newParam);
            });
          }

          // Update state
          setBrowser(browser)
        });
      }
    } else {
      setError(true)
    }
  }, [browser, data, ensemblTrack, files, getFTPdata, locus, reloadTrack, rnacentralTrack, userTrack])

  return (
    error ? <p>
      Failed to load Genome Browser
    </p> : <>
      <div ref={igvContainer}></div>
    </>
  )
};

export default React.memo(IgvComponent);