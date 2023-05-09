import React, { useState } from "react";

import IgvComponent from "./igv"
import { useGetGenomesQuery, useGetGenomeBrowserQuery } from "./slice/apiSlice"

function GenomeBrowser() {
  const [files, setFiles] = useState();
  const [fileError, setFileError] = useState(false);
  const [selectedGenome, setSelectedGenome] = useState("homo_sapiens");
  const [prevGenome, setPrevGenome] = useState();

  const { data, isLoading, isFetching, isSuccess } = useGetGenomeBrowserQuery(selectedGenome);
  const { data: genome, isLoading: genomeIsLoading, isSuccess: genomeIsSuccess } = useGetGenomesQuery();

  const stylingContent = {
    div: {
      padding: "0 9px",
    }, select: {
      fontSize: "14px",
      color: "#495057",
      marginRight: "10px",
      padding: "0.375rem 0.75rem",
    }, input: {
      fontSize: "14px",
      display: "block",
      width: "100%",
      color: "#495057",
      padding: "0.240rem 0.75rem",
      background: "#fff",
      border: "1px solid #495057",
      borderRadius: "2px"
    }
  }

  function handleSelectChange(event) {
    setPrevGenome(selectedGenome);
    setSelectedGenome(event.target.value);
  }

  function onHandleFileChange(event) {
    // TODO: validate files
    // files accepted by IGV
    const trackFile = [".bed", ".gff", ".gff3"]

    // index files accepted by IGV
    const indexFile = [".tbi", ".bai", ".idx"]

    if (event.target.files.length === 2) {
      // set files
      let file1 = event.target.files[0]
      let file2 = event.target.files[1]

      // at least one file must be of type bed, gff or gff3
      if (trackFile.some(ext => file1.name.toLowerCase().includes(ext)) || trackFile.some(ext => file2.name.toLowerCase().includes(ext))){
        // set the order of the files in the array
        if (indexFile.some(ext => file2.name.toLowerCase().includes(ext))){
          setFiles([file1, file2])
        } else {
          setFiles([file2, file1])
        }

        // remove error message if it is being displayed
        if (fileError) { setFileError(false) }
      } else {
        // there is no bed, gff or gff3 file, show error message
        setFileError(true)
      }
    } else if (event.target.files.length === 1) {
      // file must be of type bed, gff or gff3
      if (trackFile.some(ext => event.target.files[0].name.toLowerCase().includes(ext))){
        setFiles([event.target.files[0]])
        if (fileError) { setFileError(false) }
      } else {
        setFileError(true)
      }
    } else {
      setFileError(true)
    }
  }

  if (isLoading || isFetching || genomeIsLoading) {
    return <div>Loading...</div>
  }

  if (isSuccess && genomeIsSuccess) {
    if (data && data.ensembl_url === prevGenome){
      return null
    }

    let igvData = {}

    if (data && data.ensembl_url && data.assembly_id) {
      igvData.ensembl_assembly = {"species": data.ensembl_url, "assembly_id": data.assembly_id}
    } else {
      return <div>Missing data to load IGV</div>
    }

    if (data && data.chromosome) {
      igvData.ucsc_chromosome = data.chromosome
    } else {
      igvData.ucsc_chromosome = "all"
    }

    if (data && data.start && data.end) {
      igvData.start = data.start;
      igvData.end = data.end;
    } else {
      igvData.start = "";
      igvData.end = "";
    }

    // get data for the select field
    // e.g. ['Homo sapiens|GRCh38|homo_sapiens', 'Mus musculus|GRCm39|mus_musculus', ...]
    // where "Homo sapiens|GRCh38" is the string displayed in the select and
    // homo_sapiens is the value used to get the data from the API
    let genomeList = Array.from(new Set(
        genome.results.map(item => item.common_name + "|" + item.assembly_id + "|" + item.ensembl_url)
    )).sort();

    return <div style={stylingContent.div}>
      <table>
        <thead>
          <tr>
            <th style={{textAlign: "left"}}>Select species</th>
            <th style={{textAlign: "left"}}>
              Add track { fileError
                ? <span style={{fontWeight: "normal", color: "red"}}>please upload only a bed, gff or gff3 file</span>
                : <span style={{fontWeight: "normal"}}>(bed, gff, or gff3 + optional index file)</span>
              }
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select style={stylingContent.select} name="genomic-species-select" value={selectedGenome} onChange={handleSelectChange}>
                {
                  genomeList && genomeList.map(item => <option key={ item } value={ item.split("|")[2] }>
                    { item.split("|")[0] } ({ item.split("|")[1] })
                  </option>)
                }
              </select>
            </td>
            <td>
              <input style={stylingContent.input} type="file" onChange={(e) => onHandleFileChange(e)} multiple />
            </td>
          </tr>
        </tbody>
      </table>
      <IgvComponent data={igvData} index={0} files={files}/>
    </div>
  }
}

export default GenomeBrowser;
