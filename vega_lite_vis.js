var vg_1 = "VEGA-LITE/demand_chart.vg.json"
vegaEmbed("#growth-chart", vg_1,).then(function(result){
    // Access the Vega view instance
    // () as result.view
}).catch(console.error);
var vg_2 = "VEGA-LITE/adoption_map.vg.json"
vegaEmbed("#geographical-chart", vg_2,).then(function(result){
    // Access the Vega view instance
    // () as result.view
}).catch(console.error);

vegaEmbed("#who-chart",      "VEGA-LITE/adoption_by_industry.vg.json",    { actions: false, renderer: "svg" }).catch(console.error);
vegaEmbed("#sectors-chart",  "VEGA-LITE/ai_companies_by_sector.vg.json",  { actions: false, renderer: "svg" }).catch(console.error);
vegaEmbed("#exposure-chart", "VEGA-LITE/ai_skills_by_occupation.vg.json", { actions: false, renderer: "svg" }).catch(console.error);