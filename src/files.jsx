const folder = process.env.REACT_APP_FTP_FOLDER

const ftpData = [
  {
    "name": "GRCh38",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/homo_sapiens.GRCh38.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/homo_sapiens.GRCh38.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/homo_sapiens.GRCh38.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/homo_sapiens.GRCh38.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/homo_sapiens.GRCh38.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/homo_sapiens.GRCh38.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM222487v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anas_zonorhyncha.ASM222487v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anas_zonorhyncha.ASM222487v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anas_zonorhyncha.ASM222487v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anas_zonorhyncha.ASM222487v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anas_zonorhyncha.ASM222487v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anas_zonorhyncha.ASM222487v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AaegL5",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aedes_aegypti_lvpagwg.AaegL5.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aedes_aegypti_lvpagwg.AaegL5.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aedes_aegypti_lvpagwg.AaegL5.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aedes_aegypti_lvpagwg.AaegL5.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aedes_aegypti_lvpagwg.AaegL5.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aedes_aegypti_lvpagwg.AaegL5.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "dicty_2.7",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dictyostelium_discoideum.dicty_2.7.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dictyostelium_discoideum.dicty_2.7.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dictyostelium_discoideum.dicty_2.7.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dictyostelium_discoideum.dicty_2.7.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dictyostelium_discoideum.dicty_2.7.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dictyostelium_discoideum.dicty_2.7.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM228892v3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/delphinapterus_leucas.ASM228892v3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/delphinapterus_leucas.ASM228892v3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/delphinapterus_leucas.ASM228892v3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/delphinapterus_leucas.ASM228892v3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/delphinapterus_leucas.ASM228892v3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/delphinapterus_leucas.ASM228892v3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AculA1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_culicifacies.AculA1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_culicifacies.AculA1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_culicifacies.AculA1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_culicifacies.AculA1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_culicifacies.AculA1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_culicifacies.AculA1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ENA1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/albugo_laibachii.ENA1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/albugo_laibachii.ENA1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/albugo_laibachii.ENA1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/albugo_laibachii.ENA1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/albugo_laibachii.ENA1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/albugo_laibachii.ENA1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AdarC3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_darlingi.AdarC3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_darlingi.AdarC3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_darlingi.AdarC3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_darlingi.AdarC3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_darlingi.AdarC3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_darlingi.AdarC3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CAROLI_EIJ_v1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_caroli.CAROLI_EIJ_v1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_caroli.CAROLI_EIJ_v1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_caroli.CAROLI_EIJ_v1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_caroli.CAROLI_EIJ_v1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_caroli.CAROLI_EIJ_v1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_caroli.CAROLI_EIJ_v1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM15152v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_triticina.ASM15152v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_triticina.ASM15152v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_triticina.ASM15152v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_triticina.ASM15152v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_triticina.ASM15152v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_triticina.ASM15152v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM162521v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/daucus_carota.ASM162521v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/daucus_carota.ASM162521v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/daucus_carota.ASM162521v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/daucus_carota.ASM162521v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/daucus_carota.ASM162521v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/daucus_carota.ASM162521v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CEY_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cervus_hanglu_yarkandensis.CEY_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cervus_hanglu_yarkandensis.CEY_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cervus_hanglu_yarkandensis.CEY_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cervus_hanglu_yarkandensis.CEY_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cervus_hanglu_yarkandensis.CEY_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cervus_hanglu_yarkandensis.CEY_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Ccap_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ceratitis_capitata_gca000347755v4.Ccap_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ceratitis_capitata_gca000347755v4.Ccap_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ceratitis_capitata_gca000347755v4.Ccap_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ceratitis_capitata_gca000347755v4.Ccap_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ceratitis_capitata_gca000347755v4.Ccap_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ceratitis_capitata_gca000347755v4.Ccap_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CamDro2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camelus_dromedarius.CamDro2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camelus_dromedarius.CamDro2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camelus_dromedarius.CamDro2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camelus_dromedarius.CamDro2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camelus_dromedarius.CamDro2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camelus_dromedarius.CamDro2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ChiLan1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chinchilla_lanigera.ChiLan1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chinchilla_lanigera.ChiLan1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chinchilla_lanigera.ChiLan1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chinchilla_lanigera.ChiLan1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chinchilla_lanigera.ChiLan1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chinchilla_lanigera.ChiLan1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CatWag_v2_BIUU_UCD",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/catagonus_wagneri.CatWag_v2_BIUU_UCD.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/catagonus_wagneri.CatWag_v2_BIUU_UCD.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/catagonus_wagneri.CatWag_v2_BIUU_UCD.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/catagonus_wagneri.CatWag_v2_BIUU_UCD.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/catagonus_wagneri.CatWag_v2_BIUU_UCD.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/catagonus_wagneri.CatWag_v2_BIUU_UCD.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM311381v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sphenodon_punctatus.ASM311381v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sphenodon_punctatus.ASM311381v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sphenodon_punctatus.ASM311381v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sphenodon_punctatus.ASM311381v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sphenodon_punctatus.ASM311381v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sphenodon_punctatus.ASM311381v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "C_variegatus-1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyprinodon_variegatus.C_variegatus-1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyprinodon_variegatus.C_variegatus-1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyprinodon_variegatus.C_variegatus-1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyprinodon_variegatus.C_variegatus-1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyprinodon_variegatus.C_variegatus-1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyprinodon_variegatus.C_variegatus-1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Caty_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cercocebus_atys.Caty_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cercocebus_atys.Caty_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cercocebus_atys.Caty_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cercocebus_atys.Caty_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cercocebus_atys.Caty_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cercocebus_atys.Caty_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "FicAlb1.5",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ficedula_albicollis.FicAlb1.5.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ficedula_albicollis.FicAlb1.5.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ficedula_albicollis.FicAlb1.5.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ficedula_albicollis.FicAlb1.5.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ficedula_albicollis.FicAlb1.5.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ficedula_albicollis.FicAlb1.5.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Chelydra_serpentina-1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chelydra_serpentina.Chelydra_serpentina-1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chelydra_serpentina.Chelydra_serpentina-1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chelydra_serpentina.Chelydra_serpentina-1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chelydra_serpentina.Chelydra_serpentina-1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chelydra_serpentina.Chelydra_serpentina-1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chelydra_serpentina.Chelydra_serpentina-1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ofav_dov_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/orbicella_faveolata_gca002042975v1.ofav_dov_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/orbicella_faveolata_gca002042975v1.ofav_dov_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/orbicella_faveolata_gca002042975v1.ofav_dov_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/orbicella_faveolata_gca002042975v1.ofav_dov_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/orbicella_faveolata_gca002042975v1.ofav_dov_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/orbicella_faveolata_gca002042975v1.ofav_dov_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM221717v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/folsomia_candida.ASM221717v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/folsomia_candida.ASM221717v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/folsomia_candida.ASM221717v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/folsomia_candida.ASM221717v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/folsomia_candida.ASM221717v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/folsomia_candida.ASM221717v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Lepidothrix_coronata-1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lepidothrix_coronata.Lepidothrix_coronata-1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lepidothrix_coronata.Lepidothrix_coronata-1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lepidothrix_coronata.Lepidothrix_coronata-1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lepidothrix_coronata.Lepidothrix_coronata-1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lepidothrix_coronata.Lepidothrix_coronata-1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lepidothrix_coronata.Lepidothrix_coronata-1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AstBur1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/haplochromis_burtoni.AstBur1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/haplochromis_burtoni.AstBur1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/haplochromis_burtoni.AstBur1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/haplochromis_burtoni.AstBur1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/haplochromis_burtoni.AstBur1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/haplochromis_burtoni.AstBur1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM414374v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phasianus_colchicus.ASM414374v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phasianus_colchicus.ASM414374v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phasianus_colchicus.ASM414374v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phasianus_colchicus.ASM414374v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phasianus_colchicus.ASM414374v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phasianus_colchicus.ASM414374v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM276v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_falciparum.ASM276v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_falciparum.ASM276v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_falciparum.ASM276v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_falciparum.ASM276v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_falciparum.ASM276v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_falciparum.ASM276v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "dlabrax2021",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dicentrarchus_labrax.dlabrax2021.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dicentrarchus_labrax.dlabrax2021.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dicentrarchus_labrax.dlabrax2021.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dicentrarchus_labrax.dlabrax2021.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dicentrarchus_labrax.dlabrax2021.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dicentrarchus_labrax.dlabrax2021.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM587006v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oreochromis_aureus.ASM587006v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oreochromis_aureus.ASM587006v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oreochromis_aureus.ASM587006v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oreochromis_aureus.ASM587006v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oreochromis_aureus.ASM587006v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oreochromis_aureus.ASM587006v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "YSA_version1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sipha_flava_gca003268045v1.YSA_version1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sipha_flava_gca003268045v1.YSA_version1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sipha_flava_gca003268045v1.YSA_version1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sipha_flava_gca003268045v1.YSA_version1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sipha_flava_gca003268045v1.YSA_version1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sipha_flava_gca003268045v1.YSA_version1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM294v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_pombe.ASM294v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_pombe.ASM294v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_pombe.ASM294v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_pombe.ASM294v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_pombe.ASM294v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_pombe.ASM294v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Chrysemys_picta_bellii-3.0.3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chrysemys_picta_bellii.Chrysemys_picta_bellii-3.0.3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chrysemys_picta_bellii.Chrysemys_picta_bellii-3.0.3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chrysemys_picta_bellii.Chrysemys_picta_bellii-3.0.3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chrysemys_picta_bellii.Chrysemys_picta_bellii-3.0.3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chrysemys_picta_bellii.Chrysemys_picta_bellii-3.0.3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chrysemys_picta_bellii.Chrysemys_picta_bellii-3.0.3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ZooNev1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zootermopsis_nevadensis.ZooNev1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zootermopsis_nevadensis.ZooNev1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zootermopsis_nevadensis.ZooNev1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zootermopsis_nevadensis.ZooNev1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zootermopsis_nevadensis.ZooNev1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zootermopsis_nevadensis.ZooNev1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fGouWil2.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gouania_willdenowi.fGouWil2.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gouania_willdenowi.fGouWil2.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gouania_willdenowi.fGouWil2.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gouania_willdenowi.fGouWil2.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gouania_willdenowi.fGouWil2.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gouania_willdenowi.fGouWil2.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "phaCin_unsw_v4.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phascolarctos_cinereus.phaCin_unsw_v4.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phascolarctos_cinereus.phaCin_unsw_v4.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phascolarctos_cinereus.phaCin_unsw_v4.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phascolarctos_cinereus.phaCin_unsw_v4.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phascolarctos_cinereus.phaCin_unsw_v4.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phascolarctos_cinereus.phaCin_unsw_v4.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AplCal3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aplysia_californica_gca000002075v2.AplCal3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aplysia_californica_gca000002075v2.AplCal3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aplysia_californica_gca000002075v2.AplCal3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aplysia_californica_gca000002075v2.AplCal3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aplysia_californica_gca000002075v2.AplCal3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aplysia_californica_gca000002075v2.AplCal3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM14940v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/thalassiosira_pseudonana.ASM14940v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/thalassiosira_pseudonana.ASM14940v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/thalassiosira_pseudonana.ASM14940v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/thalassiosira_pseudonana.ASM14940v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/thalassiosira_pseudonana.ASM14940v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/thalassiosira_pseudonana.ASM14940v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AquaS1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_quadriannulatus.AquaS1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_quadriannulatus.AquaS1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_quadriannulatus.AquaS1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_quadriannulatus.AquaS1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_quadriannulatus.AquaS1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_quadriannulatus.AquaS1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM272v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leishmania_major.ASM272v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leishmania_major.ASM272v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leishmania_major.ASM272v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leishmania_major.ASM272v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leishmania_major.ASM272v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leishmania_major.ASM272v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "S_indicum_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sesamum_indicum.S_indicum_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sesamum_indicum.S_indicum_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sesamum_indicum.S_indicum_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sesamum_indicum.S_indicum_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sesamum_indicum.S_indicum_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sesamum_indicum.S_indicum_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CVASU_BBG_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capra_hircus_blackbengal.CVASU_BBG_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capra_hircus_blackbengal.CVASU_BBG_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capra_hircus_blackbengal.CVASU_BBG_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capra_hircus_blackbengal.CVASU_BBG_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capra_hircus_blackbengal.CVASU_BBG_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capra_hircus_blackbengal.CVASU_BBG_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "dere_caf1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_erecta.dere_caf1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_erecta.dere_caf1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_erecta.dere_caf1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_erecta.dere_caf1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_erecta.dere_caf1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_erecta.dere_caf1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Svevo.v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_turgidum.Svevo.v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_turgidum.Svevo.v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_turgidum.Svevo.v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_turgidum.Svevo.v1.ensembl.gff3.gz.csi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_turgidum.Svevo.v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_turgidum.Svevo.v1.rnacentral.gff3.gz.csi`
  },
  {
    "name": "Rye_Lo7_2018_v1p1p1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/secale_cereale.Rye_Lo7_2018_v1p1p1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/secale_cereale.Rye_Lo7_2018_v1p1p1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/secale_cereale.Rye_Lo7_2018_v1p1p1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/secale_cereale.Rye_Lo7_2018_v1p1p1.ensembl.gff3.gz.csi`
  },
  {
    "name": "CavAp1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cavia_aperea.CavAp1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cavia_aperea.CavAp1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cavia_aperea.CavAp1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cavia_aperea.CavAp1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cavia_aperea.CavAp1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cavia_aperea.CavAp1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "VulVul2.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vulpes_vulpes.VulVul2.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vulpes_vulpes.VulVul2.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vulpes_vulpes.VulVul2.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vulpes_vulpes.VulVul2.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vulpes_vulpes.VulVul2.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vulpes_vulpes.VulVul2.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AepiE1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_epiroticus.AepiE1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_epiroticus.AepiE1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_epiroticus.AepiE1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_epiroticus.AepiE1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_epiroticus.AepiE1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_epiroticus.AepiE1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "BIME_Iper_1.3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ixodes_persulcatus_gca013358835v1.BIME_Iper_1.3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ixodes_persulcatus_gca013358835v1.BIME_Iper_1.3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ixodes_persulcatus_gca013358835v1.BIME_Iper_1.3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ixodes_persulcatus_gca013358835v1.BIME_Iper_1.3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ixodes_persulcatus_gca013358835v1.BIME_Iper_1.3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ixodes_persulcatus_gca013358835v1.BIME_Iper_1.3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ChlSab1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chlorocebus_sabaeus.ChlSab1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chlorocebus_sabaeus.ChlSab1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chlorocebus_sabaeus.ChlSab1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chlorocebus_sabaeus.ChlSab1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chlorocebus_sabaeus.ChlSab1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chlorocebus_sabaeus.ChlSab1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "choHof1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/choloepus_hoffmanni.choHof1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/choloepus_hoffmanni.choHof1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/choloepus_hoffmanni.choHof1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/choloepus_hoffmanni.choHof1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/choloepus_hoffmanni.choHof1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/choloepus_hoffmanni.choHof1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM82789v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/thelohanellus_kitauei.ASM82789v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/thelohanellus_kitauei.ASM82789v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/thelohanellus_kitauei.ASM82789v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/thelohanellus_kitauei.ASM82789v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/thelohanellus_kitauei.ASM82789v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/thelohanellus_kitauei.ASM82789v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PunNye1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pundamilia_nyererei.PunNye1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pundamilia_nyererei.PunNye1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pundamilia_nyererei.PunNye1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pundamilia_nyererei.PunNye1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pundamilia_nyererei.PunNye1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pundamilia_nyererei.PunNye1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM241v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_vivax.ASM241v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_vivax.ASM241v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_vivax.ASM241v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_vivax.ASM241v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_vivax.ASM241v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_vivax.ASM241v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Cson1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/culicoides_sonorensis.Cson1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/culicoides_sonorensis.Cson1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/culicoides_sonorensis.Cson1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/culicoides_sonorensis.Cson1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/culicoides_sonorensis.Cson1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/culicoides_sonorensis.Cson1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Coturnix_japonica_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/coturnix_japonica.Coturnix_japonica_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/coturnix_japonica.Coturnix_japonica_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/coturnix_japonica.Coturnix_japonica_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/coturnix_japonica.Coturnix_japonica_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/coturnix_japonica.Coturnix_japonica_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/coturnix_japonica.Coturnix_japonica_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Cypcar_WagV4.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyprinus_carpio_carpio.Cypcar_WagV4.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyprinus_carpio_carpio.Cypcar_WagV4.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyprinus_carpio_carpio.Cypcar_WagV4.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyprinus_carpio_carpio.Cypcar_WagV4.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyprinus_carpio_carpio.Cypcar_WagV4.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyprinus_carpio_carpio.Cypcar_WagV4.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fCotGob3.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cottoperca_gobio.fCotGob3.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cottoperca_gobio.fCotGob3.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cottoperca_gobio.fCotGob3.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cottoperca_gobio.fCotGob3.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cottoperca_gobio.fCotGob3.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cottoperca_gobio.fCotGob3.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "DendPond_male_gca000355655v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dendroctonus_ponderosae_gca000355655v1.DendPond_male_gca000355655v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dendroctonus_ponderosae_gca000355655v1.DendPond_male_gca000355655v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dendroctonus_ponderosae_gca000355655v1.DendPond_male_gca000355655v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dendroctonus_ponderosae_gca000355655v1.DendPond_male_gca000355655v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dendroctonus_ponderosae_gca000355655v1.DendPond_male_gca000355655v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dendroctonus_ponderosae_gca000355655v1.DendPond_male_gca000355655v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Dvir_v2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/diabrotica_virgifera_gca003013835v2.Dvir_v2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/diabrotica_virgifera_gca003013835v2.Dvir_v2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/diabrotica_virgifera_gca003013835v2.Dvir_v2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/diabrotica_virgifera_gca003013835v2.Dvir_v2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/diabrotica_virgifera_gca003013835v2.Dvir_v2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/diabrotica_virgifera_gca003013835v2.Dvir_v2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "M_albus_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monopterus_albus.M_albus_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monopterus_albus.M_albus_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monopterus_albus.M_albus_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monopterus_albus.M_albus_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monopterus_albus.M_albus_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monopterus_albus.M_albus_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Ptep_3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parasteatoda_tepidariorum_gca000365465v3.Ptep_3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parasteatoda_tepidariorum_gca000365465v3.Ptep_3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parasteatoda_tepidariorum_gca000365465v3.Ptep_3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parasteatoda_tepidariorum_gca000365465v3.Ptep_3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parasteatoda_tepidariorum_gca000365465v3.Ptep_3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parasteatoda_tepidariorum_gca000365465v3.Ptep_3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "UCB_Xtro_10.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xenopus_tropicalis.UCB_Xtro_10.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xenopus_tropicalis.UCB_Xtro_10.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xenopus_tropicalis.UCB_Xtro_10.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xenopus_tropicalis.UCB_Xtro_10.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xenopus_tropicalis.UCB_Xtro_10.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xenopus_tropicalis.UCB_Xtro_10.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "WEWSeq_v.1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_dicoccoides.WEWSeq_v.1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_dicoccoides.WEWSeq_v.1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_dicoccoides.WEWSeq_v.1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_dicoccoides.WEWSeq_v.1.0.ensembl.gff3.gz.csi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_dicoccoides.WEWSeq_v.1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_dicoccoides.WEWSeq_v.1.0.rnacentral.gff3.gz.csi`
  },
  {
    "name": "X_maculatus-5.0-male",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xiphophorus_maculatus.X_maculatus-5.0-male.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xiphophorus_maculatus.X_maculatus-5.0-male.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xiphophorus_maculatus.X_maculatus-5.0-male.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xiphophorus_maculatus.X_maculatus-5.0-male.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xiphophorus_maculatus.X_maculatus-5.0-male.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xiphophorus_maculatus.X_maculatus-5.0-male.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Eburgeri_3.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eptatretus_burgeri.Eburgeri_3.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eptatretus_burgeri.Eburgeri_3.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eptatretus_burgeri.Eburgeri_3.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eptatretus_burgeri.Eburgeri_3.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eptatretus_burgeri.Eburgeri_3.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eptatretus_burgeri.Eburgeri_3.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA000143045v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/globisporangium_ultimum.GCA000143045v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/globisporangium_ultimum.GCA000143045v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/globisporangium_ultimum.GCA000143045v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/globisporangium_ultimum.GCA000143045v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/globisporangium_ultimum.GCA000143045v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/globisporangium_ultimum.GCA000143045v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GmorY1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_morsitans.GmorY1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_morsitans.GmorY1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_morsitans.GmorY1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_morsitans.GmorY1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_morsitans.GmorY1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_morsitans.GmorY1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Guppy_female_1.0_MT",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_reticulata.Guppy_female_1.0_MT.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_reticulata.Guppy_female_1.0_MT.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_reticulata.Guppy_female_1.0_MT.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_reticulata.Guppy_female_1.0_MT.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_reticulata.Guppy_female_1.0_MT.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_reticulata.Guppy_female_1.0_MT.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "H_comes_QL1_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hippocampus_comes.H_comes_QL1_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hippocampus_comes.H_comes_QL1_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hippocampus_comes.H_comes_QL1_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hippocampus_comes.H_comes_QL1_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hippocampus_comes.H_comes_QL1_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hippocampus_comes.H_comes_QL1_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Helro1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/helobdella_robusta.Helro1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/helobdella_robusta.Helro1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/helobdella_robusta.Helro1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/helobdella_robusta.Helro1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/helobdella_robusta.Helro1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/helobdella_robusta.Helro1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "HmiaM1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hofstenia_miamia.HmiaM1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hofstenia_miamia.HmiaM1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hofstenia_miamia.HmiaM1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hofstenia_miamia.HmiaM1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hofstenia_miamia.HmiaM1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hofstenia_miamia.HmiaM1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Hmel1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/heliconius_melpomene.Hmel1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/heliconius_melpomene.Hmel1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/heliconius_melpomene.Hmel1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/heliconius_melpomene.Hmel1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/heliconius_melpomene.Hmel1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/heliconius_melpomene.Hmel1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AMTR1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amborella_trichopoda.AMTR1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amborella_trichopoda.AMTR1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amborella_trichopoda.AMTR1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amborella_trichopoda.AMTR1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amborella_trichopoda.AMTR1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amborella_trichopoda.AMTR1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM14955v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_verticillioides.ASM14955v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_verticillioides.ASM14955v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_verticillioides.ASM14955v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_verticillioides.ASM14955v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_verticillioides.ASM14955v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_verticillioides.ASM14955v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM75419v3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_simulans.ASM75419v3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_simulans.ASM75419v3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_simulans.ASM75419v3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_simulans.ASM75419v3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_simulans.ASM75419v3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_simulans.ASM75419v3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Bison_UMD1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bison_bison_bison.Bison_UMD1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bison_bison_bison.Bison_UMD1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bison_bison_bison.Bison_UMD1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bison_bison_bison.Bison_UMD1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bison_bison_bison.Bison_UMD1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bison_bison_bison.Bison_UMD1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "bTaeGut1_v1.p",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/taeniopygia_guttata.bTaeGut1_v1.p.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/taeniopygia_guttata.bTaeGut1_v1.p.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/taeniopygia_guttata.bTaeGut1_v1.p.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/taeniopygia_guttata.bTaeGut1_v1.p.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/taeniopygia_guttata.bTaeGut1_v1.p.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/taeniopygia_guttata.bTaeGut1_v1.p.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fAnaTes1.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anabas_testudineus.fAnaTes1.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anabas_testudineus.fAnaTes1.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anabas_testudineus.fAnaTes1.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anabas_testudineus.fAnaTes1.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anabas_testudineus.fAnaTes1.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anabas_testudineus.fAnaTes1.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Callorhinchus_milii-6.1.3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/callorhinchus_milii.Callorhinchus_milii-6.1.3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/callorhinchus_milii.Callorhinchus_milii-6.1.3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/callorhinchus_milii.Callorhinchus_milii-6.1.3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/callorhinchus_milii.Callorhinchus_milii-6.1.3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/callorhinchus_milii.Callorhinchus_milii-6.1.3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/callorhinchus_milii.Callorhinchus_milii-6.1.3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ButJap1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/buteo_japonicus.ButJap1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/buteo_japonicus.ButJap1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/buteo_japonicus.ButJap1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/buteo_japonicus.ButJap1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/buteo_japonicus.ButJap1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/buteo_japonicus.ButJap1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000149845.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_japonicus.GCA_000149845.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_japonicus.GCA_000149845.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_japonicus.GCA_000149845.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_japonicus.GCA_000149845.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_japonicus.GCA_000149845.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_japonicus.GCA_000149845.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "dana_caf1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_ananassae.dana_caf1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_ananassae.dana_caf1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_ananassae.dana_caf1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_ananassae.dana_caf1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_ananassae.dana_caf1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_ananassae.dana_caf1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AgamP4",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_gambiae.AgamP4.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_gambiae.AgamP4.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_gambiae.AgamP4.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_gambiae.AgamP4.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_gambiae.AgamP4.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_gambiae.AgamP4.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ALMONDv2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_dulcis.ALMONDv2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_dulcis.ALMONDv2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_dulcis.ALMONDv2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_dulcis.ALMONDv2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_dulcis.ALMONDv2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_dulcis.ALMONDv2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "EF1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_culmorum.EF1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_culmorum.EF1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_culmorum.EF1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_culmorum.EF1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_culmorum.EF1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_culmorum.EF1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "EF2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/blumeria_graminis.EF2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/blumeria_graminis.EF2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/blumeria_graminis.EF2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/blumeria_graminis.EF2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/blumeria_graminis.EF2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/blumeria_graminis.EF2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "EquCab3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/equus_caballus.EquCab3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/equus_caballus.EquCab3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/equus_caballus.EquCab3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/equus_caballus.EquCab3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/equus_caballus.EquCab3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/equus_caballus.EquCab3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Eutsalg1_0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eutrema_salsugineum.Eutsalg1_0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eutrema_salsugineum.Eutsalg1_0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eutrema_salsugineum.Eutsalg1_0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eutrema_salsugineum.Eutsalg1_0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eutrema_salsugineum.Eutsalg1_0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eutrema_salsugineum.Eutsalg1_0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fAstCal1.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/astatotilapia_calliptera.fAstCal1.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/astatotilapia_calliptera.fAstCal1.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/astatotilapia_calliptera.fAstCal1.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/astatotilapia_calliptera.fAstCal1.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/astatotilapia_calliptera.fAstCal1.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/astatotilapia_calliptera.fAstCal1.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fBetSpl5.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/betta_splendens.fBetSpl5.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/betta_splendens.fBetSpl5.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/betta_splendens.fBetSpl5.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/betta_splendens.fBetSpl5.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/betta_splendens.fBetSpl5.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/betta_splendens.fBetSpl5.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Fonio_CM05836",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/digitaria_exilis.Fonio_CM05836.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/digitaria_exilis.Fonio_CM05836.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/digitaria_exilis.Fonio_CM05836.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/digitaria_exilis.Fonio_CM05836.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/digitaria_exilis.Fonio_CM05836.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/digitaria_exilis.Fonio_CM05836.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fCycLum1.pri",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyclopterus_lumpus.fCycLum1.pri.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyclopterus_lumpus.fCycLum1.pri.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyclopterus_lumpus.fCycLum1.pri.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyclopterus_lumpus.fCycLum1.pri.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyclopterus_lumpus.fCycLum1.pri.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyclopterus_lumpus.fCycLum1.pri.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fDenClu1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/denticeps_clupeoides.fDenClu1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/denticeps_clupeoides.fDenClu1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/denticeps_clupeoides.fDenClu1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/denticeps_clupeoides.fDenClu1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/denticeps_clupeoides.fDenClu1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/denticeps_clupeoides.fDenClu1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fEcheNa1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echeneis_naucrates.fEcheNa1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echeneis_naucrates.fEcheNa1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echeneis_naucrates.fEcheNa1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echeneis_naucrates.fEcheNa1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echeneis_naucrates.fEcheNa1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echeneis_naucrates.fEcheNa1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Felis_catus_9.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/felis_catus.Felis_catus_9.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/felis_catus.Felis_catus_9.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/felis_catus.Felis_catus_9.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/felis_catus.Felis_catus_9.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/felis_catus.Felis_catus_9.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/felis_catus.Felis_catus_9.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fErpCal1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erpetoichthys_calabaricus.fErpCal1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erpetoichthys_calabaricus.fErpCal1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erpetoichthys_calabaricus.fErpCal1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erpetoichthys_calabaricus.fErpCal1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erpetoichthys_calabaricus.fErpCal1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erpetoichthys_calabaricus.fErpCal1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fMasArm1.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mastacembelus_armatus.fMasArm1.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mastacembelus_armatus.fMasArm1.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mastacembelus_armatus.fMasArm1.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mastacembelus_armatus.fMasArm1.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mastacembelus_armatus.fMasArm1.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mastacembelus_armatus.fMasArm1.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fMyrMur1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/myripristis_murdjan.fMyrMur1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/myripristis_murdjan.fMyrMur1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/myripristis_murdjan.fMyrMur1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/myripristis_murdjan.fMyrMur1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/myripristis_murdjan.fMyrMur1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/myripristis_murdjan.fMyrMur1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "FO2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_oxysporum.FO2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_oxysporum.FO2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_oxysporum.FO2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_oxysporum.FO2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_oxysporum.FO2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_oxysporum.FO2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fParRan2.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parambassis_ranga.fParRan2.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parambassis_ranga.fParRan2.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parambassis_ranga.fParRan2.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parambassis_ranga.fParRan2.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parambassis_ranga.fParRan2.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parambassis_ranga.fParRan2.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fSalaFa1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salarias_fasciatus.fSalaFa1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salarias_fasciatus.fSalaFa1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salarias_fasciatus.fSalaFa1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salarias_fasciatus.fSalaFa1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salarias_fasciatus.fSalaFa1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salarias_fasciatus.fSalaFa1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fSalTru1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salmo_trutta.fSalTru1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salmo_trutta.fSalTru1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salmo_trutta.fSalTru1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salmo_trutta.fSalTru1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salmo_trutta.fSalTru1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salmo_trutta.fSalTru1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fSclFor1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/scleropages_formosus.fSclFor1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/scleropages_formosus.fSclFor1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/scleropages_formosus.fSclFor1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/scleropages_formosus.fSclFor1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/scleropages_formosus.fSclFor1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/scleropages_formosus.fSclFor1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fSpaAur1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sparus_aurata.fSpaAur1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sparus_aurata.fSpaAur1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sparus_aurata.fSpaAur1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sparus_aurata.fSpaAur1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sparus_aurata.fSpaAur1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sparus_aurata.fSpaAur1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "gadMor3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gadus_morhua.gadMor3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gadus_morhua.gadMor3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gadus_morhua.gadMor3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gadus_morhua.gadMor3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gadus_morhua.gadMor3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gadus_morhua.gadMor3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GbreI1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_brevipalpis.GbreI1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_brevipalpis.GbreI1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_brevipalpis.GbreI1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_brevipalpis.GbreI1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_brevipalpis.GbreI1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_brevipalpis.GbreI1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000004155.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_cryophilus.GCA_000004155.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_cryophilus.GCA_000004155.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_cryophilus.GCA_000004155.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_cryophilus.GCA_000004155.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_cryophilus.GCA_000004155.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_cryophilus.GCA_000004155.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA000006335v3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_tropicalis.GCA000006335v3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_tropicalis.GCA000006335v3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_tropicalis.GCA000006335v3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_tropicalis.GCA000006335v3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_tropicalis.GCA000006335v3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_tropicalis.GCA000006335v3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000027005.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/komagataella_pastoris.GCA_000027005.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/komagataella_pastoris.GCA_000027005.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/komagataella_pastoris.GCA_000027005.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/komagataella_pastoris.GCA_000027005.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/komagataella_pastoris.GCA_000027005.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/komagataella_pastoris.GCA_000027005.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000150505.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_octosporus.GCA_000150505.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_octosporus.GCA_000150505.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_octosporus.GCA_000150505.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_octosporus.GCA_000150505.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_octosporus.GCA_000150505.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/schizosaccharomyces_octosporus.GCA_000150505.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA000167175v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phanerochaete_chrysosporium.GCA000167175v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phanerochaete_chrysosporium.GCA000167175v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phanerochaete_chrysosporium.GCA000167175v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phanerochaete_chrysosporium.GCA000167175v1.ensembl.gff3.gz.tbi`
  },
  {
    "name": "GCA000182965v3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_albicans.GCA000182965v3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_albicans.GCA000182965v3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_albicans.GCA000182965v3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_albicans.GCA000182965v3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_albicans.GCA000182965v3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_albicans.GCA000182965v3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000350065.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_orbiculare.GCA_000350065.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_orbiculare.GCA_000350065.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_orbiculare.GCA_000350065.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_orbiculare.GCA_000350065.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_orbiculare.GCA_000350065.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_orbiculare.GCA_000350065.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA000520115v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aphanomyces_invadans.GCA000520115v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aphanomyces_invadans.GCA000520115v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aphanomyces_invadans.GCA000520115v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aphanomyces_invadans.GCA000520115v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aphanomyces_invadans.GCA000520115v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aphanomyces_invadans.GCA000520115v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA002926055v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_haemuloni.GCA002926055v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_haemuloni.GCA002926055v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_haemuloni.GCA002926055v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_haemuloni.GCA002926055v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_haemuloni.GCA002926055v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_haemuloni.GCA002926055v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GeoFor_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/geospiza_fortis.GeoFor_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/geospiza_fortis.GeoFor_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/geospiza_fortis.GeoFor_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/geospiza_fortis.GeoFor_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/geospiza_fortis.GeoFor_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/geospiza_fortis.GeoFor_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GL2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/giardia_lamblia.GL2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/giardia_lamblia.GL2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/giardia_lamblia.GL2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/giardia_lamblia.GL2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/giardia_lamblia.GL2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/giardia_lamblia.GL2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "HyaAraEmoy2_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hyaloperonospora_arabidopsidis.HyaAraEmoy2_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hyaloperonospora_arabidopsidis.HyaAraEmoy2_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hyaloperonospora_arabidopsidis.HyaAraEmoy2_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hyaloperonospora_arabidopsidis.HyaAraEmoy2_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hyaloperonospora_arabidopsidis.HyaAraEmoy2_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hyaloperonospora_arabidopsidis.HyaAraEmoy2_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "IGDB",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_urartu.IGDB.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_urartu.IGDB.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_urartu.IGDB.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_urartu.IGDB.ensembl.gff3.gz.csi`
  },
  {
    "name": "ASM14294v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_infestans.ASM14294v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_infestans.ASM14294v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_infestans.ASM14294v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_infestans.ASM14294v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_infestans.ASM14294v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_infestans.ASM14294v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM289641v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gopherus_agassizii.ASM289641v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gopherus_agassizii.ASM289641v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gopherus_agassizii.ASM289641v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gopherus_agassizii.ASM289641v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gopherus_agassizii.ASM289641v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gopherus_agassizii.ASM289641v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GMGI_Hamer_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/homarus_americanus_gca018991925v1.GMGI_Hamer_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/homarus_americanus_gca018991925v1.GMGI_Hamer_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/homarus_americanus_gca018991925v1.GMGI_Hamer_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/homarus_americanus_gca018991925v1.GMGI_Hamer_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/homarus_americanus_gca018991925v1.GMGI_Hamer_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/homarus_americanus_gca018991925v1.GMGI_Hamer_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Guith1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/guillardia_theta.Guith1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/guillardia_theta.Guith1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/guillardia_theta.Guith1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/guillardia_theta.Guith1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/guillardia_theta.Guith1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/guillardia_theta.Guith1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "HU_Pman_2.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/peromyscus_maniculatus_bairdii.HU_Pman_2.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/peromyscus_maniculatus_bairdii.HU_Pman_2.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/peromyscus_maniculatus_bairdii.HU_Pman_2.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/peromyscus_maniculatus_bairdii.HU_Pman_2.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/peromyscus_maniculatus_bairdii.HU_Pman_2.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/peromyscus_maniculatus_bairdii.HU_Pman_2.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "JCVI-afl1-v2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_flavus.JCVI-afl1-v2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_flavus.JCVI-afl1-v2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_flavus.JCVI-afl1-v2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_flavus.JCVI-afl1-v2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_flavus.JCVI-afl1-v2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_flavus.JCVI-afl1-v2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Aros_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/athalia_rosae_gca000344095v2.Aros_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/athalia_rosae_gca000344095v2.Aros_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/athalia_rosae_gca000344095v2.Aros_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/athalia_rosae_gca000344095v2.Aros_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/athalia_rosae_gca000344095v2.Aros_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/athalia_rosae_gca000344095v2.Aros_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "JCVI-ESG2-1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/entamoeba_histolytica.JCVI-ESG2-1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/entamoeba_histolytica.JCVI-ESG2-1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/entamoeba_histolytica.JCVI-ESG2-1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/entamoeba_histolytica.JCVI-ESG2-1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/entamoeba_histolytica.JCVI-ESG2-1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/entamoeba_histolytica.JCVI-ESG2-1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "JCVI-TTA1-2.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tetrahymena_thermophila.JCVI-TTA1-2.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tetrahymena_thermophila.JCVI-TTA1-2.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tetrahymena_thermophila.JCVI-TTA1-2.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tetrahymena_thermophila.JCVI-TTA1-2.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tetrahymena_thermophila.JCVI-TTA1-2.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tetrahymena_thermophila.JCVI-TTA1-2.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "K_fedtschenkoi_M2_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/kalanchoe_fedtschenkoi.K_fedtschenkoi_M2_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/kalanchoe_fedtschenkoi.K_fedtschenkoi_M2_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/kalanchoe_fedtschenkoi.K_fedtschenkoi_M2_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/kalanchoe_fedtschenkoi.K_fedtschenkoi_M2_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/kalanchoe_fedtschenkoi.K_fedtschenkoi_M2_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/kalanchoe_fedtschenkoi.K_fedtschenkoi_M2_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "KH",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ciona_intestinalis.KH.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ciona_intestinalis.KH.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ciona_intestinalis.KH.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ciona_intestinalis.KH.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ciona_intestinalis.KH.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ciona_intestinalis.KH.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GRCm39",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_musculus.GRCm39.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_musculus.GRCm39.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_musculus.GRCm39.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_musculus.GRCm39.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_musculus.GRCm39.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_musculus.GRCm39.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "IscaW1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ixodes_scapularis.IscaW1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ixodes_scapularis.IscaW1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ixodes_scapularis.IscaW1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ixodes_scapularis.IscaW1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ixodes_scapularis.IscaW1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ixodes_scapularis.IscaW1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "latLat_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/laticauda_laticaudata.latLat_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/laticauda_laticaudata.latLat_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/laticauda_laticaudata.latLat_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/laticauda_laticaudata.latLat_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/laticauda_laticaudata.latLat_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/laticauda_laticaudata.latLat_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "L_crocea_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/larimichthys_crocea.L_crocea_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/larimichthys_crocea.L_crocea_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/larimichthys_crocea.L_crocea_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/larimichthys_crocea.L_crocea_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/larimichthys_crocea.L_crocea_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/larimichthys_crocea.L_crocea_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Ldec_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptinotarsa_decemlineata_gca000500325v2.Ldec_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptinotarsa_decemlineata_gca000500325v2.Ldec_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptinotarsa_decemlineata_gca000500325v2.Ldec_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptinotarsa_decemlineata_gca000500325v2.Ldec_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptinotarsa_decemlineata_gca000500325v2.Ldec_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptinotarsa_decemlineata_gca000500325v2.Ldec_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "LdelU1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptotrombidium_deliense.LdelU1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptotrombidium_deliense.LdelU1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptotrombidium_deliense.LdelU1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptotrombidium_deliense.LdelU1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptotrombidium_deliense.LdelU1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptotrombidium_deliense.LdelU1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "LlonJ1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lutzomyia_longipalpis.LlonJ1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lutzomyia_longipalpis.LlonJ1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lutzomyia_longipalpis.LlonJ1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lutzomyia_longipalpis.LlonJ1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lutzomyia_longipalpis.LlonJ1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lutzomyia_longipalpis.LlonJ1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Loa_loa_V3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/loa_loa.Loa_loa_V3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/loa_loa.Loa_loa_V3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/loa_loa.Loa_loa_V3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/loa_loa.Loa_loa_V3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/loa_loa.Loa_loa_V3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/loa_loa.Loa_loa_V3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "LonStrDom1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lonchura_striata_domestica.LonStrDom1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lonchura_striata_domestica.LonStrDom1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lonchura_striata_domestica.LonStrDom1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lonchura_striata_domestica.LonStrDom1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lonchura_striata_domestica.LonStrDom1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lonchura_striata_domestica.LonStrDom1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "meerkat_22Aug2017_6uvM2_HiC",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/suricata_suricatta.meerkat_22Aug2017_6uvM2_HiC.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/suricata_suricatta.meerkat_22Aug2017_6uvM2_HiC.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/suricata_suricatta.meerkat_22Aug2017_6uvM2_HiC.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/suricata_suricatta.meerkat_22Aug2017_6uvM2_HiC.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/suricata_suricatta.meerkat_22Aug2017_6uvM2_HiC.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/suricata_suricatta.meerkat_22Aug2017_6uvM2_HiC.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MelCinx1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melitaea_cinxia.MelCinx1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melitaea_cinxia.MelCinx1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melitaea_cinxia.MelCinx1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melitaea_cinxia.MelCinx1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melitaea_cinxia.MelCinx1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melitaea_cinxia.MelCinx1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Cang.pa_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colobus_angolensis_palliatus.Cang.pa_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colobus_angolensis_palliatus.Cang.pa_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colobus_angolensis_palliatus.Cang.pa_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colobus_angolensis_palliatus.Cang.pa_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colobus_angolensis_palliatus.Cang.pa_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colobus_angolensis_palliatus.Cang.pa_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "mCya_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/malurus_cyaneus_samueli.mCya_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/malurus_cyaneus_samueli.mCya_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/malurus_cyaneus_samueli.mCya_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/malurus_cyaneus_samueli.mCya_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/malurus_cyaneus_samueli.mCya_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/malurus_cyaneus_samueli.mCya_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Amel_HAv3.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apis_mellifera.Amel_HAv3.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apis_mellifera.Amel_HAv3.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apis_mellifera.Amel_HAv3.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apis_mellifera.Amel_HAv3.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apis_mellifera.Amel_HAv3.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apis_mellifera.Amel_HAv3.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Meug_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/notamacropus_eugenii.Meug_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/notamacropus_eugenii.Meug_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/notamacropus_eugenii.Meug_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/notamacropus_eugenii.Meug_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/notamacropus_eugenii.Meug_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/notamacropus_eugenii.Meug_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Mj_TUMSAT_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/penaeus_japonicus_gca017312705v1.Mj_TUMSAT_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/penaeus_japonicus_gca017312705v1.Mj_TUMSAT_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/penaeus_japonicus_gca017312705v1.Mj_TUMSAT_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/penaeus_japonicus_gca017312705v1.Mj_TUMSAT_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/penaeus_japonicus_gca017312705v1.Mj_TUMSAT_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/penaeus_japonicus_gca017312705v1.Mj_TUMSAT_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Mleu.le_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mandrillus_leucophaeus.Mleu.le_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mandrillus_leucophaeus.Mleu.le_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mandrillus_leucophaeus.Mleu.le_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mandrillus_leucophaeus.Mleu.le_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mandrillus_leucophaeus.Mleu.le_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mandrillus_leucophaeus.Mleu.le_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "aptHaa1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_haastii.aptHaa1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_haastii.aptHaa1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_haastii.aptHaa1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_haastii.aptHaa1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_haastii.aptHaa1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_haastii.aptHaa1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Mmul_10",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/macaca_mulatta.Mmul_10.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/macaca_mulatta.Mmul_10.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/macaca_mulatta.Mmul_10.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/macaca_mulatta.Mmul_10.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/macaca_mulatta.Mmul_10.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/macaca_mulatta.Mmul_10.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "mPhoSin1.pri",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phocoena_sinus.mPhoSin1.pri.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phocoena_sinus.mPhoSin1.pri.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phocoena_sinus.mPhoSin1.pri.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phocoena_sinus.mPhoSin1.pri.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phocoena_sinus.mPhoSin1.pri.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phocoena_sinus.mPhoSin1.pri.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MPM_Cglom_v2.3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cotesia_glomerata_gca020080835v1.MPM_Cglom_v2.3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cotesia_glomerata_gca020080835v1.MPM_Cglom_v2.3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cotesia_glomerata_gca020080835v1.MPM_Cglom_v2.3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cotesia_glomerata_gca020080835v1.MPM_Cglom_v2.3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cotesia_glomerata_gca020080835v1.MPM_Cglom_v2.3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cotesia_glomerata_gca020080835v1.MPM_Cglom_v2.3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Lvar_3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lytechinus_variegatus_gca018143015v1.Lvar_3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lytechinus_variegatus_gca018143015v1.Lvar_3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lytechinus_variegatus_gca018143015v1.Lvar_3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lytechinus_variegatus_gca018143015v1.Lvar_3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lytechinus_variegatus_gca018143015v1.Lvar_3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lytechinus_variegatus_gca018143015v1.Lvar_3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MdomA1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/musca_domestica.MdomA1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/musca_domestica.MdomA1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/musca_domestica.MdomA1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/musca_domestica.MdomA1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/musca_domestica.MdomA1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/musca_domestica.MdomA1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "mSarHar1.11",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sarcophilus_harrisii.mSarHar1.11.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sarcophilus_harrisii.mSarHar1.11.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sarcophilus_harrisii.mSarHar1.11.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sarcophilus_harrisii.mSarHar1.11.ensembl.gff3.gz.csi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sarcophilus_harrisii.mSarHar1.11.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sarcophilus_harrisii.mSarHar1.11.rnacentral.gff3.gz.csi`
  },
  {
    "name": "Msca1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/megaselia_scalaris.Msca1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/megaselia_scalaris.Msca1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/megaselia_scalaris.Msca1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/megaselia_scalaris.Msca1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/megaselia_scalaris.Msca1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/megaselia_scalaris.Msca1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Musa_acuminata_v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/musa_acuminata.Musa_acuminata_v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/musa_acuminata.Musa_acuminata_v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/musa_acuminata.Musa_acuminata_v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/musa_acuminata.Musa_acuminata_v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/musa_acuminata.Musa_acuminata_v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/musa_acuminata.Musa_acuminata_v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MUSP714",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_spicilegus.MUSP714.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_spicilegus.MUSP714.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_spicilegus.MUSP714.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_spicilegus.MUSP714.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_spicilegus.MUSP714.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_spicilegus.MUSP714.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MusPutFur1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mustela_putorius_furo.MusPutFur1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mustela_putorius_furo.MusPutFur1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mustela_putorius_furo.MusPutFur1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mustela_putorius_furo.MusPutFur1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mustela_putorius_furo.MusPutFur1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mustela_putorius_furo.MusPutFur1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "mZalCal1.pri",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zalophus_californianus.mZalCal1.pri.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zalophus_californianus.mZalCal1.pri.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zalophus_californianus.mZalCal1.pri.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zalophus_californianus.mZalCal1.pri.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zalophus_californianus.mZalCal1.pri.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zalophus_californianus.mZalCal1.pri.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "M_zebra_UMD2a",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/maylandia_zebra.M_zebra_UMD2a.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/maylandia_zebra.M_zebra_UMD2a.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/maylandia_zebra.M_zebra_UMD2a.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/maylandia_zebra.M_zebra_UMD2a.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/maylandia_zebra.M_zebra_UMD2a.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/maylandia_zebra.M_zebra_UMD2a.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "O_longistaminata_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_longistaminata.O_longistaminata_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_longistaminata.O_longistaminata_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_longistaminata.O_longistaminata_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_longistaminata.O_longistaminata_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_longistaminata.O_longistaminata_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_longistaminata.O_longistaminata_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "O_niloticus_UMD_NMBU",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oreochromis_niloticus.O_niloticus_UMD_NMBU.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oreochromis_niloticus.O_niloticus_UMD_NMBU.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oreochromis_niloticus.O_niloticus_UMD_NMBU.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oreochromis_niloticus.O_niloticus_UMD_NMBU.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oreochromis_niloticus.O_niloticus_UMD_NMBU.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oreochromis_niloticus.O_niloticus_UMD_NMBU.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Oryza_meridionalis_v1.3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_meridionalis.Oryza_meridionalis_v1.3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_meridionalis.Oryza_meridionalis_v1.3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_meridionalis.Oryza_meridionalis_v1.3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_meridionalis.Oryza_meridionalis_v1.3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_meridionalis.Oryza_meridionalis_v1.3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_meridionalis.Oryza_meridionalis_v1.3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Oryza_nivara_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_nivara.Oryza_nivara_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_nivara.Oryza_nivara_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_nivara.Oryza_nivara_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_nivara.Oryza_nivara_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_nivara.Oryza_nivara_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_nivara.Oryza_nivara_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PanLeo1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_leo.PanLeo1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_leo.PanLeo1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_leo.PanLeo1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_leo.PanLeo1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_leo.PanLeo1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_leo.PanLeo1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PanTig1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_tigris_altaica.PanTig1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_tigris_altaica.PanTig1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_tigris_altaica.PanTig1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_tigris_altaica.PanTig1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_tigris_altaica.PanTig1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_tigris_altaica.PanTig1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Pan_tro_3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pan_troglodytes.Pan_tro_3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pan_troglodytes.Pan_tro_3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pan_troglodytes.Pan_tro_3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pan_troglodytes.Pan_tro_3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pan_troglodytes.Pan_tro_3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pan_troglodytes.Pan_tro_3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "par_scaffolds_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_arrhenomanes.par_scaffolds_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_arrhenomanes.par_scaffolds_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_arrhenomanes.par_scaffolds_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_arrhenomanes.par_scaffolds_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_arrhenomanes.par_scaffolds_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_arrhenomanes.par_scaffolds_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PBANKA01",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_berghei.PBANKA01.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_berghei.PBANKA01.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_berghei.PBANKA01.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_berghei.PBANKA01.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_berghei.PBANKA01.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_berghei.PBANKA01.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Apla_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/agrilus_planipennis_gca000699045v2.Apla_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/agrilus_planipennis_gca000699045v2.Apla_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/agrilus_planipennis_gca000699045v2.Apla_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/agrilus_planipennis_gca000699045v2.Apla_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/agrilus_planipennis_gca000699045v2.Apla_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/agrilus_planipennis_gca000699045v2.Apla_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM168263v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/beauveria_bassiana.ASM168263v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/beauveria_bassiana.ASM168263v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/beauveria_bassiana.ASM168263v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/beauveria_bassiana.ASM168263v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/beauveria_bassiana.ASM168263v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/beauveria_bassiana.ASM168263v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "HEDGEHOG",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erinaceus_europaeus.HEDGEHOG.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erinaceus_europaeus.HEDGEHOG.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erinaceus_europaeus.HEDGEHOG.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erinaceus_europaeus.HEDGEHOG.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erinaceus_europaeus.HEDGEHOG.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erinaceus_europaeus.HEDGEHOG.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "LepOcu1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lepisosteus_oculatus.LepOcu1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lepisosteus_oculatus.LepOcu1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lepisosteus_oculatus.LepOcu1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lepisosteus_oculatus.LepOcu1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lepisosteus_oculatus.LepOcu1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lepisosteus_oculatus.LepOcu1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "piw_scaffolds_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_iwayamai.piw_scaffolds_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_iwayamai.piw_scaffolds_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_iwayamai.piw_scaffolds_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_iwayamai.piw_scaffolds_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_iwayamai.piw_scaffolds_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_iwayamai.piw_scaffolds_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Nfu_20140520",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nothobranchius_furzeri.Nfu_20140520.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nothobranchius_furzeri.Nfu_20140520.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nothobranchius_furzeri.Nfu_20140520.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nothobranchius_furzeri.Nfu_20140520.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nothobranchius_furzeri.Nfu_20140520.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nothobranchius_furzeri.Nfu_20140520.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "NGI_Narwhal_1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monodon_monoceros.NGI_Narwhal_1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monodon_monoceros.NGI_Narwhal_1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monodon_monoceros.NGI_Narwhal_1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monodon_monoceros.NGI_Narwhal_1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monodon_monoceros.NGI_Narwhal_1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monodon_monoceros.NGI_Narwhal_1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Nleu_3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nomascus_leucogenys.Nleu_3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nomascus_leucogenys.Nleu_3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nomascus_leucogenys.Nleu_3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nomascus_leucogenys.Nleu_3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nomascus_leucogenys.Nleu_3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nomascus_leucogenys.Nleu_3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Oar_v3.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ovis_aries.Oar_v3.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ovis_aries.Oar_v3.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ovis_aries.Oar_v3.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ovis_aries.Oar_v3.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ovis_aries.Oar_v3.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ovis_aries.Oar_v3.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "BosGru_v2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_mutus.BosGru_v2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_mutus.BosGru_v2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_mutus.BosGru_v2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_mutus.BosGru_v2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_mutus.BosGru_v2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_mutus.BosGru_v2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "IRGSP-1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_sativa.IRGSP-1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_sativa.IRGSP-1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_sativa.IRGSP-1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_sativa.IRGSP-1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_sativa.IRGSP-1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_sativa.IRGSP-1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AdirW1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_dirus.AdirW1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_dirus.AdirW1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_dirus.AdirW1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_dirus.AdirW1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_dirus.AdirW1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_dirus.AdirW1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AchrA1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_christyi.AchrA1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_christyi.AchrA1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_christyi.AchrA1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_christyi.AchrA1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_christyi.AchrA1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_christyi.AchrA1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Fundulus_heteroclitus-3.0.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fundulus_heteroclitus.Fundulus_heteroclitus-3.0.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fundulus_heteroclitus.Fundulus_heteroclitus-3.0.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fundulus_heteroclitus.Fundulus_heteroclitus-3.0.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fundulus_heteroclitus.Fundulus_heteroclitus-3.0.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fundulus_heteroclitus.Fundulus_heteroclitus-3.0.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fundulus_heteroclitus.Fundulus_heteroclitus-3.0.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "HLtupMer3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salvator_merianae.HLtupMer3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salvator_merianae.HLtupMer3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salvator_merianae.HLtupMer3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salvator_merianae.HLtupMer3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salvator_merianae.HLtupMer3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salvator_merianae.HLtupMer3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "LupAngTanjil_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lupinus_angustifolius.LupAngTanjil_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lupinus_angustifolius.LupAngTanjil_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lupinus_angustifolius.LupAngTanjil_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lupinus_angustifolius.LupAngTanjil_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lupinus_angustifolius.LupAngTanjil_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lupinus_angustifolius.LupAngTanjil_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "NeoBri1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neolamprologus_brichardi.NeoBri1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neolamprologus_brichardi.NeoBri1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neolamprologus_brichardi.NeoBri1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neolamprologus_brichardi.NeoBri1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neolamprologus_brichardi.NeoBri1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neolamprologus_brichardi.NeoBri1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "OR_W1943",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_rufipogon.OR_W1943.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_rufipogon.OR_W1943.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_rufipogon.OR_W1943.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_rufipogon.OR_W1943.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_rufipogon.OR_W1943.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_rufipogon.OR_W1943.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Om_v0.7.RACA",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_melastigma.Om_v0.7.RACA.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_melastigma.Om_v0.7.RACA.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_melastigma.Om_v0.7.RACA.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_melastigma.Om_v0.7.RACA.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_melastigma.Om_v0.7.RACA.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_melastigma.Om_v0.7.RACA.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "OryCun2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryctolagus_cuniculus.OryCun2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryctolagus_cuniculus.OryCun2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryctolagus_cuniculus.OryCun2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryctolagus_cuniculus.OryCun2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryctolagus_cuniculus.OryCun2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryctolagus_cuniculus.OryCun2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Oryza_brachyantha.v1.4b",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_brachyantha.Oryza_brachyantha.v1.4b.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_brachyantha.Oryza_brachyantha.v1.4b.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_brachyantha.Oryza_brachyantha.v1.4b.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_brachyantha.Oryza_brachyantha.v1.4b.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_brachyantha.Oryza_brachyantha.v1.4b.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_brachyantha.Oryza_brachyantha.v1.4b.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Aiptasia_genome_1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/exaiptasia_diaphana_gca001417965v1.Aiptasia_genome_1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/exaiptasia_diaphana_gca001417965v1.Aiptasia_genome_1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/exaiptasia_diaphana_gca001417965v1.Aiptasia_genome_1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/exaiptasia_diaphana_gca001417965v1.Aiptasia_genome_1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/exaiptasia_diaphana_gca001417965v1.Aiptasia_genome_1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/exaiptasia_diaphana_gca001417965v1.Aiptasia_genome_1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM14691v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaeosphaeria_nodorum.ASM14691v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaeosphaeria_nodorum.ASM14691v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaeosphaeria_nodorum.ASM14691v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaeosphaeria_nodorum.ASM14691v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaeosphaeria_nodorum.ASM14691v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaeosphaeria_nodorum.ASM14691v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM309773v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gambusia_affinis.ASM309773v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gambusia_affinis.ASM309773v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gambusia_affinis.ASM309773v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gambusia_affinis.ASM309773v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gambusia_affinis.ASM309773v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gambusia_affinis.ASM309773v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASIAII5_n227_616Mb",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bemisia_tabaci_asiaii5.ASIAII5_n227_616Mb.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bemisia_tabaci_asiaii5.ASIAII5_n227_616Mb.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bemisia_tabaci_asiaii5.ASIAII5_n227_616Mb.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bemisia_tabaci_asiaii5.ASIAII5_n227_616Mb.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bemisia_tabaci_asiaii5.ASIAII5_n227_616Mb.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bemisia_tabaci_asiaii5.ASIAII5_n227_616Mb.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "bCorMon1.pri",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corvus_moneduloides.bCorMon1.pri.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corvus_moneduloides.bCorMon1.pri.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corvus_moneduloides.bCorMon1.pri.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corvus_moneduloides.bCorMon1.pri.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corvus_moneduloides.bCorMon1.pri.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corvus_moneduloides.bCorMon1.pri.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CCACVL1_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corchorus_capsularis.CCACVL1_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corchorus_capsularis.CCACVL1_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corchorus_capsularis.CCACVL1_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corchorus_capsularis.CCACVL1_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corchorus_capsularis.CCACVL1_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corchorus_capsularis.CCACVL1_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA003013735v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_pseudohaemulonis.GCA003013735v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_pseudohaemulonis.GCA003013735v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_pseudohaemulonis.GCA003013735v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_pseudohaemulonis.GCA003013735v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_pseudohaemulonis.GCA003013735v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_pseudohaemulonis.GCA003013735v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Melonv4",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cucumis_melo.Melonv4.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cucumis_melo.Melonv4.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cucumis_melo.Melonv4.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cucumis_melo.Melonv4.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cucumis_melo.Melonv4.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cucumis_melo.Melonv4.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MG2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zymoseptoria_tritici.MG2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zymoseptoria_tritici.MG2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zymoseptoria_tritici.MG2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zymoseptoria_tritici.MG2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zymoseptoria_tritici.MG2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zymoseptoria_tritici.MG2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Midas_v5",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphilophus_citrinellus.Midas_v5.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphilophus_citrinellus.Midas_v5.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphilophus_citrinellus.Midas_v5.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphilophus_citrinellus.Midas_v5.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphilophus_citrinellus.Midas_v5.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphilophus_citrinellus.Midas_v5.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "mLynCan4_v1.p",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lynx_canadensis.mLynCan4_v1.p.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lynx_canadensis.mLynCan4_v1.p.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lynx_canadensis.mLynCan4_v1.p.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lynx_canadensis.mLynCan4_v1.p.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lynx_canadensis.mLynCan4_v1.p.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lynx_canadensis.mLynCan4_v1.p.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Mmur_3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microcebus_murinus.Mmur_3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microcebus_murinus.Mmur_3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microcebus_murinus.Mmur_3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microcebus_murinus.Mmur_3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microcebus_murinus.Mmur_3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microcebus_murinus.Mmur_3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MneLei_Aug2011",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mnemiopsis_leidyi.MneLei_Aug2011.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mnemiopsis_leidyi.MneLei_Aug2011.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mnemiopsis_leidyi.MneLei_Aug2011.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mnemiopsis_leidyi.MneLei_Aug2011.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mnemiopsis_leidyi.MneLei_Aug2011.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mnemiopsis_leidyi.MneLei_Aug2011.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AIIM_Pcri_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pavo_cristatus.AIIM_Pcri_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pavo_cristatus.AIIM_Pcri_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pavo_cristatus.AIIM_Pcri_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pavo_cristatus.AIIM_Pcri_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pavo_cristatus.AIIM_Pcri_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pavo_cristatus.AIIM_Pcri_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASB_HGAPassembly_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lates_calcarifer.ASB_HGAPassembly_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lates_calcarifer.ASB_HGAPassembly_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lates_calcarifer.ASB_HGAPassembly_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lates_calcarifer.ASB_HGAPassembly_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lates_calcarifer.ASB_HGAPassembly_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lates_calcarifer.ASB_HGAPassembly_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM83294v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/botrytis_cinerea.ASM83294v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/botrytis_cinerea.ASM83294v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/botrytis_cinerea.ASM83294v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/botrytis_cinerea.ASM83294v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/botrytis_cinerea.ASM83294v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/botrytis_cinerea.ASM83294v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Cavpor3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cavia_porcellus.Cavpor3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cavia_porcellus.Cavpor3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cavia_porcellus.Cavpor3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cavia_porcellus.Cavpor3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cavia_porcellus.Cavpor3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cavia_porcellus.Cavpor3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Hazt_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hyalella_azteca_gca000764305v2.Hazt_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hyalella_azteca_gca000764305v2.Hazt_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hyalella_azteca_gca000764305v2.Hazt_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hyalella_azteca_gca000764305v2.Hazt_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hyalella_azteca_gca000764305v2.Hazt_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hyalella_azteca_gca000764305v2.Hazt_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Macaca_fascicularis_6.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/macaca_fascicularis.Macaca_fascicularis_6.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/macaca_fascicularis.Macaca_fascicularis_6.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/macaca_fascicularis.Macaca_fascicularis_6.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/macaca_fascicularis.Macaca_fascicularis_6.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/macaca_fascicularis.Macaca_fascicularis_6.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/macaca_fascicularis.Macaca_fascicularis_6.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Mag_poae_ATCC_64411_V1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/magnaporthe_poae.Mag_poae_ATCC_64411_V1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/magnaporthe_poae.Mag_poae_ATCC_64411_V1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/magnaporthe_poae.Mag_poae_ATCC_64411_V1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/magnaporthe_poae.Mag_poae_ATCC_64411_V1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/magnaporthe_poae.Mag_poae_ATCC_64411_V1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/magnaporthe_poae.Mag_poae_ATCC_64411_V1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Manihot_esculenta_v6",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/manihot_esculenta.Manihot_esculenta_v6.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/manihot_esculenta.Manihot_esculenta_v6.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/manihot_esculenta.Manihot_esculenta_v6.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/manihot_esculenta.Manihot_esculenta_v6.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/manihot_esculenta.Manihot_esculenta_v6.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/manihot_esculenta.Manihot_esculenta_v6.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Marchanta_polymorpha_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/marchantia_polymorpha.Marchanta_polymorpha_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/marchantia_polymorpha.Marchanta_polymorpha_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/marchantia_polymorpha.Marchanta_polymorpha_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/marchantia_polymorpha.Marchanta_polymorpha_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/marchantia_polymorpha.Marchanta_polymorpha_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/marchantia_polymorpha.Marchanta_polymorpha_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "mRatBN7.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rattus_norvegicus.mRatBN7.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rattus_norvegicus.mRatBN7.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rattus_norvegicus.mRatBN7.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rattus_norvegicus.mRatBN7.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rattus_norvegicus.mRatBN7.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rattus_norvegicus.mRatBN7.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Oryza_punctata_v1.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_punctata.Oryza_punctata_v1.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_punctata.Oryza_punctata_v1.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_punctata.Oryza_punctata_v1.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_punctata.Oryza_punctata_v1.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_punctata.Oryza_punctata_v1.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_punctata.Oryza_punctata_v1.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PCHAS01",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_chabaudi.PCHAS01.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_chabaudi.PCHAS01.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_chabaudi.PCHAS01.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_chabaudi.PCHAS01.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_chabaudi.PCHAS01.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_chabaudi.PCHAS01.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Pelusios_castaneus-1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pelusios_castaneus.Pelusios_castaneus-1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pelusios_castaneus.Pelusios_castaneus-1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pelusios_castaneus.Pelusios_castaneus-1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pelusios_castaneus.Pelusios_castaneus-1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pelusios_castaneus.Pelusios_castaneus-1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pelusios_castaneus.Pelusios_castaneus-1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "O.barthii_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_barthii.O.barthii_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_barthii.O.barthii_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_barthii.O.barthii_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_barthii.O.barthii_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_barthii.O.barthii_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_barthii.O.barthii_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Obir_v5.4",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ooceraea_biroi_gca003672135v1.Obir_v5.4.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ooceraea_biroi_gca003672135v1.Obir_v5.4.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ooceraea_biroi_gca003672135v1.Obir_v5.4.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ooceraea_biroi_gca003672135v1.Obir_v5.4.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ooceraea_biroi_gca003672135v1.Obir_v5.4.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ooceraea_biroi_gca003672135v1.Obir_v5.4.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "OchPri2.0-Ens",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ochotona_princeps.OchPri2.0-Ens.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ochotona_princeps.OchPri2.0-Ens.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ochotona_princeps.OchPri2.0-Ens.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ochotona_princeps.OchPri2.0-Ens.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ochotona_princeps.OchPri2.0-Ens.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ochotona_princeps.OchPri2.0-Ens.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "OctDeg1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/octodon_degus.OctDeg1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/octodon_degus.OctDeg1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/octodon_degus.OctDeg1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/octodon_degus.OctDeg1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/octodon_degus.OctDeg1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/octodon_degus.OctDeg1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "O_europaea_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/olea_europaea_sylvestris.O_europaea_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/olea_europaea_sylvestris.O_europaea_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/olea_europaea_sylvestris.O_europaea_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/olea_europaea_sylvestris.O_europaea_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/olea_europaea_sylvestris.O_europaea_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/olea_europaea_sylvestris.O_europaea_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "OJAV_1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_javanicus.OJAV_1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_javanicus.OJAV_1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_javanicus.OJAV_1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_javanicus.OJAV_1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_javanicus.OJAV_1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_javanicus.OJAV_1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "OLEA9",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/olea_europaea.OLEA9.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/olea_europaea.OLEA9.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/olea_europaea.OLEA9.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/olea_europaea.OLEA9.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/olea_europaea.OLEA9.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/olea_europaea.OLEA9.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AfarF2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_farauti.AfarF2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_farauti.AfarF2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_farauti.AfarF2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_farauti.AfarF2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_farauti.AfarF2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_farauti.AfarF2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AfunF3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_funestus.AfunF3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_funestus.AfunF3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_funestus.AfunF3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_funestus.AfunF3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_funestus.AfunF3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_funestus.AfunF3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Amil_v2.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acropora_millepora_gca013753865v1.Amil_v2.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acropora_millepora_gca013753865v1.Amil_v2.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acropora_millepora_gca013753865v1.Amil_v2.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acropora_millepora_gca013753865v1.Amil_v2.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acropora_millepora_gca013753865v1.Amil_v2.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acropora_millepora_gca013753865v1.Amil_v2.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM171814v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/orchesella_cincta.ASM171814v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/orchesella_cincta.ASM171814v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/orchesella_cincta.ASM171814v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/orchesella_cincta.ASM171814v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/orchesella_cincta.ASM171814v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/orchesella_cincta.ASM171814v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AsteS1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_stephensi.AsteS1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_stephensi.AsteS1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_stephensi.AsteS1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_stephensi.AsteS1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_stephensi.AsteS1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_stephensi.AsteS1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "F153",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ananas_comosus.F153.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ananas_comosus.F153.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ananas_comosus.F153.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ananas_comosus.F153.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ananas_comosus.F153.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ananas_comosus.F153.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "NNQGG.v01",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neovison_vison.NNQGG.v01.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neovison_vison.NNQGG.v01.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neovison_vison.NNQGG.v01.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neovison_vison.NNQGG.v01.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neovison_vison.NNQGG.v01.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neovison_vison.NNQGG.v01.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Nvit_psr_1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nasonia_vitripennis.Nvit_psr_1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nasonia_vitripennis.Nvit_psr_1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nasonia_vitripennis.Nvit_psr_1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nasonia_vitripennis.Nvit_psr_1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nasonia_vitripennis.Nvit_psr_1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nasonia_vitripennis.Nvit_psr_1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Gae_host_genome",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gigantopelta_aegis_gca016097555v1.Gae_host_genome.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gigantopelta_aegis_gca016097555v1.Gae_host_genome.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gigantopelta_aegis_gca016097555v1.Gae_host_genome.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gigantopelta_aegis_gca016097555v1.Gae_host_genome.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gigantopelta_aegis_gca016097555v1.Gae_host_genome.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gigantopelta_aegis_gca016097555v1.Gae_host_genome.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GpapI1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_palpalis.GpapI1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_palpalis.GpapI1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_palpalis.GpapI1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_palpalis.GpapI1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_palpalis.GpapI1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_palpalis.GpapI1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MPF4_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_lateralis.MPF4_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_lateralis.MPF4_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_lateralis.MPF4_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_lateralis.MPF4_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_lateralis.MPF4_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_lateralis.MPF4_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "OKI_Apl_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acanthaster_planci_gca001949145v1.OKI_Apl_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acanthaster_planci_gca001949145v1.OKI_Apl_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acanthaster_planci_gca001949145v1.OKI_Apl_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acanthaster_planci_gca001949145v1.OKI_Apl_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acanthaster_planci_gca001949145v1.OKI_Apl_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acanthaster_planci_gca001949145v1.OKI_Apl_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PelSin_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pelodiscus_sinensis.PelSin_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pelodiscus_sinensis.PelSin_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pelodiscus_sinensis.PelSin_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pelodiscus_sinensis.PelSin_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pelodiscus_sinensis.PelSin_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pelodiscus_sinensis.PelSin_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PHallii_v3.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panicum_hallii_fil2.PHallii_v3.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panicum_hallii_fil2.PHallii_v3.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panicum_hallii_fil2.PHallii_v3.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panicum_hallii_fil2.PHallii_v3.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panicum_hallii_fil2.PHallii_v3.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panicum_hallii_fil2.PHallii_v3.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PhaVulg1_0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaseolus_vulgaris.PhaVulg1_0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaseolus_vulgaris.PhaVulg1_0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaseolus_vulgaris.PhaVulg1_0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaseolus_vulgaris.PhaVulg1_0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaseolus_vulgaris.PhaVulg1_0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaseolus_vulgaris.PhaVulg1_0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PhyKer238_432v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_kernoviae.PhyKer238_432v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_kernoviae.PhyKer238_432v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_kernoviae.PhyKer238_432v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_kernoviae.PhyKer238_432v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_kernoviae.PhyKer238_432v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_kernoviae.PhyKer238_432v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PKINGS_0.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/paramormyrops_kingsleyae.PKINGS_0.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/paramormyrops_kingsleyae.PKINGS_0.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/paramormyrops_kingsleyae.PKINGS_0.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/paramormyrops_kingsleyae.PKINGS_0.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/paramormyrops_kingsleyae.PKINGS_0.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/paramormyrops_kingsleyae.PKINGS_0.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM342692v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/urocitellus_parryii.ASM342692v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/urocitellus_parryii.ASM342692v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/urocitellus_parryii.ASM342692v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/urocitellus_parryii.ASM342692v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/urocitellus_parryii.ASM342692v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/urocitellus_parryii.ASM342692v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AmerM2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_merus.AmerM2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_merus.AmerM2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_merus.AmerM2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_merus.AmerM2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_merus.AmerM2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_merus.AmerM2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "BraLan2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/branchiostoma_lanceolatum.BraLan2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/branchiostoma_lanceolatum.BraLan2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/branchiostoma_lanceolatum.BraLan2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/branchiostoma_lanceolatum.BraLan2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/branchiostoma_lanceolatum.BraLan2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/branchiostoma_lanceolatum.BraLan2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "bStrHab1_v1.p",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strigops_habroptila.bStrHab1_v1.p.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strigops_habroptila.bStrHab1_v1.p.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strigops_habroptila.bStrHab1_v1.p.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strigops_habroptila.bStrHab1_v1.p.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strigops_habroptila.bStrHab1_v1.p.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strigops_habroptila.bStrHab1_v1.p.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "bGalGal1.mat.broiler.GRCg7b",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gallus_gallus.bGalGal1.mat.broiler.GRCg7b.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gallus_gallus.bGalGal1.mat.broiler.GRCg7b.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gallus_gallus.bGalGal1.mat.broiler.GRCg7b.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gallus_gallus.bGalGal1.mat.broiler.GRCg7b.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gallus_gallus.bGalGal1.mat.broiler.GRCg7b.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gallus_gallus.bGalGal1.mat.broiler.GRCg7b.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Aqu1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphimedon_queenslandica.Aqu1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphimedon_queenslandica.Aqu1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphimedon_queenslandica.Aqu1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphimedon_queenslandica.Aqu1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphimedon_queenslandica.Aqu1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphimedon_queenslandica.Aqu1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Chlamydomonas_reinhardtii_v5.5",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chlamydomonas_reinhardtii.Chlamydomonas_reinhardtii_v5.5.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chlamydomonas_reinhardtii.Chlamydomonas_reinhardtii_v5.5.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chlamydomonas_reinhardtii.Chlamydomonas_reinhardtii_v5.5.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chlamydomonas_reinhardtii.Chlamydomonas_reinhardtii_v5.5.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chlamydomonas_reinhardtii.Chlamydomonas_reinhardtii_v5.5.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chlamydomonas_reinhardtii.Chlamydomonas_reinhardtii_v5.5.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "BubBub1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bubo_bubo.BubBub1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bubo_bubo.BubBub1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bubo_bubo.BubBub1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bubo_bubo.BubBub1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bubo_bubo.BubBub1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bubo_bubo.BubBub1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AUK_PRJEB4211_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/coffea_canephora.AUK_PRJEB4211_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/coffea_canephora.AUK_PRJEB4211_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/coffea_canephora.AUK_PRJEB4211_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/coffea_canephora.AUK_PRJEB4211_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/coffea_canephora.AUK_PRJEB4211_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/coffea_canephora.AUK_PRJEB4211_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "BallGen_V1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/labrus_bergylta.BallGen_V1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/labrus_bergylta.BallGen_V1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/labrus_bergylta.BallGen_V1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/labrus_bergylta.BallGen_V1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/labrus_bergylta.BallGen_V1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/labrus_bergylta.BallGen_V1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Cflo_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/copidosoma_floridanum_gca000648655v2.Cflo_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/copidosoma_floridanum_gca000648655v2.Cflo_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/copidosoma_floridanum_gca000648655v2.Cflo_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/copidosoma_floridanum_gca000648655v2.Cflo_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/copidosoma_floridanum_gca000648655v2.Cflo_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/copidosoma_floridanum_gca000648655v2.Cflo_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM869450v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stachyris_ruficeps.ASM869450v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stachyris_ruficeps.ASM869450v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stachyris_ruficeps.ASM869450v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stachyris_ruficeps.ASM869450v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stachyris_ruficeps.ASM869450v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stachyris_ruficeps.ASM869450v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Citrus_clementina_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/citrus_clementina.Citrus_clementina_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/citrus_clementina.Citrus_clementina_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/citrus_clementina.Citrus_clementina_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/citrus_clementina.Citrus_clementina_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/citrus_clementina.Citrus_clementina_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/citrus_clementina.Citrus_clementina_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM9104v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cryptococcus_neoformans.ASM9104v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cryptococcus_neoformans.ASM9104v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cryptococcus_neoformans.ASM9104v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cryptococcus_neoformans.ASM9104v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cryptococcus_neoformans.ASM9104v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cryptococcus_neoformans.ASM9104v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "C_graminicola_M1_001_V1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_graminicola.C_graminicola_M1_001_V1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_graminicola.C_graminicola_M1_001_V1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_graminicola.C_graminicola_M1_001_V1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_graminicola.C_graminicola_M1_001_V1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_graminicola.C_graminicola_M1_001_V1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_graminicola.C_graminicola_M1_001_V1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CSAV2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ciona_savignyi.CSAV2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ciona_savignyi.CSAV2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ciona_savignyi.CSAV2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ciona_savignyi.CSAV2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ciona_savignyi.CSAV2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ciona_savignyi.CSAV2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Ch_v2.0.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/clupea_harengus.Ch_v2.0.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/clupea_harengus.Ch_v2.0.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/clupea_harengus.Ch_v2.0.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/clupea_harengus.Ch_v2.0.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/clupea_harengus.Ch_v2.0.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/clupea_harengus.Ch_v2.0.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "mOrnAna1.p.v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ornithorhynchus_anatinus.mOrnAna1.p.v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ornithorhynchus_anatinus.mOrnAna1.p.v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ornithorhynchus_anatinus.mOrnAna1.p.v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ornithorhynchus_anatinus.mOrnAna1.p.v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ornithorhynchus_anatinus.mOrnAna1.p.v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ornithorhynchus_anatinus.mOrnAna1.p.v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CriGri_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cricetulus_griseus_crigri.CriGri_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cricetulus_griseus_crigri.CriGri_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cricetulus_griseus_crigri.CriGri_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cricetulus_griseus_crigri.CriGri_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cricetulus_griseus_crigri.CriGri_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cricetulus_griseus_crigri.CriGri_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM169857v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mola_mola.ASM169857v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mola_mola.ASM169857v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mola_mola.ASM169857v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mola_mola.ASM169857v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mola_mola.ASM169857v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mola_mola.ASM169857v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM14998v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyrenophora_triticirepentis.ASM14998v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyrenophora_triticirepentis.ASM14998v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyrenophora_triticirepentis.ASM14998v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyrenophora_triticirepentis.ASM14998v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyrenophora_triticirepentis.ASM14998v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyrenophora_triticirepentis.ASM14998v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Bter_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bombus_terrestris.Bter_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bombus_terrestris.Bter_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bombus_terrestris.Bter_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bombus_terrestris.Bter_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bombus_terrestris.Bter_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bombus_terrestris.Bter_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM23037v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptosphaeria_maculans.ASM23037v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptosphaeria_maculans.ASM23037v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptosphaeria_maculans.ASM23037v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptosphaeria_maculans.ASM23037v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptosphaeria_maculans.ASM23037v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptosphaeria_maculans.ASM23037v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CSIRO_BtryS06_freeze1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bactrocera_tryoni_gca016617805v2.CSIRO_BtryS06_freeze1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bactrocera_tryoni_gca016617805v2.CSIRO_BtryS06_freeze1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bactrocera_tryoni_gca016617805v2.CSIRO_BtryS06_freeze1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bactrocera_tryoni_gca016617805v2.CSIRO_BtryS06_freeze1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bactrocera_tryoni_gca016617805v2.CSIRO_BtryS06_freeze1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bactrocera_tryoni_gca016617805v2.CSIRO_BtryS06_freeze1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Cs",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camelina_sativa.Cs.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camelina_sativa.Cs.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camelina_sativa.Cs.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camelina_sativa.Cs.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camelina_sativa.Cs.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camelina_sativa.Cs.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CAU_duck1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anas_platyrhynchos_platyrhynchos.CAU_duck1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anas_platyrhynchos_platyrhynchos.CAU_duck1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anas_platyrhynchos_platyrhynchos.CAU_duck1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anas_platyrhynchos_platyrhynchos.CAU_duck1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anas_platyrhynchos_platyrhynchos.CAU_duck1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anas_platyrhynchos_platyrhynchos.CAU_duck1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM271v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_clavatus.ASM271v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_clavatus.ASM271v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_clavatus.ASM271v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_clavatus.ASM271v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_clavatus.ASM271v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_clavatus.ASM271v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CorkOak1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/quercus_suber.CorkOak1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/quercus_suber.CorkOak1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/quercus_suber.CorkOak1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/quercus_suber.CorkOak1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/quercus_suber.CorkOak1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/quercus_suber.CorkOak1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM118794v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lucilia_cuprina.ASM118794v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lucilia_cuprina.ASM118794v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lucilia_cuprina.ASM118794v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lucilia_cuprina.ASM118794v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lucilia_cuprina.ASM118794v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lucilia_cuprina.ASM118794v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Chrysolophus_pictus_GenomeV1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chrysolophus_pictus.Chrysolophus_pictus_GenomeV1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chrysolophus_pictus.Chrysolophus_pictus_GenomeV1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chrysolophus_pictus.Chrysolophus_pictus_GenomeV1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chrysolophus_pictus.Chrysolophus_pictus_GenomeV1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chrysolophus_pictus.Chrysolophus_pictus_GenomeV1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chrysolophus_pictus.Chrysolophus_pictus_GenomeV1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AaloF1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aedes_albopictus.AaloF1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aedes_albopictus.AaloF1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aedes_albopictus.AaloF1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aedes_albopictus.AaloF1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aedes_albopictus.AaloF1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aedes_albopictus.AaloF1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM169854v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinopithecus_bieti.ASM169854v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinopithecus_bieti.ASM169854v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinopithecus_bieti.ASM169854v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinopithecus_bieti.ASM169854v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinopithecus_bieti.ASM169854v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinopithecus_bieti.ASM169854v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM200744v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ailuropoda_melanoleuca.ASM200744v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ailuropoda_melanoleuca.ASM200744v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ailuropoda_melanoleuca.ASM200744v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ailuropoda_melanoleuca.ASM200744v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ailuropoda_melanoleuca.ASM200744v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ailuropoda_melanoleuca.ASM200744v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM210954v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acanthochromis_polyacanthus.ASM210954v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acanthochromis_polyacanthus.ASM210954v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acanthochromis_polyacanthus.ASM210954v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acanthochromis_polyacanthus.ASM210954v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acanthochromis_polyacanthus.ASM210954v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/acanthochromis_polyacanthus.ASM210954v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM331708v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hucho_hucho.ASM331708v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hucho_hucho.ASM331708v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hucho_hucho.ASM331708v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hucho_hucho.ASM331708v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hucho_hucho.ASM331708v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hucho_hucho.ASM331708v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM334442v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_americanus.ASM334442v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_americanus.ASM334442v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_americanus.ASM334442v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_americanus.ASM334442v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_americanus.ASM334442v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_americanus.ASM334442v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM336829v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/carassius_auratus.ASM336829v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/carassius_auratus.ASM336829v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/carassius_auratus.ASM336829v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/carassius_auratus.ASM336829v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/carassius_auratus.ASM336829v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/carassius_auratus.ASM336829v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM34128v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/galdieria_sulphuraria.ASM34128v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/galdieria_sulphuraria.ASM34128v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/galdieria_sulphuraria.ASM34128v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/galdieria_sulphuraria.ASM34128v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/galdieria_sulphuraria.ASM34128v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/galdieria_sulphuraria.ASM34128v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "cyaCae2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyanistes_caeruleus.cyaCae2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyanistes_caeruleus.cyaCae2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyanistes_caeruleus.cyaCae2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyanistes_caeruleus.cyaCae2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyanistes_caeruleus.cyaCae2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyanistes_caeruleus.cyaCae2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM35022v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chondrus_crispus.ASM35022v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chondrus_crispus.ASM35022v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chondrus_crispus.ASM35022v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chondrus_crispus.ASM35022v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chondrus_crispus.ASM35022v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chondrus_crispus.ASM35022v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM357664v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ipomoea_triloba.ASM357664v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ipomoea_triloba.ASM357664v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ipomoea_triloba.ASM357664v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ipomoea_triloba.ASM357664v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ipomoea_triloba.ASM357664v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ipomoea_triloba.ASM357664v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM411807v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_unguiculata.ASM411807v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_unguiculata.ASM411807v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_unguiculata.ASM411807v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_unguiculata.ASM411807v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_unguiculata.ASM411807v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_unguiculata.ASM411807v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM858656v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_sinensis.ASM858656v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_sinensis.ASM858656v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_sinensis.ASM858656v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_sinensis.ASM858656v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_sinensis.ASM858656v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_sinensis.ASM858656v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM635v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_knowlesi.ASM635v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_knowlesi.ASM635v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_knowlesi.ASM635v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_knowlesi.ASM635v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_knowlesi.ASM635v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/plasmodium_knowlesi.ASM635v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM9120v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyanidioschyzon_merolae.ASM9120v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyanidioschyzon_merolae.ASM9120v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyanidioschyzon_merolae.ASM9120v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyanidioschyzon_merolae.ASM9120v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyanidioschyzon_merolae.ASM9120v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cyanidioschyzon_merolae.ASM9120v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "bAquChr1.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aquila_chrysaetos_chrysaetos.bAquChr1.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aquila_chrysaetos_chrysaetos.bAquChr1.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aquila_chrysaetos_chrysaetos.bAquChr1.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aquila_chrysaetos_chrysaetos.bAquChr1.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aquila_chrysaetos_chrysaetos.bAquChr1.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aquila_chrysaetos_chrysaetos.bAquChr1.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM14964v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neosartorya_fischeri.ASM14964v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neosartorya_fischeri.ASM14964v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neosartorya_fischeri.ASM14964v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neosartorya_fischeri.ASM14964v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neosartorya_fischeri.ASM14964v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neosartorya_fischeri.ASM14964v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM164957v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/kryptolebias_marmoratus.ASM164957v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/kryptolebias_marmoratus.ASM164957v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/kryptolebias_marmoratus.ASM164957v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/kryptolebias_marmoratus.ASM164957v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/kryptolebias_marmoratus.ASM164957v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/kryptolebias_marmoratus.ASM164957v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM16542v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/paramecium_tetraurelia.ASM16542v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/paramecium_tetraurelia.ASM16542v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/paramecium_tetraurelia.ASM16542v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/paramecium_tetraurelia.ASM16542v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/paramecium_tetraurelia.ASM16542v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/paramecium_tetraurelia.ASM16542v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM229v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monodelphis_domestica.ASM229v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monodelphis_domestica.ASM229v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monodelphis_domestica.ASM229v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monodelphis_domestica.ASM229v1.ensembl.gff3.gz.csi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monodelphis_domestica.ASM229v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/monodelphis_domestica.ASM229v1.rnacentral.gff3.gz.csi`
  },
  {
    "name": "ASM382977v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/junco_hyemalis.ASM382977v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/junco_hyemalis.ASM382977v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/junco_hyemalis.ASM382977v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/junco_hyemalis.ASM382977v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/junco_hyemalis.ASM382977v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/junco_hyemalis.ASM382977v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM966005v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_thibetanus_thibetanus.ASM966005v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_thibetanus_thibetanus.ASM966005v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_thibetanus_thibetanus.ASM966005v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_thibetanus_thibetanus.ASM966005v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_thibetanus_thibetanus.ASM966005v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_thibetanus_thibetanus.ASM966005v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Astyanax_mexicanus-2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/astyanax_mexicanus.Astyanax_mexicanus-2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/astyanax_mexicanus.Astyanax_mexicanus-2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/astyanax_mexicanus.Astyanax_mexicanus-2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/astyanax_mexicanus.Astyanax_mexicanus-2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/astyanax_mexicanus.Astyanax_mexicanus-2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/astyanax_mexicanus.Astyanax_mexicanus-2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "BglaB1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/biomphalaria_glabrata.BglaB1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/biomphalaria_glabrata.BglaB1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/biomphalaria_glabrata.BglaB1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/biomphalaria_glabrata.BglaB1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/biomphalaria_glabrata.BglaB1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/biomphalaria_glabrata.BglaB1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Bigna1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bigelowiella_natans.Bigna1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bigelowiella_natans.Bigna1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bigelowiella_natans.Bigna1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bigelowiella_natans.Bigna1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bigelowiella_natans.Bigna1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bigelowiella_natans.Bigna1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "BROADS1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gasterosteus_aculeatus.BROADS1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gasterosteus_aculeatus.BROADS1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gasterosteus_aculeatus.BROADS1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gasterosteus_aculeatus.BROADS1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gasterosteus_aculeatus.BROADS1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gasterosteus_aculeatus.BROADS1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "bMelUnd1.mat.Z",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melopsittacus_undulatus.bMelUnd1.mat.Z.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melopsittacus_undulatus.bMelUnd1.mat.Z.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melopsittacus_undulatus.bMelUnd1.mat.Z.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melopsittacus_undulatus.bMelUnd1.mat.Z.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melopsittacus_undulatus.bMelUnd1.mat.Z.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melopsittacus_undulatus.bMelUnd1.mat.Z.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "BOL",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_oleracea.BOL.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_oleracea.BOL.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_oleracea.BOL.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_oleracea.BOL.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_oleracea.BOL.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_oleracea.BOL.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Brachypodium_distachyon_v3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brachypodium_distachyon.Brachypodium_distachyon_v3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brachypodium_distachyon.Brachypodium_distachyon_v3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brachypodium_distachyon.Brachypodium_distachyon_v3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brachypodium_distachyon.Brachypodium_distachyon_v3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brachypodium_distachyon.Brachypodium_distachyon_v3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brachypodium_distachyon.Brachypodium_distachyon_v3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Clec_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cimex_lectularius.Clec_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cimex_lectularius.Clec_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cimex_lectularius.Clec_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cimex_lectularius.Clec_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cimex_lectularius.Clec_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cimex_lectularius.Clec_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM240643v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/spermophilus_dauricus.ASM240643v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/spermophilus_dauricus.ASM240643v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/spermophilus_dauricus.ASM240643v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/spermophilus_dauricus.ASM240643v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/spermophilus_dauricus.ASM240643v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/spermophilus_dauricus.ASM240643v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "dper_caf1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_persimilis.dper_caf1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_persimilis.dper_caf1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_persimilis.dper_caf1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_persimilis.dper_caf1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_persimilis.dper_caf1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_persimilis.dper_caf1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "dvir_caf1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_virilis.dvir_caf1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_virilis.dvir_caf1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_virilis.dvir_caf1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_virilis.dvir_caf1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_virilis.dvir_caf1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_virilis.dvir_caf1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM369795v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/calidris_pygmaea.ASM369795v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/calidris_pygmaea.ASM369795v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/calidris_pygmaea.ASM369795v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/calidris_pygmaea.ASM369795v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/calidris_pygmaea.ASM369795v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/calidris_pygmaea.ASM369795v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "DtinU1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dinothrombium_tinctorium.DtinU1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dinothrombium_tinctorium.DtinU1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dinothrombium_tinctorium.DtinU1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dinothrombium_tinctorium.DtinU1.ensembl.gff3.gz.tbi`
  },
  {
    "name": "Ccitriodora_v2_1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corymbia_citriodora.Ccitriodora_v2_1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corymbia_citriodora.Ccitriodora_v2_1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corymbia_citriodora.Ccitriodora_v2_1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corymbia_citriodora.Ccitriodora_v2_1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corymbia_citriodora.Ccitriodora_v2_1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corymbia_citriodora.Ccitriodora_v2_1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Capitella_teleta_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capitella_teleta.Capitella_teleta_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capitella_teleta.Capitella_teleta_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capitella_teleta.Capitella_teleta_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capitella_teleta.Capitella_teleta_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capitella_teleta.Capitella_teleta_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capitella_teleta.Capitella_teleta_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM9206v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ostreococcus_lucimarinus.ASM9206v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ostreococcus_lucimarinus.ASM9206v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ostreococcus_lucimarinus.ASM9206v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ostreococcus_lucimarinus.ASM9206v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ostreococcus_lucimarinus.ASM9206v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ostreococcus_lucimarinus.ASM9206v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM15067v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/verticillium_dahliae.ASM15067v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/verticillium_dahliae.ASM15067v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/verticillium_dahliae.ASM15067v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/verticillium_dahliae.ASM15067v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/verticillium_dahliae.ASM15067v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/verticillium_dahliae.ASM15067v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Camarhynchus_parvulus_V1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camarhynchus_parvulus.Camarhynchus_parvulus_V1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camarhynchus_parvulus.Camarhynchus_parvulus_V1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camarhynchus_parvulus.Camarhynchus_parvulus_V1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camarhynchus_parvulus.Camarhynchus_parvulus_V1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camarhynchus_parvulus.Camarhynchus_parvulus_V1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/camarhynchus_parvulus.Camarhynchus_parvulus_V1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "C.can_genome_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/castor_canadensis.C.can_genome_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/castor_canadensis.C.can_genome_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/castor_canadensis.C.can_genome_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/castor_canadensis.C.can_genome_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/castor_canadensis.C.can_genome_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/castor_canadensis.C.can_genome_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Cexi_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/centruroides_sculpturatus_gca000671375v2.Cexi_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/centruroides_sculpturatus_gca000671375v2.Cexi_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/centruroides_sculpturatus_gca000671375v2.Cexi_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/centruroides_sculpturatus_gca000671375v2.Cexi_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/centruroides_sculpturatus_gca000671375v2.Cexi_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/centruroides_sculpturatus_gca000671375v2.Cexi_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Dnoxia_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/diuraphis_noxia_gca001186385v1.Dnoxia_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/diuraphis_noxia_gca001186385v1.Dnoxia_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/diuraphis_noxia_gca001186385v1.Dnoxia_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/diuraphis_noxia_gca001186385v1.Dnoxia_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/diuraphis_noxia_gca001186385v1.Dnoxia_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/diuraphis_noxia_gca001186385v1.Dnoxia_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CavTom2PMs-1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corylus_avellana.CavTom2PMs-1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corylus_avellana.CavTom2PMs-1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corylus_avellana.CavTom2PMs-1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corylus_avellana.CavTom2PMs-1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corylus_avellana.CavTom2PMs-1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/corylus_avellana.CavTom2PMs-1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "dyak_caf1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_yakuba.dyak_caf1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_yakuba.dyak_caf1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_yakuba.dyak_caf1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_yakuba.dyak_caf1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_yakuba.dyak_caf1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_yakuba.dyak_caf1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM17099v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoderma_virens.ASM17099v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoderma_virens.ASM17099v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoderma_virens.ASM17099v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoderma_virens.ASM17099v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoderma_virens.ASM17099v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoderma_virens.ASM17099v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Emiliana_huxleyi_CCMP1516_main_genome_assembly_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/emiliania_huxleyi.Emiliana_huxleyi_CCMP1516_main_genome_assembly_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/emiliania_huxleyi.Emiliana_huxleyi_CCMP1516_main_genome_assembly_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/emiliania_huxleyi.Emiliana_huxleyi_CCMP1516_main_genome_assembly_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/emiliania_huxleyi.Emiliana_huxleyi_CCMP1516_main_genome_assembly_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/emiliania_huxleyi.Emiliana_huxleyi_CCMP1516_main_genome_assembly_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/emiliania_huxleyi.Emiliana_huxleyi_CCMP1516_main_genome_assembly_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "C_virginica_3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/crassostrea_virginica_gca002022765v4.C_virginica_3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/crassostrea_virginica_gca002022765v4.C_virginica_3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/crassostrea_virginica_gca002022765v4.C_virginica_3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/crassostrea_virginica_gca002022765v4.C_virginica_3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/crassostrea_virginica_gca002022765v4.C_virginica_3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/crassostrea_virginica_gca002022765v4.C_virginica_3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM1480567v1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mercenaria_mercenaria_gca014805675v2.ASM1480567v1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mercenaria_mercenaria_gca014805675v2.ASM1480567v1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mercenaria_mercenaria_gca014805675v2.ASM1480567v1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mercenaria_mercenaria_gca014805675v2.ASM1480567v1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mercenaria_mercenaria_gca014805675v2.ASM1480567v1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mercenaria_mercenaria_gca014805675v2.ASM1480567v1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Dasnov3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dasypus_novemcinctus.Dasnov3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dasypus_novemcinctus.Dasnov3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dasypus_novemcinctus.Dasnov3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dasypus_novemcinctus.Dasnov3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dasypus_novemcinctus.Dasnov3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dasypus_novemcinctus.Dasnov3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM1142v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_nidulans.ASM1142v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_nidulans.ASM1142v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_nidulans.ASM1142v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_nidulans.ASM1142v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_nidulans.ASM1142v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_nidulans.ASM1142v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM259213v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anser_brachyrhynchus.ASM259213v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anser_brachyrhynchus.ASM259213v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anser_brachyrhynchus.ASM259213v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anser_brachyrhynchus.ASM259213v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anser_brachyrhynchus.ASM259213v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anser_brachyrhynchus.ASM259213v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Attacep1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/atta_cephalotes.Attacep1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/atta_cephalotes.Attacep1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/atta_cephalotes.Attacep1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/atta_cephalotes.Attacep1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/atta_cephalotes.Attacep1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/atta_cephalotes.Attacep1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Dord_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dipodomys_ordii.Dord_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dipodomys_ordii.Dord_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dipodomys_ordii.Dord_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dipodomys_ordii.Dord_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dipodomys_ordii.Dord_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dipodomys_ordii.Dord_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "EBS10Xv2-PRI",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pseudonaja_textilis.EBS10Xv2-PRI.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pseudonaja_textilis.EBS10Xv2-PRI.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pseudonaja_textilis.EBS10Xv2-PRI.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pseudonaja_textilis.EBS10Xv2-PRI.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pseudonaja_textilis.EBS10Xv2-PRI.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pseudonaja_textilis.EBS10Xv2-PRI.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ec_v3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echinochloa_crusgalli.ec_v3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echinochloa_crusgalli.ec_v3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echinochloa_crusgalli.ec_v3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echinochloa_crusgalli.ec_v3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echinochloa_crusgalli.ec_v3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echinochloa_crusgalli.ec_v3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Ee_SOAP_WITH_SSPACE",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/electrophorus_electricus.Ee_SOAP_WITH_SSPACE.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/electrophorus_electricus.Ee_SOAP_WITH_SSPACE.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/electrophorus_electricus.Ee_SOAP_WITH_SSPACE.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/electrophorus_electricus.Ee_SOAP_WITH_SSPACE.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/electrophorus_electricus.Ee_SOAP_WITH_SSPACE.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/electrophorus_electricus.Ee_SOAP_WITH_SSPACE.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "P_latipinna-1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_latipinna.P_latipinna-1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_latipinna.P_latipinna-1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_latipinna.P_latipinna-1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_latipinna.P_latipinna-1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_latipinna.P_latipinna-1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_latipinna.P_latipinna-1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Pmarinus_7.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/petromyzon_marinus.Pmarinus_7.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/petromyzon_marinus.Pmarinus_7.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/petromyzon_marinus.Pmarinus_7.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/petromyzon_marinus.Pmarinus_7.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/petromyzon_marinus.Pmarinus_7.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/petromyzon_marinus.Pmarinus_7.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Cse_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cynoglossus_semilaevis.Cse_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cynoglossus_semilaevis.Cse_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cynoglossus_semilaevis.Cse_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cynoglossus_semilaevis.Cse_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cynoglossus_semilaevis.Cse_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cynoglossus_semilaevis.Cse_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Eaff_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eurytemora_affinis_gca000591075v2.Eaff_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eurytemora_affinis_gca000591075v2.Eaff_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eurytemora_affinis_gca000591075v2.Eaff_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eurytemora_affinis_gca000591075v2.Eaff_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eurytemora_affinis_gca000591075v2.Eaff_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eurytemora_affinis_gca000591075v2.Eaff_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "P_mexicana-1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_mexicana.P_mexicana-1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_mexicana.P_mexicana-1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_mexicana.P_mexicana-1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_mexicana.P_mexicana-1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_mexicana.P_mexicana-1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_mexicana.P_mexicana-1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PM.fa",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/periophthalmus_magnuspinnatus.PM.fa.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/periophthalmus_magnuspinnatus.PM.fa.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/periophthalmus_magnuspinnatus.PM.fa.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/periophthalmus_magnuspinnatus.PM.fa.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/periophthalmus_magnuspinnatus.PM.fa.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/periophthalmus_magnuspinnatus.PM.fa.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PN40024.v4",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vitis_vinifera.PN40024.v4.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vitis_vinifera.PN40024.v4.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vitis_vinifera.PN40024.v4.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vitis_vinifera.PN40024.v4.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vitis_vinifera.PN40024.v4.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vitis_vinifera.PN40024.v4.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PodMur_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/podarcis_muralis.PodMur_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/podarcis_muralis.PodMur_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/podarcis_muralis.PodMur_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/podarcis_muralis.PodMur_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/podarcis_muralis.PodMur_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/podarcis_muralis.PodMur_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PoeFor_5.1.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_formosa.PoeFor_5.1.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_formosa.PoeFor_5.1.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_formosa.PoeFor_5.1.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_formosa.PoeFor_5.1.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_formosa.PoeFor_5.1.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/poecilia_formosa.PoeFor_5.1.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AmacM1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_maculatus.AmacM1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_maculatus.AmacM1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_maculatus.AmacM1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_maculatus.AmacM1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_maculatus.AmacM1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_maculatus.AmacM1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AmelC2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_melas.AmelC2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_melas.AmelC2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_melas.AmelC2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_melas.AmelC2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_melas.AmelC2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_melas.AmelC2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AMS_PRJEB1171_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/adineta_vaga.AMS_PRJEB1171_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/adineta_vaga.AMS_PRJEB1171_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/adineta_vaga.AMS_PRJEB1171_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/adineta_vaga.AMS_PRJEB1171_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/adineta_vaga.AMS_PRJEB1171_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/adineta_vaga.AMS_PRJEB1171_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ARS-UCD1.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_taurus.ARS-UCD1.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_taurus.ARS-UCD1.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_taurus.ARS-UCD1.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_taurus.ARS-UCD1.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_taurus.ARS-UCD1.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_taurus.ARS-UCD1.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM1334776v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/scophthalmus_maximus.ASM1334776v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/scophthalmus_maximus.ASM1334776v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/scophthalmus_maximus.ASM1334776v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/scophthalmus_maximus.ASM1334776v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/scophthalmus_maximus.ASM1334776v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/scophthalmus_maximus.ASM1334776v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM143184v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/calidris_pugnax.ASM143184v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/calidris_pugnax.ASM143184v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/calidris_pugnax.ASM143184v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/calidris_pugnax.ASM143184v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/calidris_pugnax.ASM143184v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/calidris_pugnax.ASM143184v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM14694v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sclerotinia_sclerotiorum.ASM14694v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sclerotinia_sclerotiorum.ASM14694v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sclerotinia_sclerotiorum.ASM14694v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sclerotinia_sclerotiorum.ASM14694v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sclerotinia_sclerotiorum.ASM14694v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sclerotinia_sclerotiorum.ASM14694v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM14973v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_ramorum.ASM14973v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_ramorum.ASM14973v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_ramorum.ASM14973v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_ramorum.ASM14973v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_ramorum.ASM14973v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_ramorum.ASM14973v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM171598v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/manacus_vitellinus.ASM171598v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/manacus_vitellinus.ASM171598v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/manacus_vitellinus.ASM171598v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/manacus_vitellinus.ASM171598v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/manacus_vitellinus.ASM171598v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/manacus_vitellinus.ASM171598v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM325472v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/canis_lupus_dingo.ASM325472v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/canis_lupus_dingo.ASM325472v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/canis_lupus_dingo.ASM325472v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/canis_lupus_dingo.ASM325472v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/canis_lupus_dingo.ASM325472v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/canis_lupus_dingo.ASM325472v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM90066040v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pseudonitzschia_multistriata.ASM90066040v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pseudonitzschia_multistriata.ASM90066040v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pseudonitzschia_multistriata.ASM90066040v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pseudonitzschia_multistriata.ASM90066040v1.ensembl.gff3.gz.tbi`
  },
  {
    "name": "AST_PRJEB5043_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_napus.AST_PRJEB5043_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_napus.AST_PRJEB5043_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_napus.AST_PRJEB5043_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_napus.AST_PRJEB5043_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_napus.AST_PRJEB5043_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_napus.AST_PRJEB5043_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000166175.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microbotryum_violaceum.GCA_000166175.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microbotryum_violaceum.GCA_000166175.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microbotryum_violaceum.GCA_000166175.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microbotryum_violaceum.GCA_000166175.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microbotryum_violaceum.GCA_000166175.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microbotryum_violaceum.GCA_000166175.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000167675.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoderma_reesei.GCA_000167675.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoderma_reesei.GCA_000167675.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoderma_reesei.GCA_000167675.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoderma_reesei.GCA_000167675.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoderma_reesei.GCA_000167675.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoderma_reesei.GCA_000167675.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA000170615v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/histoplasma_capsulatum.GCA000170615v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/histoplasma_capsulatum.GCA000170615v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/histoplasma_capsulatum.GCA000170615v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/histoplasma_capsulatum.GCA000170615v1.ensembl.gff3.gz.tbi`
  },
  {
    "name": "GCA000182765v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_parapsilosis.GCA000182765v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_parapsilosis.GCA000182765v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_parapsilosis.GCA000182765v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_parapsilosis.GCA000182765v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_parapsilosis.GCA000182765v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_parapsilosis.GCA000182765v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000230245.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sporisorium_reilianum.GCA_000230245.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sporisorium_reilianum.GCA_000230245.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sporisorium_reilianum.GCA_000230245.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sporisorium_reilianum.GCA_000230245.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sporisorium_reilianum.GCA_000230245.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sporisorium_reilianum.GCA_000230245.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000340195.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dothistroma_septosporum.GCA_000340195.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dothistroma_septosporum.GCA_000340195.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dothistroma_septosporum.GCA_000340195.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dothistroma_septosporum.GCA_000340195.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dothistroma_septosporum.GCA_000340195.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dothistroma_septosporum.GCA_000340195.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA002759435v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_auris.GCA002759435v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_auris.GCA002759435v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_auris.GCA002759435v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_auris.GCA002759435v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_auris.GCA002759435v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_auris.GCA002759435v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA900474545v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyricularia_oryzae.GCA900474545v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyricularia_oryzae.GCA900474545v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyricularia_oryzae.GCA900474545v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyricularia_oryzae.GCA900474545v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyricularia_oryzae.GCA900474545v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyricularia_oryzae.GCA900474545v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Priapulus_caudatus-5.0.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/priapulus_caudatus_gca000485595v2.Priapulus_caudatus-5.0.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/priapulus_caudatus_gca000485595v2.Priapulus_caudatus-5.0.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/priapulus_caudatus_gca000485595v2.Priapulus_caudatus-5.0.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/priapulus_caudatus_gca000485595v2.Priapulus_caudatus-5.0.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/priapulus_caudatus_gca000485595v2.Priapulus_caudatus-5.0.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/priapulus_caudatus_gca000485595v2.Priapulus_caudatus-5.0.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PRJNA270931",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/octopus_bimaculoides.PRJNA270931.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/octopus_bimaculoides.PRJNA270931.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/octopus_bimaculoides.PRJNA270931.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/octopus_bimaculoides.PRJNA270931.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/octopus_bimaculoides.PRJNA270931.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/octopus_bimaculoides.PRJNA270931.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "pug",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_ultimum.pug.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_ultimum.pug.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_ultimum.pug.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_ultimum.pug.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_ultimum.pug.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_ultimum.pug.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AcolM1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_coluzzii.AcolM1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_coluzzii.AcolM1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_coluzzii.AcolM1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_coluzzii.AcolM1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_coluzzii.AcolM1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_coluzzii.AcolM1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Ahal2.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_halleri.Ahal2.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_halleri.Ahal2.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_halleri.Ahal2.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_halleri.Ahal2.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_halleri.Ahal2.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_halleri.Ahal2.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AminM1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_minimus.AminM1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_minimus.AminM1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_minimus.AminM1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_minimus.AminM1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_minimus.AminM1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_minimus.AminM1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM14992v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_graminis.ASM14992v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_graminis.ASM14992v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_graminis.ASM14992v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_graminis.ASM14992v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_graminis.ASM14992v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_graminis.ASM14992v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM15164v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tuber_melanosporum.ASM15164v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tuber_melanosporum.ASM15164v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tuber_melanosporum.ASM15164v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tuber_melanosporum.ASM15164v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tuber_melanosporum.ASM15164v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tuber_melanosporum.ASM15164v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM283717v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/physeter_catodon.ASM283717v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/physeter_catodon.ASM283717v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/physeter_catodon.ASM283717v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/physeter_catodon.ASM283717v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/physeter_catodon.ASM283717v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/physeter_catodon.ASM283717v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM465v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_indica.ASM465v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_indica.ASM465v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_indica.ASM465v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_indica.ASM465v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_indica.ASM465v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_indica.ASM465v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM9102v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ashbya_gossypii.ASM9102v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ashbya_gossypii.ASM9102v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ashbya_gossypii.ASM9102v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ashbya_gossypii.ASM9102v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ashbya_gossypii.ASM9102v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ashbya_gossypii.ASM9102v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CcrdV1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cynara_cardunculus.CcrdV1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cynara_cardunculus.CcrdV1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cynara_cardunculus.CcrdV1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cynara_cardunculus.CcrdV1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cynara_cardunculus.CcrdV1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cynara_cardunculus.CcrdV1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CpipJ2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/culex_quinquefasciatus.CpipJ2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/culex_quinquefasciatus.CpipJ2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/culex_quinquefasciatus.CpipJ2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/culex_quinquefasciatus.CpipJ2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/culex_quinquefasciatus.CpipJ2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/culex_quinquefasciatus.CpipJ2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Egrandis1_0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eucalyptus_grandis.Egrandis1_0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eucalyptus_grandis.Egrandis1_0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eucalyptus_grandis.Egrandis1_0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eucalyptus_grandis.Egrandis1_0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eucalyptus_grandis.Egrandis1_0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eucalyptus_grandis.Egrandis1_0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA000002545v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_glabrata.GCA000002545v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_glabrata.GCA000002545v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_glabrata.GCA000002545v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_glabrata.GCA000002545v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_glabrata.GCA000002545v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_glabrata.GCA000002545v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000303195.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_pseudograminearum.GCA_000303195.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_pseudograminearum.GCA_000303195.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_pseudograminearum.GCA_000303195.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_pseudograminearum.GCA_000303195.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_pseudograminearum.GCA_000303195.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_pseudograminearum.GCA_000303195.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000313795.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_higginsianum.GCA_000313795.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_higginsianum.GCA_000313795.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_higginsianum.GCA_000313795.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_higginsianum.GCA_000313795.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_higginsianum.GCA_000313795.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_higginsianum.GCA_000313795.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "HanXRQr2.0-SUNRISE",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/helianthus_annuus.HanXRQr2.0-SUNRISE.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/helianthus_annuus.HanXRQr2.0-SUNRISE.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/helianthus_annuus.HanXRQr2.0-SUNRISE.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/helianthus_annuus.HanXRQr2.0-SUNRISE.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/helianthus_annuus.HanXRQr2.0-SUNRISE.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/helianthus_annuus.HanXRQr2.0-SUNRISE.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Lsat_Salinas_v7",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lactuca_sativa.Lsat_Salinas_v7.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lactuca_sativa.Lsat_Salinas_v7.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lactuca_sativa.Lsat_Salinas_v7.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lactuca_sativa.Lsat_Salinas_v7.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lactuca_sativa.Lsat_Salinas_v7.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lactuca_sativa.Lsat_Salinas_v7.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "NIATTr2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nicotiana_attenuata.NIATTr2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nicotiana_attenuata.NIATTr2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nicotiana_attenuata.NIATTr2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nicotiana_attenuata.NIATTr2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nicotiana_attenuata.NIATTr2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nicotiana_attenuata.NIATTr2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Oryza_glaberrima_V1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_glaberrima.Oryza_glaberrima_V1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_glaberrima.Oryza_glaberrima_V1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_glaberrima.Oryza_glaberrima_V1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_glaberrima.Oryza_glaberrima_V1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_glaberrima.Oryza_glaberrima_V1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_glaberrima.Oryza_glaberrima_V1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PGSBv2.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_aestivum_arinalrfor.PGSBv2.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_aestivum_arinalrfor.PGSBv2.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_aestivum_arinalrfor.PGSBv2.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/triticum_aestivum_arinalrfor.PGSBv2.1.ensembl.gff3.gz.csi`
  },
  {
    "name": "proCap1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/procavia_capensis.proCap1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/procavia_capensis.proCap1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/procavia_capensis.proCap1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/procavia_capensis.proCap1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/procavia_capensis.proCap1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/procavia_capensis.proCap1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Prosim_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prolemur_simus.Prosim_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prolemur_simus.Prosim_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prolemur_simus.Prosim_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prolemur_simus.Prosim_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prolemur_simus.Prosim_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prolemur_simus.Prosim_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Prunus_persica_NCBIv2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_persica.Prunus_persica_NCBIv2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_persica.Prunus_persica_NCBIv2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_persica.Prunus_persica_NCBIv2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_persica.Prunus_persica_NCBIv2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_persica.Prunus_persica_NCBIv2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_persica.Prunus_persica_NCBIv2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "dmoj_caf1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_mojavensis.dmoj_caf1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_mojavensis.dmoj_caf1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_mojavensis.dmoj_caf1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_mojavensis.dmoj_caf1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_mojavensis.dmoj_caf1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_mojavensis.dmoj_caf1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PpapI1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phlebotomus_papatasi.PpapI1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phlebotomus_papatasi.PpapI1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phlebotomus_papatasi.PpapI1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phlebotomus_papatasi.PpapI1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phlebotomus_papatasi.PpapI1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phlebotomus_papatasi.PpapI1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Okis_V2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_kisutch.Okis_V2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_kisutch.Okis_V2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_kisutch.Okis_V2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_kisutch.Okis_V2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_kisutch.Okis_V2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_kisutch.Okis_V2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Oryza_glumaepatula_v1.5",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_glumipatula.Oryza_glumaepatula_v1.5.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_glumipatula.Oryza_glumaepatula_v1.5.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_glumipatula.Oryza_glumaepatula_v1.5.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_glumipatula.Oryza_glumaepatula_v1.5.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_glumipatula.Oryza_glumaepatula_v1.5.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryza_glumipatula.Oryza_glumaepatula_v1.5.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Panubis1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/papio_anubis.Panubis1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/papio_anubis.Panubis1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/papio_anubis.Panubis1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/papio_anubis.Panubis1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/papio_anubis.Panubis1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/papio_anubis.Panubis1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PhumU2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pediculus_humanus.PhumU2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pediculus_humanus.PhumU2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pediculus_humanus.PhumU2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pediculus_humanus.PhumU2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pediculus_humanus.PhumU2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pediculus_humanus.PhumU2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Phypa_V3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/physcomitrium_patens.Phypa_V3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/physcomitrium_patens.Phypa_V3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/physcomitrium_patens.Phypa_V3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/physcomitrium_patens.Phypa_V3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/physcomitrium_patens.Phypa_V3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/physcomitrium_patens.Phypa_V3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "pvi1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pogona_vitticeps.pvi1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pogona_vitticeps.pvi1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pogona_vitticeps.pvi1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pogona_vitticeps.pvi1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pogona_vitticeps.pvi1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pogona_vitticeps.pvi1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "aptRow1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_rowi.aptRow1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_rowi.aptRow1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_rowi.aptRow1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_rowi.aptRow1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_rowi.aptRow1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_rowi.aptRow1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "RGoby_Basel_V2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neogobius_melanostomus.RGoby_Basel_V2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neogobius_melanostomus.RGoby_Basel_V2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neogobius_melanostomus.RGoby_Basel_V2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neogobius_melanostomus.RGoby_Basel_V2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neogobius_melanostomus.RGoby_Basel_V2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/neogobius_melanostomus.RGoby_Basel_V2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "P_sojae_V3_0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_sojae.P_sojae_V3_0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_sojae.P_sojae_V3_0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_sojae.P_sojae_V3_0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_sojae.P_sojae_V3_0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_sojae.P_sojae_V3_0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_sojae.P_sojae_V3_0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PST-130_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_striiformis.PST-130_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_striiformis.PST-130_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_striiformis.PST-130_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_striiformis.PST-130_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_striiformis.PST-130_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_striiformis.PST-130_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "pteVam1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pteropus_vampyrus.pteVam1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pteropus_vampyrus.pteVam1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pteropus_vampyrus.pteVam1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pteropus_vampyrus.pteVam1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pteropus_vampyrus.pteVam1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pteropus_vampyrus.pteVam1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AmpOce1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphiprion_ocellaris.AmpOce1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphiprion_ocellaris.AmpOce1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphiprion_ocellaris.AmpOce1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphiprion_ocellaris.AmpOce1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphiprion_ocellaris.AmpOce1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/amphiprion_ocellaris.AmpOce1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "aptOwe1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_owenii.aptOwe1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_owenii.aptOwe1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_owenii.aptOwe1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_owenii.aptOwe1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_owenii.aptOwe1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/apteryx_owenii.aptOwe1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM359739v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chelonoidis_abingdonii.ASM359739v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chelonoidis_abingdonii.ASM359739v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chelonoidis_abingdonii.ASM359739v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chelonoidis_abingdonii.ASM359739v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chelonoidis_abingdonii.ASM359739v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chelonoidis_abingdonii.ASM359739v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM883128v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nymphaea_colorata.ASM883128v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nymphaea_colorata.ASM883128v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nymphaea_colorata.ASM883128v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nymphaea_colorata.ASM883128v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nymphaea_colorata.ASM883128v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nymphaea_colorata.ASM883128v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "bCatUst1.pri",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/catharus_ustulatus.bCatUst1.pri.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/catharus_ustulatus.bCatUst1.pri.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/catharus_ustulatus.bCatUst1.pri.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/catharus_ustulatus.bCatUst1.pri.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/catharus_ustulatus.bCatUst1.pri.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/catharus_ustulatus.bCatUst1.pri.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CERZOS_E.curvula1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eragrostis_curvula.CERZOS_E.curvula1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eragrostis_curvula.CERZOS_E.curvula1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eragrostis_curvula.CERZOS_E.curvula1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eragrostis_curvula.CERZOS_E.curvula1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eragrostis_curvula.CERZOS_E.curvula1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/eragrostis_curvula.CERZOS_E.curvula1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "CroPor_comp1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/crocodylus_porosus.CroPor_comp1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/crocodylus_porosus.CroPor_comp1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/crocodylus_porosus.CroPor_comp1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/crocodylus_porosus.CroPor_comp1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/crocodylus_porosus.CroPor_comp1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/crocodylus_porosus.CroPor_comp1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000002525.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/yarrowia_lipolytica.GCA_000002525.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/yarrowia_lipolytica.GCA_000002525.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/yarrowia_lipolytica.GCA_000002525.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/yarrowia_lipolytica.GCA_000002525.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/yarrowia_lipolytica.GCA_000002525.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/yarrowia_lipolytica.GCA_000002525.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000204055.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melampsora_laricipopulina.GCA_000204055.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melampsora_laricipopulina.GCA_000204055.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melampsora_laricipopulina.GCA_000204055.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melampsora_laricipopulina.GCA_000204055.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melampsora_laricipopulina.GCA_000204055.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/melampsora_laricipopulina.GCA_000204055.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "JacJac1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/jaculus_jaculus.JacJac1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/jaculus_jaculus.JacJac1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/jaculus_jaculus.JacJac1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/jaculus_jaculus.JacJac1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/jaculus_jaculus.JacJac1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/jaculus_jaculus.JacJac1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "LU_Bosgru_v3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_grunniens.LU_Bosgru_v3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_grunniens.LU_Bosgru_v3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_grunniens.LU_Bosgru_v3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_grunniens.LU_Bosgru_v3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_grunniens.LU_Bosgru_v3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_grunniens.LU_Bosgru_v3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MedtrA17_4.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/medicago_truncatula.MedtrA17_4.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/medicago_truncatula.MedtrA17_4.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/medicago_truncatula.MedtrA17_4.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/medicago_truncatula.MedtrA17_4.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/medicago_truncatula.MedtrA17_4.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/medicago_truncatula.MedtrA17_4.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MG8",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/magnaporthe_oryzae.MG8.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/magnaporthe_oryzae.MG8.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/magnaporthe_oryzae.MG8.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/magnaporthe_oryzae.MG8.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/magnaporthe_oryzae.MG8.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/magnaporthe_oryzae.MG8.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MPB_Lper_Kyuss_1697",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lolium_perenne.MPB_Lper_Kyuss_1697.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lolium_perenne.MPB_Lper_Kyuss_1697.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lolium_perenne.MPB_Lper_Kyuss_1697.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lolium_perenne.MPB_Lper_Kyuss_1697.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lolium_perenne.MPB_Lper_Kyuss_1697.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lolium_perenne.MPB_Lper_Kyuss_1697.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PanPar1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_pardus.PanPar1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_pardus.PanPar1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_pardus.PanPar1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_pardus.PanPar1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_pardus.PanPar1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/panthera_pardus.PanPar1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PAV_r1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_avium.PAV_r1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_avium.PAV_r1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_avium.PAV_r1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_avium.PAV_r1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_avium.PAV_r1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/prunus_avium.PAV_r1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "DenGig_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dendronephthya_gigantea_gca004324835v1.DenGig_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dendronephthya_gigantea_gca004324835v1.DenGig_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dendronephthya_gigantea_gca004324835v1.DenGig_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dendronephthya_gigantea_gca004324835v1.DenGig_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dendronephthya_gigantea_gca004324835v1.DenGig_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dendronephthya_gigantea_gca004324835v1.DenGig_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "dgri_caf1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_grimshawi.dgri_caf1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_grimshawi.dgri_caf1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_grimshawi.dgri_caf1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_grimshawi.dgri_caf1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_grimshawi.dgri_caf1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_grimshawi.dgri_caf1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "DMR_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fukomys_damarensis.DMR_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fukomys_damarensis.DMR_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fukomys_damarensis.DMR_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fukomys_damarensis.DMR_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fukomys_damarensis.DMR_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fukomys_damarensis.DMR_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "dwil_caf1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_willistoni.dwil_caf1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_willistoni.dwil_caf1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_willistoni.dwil_caf1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_willistoni.dwil_caf1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_willistoni.dwil_caf1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_willistoni.dwil_caf1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "fTakRub1.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/takifugu_rubripes.fTakRub1.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/takifugu_rubripes.fTakRub1.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/takifugu_rubripes.fTakRub1.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/takifugu_rubripes.fTakRub1.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/takifugu_rubripes.fTakRub1.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/takifugu_rubripes.fTakRub1.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA002926085v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_duobushaemulonis.GCA002926085v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_duobushaemulonis.GCA002926085v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_duobushaemulonis.GCA002926085v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_duobushaemulonis.GCA002926085v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_duobushaemulonis.GCA002926085v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/candida_duobushaemulonis.GCA002926085v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GouldianFinch",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erythrura_gouldiae.GouldianFinch.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erythrura_gouldiae.GouldianFinch.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erythrura_gouldiae.GouldianFinch.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erythrura_gouldiae.GouldianFinch.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erythrura_gouldiae.GouldianFinch.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/erythrura_gouldiae.GouldianFinch.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GRCz11",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/danio_rerio.GRCz11.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/danio_rerio.GRCz11.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/danio_rerio.GRCz11.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/danio_rerio.GRCz11.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/danio_rerio.GRCz11.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/danio_rerio.GRCz11.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Mdes_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mayetiola_destructor.Mdes_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mayetiola_destructor.Mdes_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mayetiola_destructor.Mdes_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mayetiola_destructor.Mdes_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mayetiola_destructor.Mdes_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mayetiola_destructor.Mdes_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Myoluc2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/myotis_lucifugus.Myoluc2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/myotis_lucifugus.Myoluc2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/myotis_lucifugus.Myoluc2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/myotis_lucifugus.Myoluc2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/myotis_lucifugus.Myoluc2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/myotis_lucifugus.Myoluc2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "OtuSun1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/otus_sunia.OtuSun1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/otus_sunia.OtuSun1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/otus_sunia.OtuSun1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/otus_sunia.OtuSun1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/otus_sunia.OtuSun1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/otus_sunia.OtuSun1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "SAMN03320099.WGS_v1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_anshuiensis.SAMN03320099.WGS_v1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_anshuiensis.SAMN03320099.WGS_v1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_anshuiensis.SAMN03320099.WGS_v1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_anshuiensis.SAMN03320099.WGS_v1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_anshuiensis.SAMN03320099.WGS_v1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_anshuiensis.SAMN03320099.WGS_v1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "LatCha1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/latimeria_chalumnae.LatCha1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/latimeria_chalumnae.LatCha1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/latimeria_chalumnae.LatCha1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/latimeria_chalumnae.LatCha1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/latimeria_chalumnae.LatCha1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/latimeria_chalumnae.LatCha1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MorexV3_pseudomolecules_assembly",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hordeum_vulgare.MorexV3_pseudomolecules_assembly.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hordeum_vulgare.MorexV3_pseudomolecules_assembly.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hordeum_vulgare.MorexV3_pseudomolecules_assembly.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hordeum_vulgare.MorexV3_pseudomolecules_assembly.ensembl.gff3.gz.csi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hordeum_vulgare.MorexV3_pseudomolecules_assembly.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hordeum_vulgare.MorexV3_pseudomolecules_assembly.rnacentral.gff3.gz.csi`
  },
  {
    "name": "ASM265v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_fumigatus.ASM265v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_fumigatus.ASM265v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_fumigatus.ASM265v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_fumigatus.ASM265v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_fumigatus.ASM265v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_fumigatus.ASM265v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Cbr_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chara_braunii.Cbr_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chara_braunii.Cbr_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chara_braunii.Cbr_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chara_braunii.Cbr_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chara_braunii.Cbr_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chara_braunii.Cbr_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000166005.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyrenophora_teres.GCA_000166005.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyrenophora_teres.GCA_000166005.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyrenophora_teres.GCA_000166005.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyrenophora_teres.GCA_000166005.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyrenophora_teres.GCA_000166005.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pyrenophora_teres.GCA_000166005.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA_000319635.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_gloeosporioides.GCA_000319635.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_gloeosporioides.GCA_000319635.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_gloeosporioides.GCA_000319635.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_gloeosporioides.GCA_000319635.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_gloeosporioides.GCA_000319635.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/colletotrichum_gloeosporioides.GCA_000319635.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GpalI1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_pallidipes.GpalI1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_pallidipes.GpalI1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_pallidipes.GpalI1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_pallidipes.GpalI1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_pallidipes.GpalI1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_pallidipes.GpalI1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "marMar2.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/marmota_marmota_marmota.marMar2.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/marmota_marmota_marmota.marMar2.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/marmota_marmota_marmota.marMar2.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/marmota_marmota_marmota.marMar2.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/marmota_marmota_marmota.marMar2.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/marmota_marmota_marmota.marMar2.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "mBalMus1.v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/balaenoptera_musculus.mBalMus1.v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/balaenoptera_musculus.mBalMus1.v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/balaenoptera_musculus.mBalMus1.v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/balaenoptera_musculus.mBalMus1.v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/balaenoptera_musculus.mBalMus1.v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/balaenoptera_musculus.mBalMus1.v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "OtoGar3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/otolemur_garnettii.OtoGar3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/otolemur_garnettii.OtoGar3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/otolemur_garnettii.OtoGar3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/otolemur_garnettii.OtoGar3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/otolemur_garnettii.OtoGar3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/otolemur_garnettii.OtoGar3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Otsh_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_tshawytscha.Otsh_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_tshawytscha.Otsh_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_tshawytscha.Otsh_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_tshawytscha.Otsh_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_tshawytscha.Otsh_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_tshawytscha.Otsh_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "pag1_scaffolds_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_aphanidermatum.pag1_scaffolds_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_aphanidermatum.pag1_scaffolds_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_aphanidermatum.pag1_scaffolds_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_aphanidermatum.pag1_scaffolds_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_aphanidermatum.pag1_scaffolds_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_aphanidermatum.pag1_scaffolds_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PisVer_v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pistacia_vera.PisVer_v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pistacia_vera.PisVer_v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pistacia_vera.PisVer_v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pistacia_vera.PisVer_v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pistacia_vera.PisVer_v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pistacia_vera.PisVer_v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Ppol_2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pollicipes_pollicipes_gca011947565v2.Ppol_2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pollicipes_pollicipes_gca011947565v2.Ppol_2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pollicipes_pollicipes_gca011947565v2.Ppol_2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pollicipes_pollicipes_gca011947565v2.Ppol_2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pollicipes_pollicipes_gca011947565v2.Ppol_2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pollicipes_pollicipes_gca011947565v2.Ppol_2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Pygocentrus_nattereri-1.0.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pygocentrus_nattereri.Pygocentrus_nattereri-1.0.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pygocentrus_nattereri.Pygocentrus_nattereri-1.0.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pygocentrus_nattereri.Pygocentrus_nattereri-1.0.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pygocentrus_nattereri.Pygocentrus_nattereri-1.0.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pygocentrus_nattereri.Pygocentrus_nattereri-1.0.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pygocentrus_nattereri.Pygocentrus_nattereri-1.0.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "RchiOBHm-V2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rosa_chinensis.RchiOBHm-V2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rosa_chinensis.RchiOBHm-V2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rosa_chinensis.RchiOBHm-V2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rosa_chinensis.RchiOBHm-V2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rosa_chinensis.RchiOBHm-V2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rosa_chinensis.RchiOBHm-V2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Red5_PS1_1.69.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/actinidia_chinensis.Red5_PS1_1.69.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/actinidia_chinensis.Red5_PS1_1.69.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/actinidia_chinensis.Red5_PS1_1.69.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/actinidia_chinensis.Red5_PS1_1.69.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/actinidia_chinensis.Red5_PS1_1.69.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/actinidia_chinensis.Red5_PS1_1.69.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM223467v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_latipes.ASM223467v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_latipes.ASM223467v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_latipes.ASM223467v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_latipes.ASM223467v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_latipes.ASM223467v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oryzias_latipes.ASM223467v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "RefBeet-1.2.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/beta_vulgaris.RefBeet-1.2.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/beta_vulgaris.RefBeet-1.2.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/beta_vulgaris.RefBeet-1.2.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/beta_vulgaris.RefBeet-1.2.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/beta_vulgaris.RefBeet-1.2.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/beta_vulgaris.RefBeet-1.2.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AalbS2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_albimanus.AalbS2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_albimanus.AalbS2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_albimanus.AalbS2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_albimanus.AalbS2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_albimanus.AalbS2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_albimanus.AalbS2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM14961v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_terreus.ASM14961v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_terreus.ASM14961v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_terreus.ASM14961v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_terreus.ASM14961v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_terreus.ASM14961v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_terreus.ASM14961v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM277652v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/piliocolobus_tephrosceles.ASM277652v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/piliocolobus_tephrosceles.ASM277652v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/piliocolobus_tephrosceles.ASM277652v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/piliocolobus_tephrosceles.ASM277652v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/piliocolobus_tephrosceles.ASM277652v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/piliocolobus_tephrosceles.ASM277652v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM15095v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaeodactylum_tricornutum.ASM15095v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaeodactylum_tricornutum.ASM15095v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaeodactylum_tricornutum.ASM15095v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaeodactylum_tricornutum.ASM15095v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaeodactylum_tricornutum.ASM15095v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phaeodactylum_tricornutum.ASM15095v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM51225v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capsicum_annuum.ASM51225v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capsicum_annuum.ASM51225v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capsicum_annuum.ASM51225v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capsicum_annuum.ASM51225v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capsicum_annuum.ASM51225v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/capsicum_annuum.ASM51225v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM77530v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/belgica_antarctica.ASM77530v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/belgica_antarctica.ASM77530v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/belgica_antarctica.ASM77530v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/belgica_antarctica.ASM77530v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/belgica_antarctica.ASM77530v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/belgica_antarctica.ASM77530v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Cla97_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/citrullus_lanatus.Cla97_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/citrullus_lanatus.Cla97_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/citrullus_lanatus.Cla97_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/citrullus_lanatus.Cla97_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/citrullus_lanatus.Cla97_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/citrullus_lanatus.Cla97_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "panpan1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pan_paniscus.panpan1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pan_paniscus.panpan1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pan_paniscus.panpan1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pan_paniscus.panpan1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pan_paniscus.panpan1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pan_paniscus.panpan1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Parus_major1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parus_major.Parus_major1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parus_major.Parus_major1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parus_major.Parus_major1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parus_major.Parus_major1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parus_major.Parus_major1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/parus_major.Parus_major1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "pir_scaffolds_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_irregulare.pir_scaffolds_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_irregulare.pir_scaffolds_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_irregulare.pir_scaffolds_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_irregulare.pir_scaffolds_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_irregulare.pir_scaffolds_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_irregulare.pir_scaffolds_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "vicPac1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vicugna_pacos.vicPac1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vicugna_pacos.vicPac1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vicugna_pacos.vicPac1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vicugna_pacos.vicPac1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vicugna_pacos.vicPac1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vicugna_pacos.vicPac1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "dsec_caf1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_sechellia.dsec_caf1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_sechellia.dsec_caf1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_sechellia.dsec_caf1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_sechellia.dsec_caf1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_sechellia.dsec_caf1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_sechellia.dsec_caf1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "rGopEvg1_v1.p",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gopherus_evgoodei.rGopEvg1_v1.p.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gopherus_evgoodei.rGopEvg1_v1.p.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gopherus_evgoodei.rGopEvg1_v1.p.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gopherus_evgoodei.rGopEvg1_v1.p.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gopherus_evgoodei.rGopEvg1_v1.p.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gopherus_evgoodei.rGopEvg1_v1.p.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Rhpom_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhagoletis_pomonella_gca013731165v1.Rhpom_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhagoletis_pomonella_gca013731165v1.Rhpom_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhagoletis_pomonella_gca013731165v1.Rhpom_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhagoletis_pomonella_gca013731165v1.Rhpom_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhagoletis_pomonella_gca013731165v1.Rhpom_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhagoletis_pomonella_gca013731165v1.Rhpom_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ROS_Cfam_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/canis_lupus_familiaris.ROS_Cfam_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/canis_lupus_familiaris.ROS_Cfam_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/canis_lupus_familiaris.ROS_Cfam_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/canis_lupus_familiaris.ROS_Cfam_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/canis_lupus_familiaris.ROS_Cfam_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/canis_lupus_familiaris.ROS_Cfam_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "RproC3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhodnius_prolixus.RproC3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhodnius_prolixus.RproC3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhodnius_prolixus.RproC3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhodnius_prolixus.RproC3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhodnius_prolixus.RproC3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhodnius_prolixus.RproC3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Rrox_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinopithecus_roxellana.Rrox_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinopithecus_roxellana.Rrox_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinopithecus_roxellana.Rrox_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinopithecus_roxellana.Rrox_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinopithecus_roxellana.Rrox_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinopithecus_roxellana.Rrox_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "SaiBol1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saimiri_boliviensis_boliviensis.SaiBol1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saimiri_boliviensis_boliviensis.SaiBol1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saimiri_boliviensis_boliviensis.SaiBol1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saimiri_boliviensis_boliviensis.SaiBol1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saimiri_boliviensis_boliviensis.SaiBol1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saimiri_boliviensis_boliviensis.SaiBol1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "SAMN03320097.WGS_v1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_grahami.SAMN03320097.WGS_v1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_grahami.SAMN03320097.WGS_v1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_grahami.SAMN03320097.WGS_v1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_grahami.SAMN03320097.WGS_v1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_grahami.SAMN03320097.WGS_v1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_grahami.SAMN03320097.WGS_v1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "SAMN03320098_v1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_rhinocerous.SAMN03320098_v1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_rhinocerous.SAMN03320098_v1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_rhinocerous.SAMN03320098_v1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_rhinocerous.SAMN03320098_v1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_rhinocerous.SAMN03320098_v1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sinocyclocheilus_rhinocerous.SAMN03320098_v1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "SCA1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/serinus_canaria.SCA1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/serinus_canaria.SCA1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/serinus_canaria.SCA1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/serinus_canaria.SCA1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/serinus_canaria.SCA1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/serinus_canaria.SCA1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ScalU1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stomoxys_calcitrans.ScalU1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stomoxys_calcitrans.ScalU1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stomoxys_calcitrans.ScalU1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stomoxys_calcitrans.ScalU1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stomoxys_calcitrans.ScalU1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stomoxys_calcitrans.ScalU1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "SCU_BraROA_2.3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_rapa_ro18.SCU_BraROA_2.3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_rapa_ro18.SCU_BraROA_2.3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_rapa_ro18.SCU_BraROA_2.3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_rapa_ro18.SCU_BraROA_2.3.ensembl.gff3.gz.tbi`
  },
  {
    "name": "Sdu_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/seriola_dumerili.Sdu_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/seriola_dumerili.Sdu_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/seriola_dumerili.Sdu_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/seriola_dumerili.Sdu_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/seriola_dumerili.Sdu_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/seriola_dumerili.Sdu_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Setaria_italica_v2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/setaria_italica.Setaria_italica_v2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/setaria_italica.Setaria_italica_v2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/setaria_italica.Setaria_italica_v2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/setaria_italica.Setaria_italica_v2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/setaria_italica.Setaria_italica_v2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/setaria_italica.Setaria_italica_v2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Setaria_viridis_v2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/setaria_viridis.Setaria_viridis_v2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/setaria_viridis.Setaria_viridis_v2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/setaria_viridis.Setaria_viridis_v2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/setaria_viridis.Setaria_viridis_v2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/setaria_viridis.Setaria_viridis_v2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/setaria_viridis.Setaria_viridis_v2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "S.galili_v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nannospalax_galili.S.galili_v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nannospalax_galili.S.galili_v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nannospalax_galili.S.galili_v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nannospalax_galili.S.galili_v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nannospalax_galili.S.galili_v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nannospalax_galili.S.galili_v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "SLUC_FBN_1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sander_lucioperca.SLUC_FBN_1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sander_lucioperca.SLUC_FBN_1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sander_lucioperca.SLUC_FBN_1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sander_lucioperca.SLUC_FBN_1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sander_lucioperca.SLUC_FBN_1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sander_lucioperca.SLUC_FBN_1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "SL3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/solanum_lycopersicum.SL3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/solanum_lycopersicum.SL3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/solanum_lycopersicum.SL3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/solanum_lycopersicum.SL3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/solanum_lycopersicum.SL3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/solanum_lycopersicum.SL3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Smar1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strigamia_maritima.Smar1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strigamia_maritima.Smar1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strigamia_maritima.Smar1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strigamia_maritima.Smar1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strigamia_maritima.Smar1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strigamia_maritima.Smar1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Sorghum_bicolor_NCBIv3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sorghum_bicolor.Sorghum_bicolor_NCBIv3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sorghum_bicolor.Sorghum_bicolor_NCBIv3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sorghum_bicolor.Sorghum_bicolor_NCBIv3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sorghum_bicolor.Sorghum_bicolor_NCBIv3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sorghum_bicolor.Sorghum_bicolor_NCBIv3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sorghum_bicolor.Sorghum_bicolor_NCBIv3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM128173v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zosterops_lateralis_melanops.ASM128173v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zosterops_lateralis_melanops.ASM128173v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zosterops_lateralis_melanops.ASM128173v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zosterops_lateralis_melanops.ASM128173v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zosterops_lateralis_melanops.ASM128173v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zosterops_lateralis_melanops.ASM128173v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM168347v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chenopodium_quinoa.ASM168347v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chenopodium_quinoa.ASM168347v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chenopodium_quinoa.ASM168347v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chenopodium_quinoa.ASM168347v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chenopodium_quinoa.ASM168347v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/chenopodium_quinoa.ASM168347v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM407v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cucumis_sativus.ASM407v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cucumis_sativus.ASM407v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cucumis_sativus.ASM407v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cucumis_sativus.ASM407v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cucumis_sativus.ASM407v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/cucumis_sativus.ASM407v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "bare-nosed_wombat_genome_assembly",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vombatus_ursinus.bare-nosed_wombat_genome_assembly.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vombatus_ursinus.bare-nosed_wombat_genome_assembly.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vombatus_ursinus.bare-nosed_wombat_genome_assembly.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vombatus_ursinus.bare-nosed_wombat_genome_assembly.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vombatus_ursinus.bare-nosed_wombat_genome_assembly.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vombatus_ursinus.bare-nosed_wombat_genome_assembly.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Dpse_3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_pseudoobscura.Dpse_3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_pseudoobscura.Dpse_3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_pseudoobscura.Dpse_3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_pseudoobscura.Dpse_3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_pseudoobscura.Dpse_3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/drosophila_pseudoobscura.Dpse_3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "FalTin1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/falco_tinnunculus.FalTin1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/falco_tinnunculus.FalTin1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/falco_tinnunculus.FalTin1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/falco_tinnunculus.FalTin1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/falco_tinnunculus.FalTin1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/falco_tinnunculus.FalTin1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GCA000520075v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aphanomyces_astaci.GCA000520075v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aphanomyces_astaci.GCA000520075v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aphanomyces_astaci.GCA000520075v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aphanomyces_astaci.GCA000520075v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aphanomyces_astaci.GCA000520075v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aphanomyces_astaci.GCA000520075v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Graimondii2_0_v6",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gossypium_raimondii.Graimondii2_0_v6.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gossypium_raimondii.Graimondii2_0_v6.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gossypium_raimondii.Graimondii2_0_v6.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gossypium_raimondii.Graimondii2_0_v6.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gossypium_raimondii.Graimondii2_0_v6.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gossypium_raimondii.Graimondii2_0_v6.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Limulus_polyphemus_2.1.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/limulus_polyphemus_gca000517525v1.Limulus_polyphemus_2.1.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/limulus_polyphemus_gca000517525v1.Limulus_polyphemus_2.1.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/limulus_polyphemus_gca000517525v1.Limulus_polyphemus_2.1.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/limulus_polyphemus_gca000517525v1.Limulus_polyphemus_2.1.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/limulus_polyphemus_gca000517525v1.Limulus_polyphemus_2.1.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/limulus_polyphemus_gca000517525v1.Limulus_polyphemus_2.1.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "loxAfr3",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/loxodonta_africana.loxAfr3.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/loxodonta_africana.loxAfr3.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/loxodonta_africana.loxAfr3.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/loxodonta_africana.loxAfr3.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/loxodonta_africana.loxAfr3.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/loxodonta_africana.loxAfr3.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MesAur1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mesocricetus_auratus.MesAur1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mesocricetus_auratus.MesAur1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mesocricetus_auratus.MesAur1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mesocricetus_auratus.MesAur1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mesocricetus_auratus.MesAur1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mesocricetus_auratus.MesAur1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MosMos_v2_BIUU_UCD",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/moschus_moschiferus.MosMos_v2_BIUU_UCD.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/moschus_moschiferus.MosMos_v2_BIUU_UCD.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/moschus_moschiferus.MosMos_v2_BIUU_UCD.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/moschus_moschiferus.MosMos_v2_BIUU_UCD.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/moschus_moschiferus.MosMos_v2_BIUU_UCD.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/moschus_moschiferus.MosMos_v2_BIUU_UCD.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "NSTDA_Pmon_1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/penaeus_monodon_gca015228065v1.NSTDA_Pmon_1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/penaeus_monodon_gca015228065v1.NSTDA_Pmon_1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/penaeus_monodon_gca015228065v1.NSTDA_Pmon_1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/penaeus_monodon_gca015228065v1.NSTDA_Pmon_1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/penaeus_monodon_gca015228065v1.NSTDA_Pmon_1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/penaeus_monodon_gca015228065v1.NSTDA_Pmon_1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Sedor1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/seriola_lalandi_dorsalis.Sedor1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/seriola_lalandi_dorsalis.Sedor1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/seriola_lalandi_dorsalis.Sedor1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/seriola_lalandi_dorsalis.Sedor1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/seriola_lalandi_dorsalis.Sedor1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/seriola_lalandi_dorsalis.Sedor1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Soccid_v01",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strix_occidentalis_caurina.Soccid_v01.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strix_occidentalis_caurina.Soccid_v01.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strix_occidentalis_caurina.Soccid_v01.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strix_occidentalis_caurina.Soccid_v01.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strix_occidentalis_caurina.Soccid_v01.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strix_occidentalis_caurina.Soccid_v01.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "SpeTri2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ictidomys_tridecemlineatus.SpeTri2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ictidomys_tridecemlineatus.SpeTri2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ictidomys_tridecemlineatus.SpeTri2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ictidomys_tridecemlineatus.SpeTri2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ictidomys_tridecemlineatus.SpeTri2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ictidomys_tridecemlineatus.SpeTri2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "SPRET_EiJ_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_spretus.SPRET_EiJ_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_spretus.SPRET_EiJ_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_spretus.SPRET_EiJ_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_spretus.SPRET_EiJ_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_spretus.SPRET_EiJ_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_spretus.SPRET_EiJ_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Spur_5.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strongylocentrotus_purpuratus.Spur_5.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strongylocentrotus_purpuratus.Spur_5.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strongylocentrotus_purpuratus.Spur_5.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strongylocentrotus_purpuratus.Spur_5.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strongylocentrotus_purpuratus.Spur_5.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/strongylocentrotus_purpuratus.Spur_5.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Sspon.HiC_chr_asm",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saccharum_spontaneum.Sspon.HiC_chr_asm.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saccharum_spontaneum.Sspon.HiC_chr_asm.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saccharum_spontaneum.Sspon.HiC_chr_asm.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saccharum_spontaneum.Sspon.HiC_chr_asm.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saccharum_spontaneum.Sspon.HiC_chr_asm.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saccharum_spontaneum.Sspon.HiC_chr_asm.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Stegastes_partitus-1.0.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stegastes_partitus.Stegastes_partitus-1.0.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stegastes_partitus.Stegastes_partitus-1.0.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stegastes_partitus.Stegastes_partitus-1.0.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stegastes_partitus.Stegastes_partitus-1.0.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stegastes_partitus.Stegastes_partitus-1.0.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stegastes_partitus.Stegastes_partitus-1.0.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM15014v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_fumigatusa1163.ASM15014v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_fumigatusa1163.ASM15014v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_fumigatusa1163.ASM15014v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_fumigatusa1163.ASM15014v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_fumigatusa1163.ASM15014v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_fumigatusa1163.ASM15014v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM285v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_niger.ASM285v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_niger.ASM285v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_niger.ASM285v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_niger.ASM285v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_niger.ASM285v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/aspergillus_niger.ASM285v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GausT1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_austeni.GausT1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_austeni.GausT1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_austeni.GausT1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_austeni.GausT1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_austeni.GausT1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glossina_austeni.GausT1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Glycine_max_v2.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glycine_max.Glycine_max_v2.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glycine_max.Glycine_max_v2.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glycine_max.Glycine_max_v2.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glycine_max.Glycine_max_v2.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glycine_max.Glycine_max_v2.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/glycine_max.Glycine_max_v2.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MicOch1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microtus_ochrogaster.MicOch1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microtus_ochrogaster.MicOch1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microtus_ochrogaster.MicOch1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microtus_ochrogaster.MicOch1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microtus_ochrogaster.MicOch1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/microtus_ochrogaster.MicOch1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "mRhiFer1_v1.p",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinolophus_ferrumequinum.mRhiFer1_v1.p.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinolophus_ferrumequinum.mRhiFer1_v1.p.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinolophus_ferrumequinum.mRhiFer1_v1.p.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinolophus_ferrumequinum.mRhiFer1_v1.p.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinolophus_ferrumequinum.mRhiFer1_v1.p.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/rhinolophus_ferrumequinum.mRhiFer1_v1.p.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "mSciVul1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sciurus_vulgaris.mSciVul1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sciurus_vulgaris.mSciVul1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sciurus_vulgaris.mSciVul1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sciurus_vulgaris.mSciVul1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sciurus_vulgaris.mSciVul1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sciurus_vulgaris.mSciVul1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "MunDraft-v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/meriones_unguiculatus.MunDraft-v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/meriones_unguiculatus.MunDraft-v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/meriones_unguiculatus.MunDraft-v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/meriones_unguiculatus.MunDraft-v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/meriones_unguiculatus.MunDraft-v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/meriones_unguiculatus.MunDraft-v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "LinAna1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lingula_anatina.LinAna1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lingula_anatina.LinAna1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lingula_anatina.LinAna1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lingula_anatina.LinAna1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lingula_anatina.LinAna1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lingula_anatina.LinAna1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AnoCar2.0v2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anolis_carolinensis.AnoCar2.0v2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anolis_carolinensis.AnoCar2.0v2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anolis_carolinensis.AnoCar2.0v2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anolis_carolinensis.AnoCar2.0v2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anolis_carolinensis.AnoCar2.0v2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anolis_carolinensis.AnoCar2.0v2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AsinC2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_sinensis_china.AsinC2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_sinensis_china.AsinC2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_sinensis_china.AsinC2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_sinensis_china.AsinC2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_sinensis_china.AsinC2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_sinensis_china.AsinC2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM20922v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nematostella_vectensis.ASM20922v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nematostella_vectensis.ASM20922v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nematostella_vectensis.ASM20922v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nematostella_vectensis.ASM20922v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nematostella_vectensis.ASM20922v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/nematostella_vectensis.ASM20922v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM966780v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptobrachium_leishanense.ASM966780v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptobrachium_leishanense.ASM966780v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptobrachium_leishanense.ASM966780v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptobrachium_leishanense.ASM966780v1.ensembl.gff3.gz.csi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptobrachium_leishanense.ASM966780v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leptobrachium_leishanense.ASM966780v1.rnacentral.gff3.gz.csi`
  },
  {
    "name": "athCun1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/athene_cunicularia.athCun1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/athene_cunicularia.athCun1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/athene_cunicularia.athCun1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/athene_cunicularia.athCun1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/athene_cunicularia.athCun1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/athene_cunicularia.athCun1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "COMMON_SHREW1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sorex_araneus.COMMON_SHREW1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sorex_araneus.COMMON_SHREW1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sorex_araneus.COMMON_SHREW1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sorex_araneus.COMMON_SHREW1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sorex_araneus.COMMON_SHREW1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sorex_araneus.COMMON_SHREW1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Gae_graminis_V2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gaeumannomyces_graminis.Gae_graminis_V2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gaeumannomyces_graminis.Gae_graminis_V2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gaeumannomyces_graminis.Gae_graminis_V2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gaeumannomyces_graminis.Gae_graminis_V2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gaeumannomyces_graminis.Gae_graminis_V2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gaeumannomyces_graminis.Gae_graminis_V2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "GooseV1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anser_cygnoides.GooseV1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anser_cygnoides.GooseV1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anser_cygnoides.GooseV1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anser_cygnoides.GooseV1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anser_cygnoides.GooseV1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anser_cygnoides.GooseV1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Lperr_V1.4",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leersia_perrieri.Lperr_V1.4.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leersia_perrieri.Lperr_V1.4.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leersia_perrieri.Lperr_V1.4.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leersia_perrieri.Lperr_V1.4.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leersia_perrieri.Lperr_V1.4.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/leersia_perrieri.Lperr_V1.4.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "nHd_3.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hypsibius_exemplaris_gca002082055v1.nHd_3.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hypsibius_exemplaris_gca002082055v1.nHd_3.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hypsibius_exemplaris_gca002082055v1.nHd_3.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hypsibius_exemplaris_gca002082055v1.nHd_3.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hypsibius_exemplaris_gca002082055v1.nHd_3.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/hypsibius_exemplaris_gca002082055v1.nHd_3.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "pve_scaffolds_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_vexans.pve_scaffolds_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_vexans.pve_scaffolds_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_vexans.pve_scaffolds_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_vexans.pve_scaffolds_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_vexans.pve_scaffolds_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pythium_vexans.pve_scaffolds_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Sscrofa11.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sus_scrofa.Sscrofa11.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sus_scrofa.Sscrofa11.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sus_scrofa.Sscrofa11.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sus_scrofa.Sscrofa11.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sus_scrofa.Sscrofa11.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/sus_scrofa.Sscrofa11.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "T_m_triunguis-2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/terrapene_carolina_triunguis.T_m_triunguis-2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/terrapene_carolina_triunguis.T_m_triunguis-2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/terrapene_carolina_triunguis.T_m_triunguis-2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/terrapene_carolina_triunguis.T_m_triunguis-2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/terrapene_carolina_triunguis.T_m_triunguis-2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/terrapene_carolina_triunguis.T_m_triunguis-2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "SolTub_3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/solanum_tuberosum.SolTub_3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/solanum_tuberosum.SolTub_3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/solanum_tuberosum.SolTub_3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/solanum_tuberosum.SolTub_3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/solanum_tuberosum.SolTub_3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/solanum_tuberosum.SolTub_3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Stegodyphus_mimosarum_v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stegodyphus_mimosarum.Stegodyphus_mimosarum_v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stegodyphus_mimosarum.Stegodyphus_mimosarum_v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stegodyphus_mimosarum.Stegodyphus_mimosarum_v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stegodyphus_mimosarum.Stegodyphus_mimosarum_v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stegodyphus_mimosarum.Stegodyphus_mimosarum_v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/stegodyphus_mimosarum.Stegodyphus_mimosarum_v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Susie_PABv2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pongo_abelii.Susie_PABv2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pongo_abelii.Susie_PABv2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pongo_abelii.Susie_PABv2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pongo_abelii.Susie_PABv2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pongo_abelii.Susie_PABv2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/pongo_abelii.Susie_PABv2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "TAIR10",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_thaliana.TAIR10.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_thaliana.TAIR10.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_thaliana.TAIR10.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_thaliana.TAIR10.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_thaliana.TAIR10.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_thaliana.TAIR10.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Tcas5.2",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tribolium_castaneum.Tcas5.2.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tribolium_castaneum.Tcas5.2.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tribolium_castaneum.Tcas5.2.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tribolium_castaneum.Tcas5.2.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tribolium_castaneum.Tcas5.2.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tribolium_castaneum.Tcas5.2.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "TDr96_F1_v2_PseudoChromosome",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dioscorea_rotundata.TDr96_F1_v2_PseudoChromosome.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dioscorea_rotundata.TDr96_F1_v2_PseudoChromosome.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dioscorea_rotundata.TDr96_F1_v2_PseudoChromosome.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dioscorea_rotundata.TDr96_F1_v2_PseudoChromosome.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dioscorea_rotundata.TDr96_F1_v2_PseudoChromosome.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dioscorea_rotundata.TDr96_F1_v2_PseudoChromosome.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "TENREC",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echinops_telfairi.TENREC.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echinops_telfairi.TENREC.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echinops_telfairi.TENREC.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echinops_telfairi.TENREC.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echinops_telfairi.TENREC.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/echinops_telfairi.TENREC.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "TETRAODON8",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tetraodon_nigroviridis.TETRAODON8.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tetraodon_nigroviridis.TETRAODON8.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tetraodon_nigroviridis.TETRAODON8.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tetraodon_nigroviridis.TETRAODON8.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tetraodon_nigroviridis.TETRAODON8.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tetraodon_nigroviridis.TETRAODON8.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "TGA4",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/toxoplasma_gondii.TGA4.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/toxoplasma_gondii.TGA4.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/toxoplasma_gondii.TGA4.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/toxoplasma_gondii.TGA4.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/toxoplasma_gondii.TGA4.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/toxoplasma_gondii.TGA4.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Tgel_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/theropithecus_gelada.Tgel_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/theropithecus_gelada.Tgel_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/theropithecus_gelada.Tgel_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/theropithecus_gelada.Tgel_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/theropithecus_gelada.Tgel_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/theropithecus_gelada.Tgel_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Eluc_v4",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/esox_lucius.Eluc_v4.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/esox_lucius.Eluc_v4.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/esox_lucius.Eluc_v4.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/esox_lucius.Eluc_v4.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/esox_lucius.Eluc_v4.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/esox_lucius.Eluc_v4.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Tpre_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichogramma_pretiosum_gca000599845v3.Tpre_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichogramma_pretiosum_gca000599845v3.Tpre_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichogramma_pretiosum_gca000599845v3.Tpre_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichogramma_pretiosum_gca000599845v3.Tpre_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichogramma_pretiosum_gca000599845v3.Tpre_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichogramma_pretiosum_gca000599845v3.Tpre_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "TREESHREW",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tupaia_belangeri.TREESHREW.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tupaia_belangeri.TREESHREW.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tupaia_belangeri.TREESHREW.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tupaia_belangeri.TREESHREW.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tupaia_belangeri.TREESHREW.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tupaia_belangeri.TREESHREW.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Trpr",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trifolium_pratense.Trpr.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trifolium_pratense.Trpr.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trifolium_pratense.Trpr.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trifolium_pratense.Trpr.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trifolium_pratense.Trpr.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trifolium_pratense.Trpr.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "TryBru_Apr2005_chr11",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trypanosoma_brucei.TryBru_Apr2005_chr11.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trypanosoma_brucei.TryBru_Apr2005_chr11.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trypanosoma_brucei.TryBru_Apr2005_chr11.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trypanosoma_brucei.TryBru_Apr2005_chr11.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trypanosoma_brucei.TryBru_Apr2005_chr11.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trypanosoma_brucei.TryBru_Apr2005_chr11.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "TS10Xv2-PRI",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/notechis_scutatus.TS10Xv2-PRI.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/notechis_scutatus.TS10Xv2-PRI.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/notechis_scutatus.TS10Xv2-PRI.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/notechis_scutatus.TS10Xv2-PRI.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/notechis_scutatus.TS10Xv2-PRI.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/notechis_scutatus.TS10Xv2-PRI.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Tspiralis1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichinella_spiralis.Tspiralis1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichinella_spiralis.Tspiralis1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichinella_spiralis.Tspiralis1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichinella_spiralis.Tspiralis1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichinella_spiralis.Tspiralis1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichinella_spiralis.Tspiralis1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Turkey_5.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/meleagris_gallopavo.Turkey_5.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/meleagris_gallopavo.Turkey_5.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/meleagris_gallopavo.Turkey_5.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/meleagris_gallopavo.Turkey_5.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/meleagris_gallopavo.Turkey_5.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/meleagris_gallopavo.Turkey_5.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "turTru1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tursiops_truncatus.turTru1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tursiops_truncatus.turTru1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tursiops_truncatus.turTru1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tursiops_truncatus.turTru1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tursiops_truncatus.turTru1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/tursiops_truncatus.turTru1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Umaydis521_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ustilago_maydis.Umaydis521_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ustilago_maydis.Umaydis521_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ustilago_maydis.Umaydis521_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ustilago_maydis.Umaydis521_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ustilago_maydis.Umaydis521_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ustilago_maydis.Umaydis521_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "UNIPI_FiCari_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ficus_carica.UNIPI_FiCari_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ficus_carica.UNIPI_FiCari_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ficus_carica.UNIPI_FiCari_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ficus_carica.UNIPI_FiCari_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ficus_carica.UNIPI_FiCari_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ficus_carica.UNIPI_FiCari_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "gorGor4",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gorilla_gorilla.gorGor4.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gorilla_gorilla.gorGor4.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gorilla_gorilla.gorGor4.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gorilla_gorilla.gorGor4.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gorilla_gorilla.gorGor4.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/gorilla_gorilla.gorGor4.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_graminisug99.v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_graminisug99.v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_graminisug99.v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_graminisug99.v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_graminisug99.v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/puccinia_graminisug99.v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "v.1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_lyrata.v.1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_lyrata.v.1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_lyrata.v.1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_lyrata.v.1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_lyrata.v.1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabidopsis_lyrata.v.1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "v1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/selaginella_moellendorffii.v1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/selaginella_moellendorffii.v1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/selaginella_moellendorffii.v1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/selaginella_moellendorffii.v1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/selaginella_moellendorffii.v1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/selaginella_moellendorffii.v1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "V1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/daphnia_pulex.V1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/daphnia_pulex.V1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/daphnia_pulex.V1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/daphnia_pulex.V1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/daphnia_pulex.V1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/daphnia_pulex.V1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "A_alpina_V4",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabis_alpina.A_alpina_V4.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabis_alpina.A_alpina_V4.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabis_alpina.A_alpina_V4.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabis_alpina.A_alpina_V4.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabis_alpina.A_alpina_V4.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/arabis_alpina.A_alpina_V4.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "AaraD1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_arabiensis.AaraD1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_arabiensis.AaraD1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_arabiensis.AaraD1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_arabiensis.AaraD1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_arabiensis.AaraD1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/anopheles_arabiensis.AaraD1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM15027v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoplax_adhaerens.ASM15027v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoplax_adhaerens.ASM15027v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoplax_adhaerens.ASM15027v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoplax_adhaerens.ASM15027v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoplax_adhaerens.ASM15027v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/trichoplax_adhaerens.ASM15027v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM1870372v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_juncea.ASM1870372v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_juncea.ASM1870372v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_juncea.ASM1870372v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_juncea.ASM1870372v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_juncea.ASM1870372v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/brassica_juncea.ASM1870372v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Nana_v5",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/naja_naja.Nana_v5.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/naja_naja.Nana_v5.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/naja_naja.Nana_v5.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/naja_naja.Nana_v5.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/naja_naja.Nana_v5.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/naja_naja.Nana_v5.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Accipiter_nisus_ver1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/accipiter_nisus.Accipiter_nisus_ver1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/accipiter_nisus.Accipiter_nisus_ver1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/accipiter_nisus.Accipiter_nisus_ver1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/accipiter_nisus.Accipiter_nisus_ver1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/accipiter_nisus.Accipiter_nisus_ver1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/accipiter_nisus.Accipiter_nisus_ver1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ASM211411v1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/malus_domestica_golden.ASM211411v1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/malus_domestica_golden.ASM211411v1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/malus_domestica_golden.ASM211411v1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/malus_domestica_golden.ASM211411v1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/malus_domestica_golden.ASM211411v1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/malus_domestica_golden.ASM211411v1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "droNov1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dromaius_novaehollandiae.droNov1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dromaius_novaehollandiae.droNov1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dromaius_novaehollandiae.droNov1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dromaius_novaehollandiae.droNov1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dromaius_novaehollandiae.droNov1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/dromaius_novaehollandiae.droNov1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Lotgi1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lottia_gigantea.Lotgi1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lottia_gigantea.Lotgi1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lottia_gigantea.Lotgi1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lottia_gigantea.Lotgi1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lottia_gigantea.Lotgi1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/lottia_gigantea.Lotgi1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "mCalJac1.pat.X",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/callithrix_jacchus.mCalJac1.pat.X.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/callithrix_jacchus.mCalJac1.pat.X.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/callithrix_jacchus.mCalJac1.pat.X.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/callithrix_jacchus.mCalJac1.pat.X.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/callithrix_jacchus.mCalJac1.pat.X.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/callithrix_jacchus.mCalJac1.pat.X.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "PAHARI_EIJ_v1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_pahari.PAHARI_EIJ_v1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_pahari.PAHARI_EIJ_v1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_pahari.PAHARI_EIJ_v1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_pahari.PAHARI_EIJ_v1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_pahari.PAHARI_EIJ_v1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/mus_pahari.PAHARI_EIJ_v1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Phyt_para_P1569_V1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_parasitica.Phyt_para_P1569_V1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_parasitica.Phyt_para_P1569_V1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_parasitica.Phyt_para_P1569_V1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_parasitica.Phyt_para_P1569_V1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_parasitica.Phyt_para_P1569_V1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/phytophthora_parasitica.Phyt_para_P1569_V1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "R64-1-1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saccharomyces_cerevisiae.R64-1-1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saccharomyces_cerevisiae.R64-1-1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saccharomyces_cerevisiae.R64-1-1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saccharomyces_cerevisiae.R64-1-1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saccharomyces_cerevisiae.R64-1-1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/saccharomyces_cerevisiae.R64-1-1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Ssal_v3.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salmo_salar.Ssal_v3.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salmo_salar.Ssal_v3.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salmo_salar.Ssal_v3.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salmo_salar.Ssal_v3.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salmo_salar.Ssal_v3.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/salmo_salar.Ssal_v3.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Tarsius_syrichta-2.0.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/carlito_syrichta.Tarsius_syrichta-2.0.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/carlito_syrichta.Tarsius_syrichta-2.0.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/carlito_syrichta.Tarsius_syrichta-2.0.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/carlito_syrichta.Tarsius_syrichta-2.0.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/carlito_syrichta.Tarsius_syrichta-2.0.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/carlito_syrichta.Tarsius_syrichta-2.0.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "UOA_Brahman_1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_indicus_hybrid.UOA_Brahman_1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_indicus_hybrid.UOA_Brahman_1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_indicus_hybrid.UOA_Brahman_1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_indicus_hybrid.UOA_Brahman_1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_indicus_hybrid.UOA_Brahman_1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/bos_indicus_hybrid.UOA_Brahman_1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "UrsMar_1.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_maritimus.UrsMar_1.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_maritimus.UrsMar_1.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_maritimus.UrsMar_1.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_maritimus.UrsMar_1.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_maritimus.UrsMar_1.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/ursus_maritimus.UrsMar_1.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "USDA_OmykA_1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_mykiss.USDA_OmykA_1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_mykiss.USDA_OmykA_1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_mykiss.USDA_OmykA_1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_mykiss.USDA_OmykA_1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_mykiss.USDA_OmykA_1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/oncorhynchus_mykiss.USDA_OmykA_1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "v2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_solani.v2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_solani.v2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_solani.v2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_solani.v2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_solani.v2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/fusarium_solani.v2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "ValleyOak3.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/quercus_lobata.ValleyOak3.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/quercus_lobata.ValleyOak3.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/quercus_lobata.ValleyOak3.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/quercus_lobata.ValleyOak3.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/quercus_lobata.ValleyOak3.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/quercus_lobata.ValleyOak3.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "VDAG_JR2v.4.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/verticillium_dahliaejr2.VDAG_JR2v.4.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/verticillium_dahliaejr2.VDAG_JR2v.4.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/verticillium_dahliaejr2.VDAG_JR2v.4.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/verticillium_dahliaejr2.VDAG_JR2v.4.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/verticillium_dahliaejr2.VDAG_JR2v.4.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/verticillium_dahliaejr2.VDAG_JR2v.4.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Vigan1.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_angularis.Vigan1.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_angularis.Vigan1.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_angularis.Vigan1.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_angularis.Vigan1.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_angularis.Vigan1.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_angularis.Vigan1.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Vradiata_ver6",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_radiata.Vradiata_ver6.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_radiata.Vradiata_ver6.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_radiata.Vradiata_ver6.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_radiata.Vradiata_ver6.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_radiata.Vradiata_ver6.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/vigna_radiata.Vradiata_ver6.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Walnut_2.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/juglans_regia.Walnut_2.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/juglans_regia.Walnut_2.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/juglans_regia.Walnut_2.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/juglans_regia.Walnut_2.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/juglans_regia.Walnut_2.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/juglans_regia.Walnut_2.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "WBcel235",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/caenorhabditis_elegans.WBcel235.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/caenorhabditis_elegans.WBcel235.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/caenorhabditis_elegans.WBcel235.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/caenorhabditis_elegans.WBcel235.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/caenorhabditis_elegans.WBcel235.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/caenorhabditis_elegans.WBcel235.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Xiphophorus_couchianus-4.0.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xiphophorus_couchianus.Xiphophorus_couchianus-4.0.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xiphophorus_couchianus.Xiphophorus_couchianus-4.0.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xiphophorus_couchianus.Xiphophorus_couchianus-4.0.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xiphophorus_couchianus.Xiphophorus_couchianus-4.0.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xiphophorus_couchianus.Xiphophorus_couchianus-4.0.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/xiphophorus_couchianus.Xiphophorus_couchianus-4.0.1.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Zm-B73-REFERENCE-NAM-5.0",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zea_mays.Zm-B73-REFERENCE-NAM-5.0.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zea_mays.Zm-B73-REFERENCE-NAM-5.0.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zea_mays.Zm-B73-REFERENCE-NAM-5.0.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zea_mays.Zm-B73-REFERENCE-NAM-5.0.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zea_mays.Zm-B73-REFERENCE-NAM-5.0.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zea_mays.Zm-B73-REFERENCE-NAM-5.0.rnacentral.gff3.gz.tbi`
  },
  {
    "name": "Zonotrichia_albicollis-1.0.1",
    "fastaFile": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zonotrichia_albicollis.Zonotrichia_albicollis-1.0.1.fa`,
    "fastaIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zonotrichia_albicollis.Zonotrichia_albicollis-1.0.1.fa.fai`,
    "ensemblTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zonotrichia_albicollis.Zonotrichia_albicollis-1.0.1.ensembl.gff3.gz`,
    "ensemblIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zonotrichia_albicollis.Zonotrichia_albicollis-1.0.1.ensembl.gff3.gz.tbi`,
    "rnacentralTrack": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zonotrichia_albicollis.Zonotrichia_albicollis-1.0.1.rnacentral.gff3.gz`,
    "rnacentralIndex": `https://ftp.ebi.ac.uk/pub/databases/RNAcentral/${folder}/zonotrichia_albicollis.Zonotrichia_albicollis-1.0.1.rnacentral.gff3.gz.tbi`
  }
]

export default ftpData;