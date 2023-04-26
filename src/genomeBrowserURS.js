import React, { useState } from "react";

import IgvComponent from "./igv"
import { useGetGenomeBrowserURSQuery } from "./slice/apiSlice"

function GenomeBrowserURS({urs, taxid}) {
  const [genomeIndex, setGenomeIndex] = useState();
  const {data, isLoading, isSuccess, isError, isFetching} = useGetGenomeBrowserURSQuery({urs, taxid});
  const hits = isSuccess ? data.count : null;

  const stylingContent = {
    div: {
      overflowX: "auto",
      fontFamily: "Verdana,sans-serif",
      color: "#333333",
      fontSize: "14px"
    }, thead: {
      textAlign: "left"
    }, button: {
      background: "none",
      border: "none",
      color: "#337ab7",
      textDecoration: "underline",
      fontSize: "16px"
    }
  }

  return (
    <div style={stylingContent.div}>
      {hits ? <p>This sequence is found in <strong>{hits}</strong> genome locations:</p> : ""}
      <>
        {
          isLoading || isFetching ? (
            <span>Loading...</span>
          ) : isSuccess && data.count > 0 ? (
            <table className="table table-hover">
              <thead style={stylingContent.thead}>
                <tr>
                  <th>Go to location</th>
                  <th>Chromosome</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Strand</th>
                  <th>Ensembl</th>
                  <th>UCSC</th>
                  <th>Sequence identity</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.results.map((item, index) => <tr key={index}>
                    <td>
                      &#10095; <button onClick={() => setGenomeIndex(index)} style={stylingContent.button}>
                        Go to location
                      </button>
                    </td>
                    <td>{item.chromosome}</td>
                    <td>{item.start.toLocaleString()}</td>
                    <td>{item.end.toLocaleString()}</td>
                    <td>{item.strand === "1" ? "forward" : "reverse"}</td>
                    <td>
                      <a href={`http://${item.ensembl_assembly.subdomain}/${item.ensembl_assembly.ensembl_url}/Location/View?r=${item.chromosome}:${item.start}-${item.end}`} target="_blank" rel="noreferrer">
                        {item.ensembl_assembly.division.replace(/Ensembl(\w+)/g, 'Ensembl')}
                      </a>
                    </td>
                    <td>
                      {
                        item.ensembl_assembly.assembly_ucsc ? <a href={`http://genome.ucsc.edu/cgi-bin/hgTracks?db=${item.ensembl_assembly.assembly_ucsc}&position=${item.ucsc_chromosome}:${item.start}-${item.end}`} target="_blank" rel="noreferrer">
                          UCSC
                        </a> : <>-</>
                      }
                    </td>
                    <td>
                      {
                        item.identity ? <>{item.identity.toLocaleString() * 100}%</> : <>100%</>
                      }
                    </td>
                  </tr>)
                }
              </tbody>
            </table>
          ) : isSuccess && data.count === 0 ? (
            <>No genome locations found for this sequence</>
          ) : isError ? (
            <p>Error fetching genome locations data</p>
          ) : null
        }
        {
          genomeIndex && !isFetching ? <>
            <IgvComponent data={data.results[genomeIndex]} index={genomeIndex}/>
          </> : isSuccess && data.count > 0 ? <>
            <IgvComponent data={data.results[0]} index={0}/>
          </> : ""
        }
      </>
    </div>
  )
}

export default GenomeBrowserURS;
