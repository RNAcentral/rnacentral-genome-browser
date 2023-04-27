import React, { useState } from "react";

import IgvComponent from "./igv"
import { useGetGenomesQuery, useGetGenomeBrowserQuery } from "./slice/apiSlice"

function GenomeBrowser() {
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
      marginLeft: "10px",
      marginBottom: "20px",
      padding: "0.375rem 0.75rem",
    }
  }

  function handleSelectChange(event) {
    setPrevGenome(selectedGenome);
    setSelectedGenome(event.target.value);
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

    let genomeList = Array.from(new Set(genome.results.map(item => item.ensembl_url))).sort();

    return <div style={stylingContent.div}>
      <label htmlFor="genomic-species-select"><strong>Species</strong></label>
      <select style={stylingContent.select} name="genomic-species-select" value={selectedGenome} onChange={handleSelectChange}>
        { genomeList && genomeList.map(item => <option key={ item } value={ item }>{ item }</option>)}
      </select>
      <IgvComponent data={igvData} index={0}/>
    </div>
  }
}

export default GenomeBrowser;
